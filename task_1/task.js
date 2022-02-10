function solveEquation(a, b, c) {
  let arr;
  let x  = b ** 2 - 4 * a * c
  if (x > 0) {
    let sqr1 = (-b + Math.sqrt(x) )/(2*a);
    let sqr2 = (-b - Math.sqrt(x) )/(2*a);
    arr = [sqr1, sqr2];
  } else if (x === 0) {
    let sqr = -b / (2 * a);
    arr = [sqr];
  } else {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    console.log(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution)) {
    console.log(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    console.log(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  } else {
    let totalAmount;
    paymentMonths = (Math.ceil((date - Date.now()) / 2678400000));
    percentPerMonth = percent / 100 / 12;
    creditBody = amount - contribution;
    creditPayment = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** paymentMonths) - 1)));
    totalAmount = creditPayment * paymentMonths;
    console.log(Number((totalAmount).toFixed(2)));
    return Number((totalAmount).toFixed(2))
  }
}
