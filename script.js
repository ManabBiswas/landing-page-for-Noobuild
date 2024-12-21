let currentTheme = 'default';

function toggleTheme() {
    const body = document.body;
    const buttons = document.querySelectorAll('.theme-btn button, .menu-btn button, .hero-button ');
    const menuBtnSpans = document.querySelectorAll('.menu-btn span');
    const logo = document.getElementById('logo');
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    const themes = [
        { name: 'default', class: 'theme-default', buttonColor: 'black', menuBtnColor: 'black', navLinkColor: 'black',headerBgColor:'whitesmoke' },
        { name: 'blue', class: 'theme-blue', buttonColor: 'white', menuBtnColor: 'white', navLinkColor: 'white',headerBgColor:'#1474b4' },
        { name: 'purple', class: 'theme-purple', buttonColor: 'white', menuBtnColor: 'white', navLinkColor: 'white',headerBgColor:'#e9196f' },
        { name: 'dark', class: 'theme-dark', buttonColor: 'white', menuBtnColor: 'white', navLinkColor: 'white' ,headerBgColor:'goldenrod'}
    ];

    const currentIndex = themes.findIndex(theme => theme.name === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    currentTheme = nextTheme.name;
    body.className = nextTheme.class;
// console.log(currentTheme);
    buttons.forEach(button => {
        button.style.borderColor = nextTheme.buttonColor;
        button.style.color = nextTheme.buttonColor;
    });
    
    menuBtnSpans.forEach(span => {
        span.style.backgroundColor = nextTheme.menuBtnColor;
    });
    
    navLinks.forEach(link => {
        link.style.color = nextTheme.navLinkColor;
    });
    
    header.style.backgroundColor = nextTheme.headerBgColor; // Corrected reference to header background color

    // Update logo based on current theme
    if (currentTheme !=="dark") {
        logo.src = "img/light-theme-logo1.png";
    } else {
        logo.src = "img/logo.png";
    }
}

function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set default theme on page load
document.body.className = 'theme-default';

// Set logo based on default theme
document.getElementById('logo').src = "img/light-theme-logo.png";
