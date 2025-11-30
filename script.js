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
 // Contact Page Script
async function handleContactSubmit(event) {
  event.preventDefault();

  const endpoint = "https://api.web3forms.com/submit";

  const data = {
    access_key: "fcaf0aa9-d7bc-4a06-9e79-21013075e5fc",
    subject: "📩 New Contact Message",
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    message: document.getElementById("contactMessage").value
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  let result = await response.json();

  if (result.success) {
    window.location.href = "thank_you.html";  
  } else {
    alert("Something went wrong. Please try again.");
  }
}

// Book Appointment Script
async function handleBookingSubmit(event) {
  event.preventDefault(); // Stop form from auto submitting

  const endpoint = "https://api.web3forms.com/submit";

  const data = {
    access_key: "fcaf0aa9-d7bc-4a06-9e79-21013075e5fc",
    subject: "🐾 New Adoption Visit Request",
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value || "Not provided",
    pet: document.getElementById("pet").value,
    visitDate: document.getElementById("visitDate").value,
    timeSlot: document.getElementById("timeSlot").value
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  let result = await response.json();

  if (result.success) {
    window.location.href = "thank_you.html";  // Redirect WITHOUT showing the API site
  } else {
    alert("Something went wrong. Please try again.");
  }
}

