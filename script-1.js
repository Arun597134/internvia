/* ============================= */
/* SLIDE ANIMATION (LEFT & RIGHT) */
/* ============================= */

const animated = document.querySelectorAll('.slide-left, .slide-right');

const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        slideObserver.unobserve(entry.target); // run once
      }
    });
  },
  { threshold: 0.2 }
);

animated.forEach(el => slideObserver.observe(el));


/* ============================= */
/* COUNTER ANIMATION (GOALS) */
/* ============================= */

const counters = document.querySelectorAll('.counter');
const speed = 50;

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        let count = 0;
        const increment = Math.ceil(target / speed);

        const updateCounter = () => {
          count += increment;
          if (count < target) {
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter); // run once
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => counterObserver.observe(counter));
