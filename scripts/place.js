function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(chill);
    } else {
        return "N/A";
    }
}
const temperature = 34 
const windSpeed = 10;
const windChill = calculateWindChill(temperature, windSpeed);

document.querySelector(".temperature").textContent = temperature + "°C";
document.querySelector(".wind-speed").textContent = windSpeed + " km/h";
document.querySelector(".windchill").textContent = windChill + "°C";
document.querySelector(".currentyear").textContent = "© " + new Date().getFullYear() + "- Erik Mark Cuiza Orellana - Bolivia";
document.querySelector(".lastupdated").textContent = "Last modification: " + document.lastModified;