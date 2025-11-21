document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")
  const icon = mobileBtn.querySelector("i")

  mobileBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")

    // Toggle icon between bars and times (X)
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    })
  })

  // Sticky Navbar Effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)"
    } else {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)"
    }
  })

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})
