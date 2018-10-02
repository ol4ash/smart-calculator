class SmartCalculator {
  constructor(initialValue) {
    this.formula=[String(initialValue)];
    this.result=0;
    this.powCalls=1; 
 }

  add(number) {  
    this.powCalls=1; 
    this.formula.push.apply(this.formula, ["+", String(number)]);
    this.result=eval(this.formula.join(""));
    
    return this;
  }
      
  subtract(number) {
    this.powCalls=1;
    this.formula.push.apply(this.formula, ["-", String(number)]);
    this.result=eval(this.formula.join(""));
 
    return this;
  }

  multiply(number) {
    this.powCalls=1;
    this.formula.push.apply(this.formula, ["*", String(number)]);
    this.result=eval(this.formula.join(""));
        
    return this;
 }

  devide(number) {
    this.powCalls=1;
    this.formula.push.apply(this.formula, ["/", String(number)]);
    this.result=eval(this.formula.join(""));

    return this;
  }

  pow(number) {
    this.num=this.formula[this.formula.length-this.powCalls];
    
    for (let i=0; i<this.powCalls;i++){
          this.formula.pop();
    }
    this.formula.push.apply(this.formula, ["Math.pow(", String(this.num), ",", String(number)]);
    for (let i=0; i<this.powCalls;i++){
          this.formula.push(")");
    }

    this.powCalls++;
    this.result=eval(this.formula.join(""));

    return this;
  }

  toString(){
  return this.result;
  }
}

module.exports = SmartCalculator;
