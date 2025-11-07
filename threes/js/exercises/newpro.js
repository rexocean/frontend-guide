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
// const sym = Symbol("id");
// const objSym = { [sym]: 123, name: "SymObj" };
// console.log("objSym symbol value:", objSym[sym]);

const sym = Symbol("id");
// sym 表示唯一的 id
// [] 表示唯一的 id 的 key
const objSym = { [sym]: 123, name: "SymObj" };
console.log("objSym symbol value:", objSym[sym])



// // -----------------------
// // 6.3 Set 与 Map
// const s = new Set([1, 2, 2, 3]);
// console.log("Set size:", s.size, "has 2?", s.has(2));

// const m = new Map();
// m.set("a", 1);
// m.set("b", 2);
// console.log("Map get a:", m.get("a"));
// for (const [k, v] of m) {
//     console.log("Map entry:", k, v);
// }

const s = new Set([1, 2, 2, 3])
console.log("set size:", s.size, "has 2?", s.has(2))

const m = new Map();
m.set("a", 1);
m.set("b", 2);
console.log("map get a:", m.get("a"))
for (const [k, v] of m) {
    console.log("Map entry:", k, v)
}

// // -----------------------
// // 6.4 Promise、async/await（异步编程）
// function wait(ms, val) {
//     return new Promise((resolve) => setTimeout(() => resolve(val), ms));
// }
// // Promise 链
// wait(100, "hello").then(v => console.log("promise then:", v));

// // async/await 示例
// async function runAsync() {
//     const a = await wait(50, "A");
//     const b = await wait(50, "B");
//     return `${a}+${b}`;
// }
// runAsync().then(r => console.log("async result:", r));

// // Promise 并行示例（性能优化）
// async function parallel() {
//     const p1 = wait(50, "p1");
//     const p2 = wait(50, "p2");
//     const [r1, r2] = await Promise.all([p1, p2]); // 并行等待
//     return `${r1},${r2}`;
// }
// parallel().then(r => console.log("parallel result:", r));

// // 错误处理
// // async function errDemo() {
// //   try {
// //     await Promise.reject(new Error("oops"));
// //   } catch (e) {
// //     console.log("caught error:", e.message);
// //   }
// // }
// // errDemo();

// // -----------------------
// // 6.5 模块（说明）
// // -----------------------
// /*
// ES Module（现代写法）：
//   export function foo() {}
//   import { foo } from './foo.js';

// CommonJS（Node 早期）：
//   module.exports = { foo };
//   const { foo } = require('./foo');
// */
// // 注意：在单文件中无法直接 demo import/export，需在实际项目中拆文件测试。

// // -----------------------
// // 6.6 可选链（?.）与空值合并（??）
// const maybe = { a: { b: 2 } };
// console.log("optional chaining:", maybe?.a?.b); // 2
// console.log("optional chaining undefined:", maybe?.x?.y); // undefined
// console.log("nullish coalescing:", null ?? "fallback", 0 ?? "fallback"); // "fallback", 0

// // -----------------------
// // 6.7 BigInt（大整数）示例
// const big = 123456789012345678901234567890n;
// console.log("BigInt type:", typeof big);

// // -----------------------
// // 6.8 简单的正则示例（ES6 模式）
// const text = "apple, banana, cherry";
// const words = text.split(/\s*,\s*/);
// console.log("words:", words);

// // -----------------------
// // 6.9 迭代器与生成器（简单示例）
// function* idGen() {
//     let i = 0;
//     while (true) {
//         yield i++;
//     }
// }
// const gen = idGen();
// console.log("gen next:", gen.next().value, gen.next().value, gen.next().value);

// // -----------------------
// // 6.10 现代集合操作：数组扁平化、对象键值操作
// const user = {
//     id: 1,
//     profile: {
//         name: "Fay",
//         city: "Taipei"
//     }
// }
// const mixed = [1, [2, 3], 4];
// console.log("flat:", mixed.flat()); // [1,2,3,4]
// console.log("Object keys/values/entries:", Object.keys(user), Object.values(user), Object.entries(user));