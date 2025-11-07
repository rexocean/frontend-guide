console.log("\n====== 5. 对象与数组 ======");

// -----------------------
// 5.1 对象的创建与访问
// -----------------------

const person = {
    name: "fay",
    age: 29,
    greet() {
        return `hi, I'm ${this.name}`;
    }
}
console.log(person.name, person["name"], person["age"], person.greet())

person.job = 'engineer'
console.log("after add job:", person.job)
delete person.job
console.log("after delete job:", person.job)

function PersonCtor(name, age) {
    this.name = name;
    this.age = age;
}
PersonCtor.prototype.say = function () {
    return `I'm ${this.name}, I'm ${this.age} yold`;
}
const p1 = new PersonCtor("A", 20);
console.log("p1.say():", p1.say())


// const person = {
//     name: "Fay",
//     age: 29,
//     greet() { return `hi, I'm ${this.name}`; }
// };
// console.log(person.name, person["age"], person.greet());

// 动态添加/删除属性
// person.job = "engineer";
// console.log("after add job:", person.job);
// delete person.job;
// console.log("after delete job:", person.job);

// // 工厂函数与构造函数
// function PersonCtor(name, age) {
//     this.name = name;
//     this.age = age;
// }
// PersonCtor.prototype.say = function () { return `proto: ${this.name}`; };
// const p1 = new PersonCtor("A", 20);
// console.log("p1.say():", p1.say()); // 来自原型链


class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name}:${this.age}`;
    }

    static hello() {
        // this指的是原本的类，不可能是对象
        return `hello from class;${this.name}`
    }
}

const p2 = new PersonClass("B", 25)
console.log("p2.info():", p2.info(), PersonClass.hello())

// // class 语法（语法糖）
// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     info() { return `${this.name}:${this.age}`; }
//     static hello() { return "hello from class"; }
// }
// const p2 = new PersonClass("B", 25);
// console.log("p2.info()", p2.info(), PersonClass.hello());

// // -----------------------
// // 5.2 深浅拷贝示例
// // -----------------------
// const src = { a: 1, b: { c: 2 } };
// const shallow = Object.assign({}, src);
// const shallow2 = { ...src }; // spread
// shallow.b.c = 999;
// console.log("src.b.c after shallow change:", src.b.c); // 会变 -> 999（浅拷贝）

// // 深拷贝（简单场景）
// const deep = JSON.parse(JSON.stringify(src));
// deep.b.c = 123;
// console.log("src.b.c after deep change:", src.b.c); // 仍然 999


const src = {
    a: 1,
    b: {
        c: 2
    }
}
const shallow = Object.assign({}, src)
const shallow2 = { ...src }
shallow.b.c = 999
console.log("src.b.c after shallow change:", src.b.c)
console.log("shallow2.b.c after shallow change:, shallow2:", shallow2.b.c)
console.log("src after shallow change:", src)

const deep = JSON.parse(JSON.stringify(src));
deep.b.c = 123;
console.log("src.b.c after deep change:", src.b.c)



const user = {
    id: 1,
    profile: {
        name: "Fay",
        city: "Taipei"
    }
}
const {
    id: userId,
    profile: {
        name: profileName
    }
} = user;

console.log("destruct userId, profileName:", userId, profileName)
