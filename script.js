function login() {
    var password = document.getElementById("password").value;
    
    // Replace "YOUR_PASSWORD" with the actual password you want to use
    if (password === "aaaa") {
      window.location.href = "main.html"; // Redirect to the main page
    } else {
      alert("Invalid password. Please try again.");
    }
  }
  
  function goToLogin() {
    window.location.href = "index.html"; // Redirect to the login page
  }

  
  