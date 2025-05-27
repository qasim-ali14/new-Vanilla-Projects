// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const isMobile = window.innerWidth < 768;
    
    // Handle dropdown menus on mobile
    if (isMobile) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            
            link.addEventListener('click', function(e) {
                // Only prevent default if on mobile
                if (isMobile) {
                    e.preventDefault();
                    
                    // Toggle dropdown content
                    const content = this.nextElementSibling;
                    
                    // Close all other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            const otherContent = otherDropdown.querySelector('.dropdown-content');
                            otherContent.style.display = 'none';
                        }
                    });
                    
                    // Toggle current dropdown
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        
        // Reset dropdown styles if switching between mobile and desktop
        if (newIsMobile !== isMobile) {
            const dropdownContents = document.querySelectorAll('.dropdown-content');
            dropdownContents.forEach(content => {
                content.style.display = '';
            });
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Image lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadImages = function() {
            let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
            
            if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoadImages);
                window.removeEventListener('resize', lazyLoadImages);
                window.removeEventListener('orientationchange', lazyLoadImages);
                return;
            }
            
            lazyImages.forEach(function(lazyImage) {
                if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && 
                     lazyImage.getBoundingClientRect().bottom >= 0) && 
                    getComputedStyle(lazyImage).display !== 'none') {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                }
            });
        };
        
        document.addEventListener('scroll', lazyLoadImages);
        window.addEventListener('resize', lazyLoadImages);
        window.addEventListener('orientationchange', lazyLoadImages);
    }
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create search overlay
            const searchOverlay = document.createElement('div');
            searchOverlay.className = 'search-overlay';
            searchOverlay.innerHTML = `
                <div class="search-container">
                    <form class="search-form">
                        <input type="text" placeholder="Search..." autofocus>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    <button class="close-search"><i class="fas fa-times"></i></button>
                </div>
            `;
            
            document.body.appendChild(searchOverlay);
            document.body.style.overflow = 'hidden';
            
            // Focus on search input
            setTimeout(() => {
                searchOverlay.querySelector('input').focus();
            }, 100);
            
            // Close search on click
            searchOverlay.querySelector('.close-search').addEventListener('click', function() {
                document.body.removeChild(searchOverlay);
                document.body.style.overflow = '';
            });
            
            // Handle search form submission
            searchOverlay.querySelector('.search-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const searchTerm = this.querySelector('input').value.trim();
                
                if (searchTerm) {
                    // Here you would normally redirect to search results page
                    alert('Searching for: ' + searchTerm);
                    document.body.removeChild(searchOverlay);
                    document.body.style.overflow = '';
                }
            });
        });
    }
});

// Add additional styles for search overlay
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .search-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .search-container {
            width: 80%;
            max-width: 600px;
        }
        
        .search-form {
            display: flex;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        
        .search-form input {
            flex: 1;
            border: none;
            background: transparent;
            font-size: 24px;
            padding: 10px 0;
            outline: none;
        }
        
        .search-form button {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
        
        .close-search {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            display: block;
            margin: 0 auto;
        }
    `;
    document.head.appendChild(style);
});