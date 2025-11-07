/**********************************************************
 *  JavaScript Day1 + Day2 整合 Demo
 *  跑法：node base1.js
 *  适用：Node.js 环境（不包含 DOM/BOM）
 **********************************************************/

console.log("\n=== A — 变量 var / let / const 与提升 ===");

// var 提升
(function() {
  console.log("[var 提升] x =", x); // undefined（声明被提升，但赋值未提升）
  var x = 42;
  console.log("[var 提升] x =", x); // 42
})();

// let 暂时性死区
(function() {
  try {
    console.log(y); // ReferenceError
  } catch (e) {
    console.log("[let TDZ] 访问前报错：", e.message);
  }
  let y = "hello";
  console.log("[let TDZ] y =", y); // hello
})();

// 不声明直接赋值（非严格模式下会挂到全局）
(function() {
  z = 123;
  console.log("[未声明赋值] 全局变量 z =", global.z); // Node 用 global，浏览器用 window
  delete global.z;
})();

/**********************************************************/
console.log("\n=== B — 数据类型与转换 ===");

console.log("[typeof 123] =", typeof 123);        // number
console.log("[typeof 'abc'] =", typeof "abc");    // string
console.log("[typeof true] =", typeof true);      // boolean
console.log("[typeof undefined] =", typeof undefined); // undefined
console.log("[typeof null] =", typeof null);      // object (JS历史遗留bug)
console.log("[Array.isArray([1,2])] =", Array.isArray([1, 2])); // true

// 转换
console.log("[Number('42') + 8] =", Number("42") + 8);
console.log("[parseInt('3.14')] =", parseInt("3.14"));
console.log("[Boolean(0)] =", Boolean(0)); // false
console.log("[Boolean('0')] =", Boolean("0")); // true

/**********************************************************/
console.log("\n=== C — 运算符 & 短路逻辑 ===");

console.log("[1 == '1'] =", 1 == "1");   // true（类型转换）
console.log("[1 === '1'] =", 1 === "1"); // false（严格比较）
console.log("[0 || 'abc'] =", 0 || "abc"); // abc
console.log("[123 && 456] =", 123 && 456); // 456

/**********************************************************/
console.log("\n=== D — 流程控制 ===");

let age = 20;
if (age >= 18) {
  console.log("已成年");
} else {
  console.log("未成年");
}

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("是苹果");
    break;
  default:
    console.log("未知水果");
}

let score = 85;
let grade = score >= 60 ? "及格" : "不及格";
console.log("成绩：", grade);

/**********************************************************/
console.log("\n=== E — 数组方法 ===");

let arr = [1, 2, 3];
arr.push(4);
console.log("push:", arr);
arr.pop();
console.log("pop:", arr);
arr.unshift(0);
console.log("unshift:", arr);
arr.shift();
console.log("shift:", arr);

// map / filter / reduce
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log("map:", doubled);

let evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens);

let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log("reduce sum:", sum);

/**********************************************************/
console.log("\n=== F — 函数与 this ===");

function add(a, b) {
  return a + b;
}
console.log("普通函数 add:", add(3, 4));

const arrowAdd = (a, b) => a + b;
console.log("箭头函数 arrowAdd:", arrowAdd(5, 6));

// this 普通函数
let obj1 = {
  value: 100,
  show: function() {
    console.log("普通函数 this.value =", this.value);
  }
};
obj1.show();

// this 箭头函数
let obj2 = {
  value: 200,
  show: () => {
    console.log("箭头函数 this.value =", this.value); // undefined
  }
};
obj2.show();

/**********************************************************/
console.log("\n=== G — 作用域与闭包 ===");

function outer() {
  let counter = 0;
  return function() {
    counter++;
    console.log("闭包 counter =", counter);
  };
}
let countFn = outer();
countFn(); // 1
countFn(); // 2
countFn(); // 3

/**********************************************************/
console.log("\n=== H — 练习题示例 ===");

// 练习 1：平均值
function avg(arr) {
  return arr.reduce((sum, n) => sum + n, 0) / arr.length;
}
console.log("[平均值]", avg([1, 2, 3, 4, 5]));

// 练习 2：较大值
function max(a, b) {
  return a > b ? a : b;
}
console.log("[较大值]", max(10, 20));

// 练习 3：任意和
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("[任意和]", sumAll(1, 2, 3, 4, 5));
