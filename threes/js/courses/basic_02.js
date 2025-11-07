// 02_functions_objects_arrays_es6.js
// 运行： node 02_functions_objects_arrays_es6.js
// 覆盖：函数（声明/表达式/箭头/默认/rest/闭包/this/绑定）
//       对象与数组（创建/访问/方法/原型/类/常用数组方法）
//       ES6+（解构/展开/模板字符串/Promise/async-await/Set/Map/Symbol 等）

console.log("====== 4. 函数：深入讲解 ======");

// -----------------------
// 4.1 函数声明 vs 函数表达式 vs 箭头函数
// -----------------------
function add(a, b) { // 函数声明（有提升 hoisting）
  return a + b;
}
const sub = function(a, b) { // 函数表达式（无提升，常用作回调）
  return a - b;
};
const mul = (a, b) => a * b; // 箭头函数（简洁，但没有自己的 this/bind/arguments）

console.log("add(2,3) =", add(2,3));    // 5
console.log("sub(5,2) =", sub(5,2));    // 3
console.log("mul(3,4) =", mul(3,4));    // 12

// -----------------------
// 4.2 参数：默认参数、可变参数（rest）、arguments
// -----------------------
function greet(name = "Guest", msg = "welcome") {
  return `${msg}, ${name}!`;
}
console.log(greet());                    // welcome, Guest!
console.log(greet("Fay", "Hi"));         // Hi, Fay!

function sumAll(...nums) { // rest 参数：收集到数组
  return nums.reduce((s, n) => s + n, 0);
}
console.log("sumAll(1,2,3,4) =", sumAll(1,2,3,4)); // 10

function showArgs() {
  console.log("arguments is array-like:", arguments); // 在普通函数中可用
}
showArgs("a","b");

// 在箭头函数里没有 arguments（若需要，可用 rest 参数）
const arrowShowArgs = (...args) => {
  console.log("arrow args:", args);
};
arrowShowArgs(1,2,3);

// -----------------------
// 4.3 作用域、闭包（重点）
// -----------------------
function makeCounter() {
  let count = 0; // 私有变量，被闭包捕获
  return {
    inc() { count += 1; return count; },
    dec() { count -= 1; return count; },
    get() { return count; }
  };
}
const c = makeCounter();
console.log("counter inc:", c.inc()); // 1
console.log("counter inc:", c.inc()); // 2
console.log("counter get:", c.get()); // 2

// 闭包案例：延迟执行捕获循环值（经典陷阱）
const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => i); // 用 let，i 每次都是块级作用域
}
console.log("funcs[0]()", funcs[0]()); // 0
console.log("funcs[1]()", funcs[1]()); // 1
console.log("funcs[2]()", funcs[2]()); // 2

// 若用 var，则会捕获共享的 i（结束为 3）——下面示例说明常见错误：
(function demoVar() {
  const arr = [];
  for (var j = 0; j < 3; j++) {
    arr.push((() => j)); // 所有函数共享同一个 j（var）
  }
  console.log("demoVar, expected 0 but got:", arr[0]()); // 3
})();

// -----------------------
// 4.4 this、bind、call、apply
// -----------------------
const obj = {
  x: 10,
  getX() { return this.x; }
};
console.log("obj.getX()", obj.getX()); // 10

const detached = obj.getX;
try {
  console.log("detached() =>", detached()); // undefined（严格模式下）或 全局的 x
} catch (e) {
  console.log("detached() error:", e.message);
}

// bind：返回新函数并固定 this
const bound = obj.getX.bind(obj);
console.log("bound() with bind =>", bound()); // 10

// call/apply：立即调用并指定 this
function showThis(a, b) {
  return `this.x=${this.x}, a=${a}, b=${b}`;
}
console.log(showThis.call(obj, 1, 2));
console.log(showThis.apply(obj, [3, 4]));

// 箭头函数与 this：箭头函数没有自己的 this，它继承自定义时的外部 this
const arrowObj = {
  id: 1,
  arrow: () => { return this; }, // this 在模块/全局或 undefined（取决于环境）
  normal() { return () => this; } // 返回箭头闭包，继承 this（即箭头函数保存外层 this）
};
console.log("arrowObj.arrow() === global/undefined ?", arrowObj.arrow());
console.log("arrowObj.normal()() ->", arrowObj.normal()()); // 指向 arrowObj

