document.addEventListener('DOMContentLoaded', () => {
    // Get the loader container
    const loaderContainer = document.querySelector('.loader-container');
    
    // Hide loader after page is fully loaded
    window.addEventListener('load', () => {
        // Add fade-out animation
        loaderContainer.classList.add('fade-out');
        
        // Remove loader from DOM after animation
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 1000);
    });
});