
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✖";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

// Close Menu After Clicking Link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const status = document.getElementById("formStatus");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        status.innerHTML = "Please enter a valid email address!";
        return;

    }

    const mailBody =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage: " + message;

    const mailLink =
        "mailto:your-email@example.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(mailBody);

    status.innerHTML = "Opening your email application...";

    window.location.href = mailLink;

});
