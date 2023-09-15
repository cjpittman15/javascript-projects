// Initialize Variables below
let Monday = '2019-03-18';
time = '10:05:34 AM';
astronautCount = 7;
astronautStatus = 'ready';
averageAstronautMassKg = 80.7;
crewMassKg = astronautCount * averageAstronautMassKg;
fuelMassKg = 760000;
shuttleMassKg = 74842.31;
totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
maximumMassLimit = 850000;
fuelTempCelcius = -225;
minimumFuelTemp = -300;
maximumFuelTemp = -150;
fuelLevel = '100%';
weatherStatus = 'clear';
preparedForLiftoff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7);
// add logic below to verify all astronauts are ready
if (astronautStatus = 'ready');
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit);
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius <= minimumFuelTemp || fuelTempCelcius >= maximumFuelTemp);
// add logic below to verify the fuel level is at 100%
if (fuelLevel = '100%');
// add logic below to verify the weather status is clear
if (weatherStatus = 'clear');
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff === true); {
    console.log(`All systems are a go! Initiating space shuttle sequence.\n--------------------------------------------------------\nDate:${Monday}\nTime:${time}\nAstronaut Count:${astronautCount}\nCrew Mass:${crewMassKg} kg\nFuel Mass:${fuelMassKg} kg\nShuttle Mass:${shuttleMassKg} kg\nTotal Mass:${totalMassKg} kg\nFuel Temperature${fuelTempCelcius} C\nWeather Status:${weatherStatus}\n--------------------------------------------------------\nHave a safe trip astronauts!`);
}
