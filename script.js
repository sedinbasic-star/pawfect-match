/* 
  File: script.js
  Author: Sedin Basic, David Villegas, Kirandeep Bangar, Roshan Kohli, Gisselle Picho

  Purpose:
  This JavaScript file handles interactive and dynamic functionality 
  across the Pawfect Match website. It includes helper functions 
  (such as navigation logic), as well as form submission logic for 
  both the contact form and the adoption appointment booking form. 
  Forms send data through the Web3Forms API and redirect users to 
  confirmation pages.

  Note on Access Key:
  The access_key used in this form is a public client-side key provided by 
  Web3Forms. According to Web3Forms documentation, this key is designed to be 
  used directly in HTML and does not expose any private or sensitive information. 
  It is NOT a secret API key and does not require server-side protection
*/

// NAVIGATION HELPERS - (Buttons like "Back" and shared utilities)

// Simple "Back" button helper
function goBack() {
  if (document.referrer) {
    // if user actually came from another page
    window.history.back();
  } else {
    // fallback if page was opened directly
    window.location.href = "adoption_Page.html";
  }
}
// CONTACT FORM
async function handleContactSubmit(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData();
    formData.append("access_key", "fcaf0aa9-d7bc-4a06-9e79-21013075e5fc");
    formData.append("subject", "New Contact Message");
    formData.append("redirect", "thank_you.html");
    formData.append("name", document.getElementById("contactName").value);
    formData.append("email", document.getElementById("contactEmail").value);
    formData.append("message", document.getElementById("contactMessage").value);

    // Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        window.location.href = "thank_you.html"; // your redirect page
    } else {
        alert("Something went wrong. Try again.");
    }
}
// BOOKING FORM
async function handleBookingSubmit(event) {
    event.preventDefault();

    // Use FormData for Web3Forms
    const formData = new FormData();
    formData.append("access_key", "fcaf0aa9-d7bc-4a06-9e79-21013075e5fc");
    formData.append("subject", "New Adoption Appointment Request");
    formData.append("redirect", "thank_you.html");

    // Add the user inputs
    formData.append("fullName", document.getElementById("fullName").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("pet", document.getElementById("pet").value);
    formData.append("visitDate", document.getElementById("visitDate").value);
    formData.append("timeSlot", document.getElementById("timeSlot").value);

    // Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        window.location.href = "thank_you.html";
    } else {
        alert("Something went wrong. Please try again.");
    }
}

