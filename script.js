let currentTheme = 'default';

function toggleTheme() {
    const body = document.body;
    const buttons = document.querySelectorAll('.theme-btn button, .menu-btn button');
    const menuBtnSpans = document.querySelectorAll('.menu-btn span');
    const navLinks = document.querySelectorAll('nav ul li a');

    const themes = [
        { name: 'default', class: 'theme-default', buttonColor: 'black', menuBtnColor: 'black', navLinkColor: 'black' },
        { name: 'blue', class: 'theme-blue', buttonColor: 'white', menuBtnColor: 'white', navLinkColor: 'white' },
        { name: 'purple', class: 'theme-purple', buttonColor: 'white', menuBtnColor: 'white', navLinkColor: 'white' },
        { name: 'dark', class: 'theme-dark', buttonColor: 'white', menuBtnColor: 'white', navLinkColor: 'white' }
    ];

    const currentIndex = themes.findIndex(theme => theme.name === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    currentTheme = nextTheme.name;
    body.className = nextTheme.class;

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
