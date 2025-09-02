// Premium Real Estate Landing Page JavaScript

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
        preloader.classList.add('hidden');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});


async function handleSubmit(e, sheet) {
    e.preventDefault();
    const form = e.target; // The form element
    const name = form.name.value.trim(); // Assuming your input has name="name"
    const phone = form.phone.value.trim(); // Assuming your input has name="phone"
    if (form.project) {
        const project = form.project.value.trim(); // Assuming your input has name="phone"
        if (project != "none") {
            sheet = project;
        }else{
            console.log("none");
            
        }
    }else{
        console.log("all");
        
    }
    // // Validate inputs
    if (!name || !phone) {
      showAlert("الرجاء إدخال الاسم ورقم الهاتف.", "warning");
      return;
    }
  
    console.log(name, phone,sheet);

    
  }


          // ===== CONFIG: Set your default sheet here =====
          let SUBMIT_SHEET = 'Hyde Park All'; // Default sheet name

          // Function to open modal with selected project
  
          // You can change this logic:
          // - Based on URL: ?project=merasee
          // - Based on campaign, cookie, etc.
  
          // Example: Change sheet based on URL parameter
          const urlParams = new URLSearchParams(window.location.search);
          const urlProject = urlParams.get('project');
          if (urlProject) {
              SUBMIT_SHEET = decodeURIComponent(urlProject); // e.g., ?project=مراسي
          }
  
          // ===== Show Modal Automatically =====
          document.addEventListener("DOMContentLoaded", function () {
              const exampleModal = document.getElementById('exampleModal');
  
              // Update the form's onSubmit to use the dynamic sheet
              const form = document.getElementById('contactForm');
              form.onsubmit = function (e) {
                  handleSubmit(e, SUBMIT_SHEET);
              };
  
              // Show modal after 1 second
              setTimeout(() => {
                  const modal = new bootstrap.Modal(exampleModal);
                  modal.show();
              }, 1000);
          });
          function setSheetAndOpen(sheet) {
              SUBMIT_SHEET = sheet;
  
              const projectInput = document.querySelector('input[name="project"]');
              // Optional: Update hidden input if you have one
              if (projectInput) {
                  projectInput.value = sheet;
              }
              document.getElementById('displayedProject').textContent = projectInput.value;
              if (projectInput.value == "Hyde Park All") {
                  console.log('ssss');
  
                  document.getElementById('modal-title').style.display = 'none';
              } else {
                  console.log('ss');
  
                  console.log(
                      projectInput
                  );
  
                  document.getElementById('modal-title').style.display = 'block';
              }
              // Open modal
              const exampleModal = document.getElementById('exampleModal');
              const modal = bootstrap.Modal.getInstance(exampleModal) || new bootstrap.Modal(exampleModal);
              modal.show();
          }
  