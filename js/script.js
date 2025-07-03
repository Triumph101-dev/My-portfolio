document.addEventListener("DOMContentLoaded", () => {
    function trackProjectView(projectId, countKey) {
  fetch(`https://api.countapi.xyz/hit/triumph101-dev/${countKey}`)
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById(projectId);
      if (el) el.textContent = `👁 ${data.value} views`;
    });
}

// Call this for each project
trackProjectView("count-book-haven", "book-haven");
trackProjectView("count-recipe-app", "recipe-app");
trackProjectView("count-weather", "weather-app");

  emailjs.init("safbQLpWAhWMOuQKI");

  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusMsg.textContent = "⏳ Sending message...";
    statusMsg.classList.remove("hidden");
    statusMsg.classList.add("show");

    emailjs.sendForm("service_7nfnwjj", "template_4oshgld", this)
      .then(() => {
        statusMsg.textContent = "✅ Message sent!";
        form.reset();

        setTimeout(() => {
          statusMsg.classList.remove("show");
          statusMsg.classList.add("hidden");
        }, 3000);

      }, (error) => {
        statusMsg.textContent = "❌ Failed to send. Please try again.";
        setTimeout(() => {
          statusMsg.classList.remove("show");
          statusMsg.classList.add("hidden");
        }, 4000);
      });
  });
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
}

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const newTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
});
