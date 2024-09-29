const calcElem = document.querySelector(".calculator");
const outputElem = document.querySelector(".calculator .output");
const keysElem = document.querySelector(".calculator .keys");

class Key {
       constructor(key, calculator) {
              this.key = key;
              this.calculator = calculator;
              this.func = key.className.split(" ")[1].slice(1);
              this.assignEvents();
       }

       assignEvents() {
              this.key.addEventListener("click", () => {
                     let char = this.func;
                     if (["Add", "Sub", "Mul", "Div", "Point"].includes(this.func)) {
                            char = this.eventForSpecialChars();
                     }
                     this.calculator.enterValue(char);
              });
       }

       eventForSpecialChars() {
              switch (this.func) {
                     case "Add":
                            return "+"
                     case "Sub":
                            return "-"
                     case "Div":
                            return "/"
                     case "Mul":
                            return "*"
                     case "Point":
                            return "."
                     default:
                            return ""
              }
       }
}

class Output {
       constructor(elem) {
              this.elem = elem;
       }
}

class Calculator {
       constructor(calculator, output, keys) {
              this.calculator = calculator;
              this.output = new Output(output);
              this.keys = {};

              for (let key of keys.children) {
                     let keyObj = new Key(key, this);

                     this.keys[keyObj.func] = keyObj;
              }

              console.log(this.keys);
       }

       enterValue(value) {
              if (this.output.elem.textContent === "0") {
                     this.output.elem.textContent = "";
              }
              this.output.elem.textContent += value;
       }
}

calc = new Calculator(calcElem, outputElem, keysElem);
