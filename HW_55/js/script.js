'use strict';

//Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
    }
};

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

//Решение состоит в том, чтобы возвращать сам объект из каждого вызова.

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// Мы также можем записать один вызов на одной строке. Для длинных цепей вызовов это более читабельно:

ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0