var EXAM_DATA = {
  "subject": "MySQL数据库",
  "code": "mysql",
  "description": "中等职业教育MySQL数据库应用自测题库",
  "questions": [
    {
      "id": 1,
      "type": "choice",
      "question": "下列不属于客观世界对象的是",
      "options": [
        "超市商品",
        "一次进货业务",
        "数字 12.5",
        "供货商"
      ],
      "answer": "C",
      "explanation": "客观世界对象是指现实世界中可独立存在、可被标识的事物。超市商品、进货业务、供货商都是客观实体或事件，而\"数字 12.5\"只是数据值，是对客观事物属性的描述，本身不是对象。"
    },
    {
      "id": 2,
      "type": "choice",
      "question": "完整的数据描述格式为（属性名，数据值），其中 19.9 单独写出来属于",
      "options": [
        "信息",
        "纯数据",
        "语义",
        "对象"
      ],
      "answer": "B",
      "explanation": "单独的数据值没有属性名赋予语义，属于\"纯数据\"。信息是赋予语义的数据（如\"价格：19.9 元\"），纯数据本身没有明确含义。"
    },
    {
      "id": 3,
      "type": "choice",
      "question": "数据管理技术发展阶段中，程序与数据依赖性最强的是",
      "options": [
        "人工管理",
        "文件管理",
        "数据库管理",
        "分布式管理"
      ],
      "answer": "A",
      "explanation": "人工管理阶段数据由程序员直接管理，数据与程序紧密绑定，依赖性最强。文件管理阶段数据可独立存储，数据库管理阶段实现了数据与程序的高度独立。"
    },
    {
      "id": 4,
      "type": "choice",
      "question": "DB 的中文全称是",
      "options": [
        "数据库管理系统",
        "数据库",
        "数据库系统",
        "数据库管理员"
      ],
      "answer": "B",
      "explanation": "DB（Database）= 数据库；DBMS = 数据库管理系统；DBS = 数据库系统；DBA = 数据库管理员。"
    },
    {
      "id": 5,
      "type": "choice",
      "question": "下列不属于 E-R 图三大基础元素的是",
      "options": [
        "实体矩形",
        "属性椭圆",
        "联系菱形",
        "函数依赖线段"
      ],
      "answer": "D",
      "explanation": "E-R 图三大基础元素：实体（矩形）、属性（椭圆）、联系（菱形）。函数依赖线段是关系规范化理论中的概念，不是 E-R 图基本元素。"
    },
    {
      "id": 6,
      "type": "choice",
      "question": "超市会员与会员购物记录之间的实体联系类型是",
      "options": [
        "1:1",
        "1:n",
        "m:n",
        "无联系"
      ],
      "answer": "B",
      "explanation": "一个会员可有多条购物记录，但一条记录只属于一个会员，因此是一对多（1:n）关系。"
    },
    {
      "id": 7,
      "type": "choice",
      "question": "下列符合关系二维表原子性要求的表格是",
      "options": [
        "电话列分移动、固定两小格",
        "一列只存放单一不可拆分数据",
        "同一行两条相同顾客记录",
        "表内存在同名字段"
      ],
      "answer": "B",
      "explanation": "原子性（第一范式）要求每个属性值都是不可再分的最小数据单位。选项 A 违反原子性；C 的重复记录和 D 的同名字段都不符合关系表规范。"
    },
    {
      "id": 8,
      "type": "choice",
      "question": "用来唯一标识一条记录的属性或属性组称为",
      "options": [
        "域",
        "码",
        "元组",
        "分量"
      ],
      "answer": "B",
      "explanation": "码（Key）是唯一标识记录的属性或属性组。域是取值范围；元组是一行记录；分量是元组中的一个属性值。"
    },
    {
      "id": 9,
      "type": "choice",
      "question": "一张表的主键在另一张表中出现，该属性称为",
      "options": [
        "主键",
        "候选键",
        "外键",
        "域"
      ],
      "answer": "C",
      "explanation": "外键（Foreign Key）是一个表中的属性，它是另一个表的主键，用于建立表间关联关系。"
    },
    {
      "id": 10,
      "type": "choice",
      "question": "MySQL 8.0 及以上版本默认存储引擎是",
      "options": [
        "MyISAM",
        "InnoDB",
        "Memory",
        "CSV"
      ],
      "answer": "B",
      "explanation": "MySQL 5.5 之前默认是 MyISAM，从 5.5 开始改为 InnoDB，8.0 及以上继续沿用 InnoDB。InnoDB 支持事务、外键、行级锁等高级特性。"
    },
    {
      "id": 11,
      "type": "choice",
      "question": "下列存储引擎支持事务、外键约束的是",
      "options": [
        "MyISAM",
        "InnoDB",
        "Memory",
        "Archive"
      ],
      "answer": "B",
      "explanation": "InnoDB 是唯一支持事务（ACID）和外键约束的存储引擎。MyISAM、Memory、Archive 均不支持事务和外键。"
    },
    {
      "id": 12,
      "type": "choice",
      "question": "MySQL 服务默认端口号为",
      "options": [
        "80",
        "22",
        "33060",
        "3306"
      ],
      "answer": "D",
      "explanation": "MySQL 默认端口是 3306。80 是 HTTP 端口；22 是 SSH 端口；33060 是 MySQL X Protocol 端口。"
    },
    {
      "id": 13,
      "type": "choice",
      "question": "MySQL 超级管理员默认账号是",
      "options": [
        "admin",
        "root",
        "sa",
        "user"
      ],
      "answer": "B",
      "explanation": "MySQL 默认超级管理员是 root。admin 是通用管理员名；sa 是 SQL Server 的系统管理员；user 不是默认管理员。"
    },
    {
      "id": 14,
      "type": "choice",
      "question": "MySQL 配置文件中服务端配置段是",
      "options": [
        "[client]",
        "[mysql]",
        "[mysqld]",
        "[server]"
      ],
      "answer": "C",
      "explanation": "[mysqld] 是服务端配置段。[client] 是客户端配置段，[mysql] 是命令行客户端配置段。"
    },
    {
      "id": 15,
      "type": "choice",
      "question": "存储手机号（11 位固定数字）最优数据类型是",
      "options": [
        "int",
        "char(11)",
        "varchar(11)",
        "decimal"
      ],
      "answer": "B",
      "explanation": "手机号是固定长度数字字符串，char(11) 最合适：① 长度固定，char 比 varchar 效率高；② 不做数学运算，不用 int/decimal；③ 可能以 0 开头，数值类型会丢失前导零。"
    },
    {
      "id": 16,
      "type": "choice",
      "question": "记录商品进货精确价格，避免浮点误差应选用",
      "options": [
        "float",
        "double",
        "decimal(6,2)",
        "int"
      ],
      "answer": "C",
      "explanation": "decimal（定点数）存储精确小数，无浮点误差。float/double 有精度误差；int 只能存整数。decimal(6,2) 表示共 6 位，小数 2 位。"
    },
    {
      "id": 17,
      "type": "choice",
      "question": "只记录年份信息，应使用的数据类型",
      "options": [
        "date",
        "year",
        "datetime",
        "timestamp"
      ],
      "answer": "B",
      "explanation": "year 类型专门存储年份，占 1 字节，范围 1901~2155。date 存年月日；datetime 存日期时间；timestamp 存时间戳。仅需年份时 year 最省空间。"
    },
    {
      "id": 18,
      "type": "choice",
      "question": "用于查询表结构的 MySQL 命令是",
      "options": [
        "desc 表名",
        "show databases",
        "drop table",
        "create database"
      ],
      "answer": "A",
      "explanation": "`desc 表名`（或 `describe 表名`）查看表结构，包括字段名、数据类型、是否为空、键信息等。"
    },
    {
      "id": 19,
      "type": "choice",
      "question": "提升数据表查询速度的数据库对象是",
      "options": [
        "视图",
        "索引",
        "触发器",
        "存储过程"
      ],
      "answer": "B",
      "explanation": "索引通过创建 B+ 树等数据结构，快速定位满足条件的记录，提升查询速度。视图是虚拟表；触发器是自动执行程序；存储过程是预编译 SQL 集合。"
    },
    {
      "id": 20,
      "type": "choice",
      "question": "下列 SQL 命令用于向表插入数据的是",
      "options": [
        "update",
        "insert",
        "delete",
        "alter"
      ],
      "answer": "B",
      "explanation": "insert 用于插入新数据。update 更新数据；delete 删除数据；alter 修改表结构。"
    },
    {
      "id": 21,
      "type": "choice",
      "question": "从现实世界到意识世界的抽象将使用的数据模型是（ ）",
      "options": [
        "物理数据模型",
        "逻辑数据模型",
        "概念数据模型",
        "数据模型"
      ],
      "answer": "C",
      "explanation": "**概念数据模型**（如E-R模型）用于从现实世界到信息世界的抽象，不依赖具体计算机系统。"
    },
    {
      "id": 22,
      "type": "choice",
      "question": "在数据库系统设计中，设计的核心是（ ）",
      "options": [
        "数据模型",
        "模式",
        "数据字典",
        "数据流图"
      ],
      "answer": "B",
      "explanation": "**模式（Schema）** 是数据库中全体数据的逻辑结构和特征的描述，是数据库设计的核心。"
    },
    {
      "id": 23,
      "type": "choice",
      "question": "下列关于数据的说法，正确的是（ ）",
      "options": [
        "数据是描述事物的符号记录",
        "数据就是信息",
        "数据只包括数字",
        "数据不能是图像声音"
      ],
      "answer": "A",
      "explanation": "数据是描述事物的符号记录，一切符号记录都可称为数据。B错误：数据≠信息；C错误：数据不限于数字；D错误：图像、声音、视频都是数据。"
    },
    {
      "id": 24,
      "type": "choice",
      "question": "数据管理技术中，对程序和数据依赖性最强的是（ ）",
      "options": [
        "数据库管理",
        "文件管理",
        "人工管理",
        "分布式管理"
      ],
      "answer": "C",
      "explanation": "**人工管理阶段** 数据由程序管理，数据不独立，程序与数据高度耦合。"
    },
    {
      "id": 25,
      "type": "choice",
      "question": "数据库系统的英文简称是（ ）",
      "options": [
        "DB",
        "DBA",
        "DBMS",
        "DBS"
      ],
      "answer": "D",
      "explanation": "**DBS**（Database System）。DB=数据库，DBA=数据库管理员，DBMS=数据库管理系统。"
    },
    {
      "id": 26,
      "type": "choice",
      "question": "使用二维表作为数据结构的数据模型是（ ）",
      "options": [
        "关系数据模型",
        "层次数据模型",
        "网状数据模型",
        "面向对象数据模型"
      ],
      "answer": "A",
      "explanation": "**关系数据模型** 用二维表（关系）表示数据及其联系。"
    },
    {
      "id": 27,
      "type": "choice",
      "question": "下列关于二维表和关系的说法，不正确的是（ ）",
      "options": [
        "关系是规范的二维表",
        "所有二维表都是关系",
        "关系要求列不可再分",
        "关系中行唯一"
      ],
      "answer": "B",
      "explanation": "关系是规范的二维表，但并非所有二维表都是关系。关系要求：列不可再分、列名唯一、行唯一、行/列无序。"
    },
    {
      "id": 28,
      "type": "choice",
      "question": "下列关于主键和主属性的说法，正确的是（ ）",
      "options": [
        "一个关系只能有一个主键",
        "主键只能由一个属性组成",
        "主属性就是主键属性",
        "主键不能是复合属性"
      ],
      "answer": "A",
      "explanation": "一个关系只能有一个主键（但可由多个属性组成复合主键）。B错误：主键可由多个属性组成；C错误：主属性是候选键的属性，不一定是主键属性；D错误：主键可以是复合属性。"
    },
    {
      "id": 29,
      "type": "choice",
      "question": "保证关系表中记录唯一性的是（ ）",
      "options": [
        "参照完整性",
        "用户定义完整性",
        "实体完整性",
        "域完整性"
      ],
      "answer": "C",
      "explanation": "**实体完整性** 要求主键不能为空且唯一，保证记录唯一性。"
    },
    {
      "id": 30,
      "type": "choice",
      "question": "下列不是MySQL特性的是（ ）",
      "options": [
        "开源",
        "难以使用",
        "跨平台",
        "成本低"
      ],
      "answer": "B",
      "explanation": "MySQL是开源、跨平台、成本低、易使用的数据库。\"难以使用\"不是其特性。"
    },
    {
      "id": 31,
      "type": "choice",
      "question": "下列不能跨平台工作的数据库管理系统是（ ）",
      "options": [
        "MySQL",
        "SQL Server",
        "Oracle",
        "PostgreSQL"
      ],
      "answer": "B",
      "explanation": "**SQL Server** 主要运行在Windows平台（虽有Linux版本但原生支持较弱）。MySQL、Oracle、PostgreSQL均跨平台。"
    },
    {
      "id": 32,
      "type": "choice",
      "question": "数据表仅存储在内存中的存储引擎是（ ）",
      "options": [
        "MyISAM",
        "InnoDB",
        "Archive",
        "Memory"
      ],
      "answer": "D",
      "explanation": "**Memory** 引擎将数据存储在内存中，速度快但重启后数据丢失。"
    },
    {
      "id": 33,
      "type": "choice",
      "question": "在生产环境使用MySQL，最好选择的版本是（ ）",
      "options": [
        "GA",
        "Alpha",
        "Beta",
        "RC"
      ],
      "answer": "A",
      "explanation": "**GA**（General Availability）是正式发布版，最稳定。Alpha是测试版，RC是候选版。"
    },
    {
      "id": 34,
      "type": "choice",
      "question": "下列存储引擎中，支持事务处理的是（ ）",
      "options": [
        "MyISAM",
        "Memory",
        "InnoDB",
        "Archive"
      ],
      "answer": "C",
      "explanation": "**InnoDB** 支持事务、行级锁、外键。MyISAM和Memory不支持事务。"
    },
    {
      "id": 35,
      "type": "choice",
      "question": "配置MySQL默认存储引擎的配置项是（ ）",
      "options": [
        "default-engine",
        "storage-engine",
        "default-storage-engine",
        "engine-default"
      ],
      "answer": "C",
      "explanation": "`default-storage-engine` 用于设置默认存储引擎。"
    },
    {
      "id": 36,
      "type": "choice",
      "question": "下列关于MySQL的说法，不正确的是（ ）",
      "options": [
        "MySQL是开源数据库",
        "MySQL可跨平台",
        "MySQL成本低",
        "MySQL只能在Windows运行"
      ],
      "answer": "D",
      "explanation": "MySQL是跨平台的开源系统，可在Windows、Linux、Mac等系统运行。"
    },
    {
      "id": 37,
      "type": "choice",
      "question": "MySQL提供网络服务的默认端口是（ ）",
      "options": [
        "3306",
        "1433",
        "1521",
        "33060"
      ],
      "answer": "A",
      "explanation": "**3306** 是MySQL默认端口。1433是SQL Server，1521是Oracle。"
    },
    {
      "id": 38,
      "type": "choice",
      "question": "安装MySQL时自动创建的数据库管理员账号是（ ）",
      "options": [
        "admin",
        "root",
        "sa",
        "user"
      ],
      "answer": "B",
      "explanation": "**root** 是MySQL默认超级管理员账号。"
    },
    {
      "id": 39,
      "type": "choice",
      "question": "MySQL命令行客户端工具是（ ）",
      "options": [
        "mysqld",
        "mysql",
        "mysqladmin",
        "mysqldump"
      ],
      "answer": "B",
      "explanation": "**mysql** 是命令行客户端。mysqld是服务器进程，mysqladmin是管理工具，mysqldump是备份工具。"
    },
    {
      "id": 40,
      "type": "choice",
      "question": "下列用于配置MySQL安装目录的配置选项是（ ）",
      "options": [
        "datadir",
        "basedir",
        "bind-address",
        "port"
      ],
      "answer": "B",
      "explanation": "`basedir` 指定MySQL安装目录，`datadir` 指定数据目录。"
    },
    {
      "id": 41,
      "type": "choice",
      "question": "包含MySQL最新特性的版本是（ ）",
      "options": [
        "GA",
        "RC",
        "Alpha",
        "Beta"
      ],
      "answer": "C",
      "explanation": "**Alpha** 版包含最新特性但稳定性差，用于测试。GA版最稳定。"
    },
    {
      "id": 42,
      "type": "choice",
      "question": "Linux版本MySQL安装包中表示32位的标志是（ ）",
      "options": [
        "i686",
        "X86_64",
        "x86",
        "amd64"
      ],
      "answer": "A",
      "explanation": "**i686** 表示32位x86架构。X86_64是64位。"
    },
    {
      "id": 43,
      "type": "choice",
      "question": "在MySQL客户端中，命令的结束符是（ ）",
      "options": [
        "逗号",
        "句号",
        "冒号",
        "分号"
      ],
      "answer": "D",
      "explanation": "**分号（;）** 是SQL语句结束符。"
    },
    {
      "id": 44,
      "type": "choice",
      "question": "下列用于配置MySQL客户端特性的配置节是（ ）",
      "options": [
        "[mysqld]",
        "[mysql]",
        "[client]",
        "[server]"
      ],
      "answer": "C",
      "explanation": "`[client]` 节用于配置客户端通用选项，`[mysql]` 节仅用于配置命令行客户端。"
    },
    {
      "id": 45,
      "type": "choice",
      "question": "下列缩写是数据库系统的是（ ）",
      "options": [
        "DB",
        "DBS",
        "DBMS",
        "DBA"
      ],
      "answer": "B",
      "explanation": "**DBS**（Database System）。"
    },
    {
      "id": 46,
      "type": "choice",
      "question": "在SQL语言中，用于实现数据访问控制的是（ ）",
      "options": [
        "DDL",
        "DML",
        "DQL",
        "DCL"
      ],
      "answer": "D",
      "explanation": "**DCL**（Data Control Language，数据控制语言）包括GRANT、REVOKE等权限控制语句。DQL=查询，DML=操纵，DDL=定义。"
    },
    {
      "id": 47,
      "type": "choice",
      "question": "与计算机硬件有关的数据模型是（ ）",
      "options": [
        "概念数据模型",
        "物理数据模型",
        "逻辑数据模型",
        "数据模型"
      ],
      "answer": "B",
      "explanation": "**物理数据模型** 描述数据在存储介质上的物理结构和存取方法。"
    },
    {
      "id": 48,
      "type": "choice",
      "question": "下列属于概念设计的是（ ）",
      "options": [
        "画数据流图",
        "画E-R图",
        "建立数据字典",
        "生成数据模式"
      ],
      "answer": "B",
      "explanation": "**画E-R图** 是概念设计阶段的主要工作。数据流图是需求分析，数据字典是系统设计，生成数据模式是逻辑设计。"
    },
    {
      "id": 49,
      "type": "choice",
      "question": "当前大数据的数量级一般在（ ）",
      "options": [
        "KB",
        "MB",
        "GB",
        "PB"
      ],
      "answer": "D",
      "explanation": "**PB**（Petabyte，拍字节）。大数据通常指PB级及以上的数据量。"
    },
    {
      "id": 50,
      "type": "choice",
      "question": "下列不是MySQL分支的是（ ）",
      "options": [
        "MariaDB",
        "Drizzle",
        "Percona",
        "PostgreSQL"
      ],
      "answer": "D",
      "explanation": "**PostgreSQL** 是独立的数据库系统，不是MySQL分支。MariaDB、Drizzle、Percona都是MySQL分支。"
    },
    {
      "id": 51,
      "type": "choice",
      "question": "MySQL的图形客户端是（ ）",
      "options": [
        "Navicat",
        "SQLyog",
        "phpMyAdmin",
        "MySQL Workbench"
      ],
      "answer": "D",
      "explanation": "**MySQL Workbench** 是官方图形客户端。Navicat、SQLyog、phpMyAdmin也是图形客户端，但题目可能侧重官方工具。"
    },
    {
      "id": 52,
      "type": "choice",
      "question": "MySQL安装文件夹中，存储数据库相关管理程序的子文件夹是（ ）",
      "options": [
        "bin",
        "lib",
        "include",
        "share"
      ],
      "answer": "A",
      "explanation": "**bin** 目录存放可执行程序（如mysql、mysqld等）。"
    },
    {
      "id": 53,
      "type": "choice",
      "question": "下列为MySQL命令行客户端工具的是（ ）",
      "options": [
        "mysqld",
        "mysql",
        "mysqladmin",
        "mysqldump"
      ],
      "answer": "B",
      "explanation": "**mysql** 是命令行客户端工具。"
    },
    {
      "id": 54,
      "type": "choice",
      "question": "MySQL客户端输入语句的默认结束符是（ ）",
      "options": [
        "逗号",
        "句号",
        "冒号",
        "分号"
      ],
      "answer": "D",
      "explanation": "**分号（;）**"
    },
    {
      "id": 55,
      "type": "choice",
      "question": "在MySQL客户程序中，用于指定服务端口的参数是（ ）",
      "options": [
        "-p",
        "-u",
        "-h",
        "-P"
      ],
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
      "answer": "关系模式",
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
    },
    {
      "id": 156,
      "type": "choice",
      "question": "数据库系统的核心是（  ）",
      "options": [
        "数据库",
        "数据库管理系统",
        "操作系统",
        "数据"
      ],
      "answer": "B",
      "explanation": "数据库系统（DBS）的核心是数据库管理系统（DBMS），它负责对数据库进行统一的管理和控制，是用户与数据库之间的接口。"
    },
    {
      "id": 157,
      "type": "choice",
      "question": "采用三级模式结构的是（  ）",
      "options": [
        "文件系统",
        "数据库系统",
        "人工管理",
        "大数据系统"
      ],
      "answer": "B",
      "explanation": "数据库系统采用三级模式结构，包括外模式（用户模式）、模式（概念模式）和内模式（物理模式），以实现数据的物理独立性和逻辑独立性。"
    },
    {
      "id": 158,
      "type": "choice",
      "question": "关系模型的数据结构是（  ）",
      "options": [
        "树",
        "图",
        "二维表",
        "链表"
      ],
      "answer": "C",
      "explanation": "关系模型的数据结构是二维表（关系），每个二维表由行（元组/记录）和列（属性/字段）组成。"
    },
    {
      "id": 159,
      "type": "choice",
      "question": "关系数据库标准操作语言是（  ）",
      "options": [
        "C",
        "SQL",
        "Java",
        "Python"
      ],
      "answer": "B",
      "explanation": "SQL（Structured Query Language，结构化查询语言）是关系数据库的标准操作语言，包括数据定义、数据操纵、数据查询和数据控制功能。"
    },
    {
      "id": 160,
      "type": "choice",
      "question": "SQL语言中，负责数据定义的是（  ）",
      "options": [
        "DDL",
        "DML",
        "DQL",
        "DCL"
      ],
      "answer": "A",
      "explanation": "DDL（Data Definition Language，数据定义语言）负责数据定义，包括CREATE、ALTER、DROP等语句，用于定义数据库对象的结构。"
    },
    {
      "id": 161,
      "type": "choice",
      "question": "下列属于概念数据模型的是（  ）",
      "options": [
        "关系模型",
        "E-R模型",
        "层次模型",
        "网状模型"
      ],
      "answer": "B",
      "explanation": "E-R（Entity-Relationship，实体-联系）模型是概念数据模型，用于描述现实世界的概念结构，独立于具体的DBMS。"
    },
    {
      "id": 162,
      "type": "choice",
      "question": "实体完整性要求关系表中（  ）",
      "options": [
        "外键不能为空",
        "主键不能为空",
        "属性不能为空",
        "元组不能为空"
      ],
      "answer": "B",
      "explanation": "实体完整性要求关系表中的主键（Primary Key）既不能取空值（NULL），也不能重复，以保证每个实体都能被唯一标识。"
    },
    {
      "id": 163,
      "type": "choice",
      "question": "MySQL 8.x 默认存储引擎是（  ）",
      "options": [
        "MyISAM",
        "InnoDB",
        "Memory",
        "Archive"
      ],
      "answer": "B",
      "explanation": "MySQL 8.x 默认的存储引擎是InnoDB，它支持事务、行级锁、外键约束等特性，适用于高并发场景。"
    },
    {
      "id": 164,
      "type": "choice",
      "question": "MySQL配置文件中，注释符号是（  ）",
      "options": [
        "#",
        ";",
        "//",
        "/* */"
      ],
      "answer": "A",
      "explanation": "MySQL配置文件（如my.ini或my.cnf）中使用#作为单行注释符号，这与SQL语句中使用--注释不同。"
    },
    {
      "id": 165,
      "type": "choice",
      "question": "用于指定MySQL安装目录的配置项是（  ）",
      "options": [
        "Datadir",
        "basedir",
        "port",
        "socket"
      ],
      "answer": "B",
      "explanation": "basedir配置项用于指定MySQL的安装目录，datadir用于指定数据文件的存储目录。"
    },
    {
      "id": 166,
      "type": "choice",
      "question": "MySQL本地连接默认服务器名是（  ）",
      "options": [
        "Local",
        "localhost",
        "server",
        "host"
      ],
      "answer": "B",
      "explanation": "本地连接MySQL时，默认服务器名为localhost，表示通过本地回环地址（127.0.0.1）进行连接。"
    },
    {
      "id": 167,
      "type": "choice",
      "question": "下列适合存储货币金额的数据类型是（  ）",
      "options": [
        "int",
        "float",
        "decimal",
        "double"
      ],
      "answer": "C",
      "explanation": "decimal（定点数）类型适合存储货币金额，因为它能精确表示小数，不会出现float/double类型的浮点精度误差。"
    },
    {
      "id": 168,
      "type": "choice",
      "question": "tinyint类型占用字节数是（  ）",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "A",
      "explanation": "tinyint类型占用1个字节，有符号时取值范围为-128~127，无符号时为0~255。"
    },
    {
      "id": 169,
      "type": "choice",
      "question": "拼接字符串的MySQL函数是（  ）",
      "options": [
        "sum()",
        "concat()",
        "count()",
        "avg()"
      ],
      "answer": "B",
      "explanation": "concat()函数用于拼接一个或多个字符串，如SELECT CONCAT('Hello', ' ', 'World')返回'Hello World'。"
    },
    {
      "id": 170,
      "type": "choice",
      "question": "获取当前日期的函数是（  ）",
      "options": [
        "now()",
        "curdate()",
        "sysdate()",
        "current()"
      ],
      "answer": "B",
      "explanation": "curdate()函数返回当前日期（格式为YYYY-MM-DD，不含时间部分）；now()和sysdate()返回日期和时间。"
    },
    {
      "id": 171,
      "type": "choice",
      "question": "查询非空值应使用的关键字是（  ）",
      "options": [
        "!=null",
        "not null",
        "is not null",
        "<>null"
      ],
      "answer": "C",
      "explanation": "在SQL中，判断某列是否为非空值必须使用IS NOT NULL，不能使用!=NULL或<>NULL，因为NULL与任何值（包括NULL）的比较结果都为未知。"
    },
    {
      "id": 172,
      "type": "choice",
      "question": "between 10 and 20 表示（  ）",
      "options": [
        "包含10和20",
        "不包含10和20",
        "包含10不包含20",
        "包含20不包含10"
      ],
      "answer": "A",
      "explanation": "BETWEEN...AND...运算符包含边界值，即expr BETWEEN 10 AND 20等价于expr >= 10 AND expr <= 20。"
    },
    {
      "id": 173,
      "type": "choice",
      "question": "返回字符串长度的函数是（  ）",
      "options": [
        "len()",
        "length()",
        "size()",
        "long()"
      ],
      "answer": "B",
      "explanation": "MySQL中使用LENGTH()函数返回字符串的字节长度，CHAR_LENGTH()返回字符数。len()是SQL Server的函数。"
    },
    {
      "id": 174,
      "type": "choice",
      "question": "数据管理技术三个阶段不包含（  ）",
      "options": [
        "人工管理",
        "文件管理",
        "数据库管理",
        "云管理"
      ],
      "answer": "D",
      "explanation": "数据管理技术的发展经历了人工管理阶段、文件系统阶段和数据库系统阶段三个阶段，云管理不属于传统数据管理技术发展阶段。"
    },
    {
      "id": 175,
      "type": "choice",
      "question": "在E-R图中，联系用什么图符表示（  ）",
      "options": [
        "矩形",
        "菱形",
        "椭圆",
        "线段"
      ],
      "answer": "B",
      "explanation": "E-R图中，实体用矩形表示，属性用椭圆表示，联系用菱形表示，线段用于连接实体与联系或属性与实体。"
    },
    {
      "id": 176,
      "type": "fill",
      "question": "数据库系统的三级模式结构是外模式、模式和______。",
      "answer": "内模式",
      "explanation": "数据库系统的三级模式结构包括外模式（用户视图）、模式（概念视图/逻辑结构）和内模式（物理视图/存储结构）。"
    },
    {
      "id": 177,
      "type": "fill",
      "question": "E-R图中，实体用______表示。",
      "answer": "矩形",
      "explanation": "在E-R图中，矩形表示实体，椭圆表示属性，菱形表示联系，线段用于连接各元素。"
    },
    {
      "id": 178,
      "type": "fill",
      "question": "数据管理技术发展的第三个阶段是______。",
      "answer": "数据库管理",
      "explanation": "数据管理技术发展的三个阶段依次为：人工管理阶段、文件系统阶段、数据库系统（数据库管理）阶段。"
    },
    {
      "id": 179,
      "type": "fill",
      "question": "MySQL客户端命令默认结束符是______。",
      "answer": "分号（;）",
      "explanation": "在MySQL命令行客户端中，每条SQL语句默认以分号（;）作为结束符，也可以使用\\g或\\G作为结束符。"
    },
    {
      "id": 180,
      "type": "fill",
      "question": "存储日期时间（年月日时分秒）常用______类型。",
      "answer": "datetime",
      "explanation": "DATETIME类型用于存储日期和时间（格式：YYYY-MM-DD HH:MM:SS），TIMESTAMP也存储日期时间但受时区影响，DATE只存储日期。"
    },
    {
      "id": 181,
      "type": "fill",
      "question": "查找空值使用______关键字。",
      "answer": "is null",
      "explanation": "在SQL中，判断某列是否为空值必须使用IS NULL，不能使用=NULL，因为NULL表示未知值，与任何值的比较结果都为未知。"
    },
    {
      "id": 182,
      "type": "fill",
      "question": "MySQL稳定版的标识是______。",
      "answer": "GA",
      "explanation": "GA（General Availability）表示正式稳定发布版，是经过充分测试、可供生产环境使用的版本。"
    },
    {
      "id": 183,
      "type": "fill",
      "question": "关系运算中，从表中选取指定列的操作是______。",
      "answer": "投影",
      "explanation": "投影（Projection）是从表中选取指定的列（属性）；选择（Selection）是从表中选取满足条件的行（元组）。"
    },
    {
      "id": 184,
      "type": "fill",
      "question": "外键用于保证______完整性。",
      "answer": "参照",
      "explanation": "外键（Foreign Key）用于建立表与表之间的联系，保证参照完整性，即外键的值必须是主表中主键的有效值或NULL。"
    },
    {
      "id": 185,
      "type": "fill",
      "question": "MySQL安装目录下存放可执行文件的文件夹是______。",
      "answer": "bin",
      "explanation": "MySQL安装目录下的bin文件夹存放了各种可执行文件，如mysql.exe（客户端）、mysqld.exe（服务器）等。"
    },
    {
      "id": 186,
      "type": "judge",
      "question": "数据就是信息，二者没有区别。（  ）",
      "answer": false,
      "explanation": "数据是未经加工的原始符号记录，信息是数据经过加工处理后具有含义的内容，二者有本质区别。"
    },
    {
      "id": 187,
      "type": "judge",
      "question": "从操作系统角度看，数据库是一组文件的集合。（  ）",
      "answer": true,
      "explanation": "从操作系统层面看，数据库确实是以文件形式存储在磁盘上的一组相关数据文件。"
    },
    {
      "id": 188,
      "type": "judge",
      "question": "一个关系表就是关系模式的一个实例。（  ）",
      "answer": true,
      "explanation": "关系模式是对关系的结构描述（型），关系表是关系模式在某一时刻的数据（值/实例）。"
    },
    {
      "id": 189,
      "type": "judge",
      "question": "关系描述实体集，记录描述单个实体。（  ）",
      "answer": true,
      "explanation": "关系（表）描述同一类实体组成的集合（实体集），表中的每条记录（元组/行）描述一个具体的实体。"
    },
    {
      "id": 190,
      "type": "judge",
      "question": "外键的值必须取自对应主表的主键。（  ）",
      "answer": false,
      "explanation": "外键的值可以取自对应主表的主键，也可以取NULL值（如果外键列允许为空），因此不是必须取自主键。"
    },
    {
      "id": 191,
      "type": "judge",
      "question": "关系表中不能有完全相同的记录，这是实体完整性要求。（  ）",
      "answer": true,
      "explanation": "实体完整性要求主键不能重复且不能为空，从而保证关系中不存在完全相同的记录，每个实体都能被唯一标识。"
    },
    {
      "id": 192,
      "type": "judge",
      "question": "数据库是由操作系统直接管理的数据文件。（  ）",
      "answer": false,
      "explanation": "数据库由数据库管理系统（DBMS）统一管理，而非由操作系统直接管理。操作系统管理的是文件层面的存储。"
    },
    {
      "id": 193,
      "type": "judge",
      "question": "SQL语言只能用来查询数据，不能修改数据。（  ）",
      "answer": false,
      "explanation": "SQL语言不仅能查询数据（SELECT），还能插入（INSERT）、更新（UPDATE）、删除（DELETE）数据，以及定义和控制数据。"
    },
    {
      "id": 194,
      "type": "judge",
      "question": "概念设计阶段不需要考虑DBMS的具体实现。（  ）",
      "answer": true,
      "explanation": "概念设计阶段（如E-R图设计）独立于具体的DBMS，主要关注业务需求和数据之间的语义关系。"
    },
    {
      "id": 195,
      "type": "judge",
      "question": "一个实体集可以有多个键，但主键只有一个。（  ）",
      "answer": true,
      "explanation": "一个实体集可以有多个候选键（Candidate Key），但只能从中选择一个作为主键（Primary Key）。"
    },
    {
      "id": 196,
      "type": "judge",
      "question": "只有数字才能被称为数据，文字不属于数据。（  ）",
      "answer": false,
      "explanation": "数据不仅包括数字，还包括文字、图像、声音、视频等各种形式的符号记录，文字是重要的数据类型。"
    },
    {
      "id": 197,
      "type": "judge",
      "question": "E-R图主要用于描述业务流程，不描述数据结构。（  ）",
      "answer": false,
      "explanation": "E-R图（实体-联系图）主要用于描述数据结构，即实体、属性和实体之间的联系，不描述业务流程。"
    },
    {
      "id": 198,
      "type": "judge",
      "question": "任何合法关系都必须满足第一范式INF。（  ）",
      "answer": true,
      "explanation": "第一范式（1NF）要求关系中的每个属性都是原子值（不可再分），这是关系模型的基本要求，任何合法关系都必须满足。"
    },
    {
      "id": 199,
      "type": "judge",
      "question": "数据库跨平台迁移时，应用程序通常不需要大量修改。（  ）",
      "answer": false,
      "explanation": "虽然数据库具有数据独立性，但跨平台迁移时，由于不同DBMS的SQL方言、数据类型、函数等存在差异，应用程序通常需要一定修改。"
    },
    {
      "id": 200,
      "type": "judge",
      "question": "配置项basedir用于定义MySQL的数据存储目录。（  ）",
      "answer": false,
      "explanation": "basedir用于指定MySQL的安装目录，datadir才用于定义数据文件的存储目录。"
    },
    {
      "id": 201,
      "type": "judge",
      "question": "MySQL的GA版是正式稳定发布版。（  ）",
      "answer": true,
      "explanation": "GA（General Availability）表示正式稳定发布版，是经过充分测试、可供生产环境使用的版本。"
    },
    {
      "id": 202,
      "type": "judge",
      "question": "安装MySQL时可以自主选择安装目录。（  ）",
      "answer": true,
      "explanation": "在安装MySQL时，用户可以根据需要自定义安装目录和数据存储目录的位置。"
    },
    {
      "id": 203,
      "type": "judge",
      "question": "同一个MySQL数据库中，不同表可以使用不同存储引擎。（  ）",
      "answer": true,
      "explanation": "MySQL支持在同一个数据库中为不同的表指定不同的存储引擎，如InnoDB、MyISAM、Memory等。"
    },
    {
      "id": 204,
      "type": "judge",
      "question": "MySQL中字符型数据可以用单引号或双引号引起来。（  ）",
      "answer": false,
      "explanation": "标准SQL和MySQL中，字符串常量应使用单引号。虽然MySQL在ANSI_QUOTES模式关闭时允许使用双引号，但这不是标准做法，建议始终使用单引号。"
    },
    {
      "id": 205,
      "type": "judge",
      "question": "NULL与空字符串表示相同含义。（  ）",
      "answer": false,
      "explanation": "NULL表示未知或不存在的数据，空字符串''表示长度为0的字符串，二者含义完全不同。"
    },
    {
      "id": 206,
      "type": "fill",
      "question": "数据库系统（DBS）",
      "answer": "数据库系统（Database System，DBS）是指在计算机系统中引入数据库后的系统，由数据库（DB）、数据库管理系统（DBMS）、数据库管理员（DBA）、应用程序和用户等组成。",
      "explanation": "数据库系统是一个完整的运行环境，不仅包括存储数据的数据库和管理数据的数据库管理系统，还包括使用和管理数据库的人员及应用程序。"
    },
    {
      "id": 207,
      "type": "fill",
      "question": "参照完整性",
      "answer": "参照完整性是关系型数据库的完整性约束之一，要求外键的取值必须是主表中主键的有效值，或者为空（NULL）。它用于维护表与表之间的联系。",
      "explanation": "参照完整性确保了两个有关联的表之间的数据一致性，防止出现'孤儿记录'，即外键引用了一个不存在的主键值。"
    },
    {
      "id": 208,
      "type": "fill",
      "question": "简述人工管理、文件管理、数据库管理三个阶段的主要区别。",
      "answer": "人工管理阶段：数据和应用程序紧密耦合，不具有独立性和共享性，数据一次性使用，效率低，冗余度大。",
      "explanation": "三个阶段的主要区别在于数据与程序的独立性、数据共享程度、数据冗余度以及数据管理方式的不同。"
    },
    {
      "id": 209,
      "type": "fill",
      "question": "说明SQL语言中DDL、DML、DQL、DCL的功能。",
      "answer": "DDL（Data Definition Language，数据定义语言）：用于定义数据库对象的结构，如CREATE、ALTER、DROP等。",
      "explanation": "SQL语言按功能可分为四类：DDL负责定义结构，DML负责操纵数据，DQL负责查询数据，DCL负责权限控制。"
    },
    {
      "id": 210,
      "type": "choice",
      "question": "下列不属于数据基本特征的是（  ）",
      "options": [
        "可存储性",
        "可共享性",
        "不可处理性",
        "可传递性"
      ],
      "answer": "C",
      "explanation": "数据的基本特征包括可存储性、可共享性、可传递性、可处理性等，'不可处理性'不属于数据的基本特征。"
    },
    {
      "id": 211,
      "type": "choice",
      "question": "数据库（DB）、数据库管理系统（DBMS）、数据库系统（DBS）三者的关系是（  ）",
      "options": [
        "DB包含DBMS和DBS",
        "DBS包含DB和DBMS",
        "DBMS包含DB和DBS",
        "三者互不包含"
      ],
      "answer": "B",
      "explanation": "数据库系统（DBS）包含数据库（DB）和数据库管理系统（DBMS），以及相关人员、硬件和软件。"
    },
    {
      "id": 212,
      "type": "choice",
      "question": "关系型数据库采用的数据模型是（  ）",
      "options": [
        "层次模型",
        "网状模型",
        "关系模型",
        "面向对象模型"
      ],
      "answer": "C",
      "explanation": "关系型数据库采用关系模型，以二维表的形式组织数据，每张表由行和列组成。"
    },
    {
      "id": 213,
      "type": "choice",
      "question": "关系型数据库中，二维表的'列'对应的术语是（  ）",
      "options": [
        "记录",
        "元组",
        "属性",
        "实例"
      ],
      "answer": "C",
      "explanation": "在关系型数据库中，二维表的列称为属性（Attribute），行称为记录（Record）或元组（Tuple）。"
    },
    {
      "id": 214,
      "type": "choice",
      "question": "下列选项中，不属于数据库管理系统的是（  ）",
      "options": [
        "MySQL",
        "Oracle",
        "Excel",
        "SQL Server"
      ],
      "answer": "C",
      "explanation": "Excel是电子表格软件，虽然可以存储数据，但不具备数据库管理系统的事务管理、并发控制、完整性约束等核心功能。"
    },
    {
      "id": 215,
      "type": "choice",
      "question": "下列关于MySQL的说法，错误的是（  ）",
      "options": [
        "开源免费",
        "跨平台使用",
        "仅支持Windows系统",
        "可用于中小型项目"
      ],
      "answer": "C",
      "explanation": "MySQL是开源免费、跨平台的关系型数据库，支持Windows、Linux、Mac OS等多种操作系统，广泛应用于中小型项目。"
    },
    {
      "id": 216,
      "type": "choice",
      "question": "MySQL服务默认的监听端口号是（  ）",
      "options": [
        "80",
        "3306",
        "8080",
        "1521"
      ],
      "answer": "B",
      "explanation": "MySQL服务默认监听端口号为3306。80是HTTP默认端口，8080常用于代理或应用服务器，1521是Oracle默认端口。"
    },
    {
      "id": 217,
      "type": "choice",
      "question": "安装MySQL时，必须设置的用户是（  ）",
      "options": [
        "admin",
        "user",
        "root",
        "guest"
      ],
      "answer": "C",
      "explanation": "安装MySQL时必须设置root用户（超级管理员账户），它是MySQL的最高权限用户。"
    },
    {
      "id": 218,
      "type": "choice",
      "question": "配置MySQL环境变量的目的是（  ）",
      "options": [
        "美化界面",
        "让系统能在任意路径识别mysql命令",
        "提高数据库运行速度",
        "增加数据库存储容量"
      ],
      "answer": "B",
      "explanation": "将MySQL的bin目录添加到系统环境变量PATH后，可以在任意路径下直接执行mysql等命令，无需切换到安装目录。"
    },
    {
      "id": 219,
      "type": "choice",
      "question": "在Windows命令行中，连接MySQL服务器的命令格式正确的是（  ）",
      "options": [
        "mysql -u 用户名 -p 密码",
        "mysql -P 用户名 -u 密码",
        "mysql -h 用户名 -p 密码",
        "mysql -p 用户名 -u 密码"
      ],
      "answer": "A",
      "explanation": "连接MySQL的标准格式为：mysql -u 用户名 -p [密码]，-u指定用户名，-p指定密码（可省略密码直接回车后输入）。"
    },
    {
      "id": 220,
      "type": "choice",
      "question": "下列数据类型中，属于整数类型的是（  ）",
      "options": [
        "CHAR",
        "VARCHAR",
        "INT",
        "DATE"
      ],
      "answer": "C",
      "explanation": "INT是整数类型，CHAR和VARCHAR是字符串类型，DATE是日期类型。"
    },
    {
      "id": 221,
      "type": "choice",
      "question": "适合存储学生姓名的最佳数据类型是（  ）",
      "options": [
        "INT",
        "CHAR(10)",
        "VARCHAR(20)",
        "DECIMAL(10,2)"
      ],
      "answer": "C",
      "explanation": "学生姓名长度不固定，VARCHAR(20)可变长度字符串类型最为合适，既节省空间又能满足长度需求。"
    },
    {
      "id": 222,
      "type": "choice",
      "question": "下列数据类型中，用于存储日期的是（  ）",
      "options": [
        "TIME",
        "DATETIME",
        "DATE",
        "TIMESTAMP"
      ],
      "answer": "C",
      "explanation": "DATE类型专门用于存储日期（YYYY-MM-DD），不含时间部分；DATETIME和TIMESTAMP存储日期和时间，TIME只存储时间。"
    },
    {
      "id": 223,
      "type": "choice",
      "question": "MySQL中，SELECT 5 + 3 * 2; 的运算结果是（  ）",
      "options": [
        "16",
        "11",
        "13",
        "8"
      ],
      "answer": "B",
      "explanation": "根据运算符优先级，先计算乘法3*2=6，再计算加法5+6=11。"
    },
    {
      "id": 224,
      "type": "choice",
      "question": "下列运算符中，属于逻辑运算符的是（  ）",
      "options": [
        "+",
        "=",
        "AND",
        "LIKE"
      ],
      "answer": "C",
      "explanation": "AND是逻辑运算符（还有OR、NOT），+是算术运算符，=是比较运算符，LIKE是模式匹配运算符。"
    },
    {
      "id": 225,
      "type": "choice",
      "question": "下列选项中，不属于数据库基本特点的是（  ）",
      "options": [
        "数据结构化",
        "数据独立性高",
        "数据不可共享",
        "数据冗余度低"
      ],
      "answer": "C",
      "explanation": "数据库的基本特点包括数据结构化、数据独立性高、数据冗余度低、数据可共享，'数据不可共享'与数据库特点相悖。"
    },
    {
      "id": 226,
      "type": "choice",
      "question": "MySQL中，用于连接服务器的命令行工具是（  ）",
      "options": [
        "MySQL Workbench",
        "mysql.exe",
        "Navicat",
        "SQL Server Management Studio"
      ],
      "answer": "B",
      "explanation": "mysql.exe是MySQL的命令行客户端工具；MySQL Workbench和Navicat是图形化管理工具，SQL Server Management Studio是SQL Server的工具。"
    },
    {
      "id": 227,
      "type": "choice",
      "question": "下列数据类型中，适合存储'出版时间'的是（  ）",
      "options": [
        "INT",
        "VARCHAR",
        "DATE",
        "DECIMAL"
      ],
      "answer": "C",
      "explanation": "DATE类型适合存储日期型数据，如出版时间。INT存储整数，VARCHAR存储字符串，DECIMAL存储精确小数。"
    },
    {
      "id": 228,
      "type": "choice",
      "question": "MySQL中，用于查看当前使用的数据库的命令是（  ）",
      "options": [
        "SHOW DATABASES;",
        "SHOW TABLES;",
        "SELECT DATABASE();",
        "USE 数据库名;"
      ],
      "answer": "C",
      "explanation": "SELECT DATABASE()返回当前会话正在使用的数据库名；SHOW DATABASES显示所有数据库，SHOW TABLES显示当前库的所有表，USE用于切换数据库。"
    },
    {
      "id": 229,
      "type": "choice",
      "question": "下列运算符中，属于MySQL算术运算符的是（  ）",
      "options": [
        "=",
        "AND",
        "+",
        "LIKE"
      ],
      "answer": "C",
      "explanation": "+是算术运算符（还有-、*、/、%等），=是比较运算符，AND是逻辑运算符，LIKE是模式匹配运算符。"
    },
    {
      "id": 230,
      "type": "choice",
      "question": "下列选项中，属于关系型数据库管理系统的是（  ）",
      "options": [
        "MongoDB",
        "MySQL",
        "Redis",
        "HBase"
      ],
      "answer": "B",
      "explanation": "MySQL是关系型数据库；MongoDB是文档型NoSQL数据库，Redis是键值型数据库，HBase是列族型数据库。"
    },
    {
      "id": 231,
      "type": "choice",
      "question": "MySQL安装完成后，默认占用的端口号是（  ）",
      "options": [
        "80",
        "3306",
        "8080",
        "1521"
      ],
      "answer": "B",
      "explanation": "MySQL安装完成后，默认占用端口号3306。"
    },
    {
      "id": 232,
      "type": "choice",
      "question": "下列数据类型中，适合存储'图书编号（如001、002）'的是（  ）",
      "options": [
        "INT",
        "CHAR(3)",
        "DATE",
        "FLOAT"
      ],
      "answer": "B",
      "explanation": "图书编号如'001'带有前导零，使用CHAR(3)定长字符串类型可以保留前导零，INT类型会存储为1而丢失前导零。"
    },
    {
      "id": 233,
      "type": "choice",
      "question": "MySQL中，用于切换当前数据库的命令是（  ）",
      "options": [
        "SHOW DATABASES;",
        "USE 数据库名;",
        "CREATE DATABASE;",
        "DROP DATABASE;"
      ],
      "answer": "B",
      "explanation": "USE 数据库名; 用于切换当前会话使用的数据库；SHOW DATABASES显示所有数据库，CREATE DATABASE创建数据库，DROP DATABASE删除数据库。"
    },
    {
      "id": 234,
      "type": "choice",
      "question": "下列函数中，MySQL中用于返回字符串长度的是（  ）",
      "options": [
        "LENGTH()",
        "ROUND()",
        "NOW()",
        "SUM()"
      ],
      "answer": "A",
      "explanation": "LENGTH()返回字符串的字节长度；ROUND()用于四舍五入，NOW()返回当前日期时间，SUM()用于求和。"
    },
    {
      "id": 235,
      "type": "choice",
      "question": "下列关于数据和信息的说法，正确的是（  ）",
      "options": [
        "数据就是信息",
        "信息是经过加工处理的数据",
        "数据是有意义的信息",
        "数据和信息没有任何关系"
      ],
      "answer": "B",
      "explanation": "信息是经过加工处理后具有特定含义的数据，是对数据的解释和理解。数据是原始符号，信息是有意义的数据。"
    },
    {
      "id": 236,
      "type": "choice",
      "question": "数据库系统的英文缩写是（  ）",
      "options": [
        "DB",
        "DBMS",
        "DBS",
        "DBA"
      ],
      "answer": "C",
      "explanation": "DBS（Database System）是数据库系统；DB是数据库，DBMS是数据库管理系统，DBA是数据库管理员。"
    },
    {
      "id": 237,
      "type": "choice",
      "question": "下列不属于关系型数据库特点的是（  ）",
      "options": [
        "数据以二维表的形式存储",
        "支持事务处理",
        "不支持SQL语言",
        "数据独立性高"
      ],
      "answer": "C",
      "explanation": "关系型数据库的核心特点之一就是支持SQL语言。'不支持SQL语言'不是关系型数据库的特点，反而是NoSQL数据库的特点。"
    },
    {
      "id": 238,
      "type": "choice",
      "question": "关系型数据库中，主键的特点是（  ）",
      "options": [
        "可以为空值",
        "可以重复",
        "非空且唯一",
        "只能是数字类型"
      ],
      "answer": "C",
      "explanation": "主键（Primary Key）必须满足两个约束：非空（NOT NULL）和唯一（UNIQUE），且主键可以是任意数据类型。"
    },
    {
      "id": 239,
      "type": "fill",
      "question": "关系型数据库中，二维表的每一行称为一条______，每一列称为一个______。",
      "answer": "记录（或元组）；属性（或字段）",
      "explanation": "在关系型数据库中，二维表的行称为记录（Record）或元组（Tuple），列称为属性（Attribute）或字段（Field）。"
    },
    {
      "id": 240,
      "type": "fill",
      "question": "MySQL默认的管理员用户是______。",
      "answer": "root",
      "explanation": "root是MySQL安装时自动创建的超级管理员用户，拥有最高权限。"
    },
    {
      "id": 241,
      "type": "fill",
      "question": "DECIMAL(4,2)类型的字段，最大能存储的数值是______，最小能存储的数值是______。",
      "answer": "99.99；-99.99",
      "explanation": "DECIMAL(4,2)表示总共4位数字，其中小数占2位，所以整数部分最多2位，范围为-99.99到99.99。"
    },
    {
      "id": 242,
      "type": "fill",
      "question": "MySQL中，获取当前系统日期的函数是______。",
      "answer": "CURDATE()（或CURRENT_DATE）",
      "explanation": "CURDATE()函数返回当前日期（YYYY-MM-DD格式），CURRENT_DATE具有相同功能；NOW()返回日期和时间。"
    },
    {
      "id": 243,
      "type": "fill",
      "question": "数据库系统的核心是______。",
      "answer": "DBMS（或数据库管理系统）",
      "explanation": "数据库管理系统（DBMS）是数据库系统的核心，负责数据的定义、操纵、控制和维护。"
    },
    {
      "id": 244,
      "type": "fill",
      "question": "连接MySQL服务器时，除了用户名和密码，还需要指定______和端口号。",
      "answer": "主机名（或主机地址/服务器地址/IP地址）",
      "explanation": "连接MySQL需要指定主机名（如localhost或IP地址）、端口号（默认3306）、用户名和密码。"
    },
    {
      "id": 245,
      "type": "fill",
      "question": "MySQL中，布尔类型的TRUE对应的数值是______，FALSE对应的数值是______。",
      "answer": "1；0",
      "explanation": "在MySQL中，布尔类型BOOLEAN实际上是TINYINT(1)的同义词，TRUE等价于1，FALSE等价于0。"
    },
    {
      "id": 246,
      "type": "fill",
      "question": "SELECT 10%3;的运行结果是______。",
      "answer": "1",
      "explanation": "%是取模（求余）运算符，10除以3商3余1，所以10%3的结果是1。"
    },
    {
      "id": 247,
      "type": "fill",
      "question": "数据库系统由数据库、______、数据库管理员和用户组成。",
      "answer": "数据库管理系统（或DBMS）",
      "explanation": "数据库系统（DBS）由数据库（DB）、数据库管理系统（DBMS）、数据库管理员（DBA）和应用程序/用户组成。"
    },
    {
      "id": 248,
      "type": "fill",
      "question": "关系型数据库的三大完整性约束包括实体完整性、参照完整性和______。",
      "answer": "用户自定义完整性",
      "explanation": "关系型数据库的三大完整性约束是：实体完整性、参照完整性和用户自定义完整性（域完整性）。"
    },
    {
      "id": 249,
      "type": "fill",
      "question": "二维表中，能唯一标识一条记录的列称为______。",
      "answer": "主键（或候选键）",
      "explanation": "主键（Primary Key）或候选键（Candidate Key）是能唯一标识表中每条记录的属性或属性组。"
    },
    {
      "id": 250,
      "type": "fill",
      "question": "MySQL中，INT(11)中的11表示______。",
      "answer": "显示宽度",
      "explanation": "INT(11)中的11是显示宽度（Zerofill时前补零的位数），不影响存储范围，INT的存储范围固定为4字节。"
    },
    {
      "id": 251,
      "type": "fill",
      "question": "安装MySQL后，默认存在的系统数据库有mysql、information_schema、performance_schema和______。",
      "answer": "sys",
      "explanation": "MySQL 5.7+安装后默认包含mysql、information_schema、performance_schema和sys四个系统数据库。"
    },
    {
      "id": 252,
      "type": "fill",
      "question": "连接MySQL服务器时，若服务器在本地主机，主机地址可以写为______。",
      "answer": "localhost（或127.0.0.1）",
      "explanation": "localhost是本地主机的域名，127.0.0.1是本地回环IP地址，二者都用于连接本机的MySQL服务器。"
    },
    {
      "id": 253,
      "type": "fill",
      "question": "退出MySQL命令行的命令是exit或______。",
      "answer": "quit（或\\q）",
      "explanation": "在MySQL命令行中，exit、quit或\\q都可以用于退出命令行客户端。"
    },
    {
      "id": 254,
      "type": "fill",
      "question": "数据类型CHAR(10)表示固定长度的______个字符的字符串类型。",
      "answer": "10",
      "explanation": "CHAR(n)表示固定长度为n个字符的字符串，无论实际存储多少字符，都占用n个字符的空间。"
    },
    {
      "id": 255,
      "type": "fill",
      "question": "数据类型VARCHAR(20)表示最多能存储______个字符的可变长度字符串。",
      "answer": "20",
      "explanation": "VARCHAR(n)表示最多可存储n个字符的可变长度字符串，实际占用空间为字符数+1或2字节的长度前缀。"
    },
    {
      "id": 256,
      "type": "fill",
      "question": "MySQL中，算术运算符中，求模运算的符号是______。",
      "answer": "%（或MOD）",
      "explanation": "%和MOD都用于求模运算（取余），如SELECT 10 % 3和SELECT 10 MOD 3的结果都是1。"
    },
    {
      "id": 257,
      "type": "fill",
      "question": "SELECT 10/3;的结果是______，SELECT 10 DIV 3;的结果是______。",
      "answer": "3.3333（或3.3333...）；3",
      "explanation": "10/3进行浮点除法，结果约为3.3333；10 DIV 3进行整数除法，结果为3（舍去小数部分）。"
    },
    {
      "id": 258,
      "type": "fill",
      "question": "MySQL中，用于拼接多个字符串的函数是______。",
      "answer": "CONCAT()",
      "explanation": "CONCAT(str1, str2, ...)函数用于拼接一个或多个字符串，返回拼接后的结果。"
    },
    {
      "id": 259,
      "type": "fill",
      "question": "用于将字符串全部转为大写的函数是______。",
      "answer": "UPPER()（或UCASE()）",
      "explanation": "UPPER(str)将字符串转换为大写，UCASE()是其同义词；LOWER()或LCASE()转换为小写。"
    },
    {
      "id": 260,
      "type": "fill",
      "question": "SELECT ROUND(3.14159, 2);的结果是______。",
      "answer": "3.14",
      "explanation": "ROUND(x, d)函数将x四舍五入保留d位小数，3.14159保留2位小数的结果为3.14。"
    },
    {
      "id": 261,
      "type": "fill",
      "question": "MySQL中，WHERE子句中使用______来表示模糊匹配。",
      "answer": "LIKE",
      "explanation": "LIKE运算符用于模糊匹配，配合通配符%（匹配任意长度字符串）和_（匹配单个字符）使用。"
    },
    {
      "id": 262,
      "type": "fill",
      "question": "MySQL中，注释分为单行注释和多行注释，单行注释以______开头。",
      "answer": "#（或-- ）",
      "explanation": "MySQL中单行注释可以用#或-- （注意--后必须有空格），多行注释使用/* */。"
    },
    {
      "id": 263,
      "type": "fill",
      "question": "select substring('2027年高职分类考试',6,2);的结果是______。",
      "answer": "高职",
      "explanation": "SUBSTRING(str, pos, len)从str的第pos个字符开始截取len个字符。'2027年高职分类考试'中，第6个字符开始取2个字符为'高职'（按字符计数）。"
    },
    {
      "id": 264,
      "type": "fill",
      "question": "关系数据模型的三要素包括数据结构、数据操作和______。",
      "answer": "完整性约束（或数据约束）",
      "explanation": "关系数据模型的三要素是数据结构（二维表）、数据操作（查询和更新）和完整性约束（实体、参照、用户自定义）。"
    },
    {
      "id": 265,
      "type": "fill",
      "question": "关系型数据库中，外键的作用是维护______完整性。",
      "answer": "参照",
      "explanation": "外键用于建立表与表之间的关联，维护参照完整性，确保子表中外键的值在主表中有对应的主键值或为空。"
    },
    {
      "id": 266,
      "type": "fill",
      "question": "MySQL命令行中，结束一条命令的符号是______。",
      "answer": "分号（;）",
      "explanation": "在MySQL命令行中，SQL语句默认以分号（;）作为结束符。"
    },
    {
      "id": 267,
      "type": "fill",
      "question": "MySQL中，模糊匹配运算符LIKE中，______表示匹配任意长度的任意字符，______表示匹配单个任意字符。",
      "answer": "%；_",
      "explanation": "LIKE运算符中，%通配符匹配任意长度（包括0长度）的任意字符，_通配符匹配单个任意字符。"
    },
    {
      "id": 268,
      "type": "fill",
      "question": "MySQL中，多行注释的符号是______和______。",
      "answer": "/*；*/",
      "explanation": "多行注释以/*开头，以*/结束，可以跨越多行；单行注释使用#或-- 。"
    },
    {
      "id": 269,
      "type": "judge",
      "question": "数据库系统中，数据是结构化存储的。（  ）",
      "answer": true,
      "explanation": "数据库系统的重要特点之一就是数据结构化，数据按照一定的数据模型（如关系模型）进行组织和存储。"
    },
    {
      "id": 270,
      "type": "judge",
      "question": "数据库管理系统（DBMS）是数据库系统的核心组成部分。（  ）",
      "answer": true,
      "explanation": "DBMS是数据库系统的核心，负责数据的定义、存储、操纵、控制和维护。"
    },
    {
      "id": 271,
      "type": "judge",
      "question": "关系型数据库中，二维表的行和列的顺序可以任意调换。（  ）",
      "answer": true,
      "explanation": "关系型数据库中，二维表的行和列在理论上没有顺序要求，行和列的先后顺序不影响数据的语义。"
    },
    {
      "id": 272,
      "type": "judge",
      "question": "MySQL只能在Windows操作系统上安装和使用。（  ）",
      "answer": false,
      "explanation": "MySQL是跨平台的开源数据库，支持Windows、Linux、Mac OS、UNIX等多种操作系统。"
    },
    {
      "id": 273,
      "type": "judge",
      "question": "安装MySQL时，设置的root密码可以为空。（  ）",
      "answer": true,
      "explanation": "MySQL允许将root密码设置为空，但出于安全考虑，生产环境强烈建议设置强密码。"
    },
    {
      "id": 274,
      "type": "judge",
      "question": "配置环境变量后，在任意路径都可以使用mysql命令连接服务器。（  ）",
      "answer": true,
      "explanation": "将MySQL的bin目录加入系统PATH环境变量后，系统可以在任意路径下找到并执行mysql命令。"
    },
    {
      "id": 275,
      "type": "judge",
      "question": "MySQL命令行中，命令不区分大小写，show databases;和SHOW DATABASES;效果相同。（  ）",
      "answer": true,
      "explanation": "MySQL的SQL关键字不区分大小写，show databases;和SHOW DATABASES;执行效果完全相同。"
    },
    {
      "id": 276,
      "type": "judge",
      "question": "USE mysql; 命令表示切换到名为mysql的数据库。（  ）",
      "answer": true,
      "explanation": "USE语句用于选择当前会话要操作的数据库，USE mysql;表示将当前数据库切换到mysql系统数据库。"
    },
    {
      "id": 277,
      "type": "judge",
      "question": "CHAR类型和VARCHAR类型存储字符串时，占用的空间完全相同。（  ）",
      "answer": false,
      "explanation": "CHAR是定长字符串，总是占用固定长度的空间；VARCHAR是变长字符串，只占用实际字符数+长度前缀的空间。"
    },
    {
      "id": 278,
      "type": "judge",
      "question": "DECIMAL类型适合存储金额、单价等需要精确计算的数值。（  ）",
      "answer": true,
      "explanation": "DECIMAL（定点数）以字符串形式存储数值，不存在浮点精度问题，非常适合存储金额等需要精确计算的数据。"
    },
    {
      "id": 279,
      "type": "judge",
      "question": "DATE类型可以存储'2025-12-31'这样的日期，也可以存储'14:30:00'这样的时间。（  ）",
      "answer": false,
      "explanation": "DATE类型只能存储日期（YYYY-MM-DD），不能存储时间。存储时间应使用TIME类型，同时存储日期和时间应使用DATETIME或TIMESTAMP。"
    },
    {
      "id": 280,
      "type": "judge",
      "question": "MySQL中，整数类型的取值范围都是一样的。（  ）",
      "answer": false,
      "explanation": "MySQL整数类型包括TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT等，它们的存储字节数和取值范围各不相同。"
    },
    {
      "id": 281,
      "type": "judge",
      "question": "SELECT 5 > 3; 的运行结果为1（表示TRUE）。（  ）",
      "answer": true,
      "explanation": "在MySQL中，比较运算的结果用1表示TRUE，0表示FALSE。5>3为真，所以返回1。"
    },
    {
      "id": 282,
      "type": "judge",
      "question": "SELECT 'abc' + 'def'; 可以直接拼接字符串，得到结果'abcdef'。（  ）",
      "answer": false,
      "explanation": "在MySQL中，+是算术运算符，用于数值相加。当操作数为字符串时，MySQL会尝试将其转换为数字再进行加法运算，因此'abc'+'def'的结果是0，不会拼接字符串。应使用CONCAT()函数拼接。"
    },
    {
      "id": 283,
      "type": "judge",
      "question": "CONCAT('a', 'b', 'c') 函数的运行结果是'abc'。（  ）",
      "answer": true,
      "explanation": "CONCAT()函数将多个参数拼接成一个字符串，CONCAT('a', 'b', 'c')的结果是'abc'。"
    },
    {
      "id": 284,
      "type": "judge",
      "question": "LENGTH('数据库') 的结果是3（按字符数计算）。（  ）",
      "answer": false,
      "explanation": "LENGTH()返回字符串的字节长度。在UTF-8编码下，每个中文字符占3个字节，所以'数据库'的LENGTH()结果是9。按字符数计算应使用CHAR_LENGTH()，结果为3。"
    },
    {
      "id": 285,
      "type": "judge",
      "question": "WHERE 条件1 AND 条件2 表示同时满足两个条件才会被查询出来。（  ）",
      "answer": true,
      "explanation": "AND是逻辑与运算符，只有当条件1和条件2同时成立时，整个WHERE条件才为真，记录才会被查询出来。"
    },
    {
      "id": 286,
      "type": "judge",
      "question": "LIKE '%书%' 可以匹配包含'书'字的所有字符串。（  ）",
      "answer": true,
      "explanation": "%匹配任意长度（包括0长度）的任意字符序列，'%书%'表示匹配任何包含'书'字的字符串。"
    },
    {
      "id": 287,
      "type": "judge",
      "question": "数据库管理系统（DBMS）和数据库（DB）是同一个概念。（  ）",
      "answer": false,
      "explanation": "数据库（DB）是存储数据的仓库，数据库管理系统（DBMS）是管理数据库的软件系统，二者是完全不同的概念。"
    },
    {
      "id": 288,
      "type": "judge",
      "question": "安装MySQL时，必须设置root用户的登录密码。（  ）",
      "answer": false,
      "explanation": "安装MySQL时root密码可以设置为空（空密码），也可以跳过密码设置，不是必须设置密码。"
    },
    {
      "id": 289,
      "type": "judge",
      "question": "VARCHAR类型和CHAR类型都可以存储字符串，两者没有任何区别。（  ）",
      "answer": false,
      "explanation": "虽然两者都可存储字符串，但CHAR是定长类型，VARCHAR是变长类型，在存储方式、空间占用和性能上存在明显区别。"
    },
    {
      "id": 290,
      "type": "judge",
      "question": "MySQL中，命令不区分大小写，show databases;和SHOW DATABASES;效果相同。（  ）",
      "answer": true,
      "explanation": "MySQL的SQL关键字不区分大小写，show databases;和SHOW DATABASES;执行效果完全相同。"
    },
    {
      "id": 291,
      "type": "judge",
      "question": "CONCAT()函数可以用来拼接多个字符串。（  ）",
      "answer": true,
      "explanation": "CONCAT()函数的核心功能就是将多个字符串参数拼接成一个完整的字符串。"
    },
    {
      "id": 292,
      "type": "judge",
      "question": "关系型数据库的数据模型是层次模型。（  ）",
      "answer": false,
      "explanation": "关系型数据库的数据模型是关系模型（二维表），层次模型是层次型数据库（如IMS）采用的数据模型。"
    },
    {
      "id": 293,
      "type": "judge",
      "question": "可以直接在Windows的cmd命令行中输入mysql命令连接服务器，无需提前配置环境变量。（  ）",
      "answer": false,
      "explanation": "如果不配置环境变量，cmd只能在MySQL的bin目录下找到mysql命令。要在任意路径使用，必须将bin目录添加到系统PATH环境变量中。"
    },
    {
      "id": 294,
      "type": "judge",
      "question": "DECIMAL(5,2)类型的字段，整数部分最多可以存储3位数字。（  ）",
      "answer": true,
      "explanation": "DECIMAL(5,2)共5位数字，小数占2位，所以整数部分最多5-2=3位数字。"
    },
    {
      "id": 295,
      "type": "judge",
      "question": "SELECT 'a' = 'A'; 的运行结果为1（MySQL默认不区分大小写）。（  ）",
      "answer": true,
      "explanation": "MySQL默认的字符串比较不区分大小写（取决于字符集的collation），所以'a'='A'的结果为1（TRUE）。"
    },
    {
      "id": 296,
      "type": "judge",
      "question": "TRIM(' MySQL '); 的运行结果是'MySQL'。（  ）",
      "answer": true,
      "explanation": "TRIM()函数用于去除字符串首尾的空格（或指定字符），' MySQL '去除首尾空格后得到'MySQL'。"
    },
    {
      "id": 297,
      "type": "judge",
      "question": "UPPER('mysql') 和 UCASE('mysql') 的功能完全相同。（  ）",
      "answer": false,
      "explanation": "虽然UPPER()和UCASE()在当前MySQL版本中功能相同（都将字符串转为大写），但UCASE()已被标记为弃用（deprecated），不建议在新代码中使用。"
    },
    {
      "id": 298,
      "type": "judge",
      "question": "MySQL中，单行注释-- 后面需要加空格才能生效。（  ）",
      "answer": true,
      "explanation": "MySQL中，-- 形式的单行注释要求--后面必须紧跟至少一个空格才能被识别为注释，否则会被解析为减号运算符。"
    },
    {
      "id": 299,
      "type": "choice",
      "question": "下列关于数据库系统的特点描述错误的是（  ）",
      "options": [
        "实现数据共享",
        "数据独立性强",
        "增加了数据冗余度",
        "便于数据集中控制"
      ],
      "answer": "C",
      "explanation": "数据库系统的特点包括数据共享、数据独立性强、数据冗余度低、便于集中控制等。'增加了数据冗余度'是错误的描述。"
    },
    {
      "id": 300,
      "type": "choice",
      "question": "在现实世界中，事物的一般特性在信息世界中称为（  ）",
      "options": [
        "实体",
        "实体键",
        "属性",
        "关系键"
      ],
      "answer": "C",
      "explanation": "在信息世界中，现实世界中事物的特性被称为属性（Attribute），事物本身被称为实体（Entity）。"
    },
    {
      "id": 301,
      "type": "choice",
      "question": "下列哪项是描述客观事物特征的符号记录？（  ）",
      "options": [
        "信息",
        "数据",
        "对象",
        "实体"
      ],
      "answer": "B",
      "explanation": "数据（Data）是描述客观事物特征的符号记录，是未经加工的原始事实和符号。"
    },
    {
      "id": 302,
      "type": "choice",
      "question": "关系数据模型的三要素不包括：（  ）",
      "options": [
        "数据结构",
        "数据操作",
        "数据约束",
        "数据冗余"
      ],
      "answer": "D",
      "explanation": "关系数据模型的三要素是数据结构（二维表）、数据操作（查询和更新）和完整性约束（数据约束），数据冗余不是模型要素。"
    },
    {
      "id": 303,
      "type": "choice",
      "question": "下列哪项是关系数据库中唯一标识元组的属性或属性组？（  ）",
      "options": [
        "外键",
        "候选键",
        "域",
        "字段"
      ],
      "answer": "B",
      "explanation": "候选键（Candidate Key）是能唯一标识关系中每个元组（记录）的属性或属性组，主键是从候选键中选定的一个。"
    },
    {
      "id": 304,
      "type": "choice",
      "question": "E-R图转换为关系模型时，主键的确定方法错误的是（  ）",
      "options": [
        "每个实体转换为关系时，实体的主键就是关系的主键",
        "对于1:1的联系，每个实体的主键均是关系的候选键",
        "对于1:n的联系，关系的主键是n端实体的主键",
        "对于m:n的联系，每个实体的主键均是关系的候选键"
      ],
      "answer": "D",
      "explanation": "对于m:n（多对多）联系，转换后的关系的主键应该是参与联系的各实体主键的组合（联合主键），而不是单独使用某一个实体的主键。"
    },
    {
      "id": 305,
      "type": "choice",
      "question": "设属性A是关系R的主属性，则属性A不能取空值，这是（  ）",
      "options": [
        "实体完整性规则",
        "参照完整性规则",
        "用户自定义完整性规则",
        "域完整性规则"
      ],
      "answer": "A",
      "explanation": "实体完整性规则要求主属性（构成主键的属性）不能取空值，以保证每个实体都能被唯一标识。"
    },
    {
      "id": 306,
      "type": "choice",
      "question": "在MySQL 8版本的系统中，默认的存储引擎是（  ）",
      "options": [
        "Archive",
        "InnoDB",
        "Memory",
        "MyISAM"
      ],
      "answer": "B",
      "explanation": "MySQL 8.0默认的存储引擎是InnoDB，支持ACID事务、行级锁、外键约束等高级特性。"
    },
    {
      "id": 307,
      "type": "choice",
      "question": "关系数据库管理系统应能实现专门的关系运算包括（  ）",
      "options": [
        "排序、索引和统计",
        "选择、投影和连接",
        "关联、更新和排序",
        "选取、投影和更新"
      ],
      "answer": "B",
      "explanation": "关系数据库的核心关系运算包括选择（Selection，按条件选行）、投影（Projection，按列选取）和连接（Join，多表关联）。"
    },
    {
      "id": 308,
      "type": "choice",
      "question": "数据库系统的三级模式结构中，描述全体数据逻辑结构的是：（  ）",
      "options": [
        "外模式",
        "模式",
        "内模式",
        "存储模式"
      ],
      "answer": "B",
      "explanation": "模式（Schema/概念模式）描述数据库中全体数据的逻辑结构和特征，是所有用户的公共数据视图。"
    },
    {
      "id": 309,
      "type": "choice",
      "question": "关系模型中，从表通过什么与主表建立联系？（  ）",
      "options": [
        "主属性",
        "外键",
        "候选键",
        "域"
      ],
      "answer": "B",
      "explanation": "从表（子表）通过外键（Foreign Key）与主表（父表）的主键建立关联，实现表与表之间的关系。"
    },
    {
      "id": 310,
      "type": "choice",
      "question": "李老师买了一部苹果的笔记本电脑，他想装MySQL，应该下载哪个版本（  ）",
      "options": [
        "Windows版",
        "UNIX版",
        "Linux版",
        "Mac OS版"
      ],
      "answer": "D",
      "explanation": "苹果笔记本电脑运行Mac OS操作系统，应下载对应的Mac OS版MySQL安装包。"
    }
  ]
};