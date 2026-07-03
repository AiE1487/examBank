// Auto-generated from mysql.json - DO NOT EDIT
var EXAM_DATA = {
  "subject": "MySQL数据库",
  "code": "mysql",
  "description": "中等职业教育MySQL数据库应用自测题库",
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "question": "下列不属于客观世界对象的是",
      "options": ["超市商品", "一次进货业务", "数字 12.5", "供货商"],
      "answer": "C",
      "explanation": "客观世界对象是指现实世界中可独立存在、可被标识的事物。超市商品、进货业务、供货商都是客观实体或事件，而\"数字 12.5\"只是数据值，是对客观事物属性的描述，本身不是对象。"
    },
    {
      "id": 2,
      "type": "choice",
      "question": "完整的数据描述格式为（属性名，数据值），其中 19.9 单独写出来属于",
      "options": ["信息", "纯数据", "语义", "对象"],
      "answer": "B",
      "explanation": "单独的数据值没有属性名赋予语义，属于\"纯数据\"。信息是赋予语义的数据（如\"价格：19.9 元\"），纯数据本身没有明确含义。"
    },
    {
      "id": 3,
      "type": "choice",
      "question": "数据管理技术发展阶段中，程序与数据依赖性最强的是",
      "options": ["人工管理", "文件管理", "数据库管理", "分布式管理"],
      "answer": "A",
      "explanation": "人工管理阶段数据由程序员直接管理，数据与程序紧密绑定，依赖性最强。文件管理阶段数据可独立存储，数据库管理阶段实现了数据与程序的高度独立。"
    },
    {
      "id": 4,
      "type": "choice",
      "question": "DB 的中文全称是",
      "options": ["数据库管理系统", "数据库", "数据库系统", "数据库管理员"],
      "answer": "B",
      "explanation": "DB（Database）= 数据库；DBMS = 数据库管理系统；DBS = 数据库系统；DBA = 数据库管理员。"
    },
    {
      "id": 5,
      "type": "choice",
      "question": "下列不属于 E-R 图三大基础元素的是",
      "options": ["实体矩形", "属性椭圆", "联系菱形", "函数依赖线段"],
      "answer": "D",
      "explanation": "E-R 图三大基础元素：实体（矩形）、属性（椭圆）、联系（菱形）。函数依赖线段是关系规范化理论中的概念，不是 E-R 图基本元素。"
    },
    {
      "id": 6,
      "type": "choice",
      "question": "超市会员与会员购物记录之间的实体联系类型是",
      "options": ["1:1", "1:n", "m:n", "无联系"],
      "answer": "B",
      "explanation": "一个会员可有多条购物记录，但一条记录只属于一个会员，因此是一对多（1:n）关系。"
    },
    {
      "id": 7,
      "type": "choice",
      "question": "下列符合关系二维表原子性要求的表格是",
      "options": ["电话列分移动、固定两小格", "一列只存放单一不可拆分数据", "同一行两条相同顾客记录", "表内存在同名字段"],
      "answer": "B",
      "explanation": "原子性（第一范式）要求每个属性值都是不可再分的最小数据单位。选项 A 违反原子性；C 的重复记录和 D 的同名字段都不符合关系表规范。"
    },
    {
      "id": 8,
      "type": "choice",
      "question": "用来唯一标识一条记录的属性或属性组称为",
      "options": ["域", "码", "元组", "分量"],
      "answer": "B",
      "explanation": "码（Key）是唯一标识记录的属性或属性组。域是取值范围；元组是一行记录；分量是元组中的一个属性值。"
    },
    {
      "id": 9,
      "type": "choice",
      "question": "一张表的主键在另一张表中出现，该属性称为",
      "options": ["主键", "候选键", "外键", "域"],
      "answer": "C",
      "explanation": "外键（Foreign Key）是一个表中的属性，它是另一个表的主键，用于建立表间关联关系。"
    },
    {
      "id": 10,
      "type": "choice",
      "question": "MySQL 8.0 及以上版本默认存储引擎是",
      "options": ["MyISAM", "InnoDB", "Memory", "CSV"],
      "answer": "B",
      "explanation": "MySQL 5.5 之前默认是 MyISAM，从 5.5 开始改为 InnoDB，8.0 及以上继续沿用 InnoDB。InnoDB 支持事务、外键、行级锁等高级特性。"
    },
    {
      "id": 11,
      "type": "choice",
      "question": "下列存储引擎支持事务、外键约束的是",
      "options": ["MyISAM", "InnoDB", "Memory", "Archive"],
      "answer": "B",
      "explanation": "InnoDB 是唯一支持事务（ACID）和外键约束的存储引擎。MyISAM、Memory、Archive 均不支持事务和外键。"
    },
    {
      "id": 12,
      "type": "choice",
      "question": "MySQL 服务默认端口号为",
      "options": ["80", "22", "33060", "3306"],
      "answer": "D",
      "explanation": "MySQL 默认端口是 3306。80 是 HTTP 端口；22 是 SSH 端口；33060 是 MySQL X Protocol 端口。"
    },
    {
      "id": 13,
      "type": "choice",
      "question": "MySQL 超级管理员默认账号是",
      "options": ["admin", "root", "sa", "user"],
      "answer": "B",
      "explanation": "MySQL 默认超级管理员是 root。admin 是通用管理员名；sa 是 SQL Server 的系统管理员；user 不是默认管理员。"
    },
    {
      "id": 14,
      "type": "choice",
      "question": "MySQL 配置文件中服务端配置段是",
      "options": ["[client]", "[mysql]", "[mysqld]", "[server]"],
      "answer": "C",
      "explanation": "[mysqld] 是服务端配置段。[client] 是客户端配置段，[mysql] 是命令行客户端配置段。"
    },
    {
      "id": 15,
      "type": "choice",
      "question": "存储手机号（11 位固定数字）最优数据类型是",
      "options": ["int", "char(11)", "varchar(11)", "decimal"],
      "answer": "B",
      "explanation": "手机号是固定长度数字字符串，char(11) 最合适：① 长度固定，char 比 varchar 效率高；② 不做数学运算，不用 int/decimal；③ 可能以 0 开头，数值类型会丢失前导零。"
    },
    {
      "id": 16,
      "type": "choice",
      "question": "记录商品进货精确价格，避免浮点误差应选用",
      "options": ["float", "double", "decimal(6,2)", "int"],
      "answer": "C",
      "explanation": "decimal（定点数）存储精确小数，无浮点误差。float/double 有精度误差；int 只能存整数。decimal(6,2) 表示共 6 位，小数 2 位。"
    },
    {
      "id": 17,
      "type": "choice",
      "question": "只记录年份信息，应使用的数据类型",
      "options": ["date", "year", "datetime", "timestamp"],
      "answer": "B",
      "explanation": "year 类型专门存储年份，占 1 字节，范围 1901~2155。date 存年月日；datetime 存日期时间；timestamp 存时间戳。仅需年份时 year 最省空间。"
    },
    {
      "id": 18,
      "type": "choice",
      "question": "用于查询表结构的 MySQL 命令是",
      "options": ["desc 表名", "show databases", "drop table", "create database"],
      "answer": "A",
      "explanation": "`desc 表名`（或 `describe 表名`）查看表结构，包括字段名、数据类型、是否为空、键信息等。"
    },
    {
      "id": 19,
      "type": "choice",
      "question": "提升数据表查询速度的数据库对象是",
      "options": ["视图", "索引", "触发器", "存储过程"],
      "answer": "B",
      "explanation": "索引通过创建 B+ 树等数据结构，快速定位满足条件的记录，提升查询速度。视图是虚拟表；触发器是自动执行程序；存储过程是预编译 SQL 集合。"
    },
    {
      "id": 20,
      "type": "choice",
      "question": "下列 SQL 命令用于向表插入数据的是",
      "options": ["update", "insert", "delete", "alter"],
      "answer": "B",
      "explanation": "insert 用于插入新数据。update 更新数据；delete 删除数据；alter 修改表结构。"
    },
    {
      "id": 21,
      "type": "fill",
      "question": "从现实世界到意识世界的抽象将使用的数据模型是（ ）",
      "answer": "C",
      "explanation": "**概念数据模型**（如E-R模型）用于从现实世界到信息世界的抽象，不依赖具体计算机系统。"
    },
    {
      "id": 22,
      "type": "fill",
      "question": "在数据库系统设计中，设计的核心是（ ）",
      "answer": "B",
      "explanation": "**模式（Schema）** 是数据库中全体数据的逻辑结构和特征的描述，是数据库设计的核心。"
    },
    {
      "id": 23,
      "type": "fill",
      "question": "下列关于数据的说法，正确的是（ ）",
      "answer": "A",
      "explanation": "数据是描述事物的符号记录，一切符号记录都可称为数据。B错误：数据≠信息；C错误：数据不限于数字；D错误：图像、声音、视频都是数据。"
    },
    {
      "id": 24,
      "type": "fill",
      "question": "数据管理技术中，对程序和数据依赖性最强的是（ ）",
      "answer": "C",
      "explanation": "**人工管理阶段** 数据由程序管理，数据不独立，程序与数据高度耦合。"
    },
    {
      "id": 25,
      "type": "fill",
      "question": "数据库系统的英文简称是（ ）",
      "answer": "D",
      "explanation": "**DBS**（Database System）。DB=数据库，DBA=数据库管理员，DBMS=数据库管理系统。"
    },
    {
      "id": 26,
      "type": "fill",
      "question": "使用二维表作为数据结构的数据模型是（ ）",
      "answer": "A",
      "explanation": "**关系数据模型** 用二维表（关系）表示数据及其联系。"
    },
    {
      "id": 27,
      "type": "fill",
      "question": "下列关于二维表和关系的说法，不正确的是（ ）",
      "answer": "B",
      "explanation": "关系是规范的二维表，但并非所有二维表都是关系。关系要求：列不可再分、列名唯一、行唯一、行/列无序。"
    },
    {
      "id": 28,
      "type": "fill",
      "question": "下列关于主键和主属性的说法，正确的是（ ）",
      "answer": "A",
      "explanation": "一个关系只能有一个主键（但可由多个属性组成复合主键）。B错误：主键可由多个属性组成；C错误：主属性是候选键的属性，不一定是主键属性；D错误：主键可以是复合属性。"
    },
    {
      "id": 29,
      "type": "fill",
      "question": "保证关系表中记录唯一性的是（ ）",
      "answer": "C",
      "explanation": "**实体完整性** 要求主键不能为空且唯一，保证记录唯一性。"
    },
    {
      "id": 30,
      "type": "fill",
      "question": "下列不是MySQL特性的是（ ）",
      "answer": "B",
      "explanation": "MySQL是开源、跨平台、成本低、易使用的数据库。\"难以使用\"不是其特性。"
    },
    {
      "id": 31,
      "type": "fill",
      "question": "下列不能跨平台工作的数据库管理系统是（ ）",
      "answer": "B",
      "explanation": "**SQL Server** 主要运行在Windows平台（虽有Linux版本但原生支持较弱）。MySQL、Oracle、PostgreSQL均跨平台。"
    },
    {
      "id": 32,
      "type": "fill",
      "question": "数据表仅存储在内存中的存储引擎是（ ）",
      "answer": "D",
      "explanation": "**Memory** 引擎将数据存储在内存中，速度快但重启后数据丢失。"
    },
    {
      "id": 33,
      "type": "fill",
      "question": "在生产环境使用MySQL，最好选择的版本是（ ）",
      "answer": "A",
      "explanation": "**GA**（General Availability）是正式发布版，最稳定。Alpha是测试版，RC是候选版。"
    },
    {
      "id": 34,
      "type": "fill",
      "question": "下列存储引擎中，支持事务处理的是（ ）",
      "answer": "C",
      "explanation": "**InnoDB** 支持事务、行级锁、外键。MyISAM和Memory不支持事务。"
    },
    {
      "id": 35,
      "type": "fill",
      "question": "配置MySQL默认存储引擎的配置项是（ ）",
      "answer": "C",
      "explanation": "`default-storage-engine` 用于设置默认存储引擎。"
    },
    {
      "id": 36,
      "type": "fill",
      "question": "下列关于MySQL的说法，不正确的是（ ）",
      "answer": "D",
      "explanation": "MySQL是跨平台的开源系统，可在Windows、Linux、Mac等系统运行。"
    },
    {
      "id": 37,
      "type": "fill",
      "question": "MySQL提供网络服务的默认端口是（ ）",
      "answer": "A",
      "explanation": "**3306** 是MySQL默认端口。1433是SQL Server，1521是Oracle。"
    },
    {
      "id": 38,
      "type": "fill",
      "question": "安装MySQL时自动创建的数据库管理员账号是（ ）",
      "answer": "B",
      "explanation": "**root** 是MySQL默认超级管理员账号。"
    },
    {
      "id": 39,
      "type": "fill",
      "question": "MySQL命令行客户端工具是（ ）",
      "answer": "B",
      "explanation": "**mysql** 是命令行客户端。mysqld是服务器进程，mysqladmin是管理工具，mysqldump是备份工具。"
    },
    {
      "id": 40,
      "type": "fill",
      "question": "下列用于配置MySQL安装目录的配置选项是（ ）",
      "answer": "B",
      "explanation": "`basedir` 指定MySQL安装目录，`datadir` 指定数据目录。"
    },
    {
      "id": 41,
      "type": "fill",
      "question": "包含MySQL最新特性的版本是（ ）",
      "answer": "C",
      "explanation": "**Alpha** 版包含最新特性但稳定性差，用于测试。GA版最稳定。"
    },
    {
      "id": 42,
      "type": "fill",
      "question": "Linux版本MySQL安装包中表示32位的标志是（ ）",
      "answer": "A",
      "explanation": "**i686** 表示32位x86架构。X86_64是64位。"
    },
    {
      "id": 43,
      "type": "fill",
      "question": "在MySQL客户端中，命令的结束符是（ ）",
      "answer": "D",
      "explanation": "**分号（;）** 是SQL语句结束符。"
    },
    {
      "id": 44,
      "type": "fill",
      "question": "下列用于配置MySQL客户端特性的配置节是（ ）",
      "answer": "C",
      "explanation": "`[client]` 节配置客户端通用选项，`[mysql]` 节配置特定客户端。"
    },
    {
      "id": 45,
      "type": "fill",
      "question": "下列缩写是数据库系统的是（ ）",
      "answer": "B",
      "explanation": "**DBS**（Database System）。"
    },
    {
      "id": 46,
      "type": "fill",
      "question": "在SQL语言中，用于实现数据访问控制的是（ ）",
      "answer": "D",
      "explanation": "**DCL**（Data Control Language，数据控制语言）包括GRANT、REVOKE等权限控制语句。DQL=查询，DML=操纵，DDL=定义。"
    },
    {
      "id": 47,
      "type": "fill",
      "question": "与计算机硬件有关的数据模型是（ ）",
      "answer": "B",
      "explanation": "**物理数据模型** 描述数据在存储介质上的物理结构和存取方法。"
    },
    {
      "id": 48,
      "type": "fill",
      "question": "下列属于概念设计的是（ ）",
      "answer": "B",
      "explanation": "**画E-R图** 是概念设计阶段的主要工作。数据流图是需求分析，数据字典是系统设计，生成数据模式是逻辑设计。"
    },
    {
      "id": 49,
      "type": "fill",
      "question": "当前大数据的数量级一般在（ ）",
      "answer": "D",
      "explanation": "**PB**（Petabyte，拍字节）。大数据通常指PB级及以上的数据量。"
    },
    {
      "id": 50,
      "type": "fill",
      "question": "下列不是MySQL分支的是（ ）",
      "answer": "D",
      "explanation": "**PostgreSQL** 是独立的数据库系统，不是MySQL分支。MariaDB、Drizzle、Percona都是MySQL分支。"
    },
    {
      "id": 51,
      "type": "fill",
      "question": "MySQL的图形客户端是（ ）",
      "answer": "D",
      "explanation": "**MySQL Workbench** 是官方图形客户端。Navicat、SQLyog、phpMyAdmin也是图形客户端，但题目可能侧重官方工具。"
    },
    {
      "id": 52,
      "type": "fill",
      "question": "MySQL安装文件夹中，存储数据库相关管理程序的子文件夹是（ ）",
      "answer": "A",
      "explanation": "**bin** 目录存放可执行程序（如mysql、mysqld等）。"
    },
    {
      "id": 53,
      "type": "fill",
      "question": "下列为MySQL命令行客户端工具的是（ ）",
      "answer": "B",
      "explanation": "**mysql** 是命令行客户端工具。"
    },
    {
      "id": 54,
      "type": "fill",
      "question": "MySQL客户端输入语句的默认结束符是（ ）",
      "answer": "D",
      "explanation": "**分号（;）**"
    },
    {
      "id": 55,
      "type": "fill",
      "question": "在MySQL客户程序中，用于指定服务端口的参数是（ ）",
      "answer": "D",
      "explanation": "**-P**（大写P）指定端口。-p（小写）指定密码，-u指定用户，-h指定主机。"
    },
    {
      "id": 56,
      "type": "judge",
      "question": "图像、音频、视频都属于数据的表现形式。",
      "answer": true,
      "explanation": "数据表现形式包括文本、数字、图像、音频、视频等，都可被计算机存储和处理。"
    },
    {
      "id": 57,
      "type": "judge",
      "question": "信息是赋予语义的数据，单纯数字串不能直接称为信息。",
      "answer": true,
      "explanation": "数据是原始符号记录；信息是赋予语义的数据。如\"123\"是数据，\"温度123度\"才是信息。"
    },
    {
      "id": 58,
      "type": "judge",
      "question": "文件管理阶段的数据共享性远高于数据库管理阶段。",
      "answer": false,
      "explanation": "数据库管理阶段共享性远高于文件管理阶段。文件管理数据分散，共享困难；数据库管理集中管理，多用户多应用可共享。"
    },
    {
      "id": 59,
      "type": "judge",
      "question": "DBS 包含数据库、DBMS、应用程序、硬件、用户。",
      "answer": true,
      "explanation": "DBS（数据库系统）包括：数据库（DB）、数据库管理系统（DBMS）、应用程序、硬件、用户（DBA 和终端用户）。"
    },
    {
      "id": 60,
      "type": "judge",
      "question": "E-R 图中菱形代表实体，矩形代表联系。",
      "answer": false,
      "explanation": "矩形代表实体，菱形代表联系，椭圆代表属性。题目描述正好相反。"
    },
    {
      "id": 61,
      "type": "judge",
      "question": "多对多联系转换关系时需要单独建立一张联系表。",
      "answer": true,
      "explanation": "m:n 联系不能直接在两个实体表中用外键表示，需单独建立联系表（中间表），包含两实体主键作为外键。"
    },
    {
      "id": 62,
      "type": "judge",
      "question": "关系表允许两行完全相同的数据记录。",
      "answer": false,
      "explanation": "关系表中任意两行不能完全相同，这是关系模型基本要求。完全相同则无法唯一区分，违反实体唯一性。"
    },
    {
      "id": 63,
      "type": "judge",
      "question": "外键取值只能是主表主键已存在的值或 NULL。",
      "answer": true,
      "explanation": "外键值必须等于主表主键的某个已存在值（参照完整性），或为 NULL（若允许为空）。不能引用不存在的值。"
    },
    {
      "id": 64,
      "type": "judge",
      "question": "MySQL 是闭源商业数据库，需要付费使用。",
      "answer": false,
      "explanation": "MySQL 是开源数据库，社区版采用 GPL 协议免费使用。虽有商业版需付费，但社区版开源免费。"
    },
    {
      "id": 65,
      "type": "judge",
      "question": "Memory 引擎数据表关机后内存数据全部丢失。",
      "answer": true,
      "explanation": "Memory 引擎将数据存于内存，读写极快，但数据不持久化到磁盘，关机或重启后数据全部丢失。"
    },
    {
      "id": 66,
      "type": "judge",
      "question": "MyISAM 数据表在磁盘存储分为 frm、MYD、MYI 三个文件。",
      "answer": true,
      "explanation": "MyISAM 每个表对应三个文件：.frm（结构定义）、.MYD（数据）、.MYI（索引）。"
    },
    {
      "id": 67,
      "type": "judge",
      "question": "MySQL 安装目录下 bin 文件夹存放服务与客户端工具。",
      "answer": true,
      "explanation": "bin 文件夹存放可执行文件，包括服务端程序（mysqld.exe）和客户端工具（mysql.exe 等）。"
    },
    {
      "id": 68,
      "type": "judge",
      "question": "varchar 类型存储时会自动补齐尾部空格。",
      "answer": false,
      "explanation": "char 类型会补齐尾部空格达到固定长度；varchar 是变长字符串，不自动补齐尾部空格，只存实际内容。"
    },
    {
      "id": 69,
      "type": "judge",
      "question": "datetime 类型存储会随时区自动转换时间。",
      "answer": false,
      "explanation": "datetime 存储固定时间值，不随时区转换。timestamp 才会随时区自动转换。datetime 存字面时间值；timestamp 存从 1970-01-01 开始的秒数，按客户端时区转换。"
    },
    {
      "id": 70,
      "type": "judge",
      "question": "create database 可以创建同名数据库。",
      "answer": false,
      "explanation": "create database 不能创建同名数据库，已存在会报错。可用 `create database if not exists` 避免报错。"
    },
    {
      "id": 71,
      "type": "judge",
      "question": "use 关键字用于切换当前操作的数据库。",
      "answer": true,
      "explanation": "`use 数据库名` 切换当前操作数据库，执行后后续操作都在该数据库上进行。"
    },
    {
      "id": 72,
      "type": "judge",
      "question": "alter table 可以实现新增、删除数据表字段。",
      "answer": true,
      "explanation": "alter table 修改表结构，可实现新增字段（add）、删除字段（drop）、修改字段（modify/change）等。"
    },
    {
      "id": 73,
      "type": "judge",
      "question": "update 更新记录时不能省略 where 条件。",
      "answer": false,
      "explanation": "update 可以省略 where 条件，但会更新所有记录。语法上允许，但安全角度不建议省略。"
    },
    {
      "id": 74,
      "type": "judge",
      "question": "主键会自动生成主键索引。",
      "answer": true,
      "explanation": "MySQL 中定义主键时自动创建主键索引（聚集索引），保证主键唯一性并提高按主键查询效率。"
    },
    {
      "id": 75,
      "type": "judge",
      "question": "drop index 语句可以删除数据表普通索引。",
      "answer": true,
      "explanation": "`drop index 索引名 on 表名` 可删除普通索引。但不能直接删除主键索引（需先取消主键约束）。"
    },
    {
      "id": 76,
      "type": "judge",
      "question": "只有数字才能表示数据。",
      "answer": false,
      "explanation": "数据可以是数字、文字、图像、声音、视频等各种符号记录。"
    },
    {
      "id": 77,
      "type": "judge",
      "question": "数据库是操作系统管理的数据文件。",
      "answer": false,
      "explanation": "数据库由DBMS管理，不是操作系统直接管理。"
    },
    {
      "id": 78,
      "type": "judge",
      "question": "数据模型就是数据类型。",
      "answer": false,
      "explanation": "数据模型是对现实世界数据特征的抽象描述，包括数据结构、操作和约束；数据类型只是数据模型的一部分。"
    },
    {
      "id": 79,
      "type": "judge",
      "question": "实体之间的联系也可称为实体。",
      "answer": true,
      "explanation": "在E-R模型中，联系（Relationship）可以抽象为一种特殊的实体。"
    },
    {
      "id": 80,
      "type": "judge",
      "question": "一个实体集中可以有多个键，但主键只有一个。",
      "answer": true,
      "explanation": "一个关系可以有多个候选键，但只能选一个作为主键。"
    },
    {
      "id": 81,
      "type": "judge",
      "question": "数据就是信息。",
      "answer": false,
      "explanation": "数据是信息的载体，信息是数据的内涵；数据经过加工处理才成为信息。"
    },
    {
      "id": 82,
      "type": "judge",
      "question": "数据处理就是对数据进行运算。",
      "answer": false,
      "explanation": "数据处理包括收集、存储、分类、排序、检索、传输等，运算只是其中一部分。"
    },
    {
      "id": 83,
      "type": "judge",
      "question": "逻辑数据模型是数据库设计人员与用户交流的工具。",
      "answer": false,
      "explanation": "**概念数据模型**（E-R图）才是设计人员与用户交流的工具；逻辑数据模型面向计算机系统。"
    },
    {
      "id": 84,
      "type": "judge",
      "question": "数据库设计的核心是设计逻辑数据模式。",
      "answer": true,
      "explanation": "逻辑设计（关系模式设计）是数据库设计的核心阶段。"
    },
    {
      "id": 85,
      "type": "judge",
      "question": "通过使用外模式实现了数据的逻辑独立性。",
      "answer": true,
      "explanation": "外模式/模式映像保证了逻辑独立性：模式改变时外模式可不变。"
    },
    {
      "id": 86,
      "type": "judge",
      "question": "关系表中的记录不能完全相同。",
      "answer": true,
      "explanation": "关系表要求行唯一（实体完整性），不能有完全相同的记录。"
    },
    {
      "id": 87,
      "type": "judge",
      "question": "一条记录是关系模式的一个\"值\"。",
      "answer": false,
      "explanation": "关系模式是型（结构），关系（表）是值；一条记录是关系的一个元组，不是关系模式的值。"
    },
    {
      "id": 88,
      "type": "judge",
      "question": "关系的主键不能为空值。",
      "answer": true,
      "explanation": "实体完整性要求主键非空且唯一。"
    },
    {
      "id": 89,
      "type": "judge",
      "question": "关系的键可以取空值。",
      "answer": false,
      "explanation": "主键不能取空值；候选键也不能取空值。"
    },
    {
      "id": 90,
      "type": "judge",
      "question": "外键的属性名必须与参照的主键属性同名。",
      "answer": false,
      "explanation": "外键与主键属性名可以不同，但域（数据类型）必须相同。"
    },
    {
      "id": 91,
      "type": "judge",
      "question": "关系描述一个实体集，记录描述一个实体。",
      "answer": true,
      "explanation": "关系（表）对应实体集，元组（记录）对应实体。"
    },
    {
      "id": 92,
      "type": "judge",
      "question": "关系模式是关系的\"数据类型\"。",
      "answer": true,
      "explanation": "关系模式是关系的型（结构描述），关系是值。"
    },
    {
      "id": 93,
      "type": "judge",
      "question": "触发器可用于实现用户完整性。",
      "answer": true,
      "explanation": "触发器可以实现复杂的用户自定义完整性约束。"
    },
    {
      "id": 94,
      "type": "judge",
      "question": "MySQL数据库管理系统是免费软件。",
      "answer": true,
      "explanation": "MySQL社区版是开源免费的（GPL协议）。"
    },
    {
      "id": 95,
      "type": "judge",
      "question": "存储引擎决定了DBMS的功能和性能。",
      "answer": true,
      "explanation": "不同存储引擎提供不同的功能和性能特性（如事务支持、锁机制等）。"
    },
    {
      "id": 96,
      "type": "judge",
      "question": "MySQL设置了默认存储引擎后，就只能用默认存储引擎。",
      "answer": false,
      "explanation": "创建表时可以指定其他存储引擎（ENGINE=InnoDB等）。"
    },
    {
      "id": 97,
      "type": "judge",
      "question": "MySQL不支持大数据处理。",
      "answer": false,
      "explanation": "MySQL支持大数据处理，可通过分库分表、集群等方式扩展。"
    },
    {
      "id": 98,
      "type": "judge",
      "question": "任何DBMS都支持可插入存储引擎。",
      "answer": false,
      "explanation": "可插拔存储引擎是MySQL的特性，不是所有DBMS都支持。"
    },
    {
      "id": 99,
      "type": "judge",
      "question": "安装MySQL时不能自主选择安装目录。",
      "answer": false,
      "explanation": "安装MySQL时可以自定义安装目录（basedir）。"
    },
    {
      "id": 100,
      "type": "judge",
      "question": "Root账号的密码为空时，不能管理数据库。",
      "answer": false,
      "explanation": "root密码为空时仍能登录管理（只是不安全）。"
    },
    {
      "id": 101,
      "type": "judge",
      "question": "MySQL的GA版是最稳定的版本。",
      "answer": true,
      "explanation": "GA（General Availability）是正式发布版，最稳定。"
    },
    {
      "id": 102,
      "type": "judge",
      "question": "data文件夹误删后，可以用资源管理器重新创建。",
      "answer": false,
      "explanation": "data文件夹包含系统数据库，误删后需重新初始化或恢复，不能简单重建。"
    },
    {
      "id": 103,
      "type": "judge",
      "question": "客户端与服务端设置的字符集不兼容时，会出现乱码。",
      "answer": true,
      "explanation": "字符集不一致会导致编码解码错误，产生乱码。"
    },
    {
      "id": 104,
      "type": "judge",
      "question": "MySQL的同一数据库只能使用一种存储引擎。",
      "answer": false,
      "explanation": "同一数据库的不同表可以使用不同存储引擎。"
    },
    {
      "id": 105,
      "type": "judge",
      "question": "MySQL没有配置文件也能正常工作。",
      "answer": true,
      "explanation": "MySQL有默认配置，没有my.cnf/my.ini也能使用默认参数启动。"
    },
    {
      "id": 106,
      "type": "fill",
      "question": "数据库系统三级模式：内模式、____、外模式。",
      "answer": "模式（或概念模式）",
      "explanation": "三级模式：内模式（存储模式，物理存储结构）、模式（概念模式，整体逻辑结构）、外模式（用户模式，用户数据视图）。"
    },
    {
      "id": 107,
      "type": "fill",
      "question": "E-R 图中矩形表示____，菱形表示实体间的联系。",
      "answer": "实体",
      "explanation": "矩形=实体，菱形=联系，椭圆=属性，线段=连接实体与属性/联系。"
    },
    {
      "id": 108,
      "type": "fill",
      "question": "实体完整性要求主键取值唯一且不允许为____。",
      "answer": "NULL（或空值）",
      "explanation": "实体完整性要求主键唯一且非 NULL。主键用于唯一标识记录，NULL 或重复则无法唯一标识。"
    },
    {
      "id": 109,
      "type": "fill",
      "question": "MySQL 数据库存储引擎____支持内存临时表，断电数据丢失。",
      "answer": "Memory",
      "explanation": "Memory 引擎（原 HEAP）将数据存于内存，读写极快，适合临时表。断电或重启后数据全部丢失。"
    },
    {
      "id": 110,
      "type": "fill",
      "question": "MySQL 登录客户端基础命令格式：mysql -u 用户名 ____ 密码。",
      "answer": "-p",
      "explanation": "`mysql -u 用户名 -p` 是标准登录格式，-p 表示需输入密码，执行后提示输入。也可写成 `-p密码`（无空格）。"
    },
    {
      "id": 111,
      "type": "fill",
      "question": "存储不固定长度商品名称优先选用数据类型____。",
      "answer": "varchar",
      "explanation": "不固定长度字符串用 varchar（变长字符串），只占用实际内容所需空间，比 char 更省空间。char 适合固定长度。"
    },
    {
      "id": 112,
      "type": "fill",
      "question": "创建新数据库使用 SQL 关键字____。",
      "answer": "create database",
      "explanation": "`create database 数据库名` 是创建数据库的标准 SQL 语句。"
    },
    {
      "id": 113,
      "type": "fill",
      "question": "删除整张数据表使用命令____ table 表名；",
      "answer": "drop",
      "explanation": "`drop table 表名` 删除整张表（结构和数据）。区别于 `delete from`（删数据留结构）和 `truncate`（清空数据留结构）。"
    },
    {
      "id": 114,
      "type": "fill",
      "question": "查看当前数据库全部数据表：show ____；",
      "answer": "tables",
      "explanation": "`show tables` 查看当前数据库所有表。`show databases` 查看所有数据库。"
    },
    {
      "id": 115,
      "type": "fill",
      "question": "索引主要作用是提升数据表____操作效率。",
      "answer": "查询",
      "explanation": "索引提升查询（select）效率，通过快速定位减少全表扫描。但会降低插入、更新、删除效率，因需维护索引结构。"
    },
    {
      "id": 116,
      "type": "fill",
      "question": "数据管理中的对象是现实世界中可区分的事物，即______。",
      "answer": "实体",
      "explanation": "数据管理中的对象是现实世界中可区分的事物，即实体。"
    },
    {
      "id": 117,
      "type": "fill",
      "question": "数据本身没有含义，______才能表达信息。",
      "answer": "数据与语义的结合",
      "explanation": "数据本身没有含义，结合语义才能表达信息。"
    },
    {
      "id": 118,
      "type": "fill",
      "question": "数据有值和______两个基本要素。",
      "answer": "类型",
      "explanation": "数据有值和类型两个基本要素。"
    },
    {
      "id": 119,
      "type": "fill",
      "question": "数据管理技术发展的三个阶段中，最后阶段是______阶段。",
      "answer": "数据库管理",
      "explanation": "数据管理技术三阶段：人工管理 → 文件管理 → 数据库管理。"
    },
    {
      "id": 120,
      "type": "fill",
      "question": "数据记录由描述对象______的值组成。",
      "answer": "属性值",
      "explanation": "数据记录由描述对象属性的值组成。"
    },
    {
      "id": 121,
      "type": "fill",
      "question": "______是从现实世界中抽取数据特征的过程。",
      "answer": "数据抽象",
      "explanation": "数据抽象是从现实世界中抽取数据特征的过程。"
    },
    {
      "id": 122,
      "type": "fill",
      "question": "数据模型的三要素是______。",
      "answer": "数据结构、数据操作、完整性约束",
      "explanation": "数据模型的三要素。"
    },
    {
      "id": 123,
      "type": "fill",
      "question": "传统三大逻辑数据模型包括______。",
      "answer": "层次、网状、关系",
      "explanation": "传统三大逻辑数据模型（还可加\"面向对象\"）。"
    },
    {
      "id": 124,
      "type": "fill",
      "question": "DBMS的中文全称是______。",
      "answer": "数据库管理系统",
      "explanation": "DBMS = Database Management System。"
    },
    {
      "id": 125,
      "type": "fill",
      "question": "键（Key）是指______。",
      "answer": "能唯一标识实体的属性或属性组",
      "explanation": "键（Key）的定义。"
    },
    {
      "id": 126,
      "type": "fill",
      "question": "实体间联系的三种基本类型是______。",
      "answer": "一对一、一对多、多对多",
      "explanation": "实体间联系的三种基本类型。"
    },
    {
      "id": 127,
      "type": "fill",
      "question": "数据库系统（DBS）的主要组成部分包括______。",
      "answer": "数据库、数据库管理系统、应用程序",
      "explanation": "数据库系统（DBS）的组成（还包括DBA和用户）。"
    },
    {
      "id": 128,
      "type": "fill",
      "question": "数据库设计的核心是设计______。",
      "answer": "逻辑数据模式",
      "explanation": "逻辑设计是数据库设计的核心。"
    },
    {
      "id": 129,
      "type": "fill",
      "question": "ANSI/SPARC数据库体系结构称为______，包括______。",
      "answer": "三级模式；外模式、模式、内模式",
      "explanation": "ANSI/SPARC数据库体系结构。"
    },
    {
      "id": 130,
      "type": "fill",
      "question": "三级模式两级映像实现了数据的______。",
      "answer": "逻辑与物理独立性",
      "explanation": "三级模式两级映像实现了逻辑独立性和物理独立性。"
    },
    {
      "id": 131,
      "type": "fill",
      "question": "关系在逻辑上可看作一个______。",
      "answer": "二维表",
      "explanation": "关系从逻辑上看是一个二维表。"
    },
    {
      "id": 132,
      "type": "fill",
      "question": "关系表中______，即属性名必须唯一。",
      "answer": "列名不可同名",
      "explanation": "关系表中列名（属性名）必须唯一。"
    },
    {
      "id": 133,
      "type": "fill",
      "question": "关系中的一行称为______。",
      "answer": "元组",
      "explanation": "关系中的一行称为元组（Tuple）。"
    },
    {
      "id": 134,
      "type": "fill",
      "question": "关系表中的列也称为______。",
      "answer": "字段",
      "explanation": "列也称为字段（Field）或属性。"
    },
    {
      "id": 135,
      "type": "fill",
      "question": "关系表中的字段对应实体的______。",
      "answer": "属性",
      "explanation": "字段对应实体的属性。"
    },
    {
      "id": 136,
      "type": "fill",
      "question": "候选键是指能唯一标识一个元组的______。",
      "answer": "属性或属性组",
      "explanation": "候选键（Candidate Key）的定义。"
    },
    {
      "id": 137,
      "type": "fill",
      "question": "引用其他表主键的属性称为______。",
      "answer": "外键",
      "explanation": "外键（Foreign Key）是引用其他表主键的属性。"
    },
    {
      "id": 138,
      "type": "fill",
      "question": "______描述了关系的结构。",
      "answer": "关系数据类型",
      "explanation": "关系模式描述了关系的结构（型）。"
    },
    {
      "id": 139,
      "type": "fill",
      "question": "关系代数的三种基本操作是______。",
      "answer": "选择、投影、连接",
      "explanation": "关系代数的基本操作。"
    },
    {
      "id": 140,
      "type": "fill",
      "question": "关系数据库的标准语言是______，其功能包括______。",
      "answer": "SQL；数据定义、数据操纵、数据控制",
      "explanation": "SQL的功能分类。"
    },
    {
      "id": 141,
      "type": "fill",
      "question": "关系模型的完整性约束包括______。",
      "answer": "实体完整性、参照完整性、用户定义完整性",
      "explanation": "关系完整性的三个方面。"
    },
    {
      "id": 142,
      "type": "fill",
      "question": "字段约束的常见类型有______约束。",
      "answer": "非空、唯一、检查",
      "explanation": "字段约束的常见类型。"
    },
    {
      "id": 143,
      "type": "fill",
      "question": "E-R图是概念设计阶段的工具，产生______。",
      "answer": "概念模型",
      "explanation": "E-R图是概念设计阶段的工具，产生概念模型。"
    },
    {
      "id": 144,
      "type": "fill",
      "question": "数据流图（DFD）描述系统的数据流动和______。",
      "answer": "逻辑流程",
      "explanation": "数据流图（DFD）描述系统的数据流动和处理过程。"
    },
    {
      "id": 145,
      "type": "fill",
      "question": "E-R图集成时常见的三类冲突是______。",
      "answer": "属性冲突、命名冲突、结构冲突",
      "explanation": "E-R图集成时的三类冲突。"
    },
    {
      "id": 146,
      "type": "fill",
      "question": "以管理员帐户登录本地服务器。",
      "answer": "mysql -uroot -p",
      "explanation": "-u 指定用户名（root 为管理员），-p 表示需输入密码。"
    },
    {
      "id": 147,
      "type": "fill",
      "question": "创建名为 market 的数据库",
      "answer": "create database market",
      "explanation": "使用 create database 语句创建数据库。"
    },
    {
      "id": 148,
      "type": "fill",
      "question": "使用 market 数据库",
      "answer": "use market",
      "explanation": "use 命令切换当前操作数据库，后续操作都在 market 中进行。"
    },
    {
      "id": 149,
      "type": "fill",
      "question": "创建表 goods，字段：gid char(5) 主键，gname varchar(50) 非空，price decimal(7,2)",
      "answer": "create table goods (gid char(5) primary key, gname varchar(50) not null, price decimal(7,2))",
      "explanation": "gid：定长 5 位字符串，主键；gname：变长最多 50 字符，非空；price：定点数，共 7 位小数 2 位。"
    },
    {
      "id": 150,
      "type": "fill",
      "question": "查看 goods 表结构",
      "answer": "desc goods",
      "explanation": "desc 是 describe 简写，查看表结构信息（字段名、类型、是否为空、键类型等）。"
    },
    {
      "id": 151,
      "type": "fill",
      "question": "向 goods 插入一条数据：gid sp001，名称 矿泉水，单价 1.50",
      "answer": "insert into goods values('sp001', '矿泉水', 1.50)",
      "explanation": "第一种按字段顺序提供所有值；第二种指定字段名和值，更规范不易出错。"
    },
    {
      "id": 152,
      "type": "fill",
      "question": "修改 gid 为 sp001 的商品价格为 1.80",
      "answer": "update goods set price = 1.80 where gid = 'sp001'",
      "explanation": "set 指定修改字段和新值，where 限定只修改 gid='sp001' 的记录。省略 where 会修改所有记录。"
    },
    {
      "id": 153,
      "type": "fill",
      "question": "删除商品编号为 sp001 的记录",
      "answer": "delete from goods where gid = 'sp001'",
      "explanation": "where 限定只删除 gid='sp001' 的记录。省略 where 会删除表中所有记录。"
    },
    {
      "id": 154,
      "type": "fill",
      "question": "给 goods 表 price 字段创建普通索引，索引名 idx_price",
      "answer": "create index idx_price on goods(price)",
      "explanation": "create index 创建普通索引。idx_price 是索引名，goods 是表名，price 是索引字段。"
    },
    {
      "id": 155,
      "type": "fill",
      "question": "删除索引 idx_price",
      "answer": "drop index idx_price on goods",
      "explanation": "drop index 删除索引，需指定索引名和表名。删除后按 price 查询恢复全表扫描。"
    }
  ]
};
