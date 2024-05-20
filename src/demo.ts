import test_default_func, { test_func } from "./TestExport";

function ex1_if_else(): number {
  const max: number = 102;
  let counter: number = 100;

  counter < max ? counter++ : counter = 1;
  return counter;
}

function ex2_if_elseif() {
  let x: number = 10, y = 20;

  if (x > y && 1) {
    console.log("x is greater than y.");
  } else if (x < y) {
    console.log("x is less than y."); // This will be executed
  } else if (x == y) {
    console.log("x is equal to y");
  }
}

function ex3_loop() {
  //   let actors: Array<number> = [2, 3, 4];
  let actors: number[] = [2, 3, 4];
  for (let index in actors) {
    console.log("index", index); // print index
    console.log("value", actors[index]); // print value
  }
}

function ex4_loop() {
  let actors: number[] = [2, 3, 4];
  for (let actor of actors) {
    console.log("val", actor); // print value
  }
}

function ex5_loop() {
  let actors: number[] = [2, 3, 4];
  actors.forEach(function(value) {
    console.log(value);
  });
}

function ex6_const() {
  const num: number = 100;
  // num = 200; // Compiler Error
}

function ex7_array() {
  let values_1: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
  let values_3: number[] = [2, 3, 4];
}

function ex8_array() {
  let values: number[] = [2, 3, 4];
  values.push(5);
  values.push(6);
  console.log(values);
  console.log(typeof values);
}

function ex9_assign_array() {
  let res: number[] = [2, 3, 4];
  let data: number[] = [];
  data = [...data, ...res];
  console.log(data);
}

function ex10_object() {
  // object type represents all values that are not in primitive types.

  let employee: object;
  employee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer",
  };

  console.log(employee);
  // console.log(employee["age"]);
  // console.log(employee.age); //error
  console.log(typeof employee);

  // good
  let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
  } = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer",
  };
  console.log(employee2["age"]);
  console.log(employee2.age); // work
  console.log(typeof employee2);
}

let ex11_anonymous_func = function() {
  console.log("Hello TypeScript!");
};

let ex12_anonymous_arrow_func = () => {
  // arrow function
  console.log("Hello TypeScript arrow_func!");
};

let ex13_anonymous_arrow_func = (x: number, y: number): number => {
  return x + y;
};

function ex14_async() {
  interface Employee {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
  }
  const fetchEmployees = async () => {
    const api = "http://dummy.restapiexample.com/api/v1/employees";
    try {
      const res = await fetch(api);
      // await 等待上一步的 Promise 解析後，再解析它的 JSON 資料
      const data = await res.json();
      return res;
    } catch (error) {
      if (error) {
        // return error.message;
      }
    }
  };

  fetchEmployees();
}

function ex15_filter() {
  const numbers = [10, 15, 20, 30, 40];
  const result = numbers.filter((number) => {
    return number > 20;
  });
  console.log(result);

  const result_2 = numbers.filter((number) => number === 10);
  console.log(result_2);
}

function ex16_find() {
  let values: number[] = [2, 3, 4];
  const find_num_1 = values.find(elem => elem === 3);
  console.log(find_num_1);
  const find_num_2 = values.find(elem => elem === 0);
  console.log(find_num_2);
}

function ex17_find() {
  let datas = [{
    empCode: 123,
    empName: "name123",
  }, {
    empCode: 1,
    empName: "name1",
  }];
  // Object is possibly 'undefined'
  // const find_obj = datas.find(elem => elem.empCode === 123).empName;
  // console.log(find_obj);

  //   error
  //   const find_obj_2 = datas.find(elem => elem.empCode === 999).empName;
  //   console.log(find_obj_2);

  //   work
  const find_obj_2 = datas.find(elem => elem.empCode === 999)?.empName;
  console.log(find_obj_2);
}

function ex18_type_bool() {
  let show = true;
  if (show === true) {
    show = false;
  } else {
    show = true;
  }
  console.log(show);
  //   equal
  //   show = !show;
  //   console.log(show);
}

function ex19_type_any() {
  let show: any;
  console.log(typeof show);
  show = 1;
  console.log(typeof show);
}

