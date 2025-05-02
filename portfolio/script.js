document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            alert("Thank you for your message! I'll get back to you soon.");
            form.reset();
        });
    }

    
    document.addEventListener("mousemove", function (e) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle-trail");
        sparkle.style.left = `${e.pageX}px`;
        sparkle.style.top = `${e.pageY}px`;
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000); // sparkles disappear after 1 sec
    });
});