// -----------------------
// 4.5 立即执行函数、高阶函数、函数式风格
// -----------------------
(function IIFE() {
  console.log("IIFE 立即执行函数示例");
})();

function hof(fn) { // 高阶函数：接受函数或返回函数
  return function(...args) {
    console.log("before call");
    const r = fn(...args);
    console.log("after call");
    return r;
  }
}
const loggedAdd = hof(add);
console.log("loggedAdd(2,3) =>", loggedAdd(2,3));

// ===============================
// 5. 对象与数组：深度讲解与案例
// ===============================
console.log("\n====== 5. 对象与数组 ======");

// -----------------------
// 5.1 对象的创建与访问
// -----------------------
const person = {
  name: "Fay",
  age: 29,
  greet() { return `hi, I'm ${this.name}`; }
};
console.log(person.name, person["age"], person.greet());

// 动态添加/删除属性
person.job = "engineer";
console.log("after add job:", person.job);
delete person.job;
console.log("after delete job:", person.job);

// 工厂函数与构造函数
function PersonCtor(name, age) {
  this.name = name;
  this.age = age;
}
PersonCtor.prototype.say = function() { return `proto: ${this.name}`; };
const p1 = new PersonCtor("A", 20);
console.log("p1.say():", p1.say()); // 来自原型链

// class 语法（语法糖）
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() { return `${this.name}:${this.age}`; }
  static hello() { return "hello from class"; }
}
const p2 = new PersonClass("B", 25);
console.log("p2.info()", p2.info(), PersonClass.hello());

// -----------------------
// 5.2 深浅拷贝示例
// -----------------------
const src = { a: 1, b: { c: 2 } };
const shallow = Object.assign({}, src);
const shallow2 = { ...src }; // spread
shallow.b.c = 999;
console.log("src.b.c after shallow change:", src.b.c); // 会变 -> 999（浅拷贝）

// 深拷贝（简单场景）
const deep = JSON.parse(JSON.stringify(src));
deep.b.c = 123;
console.log("src.b.c after deep change:", src.b.c); // 仍然 999

// -----------------------
// 5.3 数组与常用操作（map/filter/reduce/find/some/every）
// -----------------------
const arr = [1,2,3,4,5];

const mapped = arr.map(x => x * 2); // [2,4,6,8,10]
console.log("map:", mapped);

const filtered = arr.filter(x => x % 2 === 0); // [2,4]
console.log("filter (even):", filtered);

const reduced = arr.reduce((acc, x) => acc + x, 0); // sum
console.log("reduce sum:", reduced);

const found = arr.find(x => x > 3); // 4
console.log("find >3:", found);

console.log("some >4:", arr.some(x => x > 4)); // true
console.log("every >0:", arr.every(x => x > 0)); // true

// forEach（副作用），map（返回新数组）
arr.forEach((v, i) => console.log(`forEach idx=${i} val=${v}`));

// 扁平化（flat）与 flatMap
const nested = [1, [2,3], [4, [5]]];
console.log("flat 1:", nested.flat(1)); // [1,2,3,4,[5]]
console.log("flat infinity:", nested.flat(Infinity)); // 全展平

// 数组去重（Set）
const dup = [1,2,2,3,3,3];
console.log("unique via Set:", [...new Set(dup)]);

// 合并数组（spread）
const combined = [...arr, ...mapped];
console.log("combined length:", combined.length);

// -----------------------
// 5.4 对象/数组的解构与默认值
// -----------------------
const user = { id: 1, profile: { name: "Fay", city: "Taipei" } };
const { id: userId, profile: { name: profileName } } = user;
console.log("destruct userId, profileName:", userId, profileName);

const [first, second, ...restArr] = [10, 20, 30, 40];
console.log("first second rest:", first, second, restArr);

// -----------------------
// 5.5 可变与不可变思维（重要）
//
// 操作数组/对象时注意是否需要原地修改（mutate）或返回新对象（immutable）
// -----------------------
const original = [1,2,3];
// 不可变：返回新数组
const plusOne = original.map(x => x + 1);
console.log("original unchanged:", original, "plusOne:", plusOne);
// 可变：push/pop 会改变原数组
original.push(4);
console.log("original after push:", original);

