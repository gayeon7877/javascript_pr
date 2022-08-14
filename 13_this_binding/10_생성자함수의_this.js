function Person(name, age){
    //아래의 this는 객체변수의 이름에 바인딩된다.
    this.name = name;
    this.age = age;
}

const duly = new Person('둘리', 24);

console.log('duly =', duly);