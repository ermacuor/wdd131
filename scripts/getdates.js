const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear} - Erik Mark Cuiza Orellana - Bolivia`;

    
const lastModified = document.lastModified;
document.getElementById("lastupdated").textContent = `Last modification: ${lastModified}`;