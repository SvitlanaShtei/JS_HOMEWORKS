(function () {
  const totalSum = () => {
    let total = 0;
    return (value) => {
      total += value;
      return total;
    };
  };

  const accumulator = totalSum();

  console.log(accumulator(3));
  console.log(accumulator(5));
  console.log(accumulator(20));
})();
