// toggle menue settings
var settingsMenue = document.querySelector('.settings-menue');
var darkBtn = document.getElementById('dark-btn');

function settigsMenueToggle() {
    settingsMenue.classList.toggle('settings-menue-height-showed')
}

// toggle dark and light theme
function toggleDarkBtn() {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme")
    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

//set local storage to save the theme
if (localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme")
} else if (localStorage.getItem('theme') == 'dark') {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem('theme', 'light');
}