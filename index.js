// Given Parameters
const velocity = {value: 10000, units: 'km/h'}; // velocity (km/h)
const acceleration = {value: 3, units: 'm/s^2'}; // acceleration (m/s^2)
const time = {value: 3600, units: 's'}; // seconds (1 hour)
const distance = {value: 0, units: 'km'}; // distance (km)
const remainingfuel = {value: 5000, units: 'kg'}; // remaining fuel (kg)
const fuelBurnRate = {value: 0.5, units: 'kg/s'}; // fuel burn rate (kg/s)


const newDistance = distance * time + velocity; //calcultes new distance
const remainingfuel = fuel - fuelBurnRate * time; //calculates remaining fuel

const calcNewVelocity = (velocity, acceleration, time) => { 
  return velocity + (acceleration * time) * 3.6;
}

const newVelocity = calcNewVel(velocity, acceleration, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
