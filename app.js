(function () {
  let sum,
    net = "25",
    tax = 5.0;
  sum = net + tax;
  console.log("sum: " + sum + "" + typeof sum);
  sum = parseFloat(net) + tax;
  console.log("sum: " + sum + "" + typeof sum);
  console.log("tax: " + tax + "" + typeof tax);
  tax = tax.toString();
  console.log("tax: " + tax + "" + typeof tax);
  net = "$" + net;
  console.log("net: " + net + "" + parseInt(net));
  console.log("net Not a Number? " + isNaN(net));
})();

(function () {
  let sum = 80 + 20;
  console.log("Addition: " + sum);
  let sub = sum - 50;
  console.log("Subtraction: " + sub);
  let mul = sum * 5;
  console.log("Multiplication: " + mul);
  let div = sum / 4;
  console.log("Division: " + div);
  let mod = sum % 2;
  console.log("Modulus: " + mod);
  let inc = ++sum;
  console.log("Increment: " + inc);
  let dec = --sum;
  console.log("Decrement: " + dec);
})();

(function () {
  let msg = "JavaScript";
  msg += " Fun";
  console.log("Add & concatenate: " + msg);
  let sum = 5.0;
  sum += 2.5;
  console.log("Add & assign decimal: " + sum);
  sum = 8;
  sum -= 4;
  console.log("Subtract & assign integer: " + sum);
  sum = 8;
  sum *= 4;
  console.log("Multiply & assign integer: " + sum);
  sum = 8;
  sum /= 4;
  console.log("Divide & assign integer: " + sum);
  sum = 8;
  sum %= 4;
  console.log("Modulus & assign integer: " + sum);
})();
