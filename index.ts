function example(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}
let manoj = example(10, 10);
console.log('hello' + manoj);

console.log('hello');

function opt(a: number, b?) {
  return b; //default value of optional parameter is undefined
}
console.log(opt(1));

var i = 123;
var isNumber;
var showmessage;
isNumber = i > 0 || i <= 0;
showmessage = i > 0 || i <= 0 ? 'this is a number' : 'this is not a number';

console.log(showmessage);

console.log(isNumber);

var j; //undefined,0,[],NaN,null
if (j) {
  console.log('not falcy value');
} else {
  console.log(' falcy value');
}

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((ele, index) => {
  console.log(ele, index + 1);
});

arr.map((ele, index) => {
  if (ele == 1 || ele == 2 || ele == 3) {
    console.log(ele * 2);
  }
  console.log(ele);
});

arr
  .filter((ele, index) => {
    if (ele == 1 || ele == 2 || ele == 3) {
      return true;
      //console.log(ele)
    } else {
      return false;
      //console.log(ele*2)
    }
  })
  .map((ele, index) => {
    console.log('filter' + ele * 2);
  });

var arr2 = [1, 2, 3, 4, 5, 6];
arr2.find(ele => {
  if (ele % 2 == 0) {
    console.log(ele);
  } else {
    console.log(`${ele} is non divisible by 2 `);
  }
});

class class_one {
  public name: string = 'Manoj';
  public age: number = 24;
  public myFun() {
    return this.name;
  }
}

class class_two extends class_one {
  public id: any;
  public salary: number;
  public getSalary(a: number) {
    this.salary = a;
    return a;
  }
}

let object: class_two = new class_two();
console.log(object.name, object.age, object.getSalary(100000));
console.log(object.myFun());

//Interface implementation by json
interface interface_one {
  name: string;
  age: number;
  sex: string;
}
interface interface_two extends interface_one {
  salary: number;
  empid: number;
}

let obj: interface_one = {
  name: 'Manoj',
  age: 24,
  sex: 'male'
};

console.log(obj.name, obj.age, obj.sex);

//implementation by classes
class class_interface implements interface_two {
  name = 'Kumar';
  age = 30;
  salary = 1000000;
  empid = 54544;
}

let obj1 = new class_interface();
console.log(obj1.name, obj1.age, obj1.salary, obj1.empid);

function exmpfun(a: number, b: number): void {
  console.log(a + b);
}
var jj;
jj = exmpfun(10, 10);
console.log(jj);

class human {
  public name: string;
  private age: number;
  public color: string;
  private showprivateData;

  constructor(name, age, color, privateData) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.showprivateData = privateData;
  }
  walk() {
    if (this.age > 90) {
      console.log(`I'm dead`);
    } else {
      console.log(`I'm alive`);
    }
  }
  getAge(): number {
    if (this.showprivateData) {
      return this.age;
    } else {
    }
  }
}
let Me = new human('Manoj', 24, 'white', true);
Me.walk();
console.log(Me.getAge());

let You = new human('Test', 121, 'black', true);
You.walk();
console.log(You.getAge());
