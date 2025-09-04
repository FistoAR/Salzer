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

document.addEventListener("DOMContentLoaded", function () {
  const aboutLinks = document.querySelectorAll('.nav-links');
  const audio = document.getElementById('infoAudio');
 
  aboutLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const audioPath = this.getAttribute('data-audio-path');
      const targetEl = document.getElementById(targetId);
 
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Play audio
      if (audioPath && audio) {
        audio.src = audioPath;
        audio.currentTime = 0;
        audio.play();
      }
    });
  });
});

// -------------------------------------------------------------- 
const navToggle = document.getElementById('navToggle');
const tocNav = document.getElementById('tocNav');
const navOverlay = document.getElementById('navOverlay');
function openMenu() {
    navToggle.classList.add('open');
    tocNav.classList.add('show');
    navOverlay.classList.add('show');
    navToggle.setAttribute('aria-expanded', 'true');
}
function closeMenu() {
    navToggle.classList.remove('open');
    tocNav.classList.remove('show');
    navOverlay.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', function () {
    if (tocNav.classList.contains('show')) closeMenu();
    else openMenu();
});
navOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.toc-list a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
// Keyboard: ESC to close
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closeMenu();
});


// SHARE BUTTON LOGIC
const shareBtn = document.getElementById('shareBtn');
const shareMenu = document.getElementById('shareMenu');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const copiedMsg = document.getElementById('copiedMsg');
const shareInput = document.getElementById('shareInput');

shareInput.value = window.location.href;

shareBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const wasOpen = shareMenu.classList.contains('show');
    document.querySelectorAll('.share-menu.show').forEach(el => el.classList.remove('show'));
    if (!wasOpen) {
        shareMenu.classList.add('show');
        shareMenu.setAttribute('aria-hidden', 'false');
        try {
        shareInput.value = window.top.location.href;
        } catch (e) {
        // fallback to current window location if cross-origin blocked
        shareInput.value = window.location.href;
        }
        setTimeout(() => shareInput.select(), 90);
    } else {
        shareMenu.classList.remove('show');
        shareMenu.setAttribute('aria-hidden', 'true');
    }
});
copyLinkBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(shareInput.value).then(function () {
        copiedMsg.classList.add('show');
        setTimeout(() => copiedMsg.classList.remove('show'), 1200);
    });
    shareInput.select();
});

// hide share menu on body/overlay click or Esc
document.addEventListener('click', e => {
    if (!shareMenu.contains(e.target) && !shareBtn.contains(e.target))
        shareMenu.classList.remove('show');
});
document.addEventListener('keydown', e => {
    if (e.key === "Escape") shareMenu.classList.remove('show');
});

