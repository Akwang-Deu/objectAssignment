const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];

function adultNames(people){
let adults=people.filter(person=>person.age>=18).map(person => person.name);
return adults;
}
console.log(adultNames(people));

// Question 2

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

  function groupCategory(products){
    let categories=Object.groupBy(products,product=> product.category)
      return categories
    }

  
  console.log(groupCategory(products));


  //Question3

  const students = [
   { name: 'John', scores: [90, 80, 85] },
   { name: 'Jane', scores: [95, 92, 88] },
   { name: 'Jim', scores: [70, 80, 75] },
   { name: 'Jill', scores: [85, 90, 84] },
  ];
  function averageScore(students){
  
    let filterScores= students.filter(student=>student.scores).map(student=>student.scores)
    let average = filterScores.reduce((a,b) => a + b, 0)/ filterScores.length;
      return average
  }
  console.log(averageScore(students));
  

  //Question4
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
    
  };
    function currentAge(car){
      car= 2026-car.year
    console.log(car)
    }
   currentAge(car);