// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll("section");

// Add hidden class to every section
sections.forEach(function(section) {
    section.classList.add("hidden");
});


// Create Intersection Observer
const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});


// Observe every section
sections.forEach(function(section) {
    observer.observe(section);
});