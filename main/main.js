const employees = [
  { name: 'David Carlson', age:30 },
  { name: 'John Cena', age:34},
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

let namee=employees.filter(function(person){
	return person.age>30;
});


console.log(namee);