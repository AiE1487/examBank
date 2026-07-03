/**
 * Exam System Core Module
 * Shared logic for all subject subpages
 */
var Exam = (function() {
  'use strict';

  // ===== STATE =====
  var state = {
    questions: [],        // original ordered questions
    displayOrder: [],     // current display order (indices into questions)
    subject: '',
    code: '',
    filter: 'all',
    examMode: false,
    examStarted: false,
    answersRevealed: false,
    answers: {},
    shownAnswers: {},
    startTime: 0,
    elapsed: 0,
    timerInterval: null,
    submitted: false,
    result: null,
    showOnlyWrong: false
  };

  var config = {
    jsonUrl: '',
    typeMap: { choice: '选择', fill: '填空', judge: '判断' },
    typeColors: { choice: '#4A90D9', fill: '#00AA66', judge: '#FF6B9D' },
    typeOrder: ['choice', 'fill', 'judge']
  };

  var dom = {};

  function cacheDOM() {
    dom.container    = document.getElementById('questionsContainer');
    dom.filterBtns   = document.querySelectorAll('.filter-btn');
    dom.revealBtn    = document.getElementById('revealBtn');
    dom.examBtn      = document.getElementById('examBtn');
    dom.submitArea   = document.getElementById('submitArea');
    dom.submitBtn    = document.getElementById('submitBtn');
    dom.statsArea    = document.getElementById('statsArea');
    dom.statTotal    = document.getElementById('statTotal');
    dom.statCorrect  = document.getElementById('statCorrect');
    dom.statWrong    = document.getElementById('statWrong');
    dom.statRate     = document.getElementById('statRate');
    dom.statTime     = document.getElementById('statTime');
    dom.statUser     = document.getElementById('statUser');
    dom.statTypes    = document.getElementById('statTypes');
    dom.timerBar     = document.getElementById('timerBar');
    dom.timerDisplay = document.getElementById('timerDisplay');
    dom.progressBar  = document.getElementById('progressBar');
    dom.progressFill = document.getElementById('progressFill');
    dom.totalCount   = document.getElementById('totalCount');
    dom.choiceCount  = document.getElementById('choiceCount');
    dom.fillCount    = document.getElementById('fillCount');
    dom.judgeCount   = document.getElementById('judgeCount');
    dom.navFloat     = document.getElementById('navFloat');
  }

  // ===== INIT =====
  // Pure JS: reads EXAM_DATA global variable set by *-data.js
  // No fetch() - works on file://, http://, any protocol
  function init(subjectCode, subjectName) {
    state.code = subjectCode;
    state.subject = subjectName;
    applyCrtSetting();
    cacheDOM();
    bindEvents();
    bindCrtToggle();
    loadData();
    window.scrollTo(0, 0);
    initFlicker();
  }

  // ===== CRT TOGGLE =====
  function getCrtEnabled() { return localStorage.getItem('crtFlickerEnabled') !== 'false'; }
  function applyCrtSetting() {
    var enabled = getCrtEnabled();
    var root = document.documentElement;
    var btn = document.getElementById('crtToggle');
    if (enabled) { root.classList.remove('crt-flicker-disabled'); }
    else { root.classList.add('crt-flicker-disabled'); }
    if (btn) {
      btn.textContent = enabled ? 'CRT: ON' : 'CRT: OFF';
      btn.classList.toggle('off', !enabled);
    }
  }
  function setCrtEnabled(enabled) {
    localStorage.setItem('crtFlickerEnabled', enabled ? 'true' : 'false');
    applyCrtSetting();
    if (enabled) {
      if (window._flickerObserver) { window._flickerObserver.disconnect(); window._flickerObserver = null; }
      initFlicker();
    }
  }
  function toggleCrt() { setCrtEnabled(!getCrtEnabled()); }
  function bindCrtToggle() {
    var btn = document.getElementById('crtToggle');
    if (!btn) return;
    btn.textContent = getCrtEnabled() ? 'CRT: ON' : 'CRT: OFF';
    btn.classList.toggle('off', !getCrtEnabled());
    btn.addEventListener('click', toggleCrt);
  }
  function initFlicker() {
    if (!getCrtEnabled()) return;
    if (window._flickerObserver) { window._flickerObserver.disconnect(); }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting && !e.target.classList.contains('visible')) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.anim-flicker').forEach(function(el) { observer.observe(el); });
    window._flickerObserver = observer;
  }

  // ===== DATA =====
  // Pure JS: reads from EXAM_DATA global (set by *-data.js <script> tag)
  function loadData() {
    var data = typeof EXAM_DATA !== 'undefined' ? EXAM_DATA : null;
    if (!data || !data.questions) {
      console.error('EXAM_DATA not found. Make sure *-data.js is loaded before exam.js');
      if (dom.container) {
        dom.container.innerHTML = '<div style="text-align:center;padding:60px;color:#808080">[ ERROR ] 题库数据未加载<br><small style="font-size:11px">请确认 &lt;script src="../src/*-data.js"&gt; 已正确引入</small></div>';
      }
      return;
    }
    state.questions = data.questions;
    sortQuestions();
    resetDisplayOrder();
    updateStats();
    renderAll();
    updateProgress();
  }

  // Sort questions by type order
  function sortQuestions() {
    var typeOrderMap = {};
    config.typeOrder.forEach(function(t, i) { typeOrderMap[t] = i; });
    state.questions.sort(function(a, b) {
      var oa = typeOrderMap[a.type] !== undefined ? typeOrderMap[a.type] : 99;
      var ob = typeOrderMap[b.type] !== undefined ? typeOrderMap[b.type] : 99;
      if (oa !== ob) return oa - ob;
      return a.id - b.id;
    });
  }

  // Reset display order to sequential
  function resetDisplayOrder() {
    state.displayOrder = state.questions.map(function(_, i) { return i; });
  }

  // Shuffle display order by type groups
  function shuffleByType() {
    var groups = {};
    state.questions.forEach(function(q, idx) {
      if (!groups[q.type]) groups[q.type] = [];
      groups[q.type].push(idx);
    });
    // Shuffle each group
    for (var type in groups) {
      var arr = groups[type];
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
    }
    // Reassemble in type order
    state.displayOrder = [];
    config.typeOrder.forEach(function(type) {
      if (groups[type]) state.displayOrder = state.displayOrder.concat(groups[type]);
    });
  }

  function updateStats() {
    var total = state.questions.length;
    if (dom.totalCount)  dom.totalCount.textContent  = total;
    if (dom.choiceCount) dom.choiceCount.textContent = countType('choice');
    if (dom.fillCount)   dom.fillCount.textContent   = countType('fill');
    if (dom.judgeCount)  dom.judgeCount.textContent  = countType('judge');
  }

  function countType(type) {
    return state.questions.filter(function(q) { return q.type === type; }).length;
  }

  // ===== RENDER =====
  function renderAll() {
    if (!state.questions.length) {
      dom.container.innerHTML = '<div style="text-align:center;padding:60px;color:#808080">[ EMPTY ] 暂无题目数据</div>';
      return;
    }
    var html = '';
    state.displayOrder.forEach(function(origIdx, displayIdx) {
      var q = state.questions[origIdx];
      html += renderQuestion(q, origIdx, displayIdx);
    });
    dom.container.innerHTML = html;
    applyFilter();
    bindQuestionEvents();
    // Re-init flicker observer for newly rendered elements
    // and immediately show elements already in viewport
    initFlicker();
    document.querySelectorAll('.anim-flicker').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }

  function renderQuestion(q, origIndex, displayIndex) {
    var typeLabel = config.typeMap[q.type] || q.type;
    var typeColor = config.typeColors[q.type] || '#808080';
    var html = '<div class="question-item anim-flicker" data-type="' + q.type + '" data-index="' + origIndex + '" id="q-' + origIndex + '">';

    html += '<div class="question-header">';
    html += '<span class="question-num" style="color:' + typeColor + '">Q' + (displayIndex + 1) + '</span>';
    html += '<span class="question-text">' + esc(q.question) + '</span>';
    html += '<span class="question-type-badge" style="border-color:' + typeColor + ';color:' + typeColor + '">' + typeLabel + '</span>';
    html += '</div>';

    if (q.type === 'choice' && q.options) {
      html += renderChoiceOptions(q, origIndex);
    } else if (q.type === 'judge') {
      html += renderJudgeOptions(q, origIndex);
    } else if (q.type === 'fill') {
      html += renderFillInput(q, origIndex);
    }

    html += '<div class="answer-area" id="answer-' + origIndex + '">';
    html += '<div class="answer-label">// ANSWER</div>';
    html += '<div class="answer-text">' + esc(String(q.answer)) + '</div>';
    if (q.explanation) {
      html += '<div class="explanation-text">' + esc(q.explanation) + '</div>';
    }
    html += '</div>';

    html += '<button class="single-reveal-btn" id="single-reveal-' + origIndex + '" onclick="Exam.toggleSingleAnswer(' + origIndex + ')">查看答案</button>';
    html += '<div class="result-area" id="result-' + origIndex + '"></div>';
    html += '</div>';
    return html;
  }

  function renderChoiceOptions(q, origIndex) {
    var labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    var html = '<div class="question-options">';
    q.options.forEach(function(opt, i) {
      var label = labels[i] || String(i);
      var selected = state.answers[origIndex] === label ? ' selected' : '';
      html += '<div class="question-option' + selected + '" data-opt="' + label + '" data-qidx="' + origIndex + '">';
      html += '<span class="opt-label">' + label + '</span>' + esc(opt);
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderJudgeOptions(q, origIndex) {
    var selTrue = state.answers[origIndex] === '正确' ? ' selected' : '';
    var selFalse = state.answers[origIndex] === '错误' ? ' selected' : '';
    var html = '<div class="judge-options">';
    html += '<button class="judge-btn' + selTrue + '" data-val="正确" data-qidx="' + origIndex + '">正确</button>';
    html += '<button class="judge-btn' + selFalse + '" data-val="错误" data-qidx="' + origIndex + '">错误</button>';
    html += '</div>';
    return html;
  }

  function renderFillInput(q, origIndex) {
    var val = state.answers[origIndex] || '';
    var html = '<div class="fill-input-area">';
    html += '<input type="text" class="fill-input" placeholder="请输入答案..." value="' + esc(val) + '" data-qidx="' + origIndex + '">';
    html += '</div>';
    return html;
  }

  function esc(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(String(text)));
    return div.innerHTML;
  }

  // ===== FILTER =====
  function setFilter(type) {
    state.filter = type;
    dom.filterBtns.forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.filter === type);
    });
    applyFilter();
  }

  function applyFilter() {
    var items = document.querySelectorAll('.question-item');
    items.forEach(function(item) {
      var qType = item.dataset.type;
      var qIdx = parseInt(item.dataset.index);
      var visible = true;

      if (state.filter !== 'all' && qType !== state.filter) visible = false;

      if (state.showOnlyWrong && state.result) {
        var r = state.result.details.find(function(d) { return d.index === qIdx; });
        if (!r || r.correct) visible = false;
      }

      item.classList.toggle('hidden', !visible);
    });
    updateProgress();
  }

  // ===== EXAM MODE =====
  function toggleExamMode() {
    if (state.examMode) {
      exitExamMode();
    } else {
      enterExamMode();
    }
  }

  function enterExamMode() {
    // Reset timer fully
    stopTimer();
    state.elapsed = 0;
    state.startTime = 0;
    state.examStarted = false;
    if (dom.timerDisplay) dom.timerDisplay.textContent = '00:00';

    state.examMode = true;
    state.submitted = false;
    state.showOnlyWrong = false;
    state.result = null;
    state.answers = {};
    state.shownAnswers = {};

    // Shuffle questions by type
    shuffleByType();
    renderAll();

    // UI
    dom.examBtn.textContent = '退出考试';
    dom.examBtn.classList.add('active');
    if (dom.revealBtn) dom.revealBtn.style.display = 'none';
    if (dom.submitArea) dom.submitArea.style.display = 'block';
    if (dom.statsArea) dom.statsArea.style.display = 'none';
    if (dom.timerBar) dom.timerBar.classList.add('show');
    if (dom.timerDisplay) dom.timerDisplay.textContent = '00:00';

    // Move progress bar below timer bar
    if (dom.progressBar) dom.progressBar.style.top = '86px';

    hideAllAnswers();
    document.querySelectorAll('.result-area').forEach(function(el) { el.innerHTML = ''; el.style.display = 'none'; });
    // Hide single-question reveal buttons in exam mode
    document.querySelectorAll('.single-reveal-btn').forEach(function(el) { el.style.display = 'none'; });
    setFilter('all');
    updateExamProgress();
  }

  function exitExamMode() {
    state.examMode = false;
    stopTimer();

    // Restore original order
    resetDisplayOrder();
    renderAll();

    dom.examBtn.textContent = '考试模式';
    dom.examBtn.classList.remove('active');
    if (dom.revealBtn) dom.revealBtn.style.display = '';
    if (dom.submitArea) dom.submitArea.style.display = 'none';
    if (dom.statsArea) dom.statsArea.style.display = 'none';
    if (dom.timerBar) dom.timerBar.classList.remove('show');

    // Move progress bar back to topbar bottom
    if (dom.progressBar) dom.progressBar.style.top = '50px';

    document.querySelectorAll('.result-area').forEach(function(el) { el.style.display = 'none'; });
    document.querySelectorAll('.single-reveal-btn').forEach(function(el) { el.style.display = ''; });
    state.showOnlyWrong = false;
    setFilter(state.filter);
    updateProgress();
  }

  // ===== ANSWER HANDLING =====
  function recordAnswer(index, value) {
    state.answers[index] = value;
    if (!state.examStarted) {
      state.examStarted = true;
      state.startTime = Date.now();
      startTimer();
    }
    if (state.examMode) updateExamProgress();
  }

  function toggleSingleAnswer(index) {
    var area = document.getElementById('answer-' + index);
    if (!area) return;
    if (area.classList.contains('show')) {
      area.classList.remove('show');
      state.shownAnswers[index] = false;
    } else {
      area.classList.add('show');
      state.shownAnswers[index] = true;
    }
  }

  function toggleAllAnswers() {
    state.answersRevealed = !state.answersRevealed;
    dom.revealBtn.textContent = state.answersRevealed ? '隐藏答案' : '一键展示答案';
    dom.revealBtn.classList.toggle('revealed', state.answersRevealed);
    document.querySelectorAll('.answer-area').forEach(function(area) {
      area.classList.toggle('show', state.answersRevealed);
    });
  }

  function hideAllAnswers() {
    document.querySelectorAll('.answer-area').forEach(function(area) { area.classList.remove('show'); });
    state.answersRevealed = false;
    if (dom.revealBtn) {
      dom.revealBtn.textContent = '一键展示答案';
      dom.revealBtn.classList.remove('revealed');
    }
  }

  // ===== TIMER =====
  function startTimer() {
    stopTimer();
    state.timerInterval = setInterval(function() {
      state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      if (dom.timerDisplay) dom.timerDisplay.textContent = formatTime(state.elapsed);
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ===== SUBMIT & GRADING =====
  function submitExam() {
    if (state.submitted) return;
    stopTimer();

    var answered = Object.keys(state.answers).length;
    if (answered === 0) {
      alert('您还没有作答任何题目！');
      if (state.examStarted) startTimer();
      return;
    }

    state.submitted = true;
    var result = gradeExam();
    state.result = result;
    showResults(result);
    showStats(result);

    if (dom.statsArea) dom.statsArea.scrollIntoView({ behavior: 'smooth' });
  }

  function gradeExam() {
    var details = [];
    var correct = 0, wrong = 0;

    state.questions.forEach(function(q, i) {
      var userAns = state.answers[i];
      if (userAns === undefined) return;

      var isCorrect = checkAnswer(q, userAns);
      if (isCorrect) correct++; else wrong++;

      details.push({
        index: i,
        question: q.question,
        userAnswer: userAns,
        correctAnswer: q.answer,
        correct: isCorrect,
        explanation: q.explanation,
        type: q.type
      });
    });

    var total = correct + wrong;
    return {
      totalAnswered: total,
      correct: correct,
      wrong: wrong,
      rate: total > 0 ? Math.round(correct / total * 100) : 0,
      elapsed: state.elapsed,
      details: details
    };
  }

  function checkAnswer(q, userAns) {
    var correct = String(q.answer).trim();
    var user = String(userAns).trim();

    if (q.type === 'judge') {
      if (correct === 'true' || correct === 'True') correct = '正确';
      if (correct === 'false' || correct === 'False') correct = '错误';
      if (user === 'true' || user === 'True') user = '正确';
      if (user === 'false' || user === 'False') user = '错误';
      return correct === user;
    }

    if (q.type === 'fill') {
      return correct.toLowerCase().replace(/[;；.]$/, '').trim() ===
             user.toLowerCase().replace(/[;；.]$/, '').trim();
    }

    return correct.toUpperCase() === user.toUpperCase();
  }

  function showResults(result) {
    result.details.forEach(function(d) {
      var resultEl = document.getElementById('result-' + d.index);
      var answerEl = document.getElementById('answer-' + d.index);
      if (!resultEl) return;

      resultEl.style.display = 'block';
      if (d.correct) {
        resultEl.innerHTML = '<span style="color:#00AA66;font-weight:700">✓ 回答正确</span>';
        resultEl.className = 'result-area result-correct';
      } else {
        resultEl.innerHTML = '<span style="color:#CC0000;font-weight:700">✗ 回答错误</span>';
        resultEl.className = 'result-area result-wrong';
        if (answerEl) answerEl.classList.add('show');
      }
    });
    if (dom.submitArea) dom.submitArea.style.display = 'none';
  }

  // ===== STATISTICS =====
  function showStats(result) {
    if (!dom.statsArea) return;
    dom.statsArea.style.display = 'block';

    // Card 1: total answered
    if (dom.statTotal) dom.statTotal.textContent = result.totalAnswered;

    // Card 2: correct / wrong count
    var statCorrectEl = document.getElementById('statCorrect');
    if (statCorrectEl) statCorrectEl.textContent = result.correct + ' / ' + result.wrong;

    // Card 3: rate
    if (dom.statRate) dom.statRate.textContent = result.rate + '%';

    // Detail line: user | time | date
    if (dom.statTime) dom.statTime.textContent = formatTime(result.elapsed);
    var statDateEl = document.getElementById('statDate');
    if (statDateEl) {
      var now = new Date();
      statDateEl.textContent = now.getFullYear() + '.' + String(now.getMonth()+1).padStart(2,'0') + '.' + String(now.getDate()).padStart(2,'0');
    }

    // Type breakdown
    var typeCounts = {};
    result.details.forEach(function(d) {
      var label = config.typeMap[d.type] || d.type;
      if (!typeCounts[label]) typeCounts[label] = { total: 0, correct: 0 };
      typeCounts[label].total++;
      if (d.correct) typeCounts[label].correct++;
    });

    var typeHtml = '';
    for (var t in typeCounts) {
      var tc = typeCounts[t];
      typeHtml += '<span class="stat-type-tag">' + t + ': ' + tc.correct + '/' + tc.total + '</span>';
    }
    if (dom.statTypes) dom.statTypes.innerHTML = typeHtml;

    var wrongBtn = document.getElementById('showWrongBtn');
    if (wrongBtn) wrongBtn.style.display = result.wrong > 0 ? '' : 'none';
  }

  function toggleShowWrong() {
    state.showOnlyWrong = !state.showOnlyWrong;
    var btn = document.getElementById('showWrongBtn');
    if (btn) btn.textContent = state.showOnlyWrong ? '查看全部' : '仅查看错误';
    applyFilter();
  }

  function continueExam() {
    state.submitted = false;
    state.showOnlyWrong = false;
    if (dom.statsArea) dom.statsArea.style.display = 'none';
    if (dom.submitArea) dom.submitArea.style.display = 'block';
    document.querySelectorAll('.result-area').forEach(function(el) { el.innerHTML = ''; el.style.display = 'none'; });
    hideAllAnswers();
    // Adjust startTime so pause period is NOT counted in elapsed
    if (state.examStarted && state.elapsed > 0) {
      state.startTime = Date.now() - state.elapsed * 1000;
    }
    if (state.examStarted) startTimer();
    setFilter('all');
  }

  function editUserName() {
    var current = dom.statUser && dom.statUser.textContent ? dom.statUser.textContent : '访客';
    var name = prompt('请输入答题人姓名：', current);
    if (name && name.trim() && dom.statUser) dom.statUser.textContent = name.trim();
  }

  // ===== PROGRESS =====
  function updateProgress() {
    if (!dom.progressFill) return;
    var total = state.questions.length;
    var pct = total > 0 ? (document.querySelectorAll('.question-item:not(.hidden)').length / total * 100) : 0;
    dom.progressFill.style.width = pct + '%';
  }

  function updateExamProgress() {
    if (!dom.progressFill) return;
    var total = state.questions.length;
    var answered = Object.keys(state.answers).length;
    dom.progressFill.style.width = total > 0 ? (answered / total * 100) + '%' : '0%';
  }

  // ===== EVENTS =====
  function bindEvents() {
    dom.filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() { setFilter(this.dataset.filter); });
    });
    window.addEventListener('scroll', function() {
      if (!dom.navFloat) return;
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      dom.navFloat.style.opacity = scrollY > 300 ? '1' : '0';
      dom.navFloat.style.pointerEvents = scrollY > 300 ? 'auto' : 'none';
    });
  }

  function bindQuestionEvents() {
    document.querySelectorAll('.question-option').forEach(function(el) {
      el.addEventListener('click', function() {
        var qidx = parseInt(this.dataset.qidx);
        var opt = this.dataset.opt;
        document.querySelectorAll('.question-option[data-qidx="' + qidx + '"]').forEach(function(o) { o.classList.remove('selected'); });
        this.classList.add('selected');
        recordAnswer(qidx, opt);
      });
    });

    document.querySelectorAll('.judge-btn').forEach(function(el) {
      el.addEventListener('click', function() {
        var qidx = parseInt(this.dataset.qidx);
        var val = this.dataset.val;
        document.querySelectorAll('.judge-btn[data-qidx="' + qidx + '"]').forEach(function(o) { o.classList.remove('selected'); });
        this.classList.add('selected');
        recordAnswer(qidx, val);
      });
    });

    document.querySelectorAll('.fill-input').forEach(function(el) {
      el.addEventListener('change', function() { recordAnswer(parseInt(this.dataset.qidx), this.value); });
      el.addEventListener('keydown', function(e) { if (e.key === 'Enter') recordAnswer(parseInt(this.dataset.qidx), this.value); });
    });
  }

  // ===== PUBLIC API =====
  return {
    init: init,
    setFilter: setFilter,
    toggleExamMode: toggleExamMode,
    toggleAllAnswers: toggleAllAnswers,
    toggleSingleAnswer: toggleSingleAnswer,
    submitExam: submitExam,
    toggleShowWrong: toggleShowWrong,
    continueExam: continueExam,
    editUserName: editUserName,
    goTop: function() { window.scrollTo({ top: 0, behavior: 'smooth' }); },
    goBottom: function() { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }
  };
})();
