// SEU Career Connect - Global Script & Interactive Utilities

document.addEventListener("DOMContentLoaded", () => {
    console.log("SEU Career Connect Portal Initialized with Cyber Security Simulation.");

    // Active Navigation Highlighting
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (currentLocation === linkHref) {
            link.classList.add("active");
        }
    });

    // Global Search Box Listener (Home Page)
    const searchInput = document.querySelector(".search-container input");
    const searchBtn = document.querySelector(".btn-search");
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            if(searchInput.value.trim() !== "") {
                // You can add custom search filtering here if needed
                console.log("Searching for: " + searchInput.value);
            }
        });
    }
});

// Common Notification Helper
function showPortalNotification(message) {
    const alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.right = '20px';
    alertBox.style.background = 'rgba(0, 102, 255, 0.9)';
    alertBox.style.color = '#fff';
    alertBox.style.padding = '12px 20px';
    alertBox.style.borderRadius = '8px';
    alertBox.style.border = '1px solid #0066ff';
    alertBox.style.boxShadow = '0 0 15px rgba(0, 102, 255, 0.4)';
    alertBox.style.zIndex = '9999';
    alertBox.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    alertBox.style.fontSize = '0.9rem';
    alertBox.innerText = message;
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}