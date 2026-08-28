const form = document.getElementById("applicationForm");

const successMessage =
    document.getElementById("successMessage");


if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // Browser validation
        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }


        // Show success message
        successMessage.classList.add("show");


        // Clear the form
        form.reset();

    });

}


function closeSuccess() {

    successMessage.classList.remove("show");

}