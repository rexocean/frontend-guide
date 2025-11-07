// ===============================
// 一、变量与数据类型
// ===============================

// 1. 定义变量
let name = "Fay";        // 可变变量（推荐使用 let）
const age = 29;          // 常量（不能被重新赋值）
var city = "Beijing";    // 旧语法（尽量少用 var）

console.log("name:", name, "age:", age, "city:", city);

// 2. 常见数据类型
let num = 42;                 // number
let str = "hello";            // string
let isHappy = true;           // boolean
let nothing = null;           // null（人为定义的“空”）
let notDefined;               // undefined（未赋值）
let obj = { a: 1, b: 2 };     // object
let arr = [1, 2, 3];          // array（其实是 object）
let symbol = Symbol("id");    // symbol（独一无二的值）

// typeof 检查类型
console.log(typeof num, typeof str, typeof isHappy, typeof obj, typeof arr); // arr 也是 object

// 3. 类型转换
console.log("10" + 5);     // 字符串拼接 -> "105"
console.log("10" - 5);     // 自动转为 number -> 5
console.log(Number("10")); // 显式转换 -> 10
console.log(Boolean(0));   // false（0、''、null、undefined 都是 false）

// 4. == vs ===
console.log(5 == "5");   // true，自动类型转换
console.log(5 === "5");  // false，严格比较类型和值都必须相同


// ===============================
// 二、运算与逻辑
// ===============================

let a = 10;
let b = 3;

// 1. 算术运算
console.log("加:", a + b);
console.log("减:", a - b);
console.log("乘:", a * b);
console.log("除:", a / b);
console.log("取余:", a % b);

// 2. 赋值运算
a += 5;  // 等价于 a = a + 5
console.log("a += 5:", a);

// 3. 比较运算
console.log("a > b:", a > b);
console.log("a <= b:", a <= b);

// 4. 逻辑运算
let x = true;
let y = false;
console.log("x && y:", x && y); // 与
console.log("x || y:", x || y); // 或
console.log("!x:", !x);         // 非

// 5. 模板字符串
let info = `我的名字是 ${name}, 我今年 ${age} 岁，来自 ${city}`;
console.log(info);


// ===============================
// 三、控制语句
// ===============================

// 1. if / else
if (age >= 18) {
  console.log("你是成年人");
} else {
  console.log("你是未成年人");
}

// 2. switch
let color = "blue";
switch (color) {
  case "red":
    console.log("红色");
    break;
  case "blue":
    console.log("蓝色");
    break;
  default:
    console.log("其他颜色");
}

// 3. for 循环
for (let i = 0; i < 3; i++) {
  console.log("for 循环 i =", i);
}

// 4. while 循环
let count = 0;
while (count < 2) {
  console.log("while count =", count);
  count++;
}

// 5. for...of 遍历数组
let numbers = [10, 20, 30];
for (let n of numbers) {
  console.log("for...of 值:", n);
}

// 6. for...in 遍历对象
let person = { name: "Fay", age: 29 };
for (let key in person) {
  console.log("for...in 键:", key, "值:", person[key]);
}

console.log("✅ 基础语法篇 1～3 已经掌握完毕！");
