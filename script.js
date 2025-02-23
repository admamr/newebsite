document.addEventListener("DOMContentLoaded", function () {
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

  // Project Tab Functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const projectContent = document.getElementById("project-content");

  const projects = {
    wordpress: [
      {
        title: "Elegant Jewelry E-Commerce Store  ",
        description:
          "Designed and developed a sophisticated e-commerce platform for a luxury jewelry brand, ensuring a seamless and engaging shopping experience.Result: Increased customer engagement and sales growth through an immersive, visually stunning, and user-friendly online store",
        img: "./Projects/LaraJ.png",
        button: "Explore",
        link: "https://larajewelry.co.il/",
      },
      {
        title: "Kickboxing & Training Gym Website",
        description:
          "Built a high-energy website for a kickboxing gym, delivering a bold, action-packed experience that attracts and converts visitors. Result: Increased membership sign-ups and engagement with an immersive, high-performance digital experience.Result: Increased membership sign-ups and engagement with an immersive, high-performance digital experience.",
        img: "./Projects/Mixmartialarts-.png",
        button: "Explore",
        link: "https://mix-martialarts.com/",
      },
      {
        title: "WordPress Site 3",
        description:
          "Built a high-energy website for a kickboxing gym, delivering a bold, action-packed experience that attracts and converts visitors. Result: Increased membership sign-ups and engagement with an immersive, high-performance digital experience.Result: Increased membership sign-ups and engagement with an immersive, high-performance digital experience.",
        img: "./Projects/RF.png",
        button: "Explore",
        link: "https://rfglobal.co.il/",
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
    if (!projectContent) return;
    projectContent.innerHTML = "";
    projects[category].forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-card");
      projectDiv.innerHTML = `
            <img src="${project.img}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank"><button>${project.button}</button></a>
            </div>
        `;
      projectContent.appendChild(projectDiv);
    });
  }

  if (tabButtons.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        document
          .querySelector(".tab-button.active")
          ?.classList.remove("active");
        this.classList.add("active");
        loadProjects(this.dataset.category);
      });
    });
    loadProjects("wordpress"); // Load default category
  }
});
