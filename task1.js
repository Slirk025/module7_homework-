const user = {
  name: 'Ivan',
  surname: 'Ivanov',
  age: 25
};
function OwnKey (us){
  for (let key in us){
    if(us.hasOwnProperty(key)){
      console.log(`${key}: ${us[key]}`);
    }
  }
}
OwnKey(user)