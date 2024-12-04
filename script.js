let currentTheme = 'default';

        function toggleTheme() {
            const body = document.body;
            const buttons = document.querySelectorAll('.theme-btn button, .menu-btn button');

            const themes = [
                { name: 'default', class: 'theme-default', buttonColor: 'black' },
                { name: 'blue', class: 'theme-blue', buttonColor: 'white' },
                { name: 'purple', class: 'theme-purple', buttonColor: 'white' },
                { name: 'dark', class: 'theme-dark', buttonColor: 'white' }
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
        }
/* Set the current year in the footer */
document.getElementById('current-year').textContent = new Date().getFullYear();

/* Set default theme on page load */
document.body.className = 'theme-default';
