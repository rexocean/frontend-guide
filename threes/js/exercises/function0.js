
// 函数定位，函数是一等公民
function greet(name) {
    return "Hello, " + name;
}

// 函数可赋值、传参、返回
const say = greet;
console.log(say("tom"));

function doSth(fn) {
    console.log(fn("Jerry"))
}

doSth(greet)

// 2.类型约束,动态类型，运行时才确定类型
function add(a, b) {
    return a + b;
}

console.log(add(2, 3))
console.log(add("2", "3"))

//  3.作用域和闭包
function outer() {
    let x = 10;
    function inner() {
        console.log(x)
    }
    return inner;
}
const fn = outer;
fn();