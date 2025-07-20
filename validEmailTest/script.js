function validateEmail() {
        const email = document.getElementById("email").value;
        const result = document.getElementById("emailResult");

        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (pattern.test(email)) {
          result.style.color = "green";
          result.textContent = "✅ Valid email";
          setTimeout(() => {
            window.location.href = "Welcome.html";
          }, 1000);
          return false; 
        } else {
          result.style.color = "red";
          result.textContent = "❌ Invalid email format";
          return false;
        }
}

