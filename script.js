document.addEventListener("DOMContentLoaded", function () {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  // Load Theme Preference from Local Storage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
  }

  // Change Profile Image Based on Screen Size
  function updateProfileImage() {
    const profilePic = document.getElementById("profile-pic");
    if (window.innerWidth <= 768) {
      profilePic.src = "/mnt/data/Mobile.jpeg";
    } else if (window.innerWidth <= 1024) {
      profilePic.src = "/mnt/data/Tablet.jpeg";
    } else {
      profilePic.src = "/mnt/data/Laptop.jpeg";
    }
  }

  window.addEventListener("resize", updateProfileImage);
  window.addEventListener("load", updateProfileImage);
  updateProfileImage();

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  // Load Theme Preference from Local Storage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
  }

  // Change Profile Image Based on Screen Size
  function updateProfileImage() {
    const profilePic = document.getElementById("profile-pic");
    if (window.innerWidth <= 768) {
      profilePic.src = "/mnt/data/Mobile.jpeg";
    } else if (window.innerWidth <= 1024) {
      profilePic.src = "/mnt/data/Tablet.jpeg";
    } else {
      profilePic.src = "/mnt/data/Laptop.jpeg";
    }
  }

  window.addEventListener("resize", updateProfileImage);
  window.addEventListener("load", updateProfileImage);
  updateProfileImage();

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Project Tab Functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const projectContent = document.getElementById("project-content");

  const projects = {
    wordpress: [
      {
        title: "WordPress Site 1",
        description: "A sleek business website.",
        img: "./Projects/LaraJ.png",
      },
      {
        title: "WordPress Site 2",
        description: "An e-commerce store.",
        img: "./Projects/Mixmartialarts-.png",
      },
    ],
    coding: [
      {
        title: "Coding Project 1",
        description: "Custom-built responsive website.",
        img: "/mnt/new website/Projects/LaraJ.png",
      },
      {
        title: "Coding Project 2",
        description: "Interactive JavaScript app.",
        img: "/mnt/data/code2.png",
      },
    ],
    webapps: [
      {
        title: "Web App 1",
        description: "A powerful SaaS application.",
        img: "/mnt/data/app1.png",
      },
      {
        title: "Web App 2",
        description: "AI-driven analytics tool.",
        img: "/mnt/data/app2.png",
      },
    ],
  };

  function loadProjects(category) {
    projectContent.innerHTML = "";
    projects[category].forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-card");
      projectDiv.innerHTML = `
              <img src="${project.img}" alt="${project.title}" class="project-image">
              <div class="project-info">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
              </div>
          `;
      projectDiv.addEventListener("click", () => {
        alert(`Opening: ${project.title}`);
      });
      projectContent.appendChild(projectDiv);
    });
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".tab-button.active").classList.remove("active");
      this.classList.add("active");
      loadProjects(this.dataset.category);
    });
  });

  loadProjects("wordpress"); // Load default category
});
