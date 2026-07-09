var EXAM_DATA = {
  "subject": "C语言",
  "code": "c",
  "description": "中等职业教育C语言程序设计自测题库",
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "question": "C语言中，以下哪个是合法的数据类型关键字？",
      "options": [
        "Integer",
        "int",
        "INT",
        "integer"
      ],
      "answer": "B",
      "explanation": "C语言中int是基本数据类型关键字，区分大小写。"
    },
    {
      "id": 2,
      "type": "choice",
      "question": "以下哪个符号是C语言中的单行注释？",
      "options": [
        "//",
        "/*",
        "#",
        "--"
      ],
      "answer": "A",
      "explanation": "// 是C99标准引入的单行注释符号。"
    },
    {
      "id": 3,
      "type": "fill",
      "question": "C语言程序的执行总是从______函数开始的。",
      "answer": "main",
      "explanation": "main函数是C语言程序的入口点。"
    },
    {
      "id": 4,
      "type": "judge",
      "question": "C语言中，变量名可以以数字开头。",
      "answer": false,
      "explanation": "C语言变量名必须以字母或下划线开头，不能以数字开头。"
    },
    {
      "id": 5,
      "type": "choice",
      "question": "以下哪个运算符的优先级最高？",
      "options": [
        "+",
        "*",
        "=",
        "&&"
      ],
      "answer": "B",
      "explanation": "乘法运算符*的优先级高于加法、赋值和逻辑与运算符。"
    },
    {
      "id": 6,
      "type": "fill",
      "question": "在C语言中，使用______函数可以在控制台输出字符串。",
      "answer": "printf",
      "explanation": "printf是C语言标准库中用于格式化输出的函数。"
    },
    {
      "id": 7,
      "type": "judge",
      "question": "C语言中，数组的下标从1开始。",
      "answer": false,
      "explanation": "C语言数组的下标从0开始。"
    },
    {
      "id": 8,
      "type": "choice",
      "question": "以下哪个是C语言中的循环语句？",
      "options": [
        "if",
        "while",
        "switch",
        "return"
      ],
      "answer": "B",
      "explanation": "while是循环语句，if和switch是分支语句，return是返回语句。"
    },
    {
      "id": 9,
      "type": "fill",
      "question": "C语言中，声明一个整型变量a并赋值为10的语句是______。",
      "answer": "int a = 10;",
      "explanation": "使用int关键字声明整型变量，用=赋值。"
    },
    {
      "id": 10,
      "type": "judge",
      "question": "C语言中，float类型通常占用4个字节的内存空间。",
      "answer": true,
      "explanation": "在大多数系统中，float类型占用4个字节（32位）。"
    },
    {
      "id": 11,
      "type": "choice",
      "question": "以下哪个头文件包含了输入输出函数？",
      "options": [
        "<math.h>",
        "<stdio.h>",
        "<string.h>",
        "<stdlib.h>"
      ],
      "answer": "B",
      "explanation": "stdio.h包含printf、scanf等标准输入输出函数。"
    },
    {
      "id": 12,
      "type": "fill",
      "question": "在C语言中，使用______关键字可以定义一个常量。",
      "answer": "const",
      "explanation": "const关键字用于声明常量，其值不能被修改。"
    },
    {
      "id": 13,
      "type": "choice",
      "question": "以下哪个不是C语言的基本数据类型？",
      "options": [
        "char",
        "float",
        "string",
        "double"
      ],
      "answer": "C",
      "explanation": "string不是C语言的基本数据类型，C语言使用字符数组表示字符串。"
    },
    {
      "id": 14,
      "type": "judge",
      "question": "C语言中，break语句可以用于跳出循环和switch语句。",
      "answer": true,
      "explanation": "break语句可以跳出for、while、do-while循环和switch语句。"
    },
    {
      "id": 15,
      "type": "fill",
      "question": "C语言中，函数声明的一般格式为：返回类型 函数名(______)。",
      "answer": "参数列表",
      "explanation": "函数声明包括返回类型、函数名和参数列表（可以省略参数名）。"
    },
    {
      "id": 16,
      "type": "choice",
      "question": "以下哪个运算符用于取地址？",
      "options": [
        "*",
        "&",
        "%",
        "#"
      ],
      "answer": "B",
      "explanation": "&是取地址运算符，*是指针解引用运算符。"
    },
    {
      "id": 17,
      "type": "judge",
      "question": "C语言中，结构体成员可以通过点运算符(.)访问。",
      "answer": true,
      "explanation": "结构体变量使用点运算符访问成员，结构体指针使用箭头运算符(->)。"
    },
    {
      "id": 18,
      "type": "fill",
      "question": "C语言中，使用______语句可以根据条件执行不同的代码分支。",
      "answer": "if",
      "explanation": "if语句是C语言中最基本的分支控制语句。"
    },
    {
      "id": 19,
      "type": "fill",
      "question": "程序的基本单位是______。",
      "answer": "函数",
      "explanation": "笔记原话：\"程序的基本单位就是函数\"。"
    },
    {
      "id": 20,
      "type": "judge",
      "question": "一个C程序中可以有多个主函数main()。",
      "answer": false,
      "explanation": "笔记指出：\"有且只有一个main()\"。"
    },
    {
      "id": 21,
      "type": "choice",
      "question": "以下哪个不是C语言标准输入输出函数？",
      "options": [
        "printf",
        "scanf",
        "main",
        "getchar"
      ],
      "answer": "C",
      "explanation": "main是主函数；printf、scanf、getchar均为输入输出函数。"
    },
    {
      "id": 22,
      "type": "fill",
      "question": "#include\"stdio.h\"的作用是声明在程序中使用______函数。",
      "answer": "输入输出",
      "explanation": "笔记原话。"
    },
    {
      "id": 23,
      "type": "fill",
      "question": "函数由______和______两部分组成。",
      "answer": "函数头、函数体",
      "explanation": "笔记多次提到函数由函数头和函数体组成。"
    },
    {
      "id": 24,
      "type": "fill",
      "question": "调用没有返回值的函数时，语句格式为______。",
      "answer": "函数名();",
      "explanation": "笔记：\"调用没有带返回值的函数语句：函数名();\"。"
    },
    {
      "id": 25,
      "type": "fill",
      "question": "在定义函数时，如果函数类型为int型，可以省略______。",
      "answer": "int（类型标识符）",
      "explanation": "笔记：\"当我们定义的函数如果为int型时可以省略类型标识符\"。"
    },
    {
      "id": 26,
      "type": "choice",
      "question": "以下关于void类型的说法，正确的是？",
      "options": [
        "void函数可以有返回值",
        "void函数只能没有返回值",
        "void变量可存任意数据",
        "void占4字节"
      ],
      "answer": "B",
      "explanation": "笔记：\"void空类型只能定义没有返回值的函数...空类型就是没有返回值的意思\"。"
    },
    {
      "id": 27,
      "type": "fill",
      "question": "实现函数值返回的关键字是______。",
      "answer": "return",
      "explanation": "笔记：\"关键字return来实现函数值的返回\"。"
    },
    {
      "id": 28,
      "type": "fill",
      "question": "调用带返回值的函数，第一种方式是用赋值语句：变量名 = ______。",
      "answer": "函数名();",
      "explanation": "笔记：\"调用带返回值的函数语句第一种用赋值的方式：变量名 = 函数名();\"。"
    },
    {
      "id": 29,
      "type": "fill",
      "question": "调用带返回值的函数，第二种方式是用______的形式。",
      "answer": "输出列表（如printf）",
      "explanation": "笔记：\"第二种用输出列表的形式：printf(\"\",sum());\"。"
    },
    {
      "id": 30,
      "type": "fill",
      "question": "去调用别人的函数称为______函数，被别人调用的函数称为______函数。",
      "answer": "主调、被调",
      "explanation": "笔记定义了主调函数和被调函数。"
    },
    {
      "id": 31,
      "type": "judge",
      "question": "一个函数既可以成为主调函数，也可以成为被调函数。",
      "answer": true,
      "explanation": "笔记原话。"
    },
    {
      "id": 32,
      "type": "fill",
      "question": "在主调函数中调用被调函数前，需要先______被调函数。",
      "answer": "声明",
      "explanation": "笔记：\"调用前先在主调函数中声明被调函数\"。"
    },
    {
      "id": 33,
      "type": "fill",
      "question": "定义有参函数时，括号中的参数称为______；调用有参函数时，括号中的参数称为______。",
      "answer": "形参、实参",
      "explanation": "笔记定义。"
    },
    {
      "id": 34,
      "type": "fill",
      "question": "实参可以是常量、变量或______。",
      "answer": "表达式",
      "explanation": "笔记：\"实参：具体的数值 可以是常量 变量 表达式\"。"
    },
    {
      "id": 35,
      "type": "fill",
      "question": "实参传递给形参是______值传递。",
      "answer": "单向",
      "explanation": "笔记：\"实参传递给形参 是 单向值传递\"。"
    },
    {
      "id": 36,
      "type": "fill",
      "question": "调用函数时，实参和形参的______和______必须一致。",
      "answer": "个数、类型",
      "explanation": "笔记：\"一一传递 个数和类型一致\"。"
    },
    {
      "id": 37,
      "type": "choice",
      "question": "以下关于实参和形参的说法，错误的是？",
      "options": [
        "形参只能是变量",
        "实参可以是常量",
        "实参和形参个数必须一致",
        "实参传递给形参是双向的"
      ],
      "answer": "D",
      "explanation": "笔记指出实参传递给形参是单向值传递，并非双向。"
    },
    {
      "id": 38,
      "type": "fill",
      "question": "break在switch中的作用是______。",
      "answer": "跳出（switch结构）",
      "explanation": "笔记：\"switch：直接用break;\"。"
    },
    {
      "id": 39,
      "type": "fill",
      "question": "break在循环中一般和______搭配使用，表示跳出循环。",
      "answer": "if",
      "explanation": "笔记：\"循环：和if搭配使用，跳出循环的意思\"。"
    },
    {
      "id": 40,
      "type": "fill",
      "question": "在循环中，break和switch搭配使用时，会跳出______。",
      "answer": "switch",
      "explanation": "笔记明确指出：\"只能跳出switch\"。"
    },
    {
      "id": 41,
      "type": "judge",
      "question": "break只能跳出一层。",
      "answer": true,
      "explanation": "笔记原话：\"break只能跳出一层\"。"
    },
    {
      "id": 42,
      "type": "fill",
      "question": "break不能和if单独使用，必须搭配用在______中。",
      "answer": "循环",
      "explanation": "笔记原话。"
    },
    {
      "id": 43,
      "type": "fill",
      "question": "continue的含义是跳过______循环，直接进入下一次循环。",
      "answer": "本次",
      "explanation": "笔记：\"跳过本次循环 直接进入下一次循环\"。"
    },
    {
      "id": 44,
      "type": "fill",
      "question": "continue只能用于______中。",
      "answer": "循环",
      "explanation": "笔记：\"只能用于循环中\"。"
    },
    {
      "id": 45,
      "type": "choice",
      "question": "以下关于continue的说法，正确的是？",
      "options": [
        "可以和if单独使用",
        "可以用在switch中单独使用",
        "必须搭配用在循环中",
        "会终止整个循环"
      ],
      "answer": "C",
      "explanation": "笔记：\"continue不能和if,switch单独使用...必须搭配用在循环中\"。"
    },
    {
      "id": 46,
      "type": "fill",
      "question": "C程序从______函数开始执行，到该函数结束。",
      "answer": "main（主函数）",
      "explanation": "笔记：\"从主函数开始执行，主函数结束\"。"
    },
    {
      "id": 47,
      "type": "fill",
      "question": "主函数main可以在程序的任意位置，只要不在______体内。",
      "answer": "其他函数",
      "explanation": "笔记：\"主函数可以在任意的位置，只要不在其他函数体内\"。"
    },
    {
      "id": 48,
      "type": "fill",
      "question": "C语句以______结束。",
      "answer": "分号",
      "explanation": "笔记：\"语句：分号结束的\"。"
    },
    {
      "id": 49,
      "type": "fill",
      "question": "一行上可以写______条语句，一条语句也可以写在多行上。",
      "answer": "多",
      "explanation": "笔记：\"一行上可以写多条语句，一条语句可以写在多行上\"。"
    },
    {
      "id": 50,
      "type": "fill",
      "question": "C语言的注释分为______注释和______注释。",
      "answer": "单行、多行",
      "explanation": "笔记：\"注释：多行注释 单行注释\"。"
    },
    {
      "id": 51,
      "type": "fill",
      "question": "标识符由______、字母、数字组成，且不能以数字开头。",
      "answer": "下划线",
      "explanation": "笔记：\"由下划线 字母 数字 组成，不能以数字开头\"。"
    },
    {
      "id": 52,
      "type": "choice",
      "question": "以下哪个是合法的C语言标识符？",
      "options": [
        "123abc",
        "_abc123",
        "int",
        "abc#"
      ],
      "answer": "B",
      "explanation": "标识符不能以数字开头，不能用系统标识符（如int），不能含#。"
    },
    {
      "id": 53,
      "type": "judge",
      "question": "main是系统保留关键字，不能作为用户自定义标识符使用。",
      "answer": false,
      "explanation": "笔记：\"main是自定义标识符 一般用做主函数的名称\"，说明main不是系统保留关键字。"
    },
    {
      "id": 54,
      "type": "fill",
      "question": "C语言标识符______大小写。",
      "answer": "区分",
      "explanation": "笔记：\"区分大小写\"。"
    },
    {
      "id": 55,
      "type": "judge",
      "question": "系统标识符不能用作用户标识符。",
      "answer": true,
      "explanation": "笔记原话。"
    },
    {
      "id": 56,
      "type": "fill",
      "question": "标识符命名必须使用______西文模式。",
      "answer": "半角",
      "explanation": "笔记：\"用半角西文模式\"。"
    },
    {
      "id": 57,
      "type": "fill",
      "question": "C程序的开发步骤依次为：编辑→______→连接→运行。",
      "answer": "编译",
      "explanation": "笔记：\"编辑----编译----连接 ---- 运行\"。"
    },
    {
      "id": 58,
      "type": "fill",
      "question": "C源程序文件的扩展名是______，编译后生成的目标文件扩展名是______，连接后生成的可执行文件扩展名是______。",
      "answer": ".c、.obj、.exe",
      "explanation": "笔记中的文件扩展名对应关系。"
    },
    {
      "id": 59,
      "type": "fill",
      "question": "在VC/VS环境中，按______键可以编译源程序文件。",
      "answer": "F11",
      "explanation": "笔记：\"F11 编译源程序文件\"。"
    },
    {
      "id": 60,
      "type": "fill",
      "question": "按F5键的作用是______程序。",
      "answer": "运行",
      "explanation": "笔记：\"F5 运行程序\"。"
    },
    {
      "id": 61,
      "type": "fill",
      "question": "设置或取消断点的快捷键是______。",
      "answer": "F10",
      "explanation": "笔记：\"F10 设置/取消断点\"。"
    },
    {
      "id": 62,
      "type": "fill",
      "question": "保存文件的快捷键是______。",
      "answer": "ctrl+s",
      "explanation": "笔记原话。"
    },
    {
      "id": 63,
      "type": "fill",
      "question": "八进制整数以______开头，且不能出现数字______和______。",
      "answer": "0、8、9",
      "explanation": "笔记：\"八进制：以0开头 不能出现8 9\"。"
    },
    {
      "id": 64,
      "type": "fill",
      "question": "十六进制整数以______开头，数字部分包括0-9和______。",
      "answer": "0x、a-f（或A-F）",
      "explanation": "笔记：\"十六进制：以0x开头 0---9 a--f (A---F)\"。"
    },
    {
      "id": 65,
      "type": "choice",
      "question": "以下哪个是合法的八进制常量？",
      "options": [
        "089",
        "0123",
        "0x123",
        "123"
      ],
      "answer": "B",
      "explanation": "八进制以0开头且不能出现8、9；A含8/9不合法；C是十六进制；D是十进制。"
    },
    {
      "id": 66,
      "type": "fill",
      "question": "实型常量的小数点形式要求小数点______至少一边有数。",
      "answer": "两边",
      "explanation": "笔记：\"小数点形式：小数点 两边至少一边有数\"。"
    },
    {
      "id": 67,
      "type": "fill",
      "question": "实型常量的指数形式中，e前______有数，e后必为______。",
      "answer": "比（必）、整数",
      "explanation": "笔记：\"e前比有数 e后必为整数\"。"
    },
    {
      "id": 68,
      "type": "fill",
      "question": "0x4p3是合法的______进制指数形式。",
      "answer": "十六",
      "explanation": "笔记：\"十六进制指数形式：0x4p3\"。"
    },
    {
      "id": 69,
      "type": "fill",
      "question": "普通字符是用______引号括起来的单个字符。",
      "answer": "单",
      "explanation": "笔记：\"普通字符：用单引号括起来的单个字符\"。"
    },
    {
      "id": 70,
      "type": "fill",
      "question": "以下五个转义字符需要死记：'\\n'、'\\t'、'\\r'、'\\v'、______。",
      "answer": "'\\b'",
      "explanation": "笔记原话。"
    },
    {
      "id": 71,
      "type": "fill",
      "question": "字符'a'的ASCII码值是______，字符'A'的ASCII码值是______，字符'0'的ASCII码值是______。",
      "answer": "97、65、48",
      "explanation": "笔记中的对应关系。"
    },
    {
      "id": 72,
      "type": "fill",
      "question": "'\\141'是______进制转义字符，表示字符______。",
      "answer": "八、'a'",
      "explanation": "笔记指出\"'a' 97 '\\141' '\\x61'\"，141是八进制，等于十进制97即'a'。"
    },
    {
      "id": 73,
      "type": "fill",
      "question": "'\\x61'是______进制转义字符，表示字符______。",
      "answer": "十六、'a'",
      "explanation": "同上，61是十六进制，等于十进制97。"
    },
    {
      "id": 74,
      "type": "choice",
      "question": "以下哪个是合法的八进制转义字符？",
      "options": [
        "'\\1234'",
        "'\\28'",
        "'\\7'",
        "'\\xg'"
      ],
      "answer": "C",
      "explanation": "笔记指出'\\1234'（超3位）、'\\28'（含8）、'\\xg'（非八进制）均错误，'\\7'正确。"
    },
    {
      "id": 75,
      "type": "choice",
      "question": "以下哪个是合法的十六进制转义字符？",
      "options": [
        "'\\x345'",
        "'\\xh'",
        "'\\x34'",
        "'\\abc'"
      ],
      "answer": "C",
      "explanation": "笔记指出'\\x345'（超2位）、'\\xh'（h非十六进制数字）、'\\abc'（缺x）错误，'\\x34'正确。"
    },
    {
      "id": 76,
      "type": "fill",
      "question": "字符串是用______引号括起来的一个或多个字符。",
      "answer": "双",
      "explanation": "笔记：\"字符串：用双引号括起来的1个或多个字符\"。"
    },
    {
      "id": 77,
      "type": "fill",
      "question": "字符串在存储时会自动添加一个结束符______。",
      "answer": "'\\0'",
      "explanation": "笔记：\"存储时：自动添加一个结束符'\\0'(ascii 0)\"。"
    },
    {
      "id": 78,
      "type": "fill",
      "question": "字符串\"a\"占______个字节，字符'a'占______个字节。",
      "answer": "2、1",
      "explanation": "笔记：\"\"a\"---2B 'a'---1B\"。"
    },
    {
      "id": 79,
      "type": "fill",
      "question": "字符串的长度是指本身多长就是多长，但存储时占用的空间要______。",
      "answer": "加1",
      "explanation": "笔记：\"字符串长度：本身多长就是多长 字符串存储：要加1\"。"
    },
    {
      "id": 80,
      "type": "fill",
      "question": "使用______关键字可以定义只读变量，使变量的值不能发生改变。",
      "answer": "const",
      "explanation": "笔记：\"const 改变变量的性质，让变量的值不能发生改变\"。"
    },
    {
      "id": 81,
      "type": "fill",
      "question": "定义符号常量的命令是______。",
      "answer": "#define",
      "explanation": "笔记：\"定义符号常量的命令：#define 名称 值\"。"
    },
    {
      "id": 82,
      "type": "fill",
      "question": "变量是一段______。",
      "answer": "内存",
      "explanation": "笔记：\"变量：一段内存\"。"
    },
    {
      "id": 83,
      "type": "fill",
      "question": "数据类型决定了变量的______。",
      "answer": "大小",
      "explanation": "笔记：\"数据类型：决定了变量的大小\"。"
    },
    {
      "id": 84,
      "type": "fill",
      "question": "short类型占______字节，int占______字节，long long占______字节，char占______字节。",
      "answer": "2、4、8、1",
      "explanation": "笔记中的数据类型大小。"
    },
    {
      "id": 85,
      "type": "fill",
      "question": "float占______字节，double占______字节，long double占______字节。",
      "answer": "4、8、12",
      "explanation": "笔记中的数据类型大小。"
    },
    {
      "id": 86,
      "type": "fill",
      "question": "变量遵循先______后使用的原则。",
      "answer": "定义",
      "explanation": "笔记：\"变量遵循先定义后使用的原则\"。"
    },
    {
      "id": 87,
      "type": "fill",
      "question": "赋值运算符=的左边只能是______。",
      "answer": "变量",
      "explanation": "笔记：\"赋值：= 左边只能是变量\"。"
    },
    {
      "id": 88,
      "type": "choice",
      "question": "以下哪个变量定义是正确的？",
      "options": [
        "int a=b=1;",
        "int a=1,b=1;",
        "int a,b; a=b=1;",
        "B和C都正确"
      ],
      "answer": "D",
      "explanation": "笔记指出\"int a=b=1; 错误\"，B和C的写法均正确。"
    },
    {
      "id": 89,
      "type": "fill",
      "question": "typedef的作用是取______。",
      "answer": "别名",
      "explanation": "笔记：\"typedef 用来取别名的\"。"
    },
    {
      "id": 90,
      "type": "fill",
      "question": "数据占内存单元的大小由______决定，而不是由数值大小决定。",
      "answer": "数据类型",
      "explanation": "笔记原话。"
    },
    {
      "id": 91,
      "type": "fill",
      "question": "常量45默认的存放类型是______，占______个字节。",
      "answer": "int、4",
      "explanation": "笔记：\"45 --- int 4B\"。"
    },
    {
      "id": 92,
      "type": "fill",
      "question": "常量45L的类型是______，45LL的类型是______。",
      "answer": "long、long long",
      "explanation": "笔记中的对应关系。"
    },
    {
      "id": 93,
      "type": "fill",
      "question": "常量3.4f的类型是______，3.4L的类型是______。",
      "answer": "float、long double",
      "explanation": "笔记：\"3.4f--- float 4B\"、\"3.4L --- long double 12B\"。"
    },
    {
      "id": 94,
      "type": "fill",
      "question": "void空类型占______个字节。",
      "answer": "0",
      "explanation": "笔记：\"void 空类型 0B\"。"
    },
    {
      "id": 95,
      "type": "fill",
      "question": "C语言的逻辑类型用______关键字定义。",
      "answer": "_Bool",
      "explanation": "笔记：\"_Bool num,ch1,fv1;\"。"
    },
    {
      "id": 96,
      "type": "fill",
      "question": "在_Bool类型中，非0值为______，0值为______。",
      "answer": "真（1）、假（0）",
      "explanation": "笔记：\"非0值为真 0值为假\"，布尔变量最终得到逻辑值1或0。"
    },
    {
      "id": 97,
      "type": "fill",
      "question": "sizeof运算符的作用是查看______的大小。",
      "answer": "类型（或数据值/数据类型）",
      "explanation": "笔记：\"sizeof(数据类型) sizeof 数据值 查看类型的大小\"。"
    },
    {
      "id": 98,
      "type": "fill",
      "question": "sizeof(3.14)的结果是______，因为3.14默认是______类型。",
      "answer": "8、double",
      "explanation": "笔记：\"sizeof 3.14 // 3.14 double 8B\"。"
    },
    {
      "id": 99,
      "type": "fill",
      "question": "sizeof(34ll)的结果是______。",
      "answer": "8",
      "explanation": "笔记：\"sizeof 34ll; // 34ll long long 8B\"。"
    },
    {
      "id": 100,
      "type": "fill",
      "question": "16!的计算结果是______，它超过了32位整数的最大值，必须用______位整数类型存放。",
      "answer": "20922789888000、64",
      "explanation": "笔记中的计算和说明。"
    },
    {
      "id": 101,
      "type": "judge",
      "question": "32位int类型可以直接正确存放16!的值而不会溢出。",
      "answer": false,
      "explanation": "笔记：\"这个数值超过了32位整数的最大值...32位类型会直接溢出\"。"
    },
    {
      "id": 102,
      "type": "fill",
      "question": "实参传递给形参时，传递的是实参的______。",
      "answer": "值",
      "explanation": "笔记：\"将实参的值一一传递给形参\"。"
    },
    {
      "id": 103,
      "type": "fill",
      "question": "系统函数是通过______的形式直接使用的。",
      "answer": "调用",
      "explanation": "笔记：\"系统函数：通过调用的形式直接用\"。"
    },
    {
      "id": 104,
      "type": "choice",
      "question": "在C语言中，下列自定义标识符合法的是",
      "options": [
        "5la",
        "a!3",
        "_a2",
        "char"
      ],
      "answer": "C",
      "explanation": "C语言标识符规则：以字母或下划线开头，由字母、数字、下划线组成，不能是关键字。\n   A以数字开头不合法；B含特殊字符!不合法；D是关键字不合法。"
    },
    {
      "id": 105,
      "type": "choice",
      "question": "在C语言中，若int a=2,b=1;执行语句a=a+b;b=a-b;a=a-b;后，则变量a的值为",
      "options": [
        "1",
        "1.5",
        "2",
        "21"
      ],
      "answer": "A",
      "explanation": "执行过程：\n    a = a + b = 2 + 1 = 3\n    b = a - b = 3 - 1 = 2\n    a = a - b = 3 - 2 = 1\n    最终a的值为1。这是不借助临时变量交换两数的方法。"
    },
    {
      "id": 106,
      "type": "choice",
      "question": "在C语言中，下列关于switch语句描述正确的是",
      "options": [
        "case之后可以使用浮点型常量表达式",
        "default标号可以省略",
        "每个分支中都必须使用break作为结束语句",
        "允许多个case之后的常量值相同"
      ],
      "answer": "B",
      "explanation": "A错：case后必须是整型或字符型常量表达式；\n    B对：default标号可以省略；\n    C错：break不是必须的，没有break会顺序执行下一个case（穿透）；\n    D错：case后的常量值必须互不相同。"
    },
    {
      "id": 107,
      "type": "choice",
      "question": "在C语言中，若有语句int i;for(i=0;i<6;i++){i+=1;}，则该循环体执行的次数是",
      "options": [
        "1次",
        "2次",
        "3次",
        "4次"
      ],
      "answer": "C",
      "explanation": "执行过程：\n    第1次：i=0，执行循环体后i=1，再执行i++变为2\n    第2次：i=2，执行循环体后i=3，再执行i++变为4\n    第3次：i=4，执行循环体后i=5，再执行i++变为6\n    第4次：i=6，不满足i<6，循环结束。共执行3次。"
    },
    {
      "id": 108,
      "type": "choice",
      "question": "在C语言中，若有语句int a[5]={1,2,3};则下列选项正确的是",
      "options": [
        "数组a中共有三个元素，其值分别为1、2和3。",
        "数组a前三个元素值分别为1、2和3，后两个元素值为0",
        "数组a前三个元素值分别为1、2和3，后两个元素值为1",
        "数组a前三个元素值分别为1、2和3，后两个元素值为任意值"
      ],
      "answer": "B",
      "explanation": "定义int a[5]={1,2,3};时，数组有5个元素，前3个初始化为1、2、3，\n    剩余未显式初始化的元素自动初始化为0。"
    },
    {
      "id": 109,
      "type": "choice",
      "question": "在C语言中，下列关于函数定义描述正确的是",
      "options": [
        "同一个程序文件中，函数名可以重复",
        "函数必须有形参",
        "函数名后的小括号()可以省略",
        "函数体必须用花括号{ }括起来"
      ],
      "answer": "D",
      "explanation": "A错：函数名不能重复；\n    B错：函数可以没有形参（如void fun(void)或void fun()）；\n    C错：函数名后必须有()；\n    D对：函数体必须用{}括起来，即使只有一条语句。"
    },
    {
      "id": 110,
      "type": "judge",
      "question": "在C语言中，if语句必须与else语句配对使用。",
      "answer": false,
      "explanation": "if语句可以单独使用，不需要else分支。else是可选的。"
    },
    {
      "id": 111,
      "type": "judge",
      "question": "在C语言中，语句int x[]={4,5,6};能定义数组x。",
      "answer": true,
      "explanation": "定义数组时可以省略长度，编译器会根据初始化列表中的元素个数自动确定数组长度（此处为3）。"
    },
    {
      "id": 112,
      "type": "judge",
      "question": "在C语言中，不同函数内可以定义相同的变量名称。",
      "answer": true,
      "explanation": "局部变量的作用域仅限于定义它的函数内部，不同函数中的同名局部变量互不影响。"
    },
    {
      "id": 113,
      "type": "fill",
      "question": "在C语言中，函数由函数头和______组成。",
      "answer": "函数体",
      "explanation": "C语言函数由函数头（返回值类型、函数名、参数列表）和函数体（花括号内的语句块）两部分组成。"
    },
    {
      "id": 114,
      "type": "fill",
      "question": "在C语言中，若有int a=3;则执行语句a+=a*a;后，a的值是______。",
      "answer": "12",
      "explanation": "a += a*a 等价于 a = a + a*a = 3 + 3*3 = 3 + 9 = 12。"
    },
    {
      "id": 115,
      "type": "fill",
      "question": "在C语言中，顺序结构的每条语句必须执行且只能执行______次。",
      "answer": "1（或一）",
      "explanation": "顺序结构中，语句按照书写顺序依次执行，每条语句执行一次。"
    },
    {
      "id": 116,
      "type": "fill",
      "question": "在C语言中，提前结束本次循环，进入下一次循环的关键字是______。",
      "answer": "continue",
      "explanation": "continue语句用于跳过循环体中剩余的语句，立即进入下一次循环条件判断。"
    },
    {
      "id": 117,
      "type": "fill",
      "question": "在C语言中，如有语句char x[10]=\"abc\";则x[3]的值是______。",
      "answer": "'\\0'（或0）",
      "explanation": "字符串\"abc\"在内存中存储为'a','b','c','\\0'，x[3]即第4个元素是字符串结束标志'\\0'（ASCII值为0）。"
    },
    {
      "id": 118,
      "type": "fill",
      "question": "从用户使用的角度，C语言函数分为______和自定义函数两大类。",
      "answer": "库函数（或标准函数/系统函数）",
      "explanation": "C语言函数分为库函数（由系统提供，如printf、scanf等）和自定义函数（由程序员编写）两大类。"
    },
    {
      "id": 119,
      "type": "fill",
      "question": "编程实现：根据如下分段数学函数f(x)的定义，完善程序代码。\n⎧ 0          (x ≤ 0)\n         ⎪ x          (0 < x < 50)\n    f(x)=⎨ 2x²-1      (50 ≤ x < 100)\n         ⎪ x³-2       (100 ≤ x < 1024)\n         ⎩ 1          (x ≥ 1024)\n\n    #include <stdio.h>\n    int main()\n    {\n        int x, y;\n        scanf(\"%d\", &x);\n        if (x <= 0)\n            y = 0;\n        else if (x < 50)\n            y = x;\n        else if (______①______)\n            y = 2 * x * x - 1;\n        else if (x < 1024)\n            y = ______②______;\n        else\n            y = 1;\n        printf(\"%d\", y);\n        return 0;\n    }",
      "answer": "① x < 100（或50 <= x && x < 100） |     ② x*x*x - 2（或x*x*x-2）",
      "explanation": "① 前两个分支已处理x≤0和0<x<50的情况，此分支应对应50≤x<100，故条件为x<100（此时x已大于等于50）。\n    ② 对应100≤x<1024区间，函数值为x³-2，C语言中写作x*x*x-2。"
    },
    {
      "id": 120,
      "type": "fill",
      "question": "编程实现：反转数组中的元素。如数组x原始数据是{1,2,3,4,5,6,7,8,9,10}，反转后\n数组x的数据是{10,9,8,7,6,5,4,3,2,1}。\n\n    #include <stdio.h>\n    int main()\n    {\n        int x[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, i, temp;\n        for (i = 0; i < ______③______; i++)\n        {\n            temp = x[i];\n            ______④______;\n            x[9 - i] = temp;\n        }\n        printf(\"数组反转后: \");\n        for (i = 0; i < 10; i++)\n            printf(\"%d \", x[i]);\n        printf(\"\\n\");\n        return 0;\n    }",
      "answer": "③ 5（或10/2） |     ④ x[i] = x[9-i]",
      "explanation": "③ 数组有10个元素，只需交换前5个和后5个即可实现反转，所以循环条件是i<5（或i<10/2）。\n    ④ 将x[i]与x[9-i]交换：先将x[9-i]的值赋给x[i]。三行交换代码为：\n       temp = x[i]; x[i] = x[9-i]; x[9-i] = temp;"
    },
    {
      "id": 121,
      "type": "fill",
      "question": "#include <stdio.h>\nint main()\n    {\n        int num, n;\n        int lenn = 0;\n        int pos = 0;\n        scanf(\"%d,%d\", &num, &n);\n        while (num > 0)\n        {\n            lenn++;\n            if (num % 10 == n)\n                pos = lenn;\n            num = num / 10;\n        }\n        printf(\"%d,%d\", lenn, lenn - pos + 1);\n        return 0;\n    }\n\n    (1) 运行时输入1334,3后，程序的运行结果是：\n    (2) 运行时输入12345,4后，程序的运行结果是：",
      "answer": "(1) 4,2 |     (2) 5,4",
      "explanation": "该程序功能是：统计整数的位数(lenn)，并找出数字n从右往左数的位置(pos)，\n    最后输出位数和从左边数的位置(lenn-pos+1)。\n\n    (1) 输入1334,3：\n        num=1334, n=3\n        第1轮: lenn=1, 4≠3, num=133\n        第2轮: lenn=2, 3==3, pos=2, num=13\n        第3轮: lenn=3, 3==3, pos=3, num=1\n        第4轮: lenn=4, 1≠3, num=0\n        输出: lenn=4, lenn-pos+1=4-3+1=2 → 结果为\"4,2\"\n\n    (2) 输入12345,4：\n        num=12345, n=4\n        第1轮: lenn=1, 5≠4, num=1234\n        第2轮: lenn=2, 4==4, pos=2, num=123\n        第3轮: lenn=3, 3≠4, num=12\n        第4轮: lenn=4, 2≠4, num=1\n        第5轮: lenn=5, 1≠4, num=0\n        输出: lenn=5, lenn-pos+1=5-2+1=4 → 结果为\"5,4\""
    },
    {
      "id": 122,
      "type": "fill",
      "question": "#include <stdio.h>\nint func(int n)\n    {\n        int a = 1, b = 1, c, i;\n        if (n < 3)\n            return 1;\n        else\n        {\n            for (i = 2; i < n; i++)\n            {\n                c = a + b;\n                a = b;\n                b = c;\n            }\n            return c;\n        }\n    }\n    int main()\n    {\n        int n;\n        scanf(\"%d\", &n);\n        printf(\"%d\", func(n));\n        return 0;\n    }\n\n    (1) 运行时输入2，结果是：\n    (2) 运行时输入5，结果是：",
      "answer": "(1) 1 |     (2) 5",
      "explanation": "该程序用迭代法计算斐波那契数列。数列规律：1, 1, 2, 3, 5, 8, 13...\n    - func(1): n<3, 返回1\n    - func(2): n<3, 返回1\n    - func(3): i=2, c=1+1=2, 返回2\n    - func(4): i=2, c=2; i=3, c=1+2=3, 返回3\n    - func(5): i=2, c=2; i=3, c=3; i=4, c=2+3=5, 返回5"
    }
  ]
};
