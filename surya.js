document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;
  
    if (modeToggle) {
      // When the page loads, check if a theme preference is saved
      if (localStorage.getItem("theme") === "dark") {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        modeToggle.checked = true; // Set the toggle switch
      } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        modeToggle.checked = false; // Set the toggle switch
      }
  
      // Add event listener to the toggle switch
      modeToggle.addEventListener("change", function () {
        if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
          localStorage.setItem("theme", "light"); // Save theme in localStorage
        } else {
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark"); // Save theme in localStorage
        }
      });
    } else {
      console.error("modeToggle element not found in the DOM.");
    }
  
    // Contact form submit logic (assuming this is part of the script)
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for custom handling
        const name = document.getElementById("floatingName").value.trim();
        const email = document.getElementById("floatingEmail").value.trim();
        const phone = document.getElementById("floatingPhone").value.trim();
        const message = document.getElementById("floatingMessage").value.trim();
        const formStatus = document.getElementById("formStatus");
  
        // Basic validation
        if (!name || !email || !phone || !message) {
          formStatus.textContent = "All fields are required!";
          formStatus.style.color = "red";
          return;
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          formStatus.textContent = "Please enter a valid email address!";
          formStatus.style.color = "red";
          return;
        }
  
        // If validation passes, submit the form
        fetch("https://formsubmit.co/5f3b4a783547968845228824af1a2b18", {
          method: "POST",
          body: new FormData(this),
        })
          .then((response) => {
            if (response.ok) {
              formStatus.textContent = "Message sent successfully!";
              formStatus.style.color = "green";
              this.reset(); // Clear form
            } else {
              throw new Error("Failed to send message");
            }
          })
          .catch((error) => {
            formStatus.textContent = "An error occurred. Please try again!";
            formStatus.style.color = "red";
          });
      });
    }
  });
  