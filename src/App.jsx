function App() {

  //q1
  const person={
    name:"Sakht dil",
    age:27,
    city:"Lhr",
  }
  console.log(person);

//q2
const car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(car.model);


//q3
car.color="red";
console.log(JSON.stringify(car));

//q4
car.year=2022;
console.log(JSON.stringify(car));


//q5
delete person.city;
console.log(JSON.stringify(person));


//q6
const student={
  name:"sakht dil",
  stack:"full-stack",
  nature:"rude"
}
for (let key in student){
  console.log(key + " : "+student[key]);
};

//q7
function hasProperty(obj,prop){
  return prop in obj
}

console.log(hasProperty(student,"nature"));//true as it exist
console.log(hasProperty(car,"engine")); //false as it dont exist


//q8
const company={
  employee:{
    name:"bar bar btane se kya hona,rhe ga wo sakht dil he",
    age:26,
    role:"full-setack dev",
  }
};

console.log(company.employee.name);
//q9
function printUserInfo(user){
  console.log("Name :"+ user.name);
  console.log("Email :" + user.email);
}
const mySir={
  name:"Sudi",
  email:"unhisepucho@gmail.com",
}
console.log(printUserInfo(mySir));

//q10
const scores = { Alice: 85,

Bob: 92, Charlie: 88 };

const gettingkeys=Object.keys(scores);
const gettingvalues=Object.values(scores);

console.log(gettingkeys);
console.log(gettingvalues);


//or
const array=Object.entries(scores);
console.log(array);


//q11
const calculator={
  a:'10',
  b:'5',
  add(){
    return Number(this.a) +Number(this.b)
  }
};
console.log(calculator.add());

//q12
const rectangle={
  len:5,
  wid:5,
  area(){
    return this.len*this.wid
  }
};
console.log(rectangle.area());


//q13
const fruits = { apple: 10, banana: 5, mango: 7 };
for (let key in fruits){
  console.log(fruits[key]);
};
//i applied above since in q6 i get values like that but i have a question when i did it before and search on gpt even this time they recommend me to use for of not for in when when you are working with obj loop over values or loop over keys+values but when you are only working with keys it recommned for in ....whats the reason when i did both with for in then why that recommendation and confusing stuuf
//plus one more thing gpt ask me to work for in with objects and for of for array explain to me why?

//however other method is here using for off as per gpt not cpying it but as he suggest me to get values using for of
for (let value of Object.values(fruits)){
  console.log(value);
}


//q14
for (const[key,value] of Object.entries(fruits)){
  console.log(`${key}: ${value}`);
};

//q15
function countProperties(obj){
return Object.keys(obj).length;
};
console.log(countProperties(student));


//q16
const studentq = { name: "Ali", grade: "A", age: 20 };
const getkey=Object.keys(studentq);
const getval=Object.values(studentq);
console.log(getkey);
console.log(getval);


//q17
function createUser(name,age){
  return {name:name,
    age:age
  };

}
const user=createUser("Sakht dil",26);
console.log(JSON.stringify(user));


//q18
function isEmpty(obj){
  return Object.keys(obj).length===0;
};

console.log(isEmpty(student));
console.log(isEmpty({}));



//q19
const library = { book1: { title: "1984", author: "George Orwell" }, book2: { title: "The Hobbit", author: "J.R.R. Tolkien" } };
for( let key in library){
  console.log(library[key].title);
}

//q20
const counter={
  count:0,
  increment(){
    this.count+=1;
  }
};
counter.increment();
console.log(counter.count);//1
counter.increment();
console.log(counter.count);//2
  return <></>;
}

export default App;
