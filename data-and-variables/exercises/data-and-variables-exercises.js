// Declare and assign the variables below
let spaceShuttle = "Determination";
shuttleSpeedMph = 17500;
distanceToMarsKm = 225000000;
distanceToMoonKm = 384400;
milesPerKilo = 0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilo);
// Calculate a space mission below
milesToMars = distanceToMarsKm * milesPerKilo;
console.log(milesToMars);

hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars);

daysToMars = hoursToMars / 24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(spaceShuttle + " will take " + daysToMars + " days to reach Mars.")
// Calculate a trip to the moon below
milesToMoon = distanceToMoonKm * milesPerKilo;
console.log(milesToMoon);

hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log(hoursToMoon);

daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);
// Print the results of the trip to the moon below
console.log(spaceShuttle + " will take " + daysToMoon + " days to reach the moon.")
