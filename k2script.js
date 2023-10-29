window.onload = function() {
    // Retrieve stored user information from local storage
    const storedUserData = localStorage.getItem("userData");
  
    // Check if stored user data exists
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      populateForm(userData);
    }
  
    // Add event listener to the sign-up form
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Retrieve form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Check if stored user data exists and matches the entered information
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (name === userData.name && email === userData.email && password === userData.password) {
          // Redirect to index.html if the information matches
          window.location.href = "Aindex.html";
        } else {
          // Display "INVALID INFORMATION" and redirect to createaccount.html
          alert("INVALID INFORMATION");
          window.location.href = "createaccount2.html";
        }
      } else {
        // Store the entered information in local storage
        const userData = { name, email, password };
        localStorage.setItem("userData", JSON.stringify(userData));
  
        // Redirect to index.html
        window.location.href = "Aindex.html";
      }
    });
  };
  
  function populateForm(userData) {
    document.getElementById("name").value = userData.name;
    document.getElementById("email").value = userData.email;
    document.getElementById("password").value = userData.password;
  }
  