// ===============================
// 6. ES6+ 进阶特性（精选）
// ===============================
console.log("\n====== 6. ES6+ 特性（选读） ======");

// -----------------------
// 6.1 模板字符串（方便多行和插值）
const who = "Fay";
console.log(`Hello ${who}
This is a multi-line string with expression: ${2 + 3}`);

// -----------------------
// 6.2 Symbol（独一无二的键）
const sym = Symbol("id");
const objSym = { [sym]: 123, name: "SymObj" };
console.log("objSym symbol value:", objSym[sym]);

// -----------------------
// 6.3 Set 与 Map
const s = new Set([1,2,2,3]);
console.log("Set size:", s.size, "has 2?", s.has(2));

const m = new Map();
m.set("a", 1);
m.set("b", 2);
console.log("Map get a:", m.get("a"));
for (const [k,v] of m) {
  console.log("Map entry:", k, v);
}

// -----------------------
// 6.4 Promise、async/await（异步编程）
function wait(ms, val) {
  return new Promise((resolve) => setTimeout(() => resolve(val), ms));
}
// Promise 链
wait(100, "hello").then(v => console.log("promise then:", v));

// async/await 示例
async function runAsync() {
  const a = await wait(50, "A");
  const b = await wait(50, "B");
  return `${a}+${b}`;
}
runAsync().then(r => console.log("async result:", r));

// Promise 并行示例（性能优化）
async function parallel() {
  const p1 = wait(50, "p1");
  const p2 = wait(50, "p2");
  const [r1, r2] = await Promise.all([p1, p2]); // 并行等待
  return `${r1},${r2}`;
}
parallel().then(r => console.log("parallel result:", r));

// 错误处理
// async function errDemo() {
//   try {
//     await Promise.reject(new Error("oops"));
//   } catch (e) {
//     console.log("caught error:", e.message);
//   }
// }
// errDemo();

// -----------------------
// 6.5 模块（说明）
// -----------------------
/*
ES Module（现代写法）：
  export function foo() {}
  import { foo } from './foo.js';

CommonJS（Node 早期）：
  module.exports = { foo };
  const { foo } = require('./foo');
*/
// 注意：在单文件中无法直接 demo import/export，需在实际项目中拆文件测试。

// -----------------------
// 6.6 可选链（?.）与空值合并（??）
const maybe = { a: { b: 2 } };
console.log("optional chaining:", maybe?.a?.b); // 2
console.log("optional chaining undefined:", maybe?.x?.y); // undefined
console.log("nullish coalescing:", null ?? "fallback", 0 ?? "fallback"); // "fallback", 0

// -----------------------
// 6.7 BigInt（大整数）示例
const big = 123456789012345678901234567890n;
console.log("BigInt type:", typeof big);

// -----------------------
// 6.8 简单的正则示例（ES6 模式）
const text = "apple, banana, cherry";
const words = text.split(/\s*,\s*/);
console.log("words:", words);

// -----------------------
// 6.9 迭代器与生成器（简单示例）
function* idGen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const gen = idGen();
console.log("gen next:", gen.next().value, gen.next().value, gen.next().value);

// -----------------------
// 6.10 现代集合操作：数组扁平化、对象键值操作
const mixed = [1, [2,3], 4];
console.log("flat:", mixed.flat()); // [1,2,3,4]
console.log("Object keys/values/entries:", Object.keys(user), Object.values(user), Object.entries(user));

// -----------------------
// 6.11 小结/实践建议（代码风格）
/*
- 优先使用 const/let，避免 var。
- 对于不可变需求，优先返回新对象/数组（map/filter/spread）。
- 异步代码用 async/await 更可读（错误处理用 try/catch）。
- 理解 this 的绑定规则（普通函数/箭头函数/绑定）。
- 多用小函数（高内聚、低耦合），函数式工具如 map/filter/reduce 能提高表达力。
*/

console.log("\n✅ 本文件覆盖：函数（声明/表达式/箭头/默认/rest/闭包/this/bind/call/apply）、对象（原型/类/深浅拷贝）、数组（map/filter/reduce/find/every/some/flat）、ES6+（解构/展开/模板/Promise/async/Set/Map/Symbol/BigInt/生成器等）");
