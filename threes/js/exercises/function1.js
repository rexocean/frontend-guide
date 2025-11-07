

/** 
 * Function Declaration
 * 函数声明独立存在，不嵌套在赋值语句或其他表达式中
 * 核心特性：提升（Hoisting）
    提升是指在代码执行前，JS 引擎会先扫描并创建函数的绑定。
    这意味着可以在函数声明的代码之前调用它，不会报错。

    // 先调用，再声明，仍能正常执行
    sayHi(); 
    function sayHi() { console.log("Hi"); }
*/
function add(a, b) {
    return a + b
}

/**
 * Function Expression
 * 把函数作为值赋值给变量，如const 变量名 = function(参数) { 函数体 }
 * 核心特性：变量提升≠函数可调用
    变量名会被提升，但提升后的值是undefined，而非函数本身。
    必须在赋值语句之后调用函数，否则会因 “调用 undefined” 报错。
 */
const sub = function (a, b) {
    return a - b
}

/**
 * Arrow Function 更简洁的函数表达式
 * (参数) => { 函数体 } （单行可简化为参数 => 返回值）
    核心特性：无独立 this + 功能限制
        没有自己的this：箭头函数的this会 “继承” 外层代码块的this，不会随调用方式改变。
        无arguments对象：不能用arguments获取所有参数，需用剩余参数（如...args）替代。
        不能new：无法作为构造函数创建实例，用new调用会报错。
        不能yield：不能作为生成器函数，无法配合Generator使用。
 */
const mul = (a, b) => { return a * b }
const devide = (a, b) => a / b

// 当使用 {} 包裹函数体时，必须显式使用 return 才能返回结果
// 函数体只有一句代码且需要返回结果时，可以省略 {} 和 return

console.log("a + b", add(2, 3))
console.log("a - b", sub(2, 3))
console.log("a * b", mul(2, 3))
console.log("a / b", devide(2, 3))


// 方法论和应用场景

/**
 * 总结
 * 一句话选函数
    想提前调用 → 用函数声明；
    想控制调用时机 / 传回调 → 用函数表达式（或箭头函数）；
    不需要独立 this、想简化代码 → 用箭头函数；
    涉及对象方法、构造函数、arguments → 坚决不用箭头函数。
 */


/**
 * 实际应用
 * 1. 避开箭头函数的 “雷区”
    场景 1：不要用于对象方法
    场景 2：不要用于构造函数
    场景 3：不要用于需要arguments的场景

    2. 函数声明与表达式的场景选择
    选函数声明：需要 “提前调用” 时
    选函数表达式：需要 “控制调用时机” 时

    3. 性能无需过度纠结
    三种函数的性能差异极小，在绝大多数业务场景中可忽略。
    优先根据 “提升需求” 和 “this 特性” 选择函数类型，而非纠结性能
 */

// 箭头函数的this不指向对象本身，会导致方法无法访问对象属性。
const person = {
    name: "Tom",
    // 错误，箭头函数没有自己的 this，会指向外层（如 window），不是 person
    sayName: () => { console.log(this.name) }
}
person.sayName();

// 箭头函数没有 prototype，用 new 调用会报错
// const User = (name) => {
//     // 错误：Uncaught TypeError， User is not a structor
//     this.name = name
// }
// new User("Alice")

// 箭头函数没有 arguments，需改用剩余函数（变参），用...args获取所有函数
// const sum1 = () => { return args[0] + args[1] };
const sum2 = (...args) => { return args[0] + args[1] };
// console.log("sum1:", sum1(1, 2))
console.log("sum2:", sum2(1, 2, 3, 4))


// 提升，可以在函数声明之前调用
sayHi();
function sayHi() {
    console.log("hi")
}

// sayWhat(); 错误,此时 sayWhat undefined 不能调用
const sayWhat = function () {
    console.log("say what?")
}
sayWhat();


// 作为回调函数，常用函数表达式（箭头函数也是表达式）
setTimeout(function () {
    console.log("延迟执行")
}, 100)

setTimeout(() => {
    console.log("延迟执行")
}, 100)

setTimeout(delay, 100)
// setTimeout(delay(), 100)

function delay() {
    console.log("延迟执行")
}

// delay 和 delay() 的区别是理解这个问题的核心，本质是 “函数引用” 和 “函数调用” 的区别 
// delay 是 “函数本身” 没有加括号，这表示 **“引用这个函数”**，它的值就是函数本身。 （符合 setTimeout 需要的参数类型）。
// delay() 函数调用（是函数的返回值） 是 “执行函数后得到的结果”（可能是任何值，这里是 undefined，不符合要求）。