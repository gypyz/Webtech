console.log("Hello, JS");
console.log("เริ้มเรียนรู้ JS กันเลยย");

let title = "Javascript";

let firstname = "Piyangkoon";
let age = 20;
let my_gpa = 3.5;

console.log(age);
age = 21;

console.log(age);

console.log(2023 - age);

const thisYear = 2023;
const birthYear = 2003;
console.log("I am" + thisYear - birthYear);
console.log("My birthyear is " + birthYear);
console.log("I am " + (thisYear - birthYear));
const Lastname = "Taichan";
console.log("My name is " + firstname + " " + Lastname + ". ");

let score = 14;

console.log("I'm " + firstname + "" + Lastname + ".");
console.log(`I'm $(firstname) $(Lastname).`);

const ageMax = 16;

if (age >= ageMax) {
  console.log("He can driver a car");
} else {
  console.log("He can driver a car.");
}

const yrMoney = 75;
//สามาระซื้อของเล่นราคา 110บาได้ไหมถ้าไม่ได้ต้องเพิ่มเงินอีกเท่าไหร่

if (yrMoney >= 110) {
  console.log("You can buy a toy");
} else {
  console.log(
    "You can't buy a toy u need " + (110 - yrMoney) + " bath to buy toy"
  );
}

const stampPrice = 30;
const pillowPrice = 1501;
const emmaStamp = 33;
let emmaNeed = 0;

/*if (emmaStamp >= 50) {
  console.log("You paid 1 bath to get pillow");
} else if (emmaStamp < 50) {
  emmaNeed = (50 - emmaStamp) * 30 + 1;
  console.log("You need " + emmaNeed + " bath");
}*/

console.log(typeof yrMoney);
console.log(typeof firstname);
console.log(typeof 3.1425);

age = 23;
console.log(thisYear - age);
console.log(thisYear + age);
const strYear = "2023";
console.log(strYear + age);
console.log(strYear - age);

console.log(Number(strYear) + age);
console.log(Number(firstname));
console.log(typeof NaN);
console.log(Number(strYear), strYear);

console.log("I am " + 10 + ` years old`);
console.log(`2023` - 23);
console.log(`2023` - `23` - 23);
console.log(`14` * `7`);
console.log(`44` / `2`);

console.log(1, Boolean(1));
console.log(0, Boolean(0));
console.log(23, Boolean(23));
console.log(-23, Boolean(-23));
console.log(Boolean(undefined));
console.log(firstname, Boolean(firstname));

if (firstname) {
  console.log("He has a name");
}

const noname = "";
console.log(Boolean(noname));

if (firstname) {
  console.log("He has a name");
} else {
  console.log("He has no name");
}

console.log(Boolean(null));

const isTrue = true;
const isFalse = false;

console.log(isTrue && isFalse);

console.log(isTrue || isFalse);
console.log(!isFalse);

if (isTrue && !isFalse) {
  console.log("Only True and True will be the Truth");
}

/*โปรแกรม JavaScript เพื่อตรวจสอบว่าบุคคลหนึ่งสามารถเข้าชมสวนสนุกได้หรือไม่ โดยมีเงื่อนไขดังนี้:

อายุ age: ต้องมีอายุไม่น้อยกว่า 12 ปี และไม่เกิน 65 ปี
ส่วนสูง height: ต้องมีส่วนสูงไม่ต่ำกว่า 140 ซม.
ตั๋ว hasTicket: ต้องมีตั๋วเข้าชม
ให้สร้างตัวแปรเพื่อจำลองอายุ, ส่วนสูง, และสถานะการมีตั๋วของบุคคล และใช้ if statement ร่วมกับ boolean operators เพื่อตรวจสอบว่าบุคคลนั้นตรงตามเงื่อนไขทั้งหมดหรือไม่
ถ้าตรงตามเงื่อนไขทั้งหมดให้แสดงข้อความ "Welcome to the amusement park!" แต่ถ้าไม่ตรงตามเงื่อนไขใดเงื่อนไขหนึ่งให้แสดงข้อความ "Sorry, you cannot enter the amusement park."*/

age = 25;
const height = 165;
const hasTicket = true;

if (age >= 12 && age <= 65 && height >= 140 && hasTicket) {
  console.log("Welcome to the amusement park!");
} else {
  console.log("Sorry, you cannot enter the amusement park.");
}

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("I ♥ tuesday");
    break;
  case "wednesday":
    console.log("It's rainy");
    break;

  default:
    console.log("Not a valid day");
    break;
}

function converTemp(value, unit) {
  let result;

  switch (unit) {
    case "Celsius":
      result = {
        Faremheit: (value * 9) / 5 + 32,
        Kelvin: value + 273.15,
      };
      break;
    case "Faremheit":
      result = {
        Celsius: ((value - 32) * 5) / 9,
        Kelvin: ((value - 32) * 5) / 9 + 273.15,
      };
      break;
    case "Kelvin":
      result = {
        Celsius: value - 273.15,
        Faremheit: ((value - 273.15) * 9) / 5 + 32,
      };
      break;
    default:
      result = "Invalid unit";
  }
  return result;
}

console.log(converTemp(23, "Celsius"));
console.log(converTemp(73.4, "Faremheit"));

function groot() {
  console.log("I am groot");
}
groot();

function calcAge(bYear) {
  return 2023 - bYear;
}

const age1 = calcAge(1999);
console.log(age1);

const calcAge2 = function (b_Year) {
  return 2024 - b_Year;
};

const age2 = calcAge2(1999);
console.log(age2);

const calcAge3 = (bYear) => 2024 - bYear;
const age3 = calcAge3(1999);
console.log(age3);

const calcCircumference = (radius) => 2 * Math.PI * radius;

const calArea = (radius) => Math.PI * radius * radius;

const printCircleCalculation = (radius) => {
  const circumference = calcCircumference(radius);
  const area = calArea(radius);

  console.log(`For a circle with radius ${radius}:`);
  console.log(`Circumference: ${circumference}`);
  console.log(`Area: ${area}`);
};

printCircleCalculation(10);

const friends = ["Laura", "Mana", "Roti"];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

firstname = "Jones";

const jones = [firstname, "Paa", 1998, "police", friends];

console.log(jones, jones.length);
console.log("age " + jones[2]);

let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.pop();

numbers.forEach((numbers) => console.log(numbers));

let fruit = [`Apple`, `Banana`, `Orange`];

console.log(fruit[2]);
fruit[2] = "Blueberry";

console.log(fruit);

let users = [
  { name: "Ada", age: 35 },
  { name: "Dennis", age: 20 },
  { name: "Oreo", age: 42 },
];

let findOreo = users.find((user) => user.name) === "Oreo";

users.push({ name: "Joseph", age: 60 });
users = users.filter((user) => user.name != "Oreo");
users.shift();
users.pop();

const dave = {
  firstname: "Dave",
  Lastname: "Rogers",
  job: "Programmer",
  salary: 55000,
  age: thisYear - 2000,
  friends: ["Ken", "Ryu", "Vega"],
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return thisYear;
  },
  getSummary: function () {
    return `${this.firstname} ${this.Lastname} has ${this.friends.length} friends, and his best friend is ${this.friends[0]}`;
  },
};

console.log(
  `${dave.firstname} ${dave.Lastname} has ${dave.friends.length} friends, and his best friend is ${dave.friends[0]}`
);
