(function () {
  const Svitlana = {
    name: "Svitlana",
    age: 34,
  };

  Function.prototype.myApply = function (context, argsArray) {
    context = context || globalThis;

    const uniqueKey = Symbol("tempFunction");
    context[uniqueKey] = this;

    const result = argsArray
      ? context[uniqueKey](...argsArray)
      : context[uniqueKey]();

    delete context[uniqueKey];

    return result;
  };

  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }

  greet.myApply(Svitlana, ["Hello", "!"]);
})();
