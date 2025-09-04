document.querySelectorAll('.page img').forEach((img) => {
    img.addEventListener('contextmenu', (e) => e.preventDefault());
    let pressTimer;
    img.addEventListener('touchstart', (e) => {
        pressTimer = setTimeout(() => {
            e.preventDefault();
        }, 500);
    });

    img.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });

    img.addEventListener('touchmove', () => {
        clearTimeout(pressTimer);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector(".back-top-wrapper");

  // Start hidden
  gsap.set(backToTopBtn, { autoAlpha: 0, y: 100 });

  // Trigger visibility based on #growth-section
  ScrollTrigger.create({
    trigger: ".page_service_02",
    start: "bottom bottom", // When bottom of #growth-section hits bottom of viewport
    onEnter: () => {
      gsap.to(backToTopBtn, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(backToTopBtn, {
        autoAlpha: 0,
        y: 100,
        duration: 0.5,
        ease: "power2.in",
      });
    },
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: true },
      duration: 1.5,
      ease: "power2.out",
    });
  });
});

const popupImages = document.querySelectorAll(
    " .grid-img-cont .popup_images, .grid-base-image-top .popup_images, .service-grid-container1 .popup_images"
  );
 
  popupImages.forEach((image, index) => {
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "top 85%", // Trigger when image is 85% in viewport
        toggleActions: "play reverse play reverse", // Only play once
      },
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1
    });
  });

// const revealImageImages = document.querySelectorAll(".revealimage");

// revealImages.forEach((image, index) => {
//   gsap.from(image, {
//     scrollTrigger: {
//       trigger: image,
//       start: "top 85%", // when image enters viewport
//       toggleActions: "play reverse play reverse", 
//     },
//     opacity: 0,
//     scale: 0.5,
//     duration: 0.6,
//     ease: "power2.out",
//     delay: index * 0.1 // stagger effect
//   });
// });


  
// window.addEventListener("DOMContentLoaded", () => {
//   textAnimationScroll();
// });
// Select all images you want to animate
// Select all images inside .revealimage
const revealImages = document.querySelectorAll(".revealimage img");

revealImages.forEach((img, index) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 85%",         // animation starts when img is 85% in viewport
      toggleActions: "play none none reverse", 
    },
    opacity: 0,                // fade in
    y: 60,                     // slide up slightly
    duration: 1,               // normal speed (1s)
    ease: "power2.out",        // smooth easing
    delay: index * 0.015        // stagger if multiple images
  });
});