function ex20_type_void(): void {
  console.log("sss");
}

function ex21_readonly(): void {
  interface IEmployee {
    readonly empCode: number;
    empName: string;
  }
  let emp: IEmployee = {
    empCode: 123,
    empName: "name1",
  };
  emp.empName = "sdasd";
  // emp.empCode = 22; // Compiler Error
}

function ex22_type_aliases(): void {
  type alphanumeric = string | number;
  let input: alphanumeric;
  input = 100; // valid
  input = "Hi"; // valid
  // input = false; // Compiler error
}

function ex23_string_literal(): void {
  let input: "a1" | "a2" | "a3";
  input = "a1"; // valid
  input = "a3"; // valid
  // input = false; // Compiler error
}

function ex24_tuple_type() {
  let skill: [string, number];
  // order
  skill = ["Programming", 5]; // valid
  // skill = [5, "Programming"]; // Compiler error
}

function ex25_fun_optional_param(a: number, b: number, c?: number) {
  // you use the ? after the parameter name.
  console.log(a);
  console.log(b);
  console.log(c);
  if (typeof c === "undefined") {
    console.log("c is undefined");
  }
}

function ex26_type_intersection(): void {
  console.log(1 | 2); // bit OR
  console.log(1 & 2); // bit AND
}

function ex27_concat_string(): void {
  // method 1
  let str1: string = "Hello";
  let str2: string = "World";
  console.log(str1 + " - " + str2);

  // method 2
  let str3: string = "Hello";
  let str4: string = "World";
  // template string ``
  console.log(`${str3} ${str4}`);

  // method 3
  let str5: string = "Hello";
  let str6: string = "World";
  console.log(str5.concat(" __ ", str6));

  // method 4
  let str7: string = "Hello";
  let str8: string = "World";
  console.log([str1, str2].join(" "));
}

function ex28_export(): void {
  test_func();
  test_default_func();
}

function ex29_class(): void {
  class User {
    public name: string; // public default
    private age: number;
    protected other: string;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this.other = "tmp";
    }
    showName(): void {
      console.log(`${this.name} _ ${this.age}`);
    }
  }
  let user = new User("twtrubiks", 29);
  user.name;
  // user.age; // compile error
  user.showName();
}

function ex30_abstract_class(): void {
  abstract class Person {
    constructor(name: string) {}
    abstract showName(): void;
  }
  // let employee = new Person('user'); // error

  class Employee implements Person {
    constructor(public name: string) {}
    showName() {
      console.log(this.name);
    }
  }

  let emp = new Employee("HI");
  emp.showName();
}

function ex31_generic_classes(): void {
  class User<T> {
    content: T;

    constructor(content: T) {
      this.content = content;
    }

    getContent(): T {
      return this.content;
    }
  }

  const numberUser = new User<number>(123);
  console.log(numberUser.getContent()); // 123

  const stringUser = new User<string>("Hello, TypeScript");
  console.log(stringUser.getContent()); // Hello, TypeScript
}

function ex32_interface() {
  interface IEmployee {
    empCode: number;
    empName: string;
    // getSalary: (number) => number; // arrow function
    // getManagerName(number): string;
  }

  let emp: IEmployee = {
    empCode: 123,
    empName: "name1",
  };

  console.log(emp.empCode);
  console.log(emp.empName);
  console.log(typeof emp);
}

function ex33_interface() {
  let emp: {
    empCode: number;
    empName: string;
  } = {
    empCode: 123,
    empName: "name1",
  };

  console.log(emp.empCode);
  console.log(emp.empName);
  console.log(typeof emp);
}

function ex34_extending_interface() {
  interface IEmployee {
    empCode: number;
    empName: string;
  }
  interface NewIEmployee extends IEmployee {
    age: number;
  }

  let emp: NewIEmployee = {
    empCode: 123,
    empName: "name1",
    age: 16,
  };
}

