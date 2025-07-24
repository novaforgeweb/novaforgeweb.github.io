// Theme management functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    const themeIcon = toggleBtn ? toggleBtn.querySelector('i') : null;
    
    // Function to set theme and icon
    function setTheme(isLight) {
        // Update root class
        document.documentElement.className = isLight ? 'theme-light' : 'theme-dark';
        
        // Update icon
        if (themeIcon) {
            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
        
        // Save to localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
    
    // Get current theme from html class
    function getCurrentTheme() {
        return document.documentElement.classList.contains('theme-light');
    }
    
    // Set initial icon based on current theme
    if (themeIcon) {
        const isLight = getCurrentTheme();
        setTheme(isLight);
    }
    
    // Toggle button event
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = getCurrentTheme();
            setTheme(!currentTheme);
        });
    }
});