// Given Parameters
const velocity = {value: 10000, units: 'km/h'}; // velocity (km/h)
const acceleration = {value: 3, units: 'm/s^2'}; // acceleration (m/s^2)
const time = {value: 3600, units: 's'}; // seconds (1 hour)
const distance = {value: 0, units: 'km'}; // distance (km)
const remainingfuel = {value: 5000, units: 'kg'}; // remaining fuel (kg)
const fuelBurnRate = {value: 0.5, units: 'kg/s'}; // fuel burn rate (kg/s)


const calcNewVelocity = (time, velocity, acceleration) => {
  // Validate input parameters
  if (typeof time !== 'number' || typeof velocity !== 'number' || typeof acceleration !== 'number') {
    throw new Error('Invalid parameter inputs have been entered');
  }

// Convert units to a common unit 
const velocityInMetersPerSecond = velocity.value / 3.6;
const distanceInMeters = distance.value * 1000;

// Calculation to determine new distance
const newDistanceInMeters = distanceInMeters + (velocityInMetersPerSecond * time.value);
const newDistanceInKilometers = newDistanceInMeters / 1000;

// Calculation to determine amount of fuel remaining
const remainingFuelInKilograms = remainingFuel.value - (fuelBurnRate.value * time.value);

// Calculation to determine new velocity
const newVelocityInMetersPerSecond = calcNewVelocity(acceleration.value, velocityInMetersPerSecond, time.value);
const newVelocityInKilometersPerHour = newVelocityInMetersPerSecond * 3.6;

console.log(`Corrected New Velocity: ${newVelocityInKilometersPerHour} km/h` );
console.log(`Corrected New Distance: ${newDistanceInKilometers} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelInKilograms} kg`);
