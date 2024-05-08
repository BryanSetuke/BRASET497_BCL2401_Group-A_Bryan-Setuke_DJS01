/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */



// Given Parameters
const velocity = {value: 10000, units: 'km/h'}; // velocity (km/h)
const acceleration = {value: 3, units: 'm/s^2'}; // acceleration (m/s^2)
const time = {value: 3600, units: 's'}; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuel burn rate = 0.5; // fuel burn rate (kg/s)


const d2 = d * time + vel; //calcultes new distance
const rf = fuel - fbr*time; //calculates remaining fuel

function calcNewVel(vel, acc, time) { 
  return vel + (acc*time) *3.6;
}

const vel2 = calcNewVel(vel, acc, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
