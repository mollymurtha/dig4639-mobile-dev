const Adder = require("./Adder.js").default;

let adder = new Adder(
    {
      a: The sum of ${this.props.a} and ${this.props.b} is ${sum()},
      b: The sum of ${this.props.a} and ${this.props.b} is ${sum()},
    }
  );