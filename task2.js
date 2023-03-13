const username = {
  name: 'Ivan',
  surname: 'Ivanov',
  age: 30
};
 function check(str, obj) {
	
	console.log(str in obj);
	
};
check('name', username);