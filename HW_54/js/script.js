(function () {
  const Svitlana = {
    name: "Svitlana",
    age: 34,
  };

  Function.prototype.myBind = function (obj, ...args) {
    const originalFunction = this;

    return function (...newArgs) {
      obj.tempFunc = originalFunction;
      const result = obj.tempFunc(...args, ...newArgs);
      delete obj.tempFunc;
      return result;
    };
  };

  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }

  const boundGreet = greet.myBind(Svitlana, "Hello");
  boundGreet("!");
})();
