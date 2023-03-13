function ElectricDevice(name){
  this.device = 'electricDevice',
  this.name = name
}

ElectricDevice.prototype.GetPowerInfo = function(power, time, on){
  let turnOn = on;
  if (on === 1){
    turnOn = 'Вкл.';
  }
  else {
    turnOn = 'Выкл.';
  };
  if (power * time > 0){
    
  }
  console.log(`Прибор ${this.name} потреблят ${power*time}Вт. и накодится в состоянии ${turnOn}`);
};

function DeviceProperty (name, color, size){
  this.name = name,
  this.color = color,
  this.size = size
}

DeviceProperty.prototype = new ElectricDevice ();

const fridge = new DeviceProperty ('fridge', 'white', 'big');
const lamp = new DeviceProperty ('lamp', 'grey', 'small');
const microwave = new DeviceProperty ('microwave', 'black', 'medium');

console.log(fridge);
console.log(lamp);
console.log(microwave);

fridge.GetPowerInfo (100, 4, 1);
lamp.GetPowerInfo (20, 0, 0);
microwave.GetPowerInfo (1100, 2, 1);