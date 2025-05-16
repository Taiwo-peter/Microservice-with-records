// main.js - JavaScript for RabbitMQ Microservices static site

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links with hash
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add smooth scroll event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Smooth scroll to target
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });
});

// Toggle code snippets on mobile
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre');
    
    if (window.innerWidth < 768) {
        codeBlocks.forEach(block => {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'btn btn-sm btn-primary code-toggle';
            toggleButton.textContent = 'Show Code';
            
            const codeWrapper = document.createElement('div');
            codeWrapper.className = 'code-wrapper';
            
            // Insert toggle button before the code block
            block.parentNode.insertBefore(toggleButton, block);
            
            // Wrap code block in wrapper div
            block.parentNode.insertBefore(codeWrapper, block);
            codeWrapper.appendChild(block);
            
            // Hide code block initially on mobile
            block.style.display = 'none';
            
            // Toggle code visibility on button click
            toggleButton.addEventListener('click', function() {
                if (block.style.display === 'none') {
                    block.style.display = 'block';
                    toggleButton.textContent = 'Hide Code';
                } else {
                    block.style.display = 'none';
                    toggleButton.textContent = 'Show Code';
                }
            });
        });
    }
});