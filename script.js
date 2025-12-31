// Theme Toggle Functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeIcon, savedTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 150);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    const forms = document.querySelectorAll('.greeting-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const input = this.querySelector('.password-input');
            const errorMsg = this.querySelector('.error-message');
            const submitBtn = this.querySelector('.submit-btn');
            const correctPassword = this.getAttribute('data-password');
            const redirectUrl = this.getAttribute('data-redirect');
            const enteredPassword = input.value.trim().toUpperCase();
            
            // Reset error message
            errorMsg.textContent = '';
            errorMsg.classList.remove('show');
            
            // Check password
            if (enteredPassword === correctPassword.toUpperCase()) {
                // Success animation
                submitBtn.style.background = 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)';
                submitBtn.innerHTML = '<span>✓ Success!</span>';
                
                // Redirect after short delay
                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 500);
            } else {
                // Error animation
                errorMsg.textContent = 'Incorrect password. Please try again.';
                errorMsg.classList.add('show');
                input.style.borderColor = '#d32f2f';
                input.style.animation = 'shake 0.5s ease';
                
                // Reset input animation
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
                
                // Clear input
                input.value = '';
                input.focus();
            }
        });
        
        // Reset border color on input focus
        const input = form.querySelector('.password-input');
        input.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    });
    
    // Add floating animation to cards
    const cards = document.querySelectorAll('.form-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

