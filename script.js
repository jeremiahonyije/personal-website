// Add subtle animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth fade-in animation for the page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 10);
    
    // Handle photo loading
    const profilePhoto = document.getElementById('profile-photo');
    const photoWrapper = document.querySelector('.photo-wrapper');
    const placeholder = photoWrapper.querySelector('.placeholder-photo');
    
    profilePhoto.onerror = function() {
        // Hide broken image and show placeholder
        this.style.display = 'none';
        if (placeholder) {
            placeholder.style.display = 'block';
        }
    };
    
    profilePhoto.onload = function() {
        // Hide placeholder when image loads successfully
        if (placeholder) {
            placeholder.style.display = 'none';
        }
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 10);
    };
    
    // Initial state: show placeholder by default until image loads
    if (placeholder) {
        placeholder.style.display = 'none';
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

