
let currentTheme = 'default';

function toggleTheme() {
    const body = document.body;
    const buttons = document.querySelectorAll('.theme-btn button, .menu-btn button');

    if (currentTheme === 'default') {
        currentTheme = 'blue';
        body.className = 'theme-blue';
        buttons.forEach(button => {
            button.style.borderColor = 'white';  // Change border color to match text color
            button.style.color = 'white';  // Change text color
        });
    } else if (currentTheme === 'blue') {
        currentTheme = 'purple';
        body.className = 'theme-purple';
        buttons.forEach(button => {
            button.style.borderColor = 'white';  
            button.style.color = 'white';  
        });
    } else {
        currentTheme = 'default';
        body.className = 'theme-default';
        buttons.forEach(button => {
            button.style.borderColor = 'black';  
            button.style.color = 'black';  
        });
    }
}

/* Set the current year in the footer */
document.getElementById('current-year').textContent = new Date().getFullYear();

/* Set default theme on page load */
document.body.className = 'theme-default';
