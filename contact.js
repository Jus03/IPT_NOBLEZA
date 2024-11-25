document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Trim input values to avoid unnecessary spaces
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            alert("All fields are required!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes
        alert("Form submitted successfully! We'll be in touch soon.");

        // Optionally, clear the form
        form.reset();
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
