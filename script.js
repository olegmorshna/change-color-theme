let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const style = document.getElementById("style");

const enableDarkMode = () => {
   style.setAttribute('href', 'style-dark.css')
   localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
   style.setAttribute('href', 'style.css')
   localStorage.setItem("darkMode", "disable");
};

if(darkMode === "enabled"){
   enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
   darkMode = localStorage.getItem("darkMode");
   if(darkMode !== "enabled"){
      enableDarkMode();
   } else {
      disableDarkMode();
   }
});