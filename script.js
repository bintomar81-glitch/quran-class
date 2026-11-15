 const button = document.getElementById("surah-button");
const description = document.getElementById("surah-description");

if (button) {
    button.addEventListener("click", function () {
        description.hidden = false;
    });
}

 const form = document.getElementById("registration-form");

if (form) {
    const confirmation = document.getElementById("confirmation");
    const savedRegistration = localStorage.getItem("quranRegistration");

    if (savedRegistration) {
        const registration = JSON.parse(savedRegistration);

        confirmation.textContent =
            "Saved registration: " + registration.name +
            " — " + registration.className;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("student-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const className = document.getElementById("class-choice").value;

        if (name === "") {
            confirmation.textContent = "Please enter your name.";
            return;
        }

        const registration = {
            name: name,
            email: email,
            className: className
        };

        try {
            localStorage.setItem(
                "quranRegistration",
                JSON.stringify(registration)
            );

            confirmation.textContent =
                "Thank you, " + name +
                "! Your registration for " + className +
                " is saved in this browser.";
        } catch (error) {
            confirmation.textContent =
                "Your browser could not save the registration. Please check your browser settings.";
        }
    });
}
const ikhlasButton = document.getElementById("ikhlas-button");
const ikhlasDescription = document.getElementById("ikhlas-description");

if (ikhlasButton) {
    ikhlasButton.addEventListener("click", function () {
        ikhlasDescription.hidden = false;
    });
}

const falaqButton = document.getElementById("falaq-button");
const falaqDescription = document.getElementById("falaq-description");

if (falaqButton) {
    falaqButton.addEventListener("click", function () {
        falaqDescription.hidden = false;
    });
}
const classChoice = document.getElementById("class-choice");

if (classChoice) {
    const parameters = new URLSearchParams(window.location.search);
    const selectedClass = parameters.get("class");

    if (selectedClass === "reading") {
        classChoice.value = "Beginner Reading";
    } else if (selectedClass === "recitation") {
        classChoice.value = "Recitation Practice";
    } else if (selectedClass === "memorization") {
        classChoice.value = "Memorization";
    }
}
const cancelButton = document.getElementById("cancel-registration");

if (cancelButton) {
    cancelButton.addEventListener("click", function () {
        const confirmation = document.getElementById("confirmation");

        try {
            localStorage.removeItem("quranRegistration");
            form.reset();

            confirmation.textContent =
                "There is no saved registration in this browser.";
        } catch (error) {
            confirmation.textContent =
                "Your browser could not cancel the saved registration.";
        }
    });
}