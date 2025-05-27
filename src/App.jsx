function App() {
  //q1
  const person = {
    name: "Saud Jee The Serious Guy",
    age: 27,
    city: "Lhr",
  };
  console.log(person);

  //q2
  const car = {
    brand: "Toyotta",
    model: "Corolla",
    year: 2020,
  };
  console.log(car.model);

  //q3
  car.color = "red";
  console.log(car);

  //q4
  car.year = 2022;
  console.log(car);

  //q5
  delete person.city;
  console.log(person);

  //q6
  const student = {
    name: "Saud",
    gender: "strict male",
    rules: "strict",
  };
  for (let key in student) {
    console.log(key + " : " + student[key]);
  }

  //q7
  function hasProperty(obj, prop) {
    return prop in obj;
  }

  console.log(hasProperty(student, "name"));
  console.log(hasProperty(car, "age"));

  //q8
  const company = {
    employee: {
      name: "Saud Jee",
      position: "Full Stack Developer",
      salary: 200000, //althou wo btate nahi
    },
  };
  console.log(company.employee.name);

  //q9
  function printUserInfo(user) {
    console.log("Name :" + user.name);
    console.log("Email : " + user.email);
  }

  const myTeacher = {
    name: "Sir Saud",
    email: "saudsaleem@gmail.com",
  };
  printUserInfo(myTeacher);

  //q10 to fetch keys we use object.keys and for values we use object.values to convert into array
  const scores = { 
    Alice: 85,
    Bob: 92,
    Charlie: 88 };
    const getKeys=Object.keys(scores);
    const getVals=Object.values(scores);
    console.log(getKeys);
    console.log( getVals);

    //other way to get parallel like
    const newArr=Object.entries(scores);
    console.log(newArr);


    //q11
    const calculator={
      a:10,
      b:5,
      add(){
        return this.a+this.b
      }
    };
    console.log(calculator.add());


    //q12
    const rectangle={
      lenth:10,
      width:20,
      area(){
        return this.lenth*this.width;
      }
    };
    console.log(rectangle.area());


    //q13
    const fruits={
      apple:10,
      banana:5,
      mango:7,
    };
    for(const value of Object.values(fruits)){
      console.log(value);
    };


    //q14
    for (const [key,value] of Object.entries(fruits)){
      console.log(`${key} : ${value}`);
    }


    //q15
    function countProperties(obj){
      return Object.keys(obj).length;
    };
    console.log(countProperties(fruits));


    //q16
    const student1={
      name:"Ali",
      grade:'A',
    age:20
      };
      const getkeyss=Object.keys(student1);
      const getValss=Object.values(student1);
      console.log(getkeyss);
      console.log(getValss);


      //q17
      function createUser(name,age){
        return{
          name:name,
          age:age,
        };
      }
      const user=createUser("Saud",27);
      console.log(JSON.stringify(user));


      //q18
      function isEmpty(obj){
        return Object.keys(obj).length===0;
      }
      console.log(isEmpty(student));
      console.log(isEmpty({}));

      //q19
      const library = { 
        book1: 
        { title: "1984", author: "George Orwell" },
         book2: { title: "The Hobbit", author: "J.R.R. Tolkien" } 
        };
        for (const key in library){
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
        console.log(counter.count);
        counter.increment();
        console.log(counter.count);


  return <></>;
}

export default App;
