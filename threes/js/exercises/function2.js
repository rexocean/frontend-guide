// 默认参数、rest 参数、arguments 对象

function greet(name = "Guest", msg = "Welcome") {
    console.log(`${msg}`, `${name}`)
}

greet();
greet(undefined, undefined)
greet(undefined, "hello")
greet("Alice", "hi")
// 传具体值，包括 null 也会替代默认值，默认顺序替代
greet(null)


// function outer() {
//     const x = 10; // outer 的局部变量
//     function inner() {
//         console.log(x); // 写的时候就确定：要找 outer 里的 x
//     }
//     return inner; // 把 inner 函数“带出”outer
// }

// const fn = outer();
// fn(); // 执行 fn（此时 outer 已执行完），仍输出 10——因为作用域早定了

const funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
}
funcs[0]()
funcs[1](); // 3（不是 1）
funcs[2](); // 3（不是 2）


function makeObj() {
    const obj = { num: 0 };
    return {
        add() { obj.num += 1; },
        log() { console.log(obj.num); }
    };
}
const o = makeObj();
o.add();
o.log(); // 1（正确）
// 注意：如果外层变量是基本类型（number/string），修改的是值，不会有这个问题


function makeObj2() {
    const obj = { num: 0 };

    return {
        add() { obj.num += 1; },
        log() { console.log(obj.num); }
    };
}

// const funcs = [];
// for (var i = 0; i < 3; i++) {
//     funcs.push(() => console.log(i)); // 闭包捕获的是“同一个 i”
// }
// funcs[0](); // 3（不是 0）
// funcs[1](); // 3（不是 1）
// funcs[2](); // 3（不是 2）

// function outer() {
//     const x = 10;

//     function inner() {
//         x = x + 1;
//         console.log(x);
//     }
//     return inner
// }
// const fn = outer();
// fn();


function outer() {
    let x = 10;
    function inner() {
        x = x + 1;
        console.log("inner 内部执行, x =", x); // 仅在内部打印
    }
}

// 调用 outer 即可，无需接收返回值（也接收不到）
outer();