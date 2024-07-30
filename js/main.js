// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

//Navbar 
document.addEventListener("DOMContentLoaded", function() {
  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll(".main-menu a, .mobile-menu a");
  menuItems.forEach(item => {
      if (item.getAttribute("href") === currentLocation) {
          item.classList.add("active");
      }
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

//Video
function playVideo() {
  var videoPlayer = document.querySelector(".video-style");
  var video = document.getElementById("myVideo"); // Correctly get the video element

  videoPlayer.style.display = "block"; // Show the video player
  video.currentTime = 0; // Reset to the beginning
  video.muted = false; // Unmute the video
  video.play();
}

function stopVideo() {
  var videoPlayer = document.querySelector(".video-style");
  var video = document.getElementById("myVideo"); // Correctly get the video element

  videoPlayer.style.display = "none"; // Hide the video player
  video.pause(); // Pause the video
  video.currentTime = 0; // Reset to the beginning
  video.muted = true; // Mute the video
}

//Email

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_wawq6rg";
  const templateID = "template_8khbnp3";

  emailjs.send(serviceID, templateID, params)
  .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

  })
  .catch(err=>console.log(err));


}