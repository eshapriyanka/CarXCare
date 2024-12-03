document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const vehicle = document.getElementById("vehicle").value;
    const date = document.getElementById("date").value;
    const email = document.getElementById("email").value;

    console.log(
      `Appointment Details:\nName: ${name}\nVehicle: ${vehicle}\nDate: ${date}\nEmail: ${email}`
    );

    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = `Thank you, ${name}! Your ${vehicle} is scheduled for ${date}. Details have been sent to ${email}.`;
    successMessage.style.display = "block";

    document.getElementById("appointmentForm").reset();
  });
