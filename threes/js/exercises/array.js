const { profile } = require("console");



const arr = [1, 2, 3, 4, 5];
const mappings = arr.map(x => x * 2);
console.log("map:", mappings)

const filtered = arr.filter(x => x % 2 === 0);
console.log("filtered:", filtered)

const reduced = arr.reduce((acc, x) => acc + x, 0);
console.log("reduce sum:", reduced)

const find = arr.find(x => x > 3);
console.log("find:", find)

console.log("some > 4:", arr.some(x => x > 4));
console.log("every > 0:", arr.every(x => x > 0));

arr.forEach((v, i) => console.log(`forEach idx = ${i}, val = ${v}`));
// flat(n) 的参数 n 表示 “最多拆多少层嵌套数组”。flat(1) 即 “只拆第 1 层的嵌套数组”，更深层的不拆。
// 最外层是 0 层，如 1，[2,3]是 1 层
const nested = [1, [2, 3], [4, [5]]];
console.log("flat 0:", nested.flat(0));
console.log("flat 1:", nested.flat(1));
console.log("flat 2:", nested.flat(2));

console.log("flat infinity:", nested.flat(Infinity))//全部展平

// 展开运算符 ... 可将 Set 对象转换回数组
const dup = [1, 2, 2, 3, 3, 4]
console.log("unique via set:", [...new Set(dup)])

// ... 可将数组 “展开” 为逗号分隔的元素列表，常用于合并数组、复制数组等
const merge = [...arr, mappings]
console.log("merged arr:", merge)


const [first, second, ...restArr] = [10, 20, 30, 40];
console.log("first second rest:", first, second, restArr);

// const arr = [1, 2, 3, 4, 5];

// const mapped = arr.map(x => x * 2); // [2,4,6,8,10]
// console.log("map:", mapped);

// const filtered = arr.filter(x => x % 2 === 0); // [2,4]
// console.log("filter (even):", filtered);

// const reduced = arr.reduce((acc, x) => acc + x, 0); // sum
// console.log("reduce sum:", reduced);

// const found = arr.find(x => x > 3); // 4
// console.log("find >3:", found);

// console.log("some >4:", arr.some(x => x > 4)); // true
// console.log("every >0:", arr.every(x => x > 0)); // true

// // forEach（副作用），map（返回新数组）
// arr.forEach((v, i) => console.log(`forEach idx=${i} val=${v}`));

// // 扁平化（flat）与 flatMap
// const nested = [1, [2, 3], [4, [5]]];
// console.log("flat 1:", nested.flat(1)); // [1,2,3,4,[5]]
// console.log("flat infinity:", nested.flat(Infinity)); // 全展平

// // 数组去重（Set）
// const dup = [1, 2, 2, 3, 3, 3];
// console.log("unique via Set:", [...new Set(dup)]);

// // 合并数组（spread）
// const combined = [...arr, ...mapped];
// console.log("combined length:", combined.length);



// // -----------------------
// // 5.5 可变与不可变思维（重要）
// //
// // 操作数组/对象时注意是否需要原地修改（mutate）或返回新对象（immutable）
// // -----------------------
// const original = [1, 2, 3];
// // 不可变：返回新数组
// const plusOne = original.map(x => x + 1);
// console.log("original unchanged:", original, "plusOne:", plusOne);
// // 可变：push/pop 会改变原数组
// original.push(4);
// console.log("original after push:", original);


