// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        const themeIcon = toggleBtn.querySelector('i');
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }
});