function ex35_implements() {
  interface IEmployee {
    empCode: number;
    empName: string;
    hello(): string;
  }

  class Employee implements IEmployee {
    empCode: number;
    empName: string;

    constructor(empCode: number, empName: string) {
      this.empCode = empCode;
      this.empName = empName;
    }

    hello(): string {
      return `hello world ${this.empCode} ${this.empName}`;
    }
  }

  const emp = new Employee(123, "name");

  console.log(emp.hello());
}

function ex36_public_implements() {
  interface IEmployee {
    empCode: number;
    empName: string;
    hello(): string;
  }

  class Employee implements IEmployee {
    constructor(public empCode: number, public empName: string) {}

    hello(): string {
      return `hello world ${this.empCode} ${this.empName}`;
    }
  }

  const emp = new Employee(123, "name");

  console.log(emp.hello());
}

function ex37_private_implements() {
  interface IEmployee {
    empCode: number;
    empName: string;
    hello(): string;
  }

  class Employee implements IEmployee {
    private _empCode: number;
    private _empName: string;

    constructor(empCode: number, empName: string) {
      this._empCode = empCode;
      this._empName = empName;
    }

    public get empCode(): number {
      return this._empCode;
    }

    public get empName(): string {
      return this._empName;
    }

    hello(): string {
      return `hello world ${this._empCode} ${this._empName}`;
    }
  }

  const emp = new Employee(123, "name");
  emp.empCode;
  // emp._empCode; // Compiler Error
  console.log(emp.hello());
}

function ex38_extending_combine_implements() {
  interface User {
    code: number;
    hello(): void;
  }

  class A {
    constructor(public name: string) {}

    show(): void {
      console.log("show data");
    }
  }

  class New extends A implements User {
    constructor(name: string, public code: number) {
      // call the constructor of the A class
      super(name);
      this.code = code;
    }
    hello(): void {
      console.log(`hello world ${this.name} ${this.code}`);
    }

    // Method overriding
    show(): void {
      super.show();
      console.log("overriding show data");
    }
  }

  const obj = new New("name", 123);
  obj.hello();
  obj.show();
}

function ex39_getters_and_setters() {
  class User {
    private _name: string;
    private _age: number = 0;

    constructor(name: string, age: number) {
      this._name = name;
      this.age = age;
    }

    public get age() {
      return this._age;
    }

    public set age(myAge: number) {
      if (myAge <= 0) {
        throw new Error("The age is invalid");
      }
      this._age = myAge;
    }

    public showName(): string {
      return `${this._name} ${this._age}`;
    }
  }

  try {
    let user_error = new User("TWT", -1);
  } catch (e) {
    console.error("The age is invalid");
  }

  let user = new User("TWT", 50);
  console.log(user.age);
  console.log(user.showName());
}

function ex40_static_methods() {
  class User {
    static count: number = 0;

    constructor() {
      User.count++;
    }

    static hello(content: string): void {
      console.log(`hello ${content}`);
    }
  }

  let user1 = new User();
  console.log(`User.count: ${User.count}`);
  let user2 = new User();
  console.log(`User.count: ${User.count}`);

  User.hello("test123");
}

console.log(ex1_if_else());

ex2_if_elseif();

ex3_loop();

ex4_loop();

ex5_loop();

ex6_const();

ex7_array();

ex8_array();

ex9_assign_array();

ex10_object();

ex11_anonymous_func();

ex12_anonymous_arrow_func();

console.log(ex13_anonymous_arrow_func(2, 4));

ex14_async();

ex15_filter();

ex16_find();

ex17_find();

ex18_type_bool();

ex19_type_any();

ex20_type_void();

ex21_readonly();

ex22_type_aliases();

ex23_string_literal();

ex24_tuple_type();

ex25_fun_optional_param(1, 2);
ex25_fun_optional_param(1, 2, 3);

ex26_type_intersection();

ex27_concat_string();

ex28_export();

ex29_class();

ex30_abstract_class();

ex31_generic_classes();

ex32_interface();

ex33_interface();

ex34_extending_interface();

ex35_implements();

ex36_public_implements();

ex37_private_implements();

ex38_extending_combine_implements();

ex39_getters_and_setters();

ex40_static_methods();
