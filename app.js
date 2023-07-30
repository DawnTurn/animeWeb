const wrapper = document.querySelectorAll('.wrapper')
const carouselContainer = document.querySelector('.carousel-container')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const getStartedbtns = document.querySelectorAll('.carousel-container button')
const video = document.querySelector('.video')
const tl = gsap.timeline()


let counter = 1;
const size = wrapper[0].clientWidth;

carouselContainer.style.transform = "translateX(" + -size * counter + "px)";

tl.fromTo(".firstPage", .8, { height: "0%" }, { height: "100%", ease: Power4.easeInOut })
  .fromTo(".heading", 0.5, { opacity: 0 }, { opacity: 1 })
  .fromTo('.hero-header', 1.7, {x: '-100%', opacity: 0}, {opacity: 1, x: 0, ease: Elastic.easeOut })
  .fromTo(".hero-p", 0.3, { opacity: 0, y: "-30px" }, { opacity: 1, y: 0 }, '-=1')
  .fromTo(".button", 0.3, { opacity: 0, y: "-30px" }, { opacity: 1, y: 0 }, '-=.6');

nextBtn.addEventListener('click', () => {
    if(counter >= 6) return;
    carouselContainer.style.transition = 'transform 0.3s ease-in-out';
    counter++
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
})

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselContainer.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
});


carouselContainer.addEventListener('transitionend', () => {
    if(wrapper[counter].id === 'lastClone'){
        carouselContainer.style.transition = 'none'
        counter = wrapper.length - 2
        carouselContainer.style.transform =
          "translateX(" + -size * counter + "px)";
    }

    if(wrapper[counter].id === 'firstClone'){
        carouselContainer.style.transition = 'none'
        counter = wrapper.length - counter
        carouselContainer.style.transform =
          "translateX(" + -size * counter + "px)";
    }
})


setInterval(() => {
    carouselContainer.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
}, 13000);


getStartedbtns.forEach(getStarted => {
    getStarted.addEventListener('click', () => {
        tl.to('.c1', .5, {opacity: 0, y: '-30px'})
           .to('.firstPage', 1, {y: '-100%', ease: Power4.easeInOut})
           .to('.first', .5, {opacity: 1}, '-=.2')
           .fromTo('.hero-sec-content', 1, {opacity: 0, y: '-40px'}, {opacity: 1, y: 0, ease: 'bounce'}, '-=.4')
           .fromTo('.hero-sec-content-left p', .5, {opacity: 0, x: '-30px'}, {opacity: 1, x: 0, stagger: .4}, '-=.4')
           .fromTo('header h1', .5, {opacity: 0}, {opacity: 1}, '-=.4')
           .fromTo('header a', .5, {opacity: 0}, {opacity: 1, stagger: .2}, '-=.5')
           .fromTo('.need-sleep', 1.6, {opacity: 0, x: '-40px'}, {opacity: 1, x: 0, ease: 'elastic'}, '-=.8')
        video.play()
    })
})

gsap.registerPlugin(ScrollTrigger)


// if(ScrollTrigger.isTouch !== 1){
    
// }

window.addEventListener('scroll', isTouch)

function isTouch(){
    ScrollSmoother.create({
      wrapper: ".smooth-wra",
      content: ".smooth-co",
      smooth: 1.2,
      effects: true,
      marker: true,
    });

    gsap.fromTo(
      ".first",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".first",
          start: "center",
          end: "1000",
          scrub: true,
        },
      }
    );

    leftSlides = gsap.utils.toArray(".second-c .left-slide");

    leftSlides.forEach((leftslide) => {
      gsap.fromTo(
        leftslide,
        { opacity: 0, x: "-100px" },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: leftslide,
            start: "-700",
            end: "-40",
            scrub: true,
          },
        }
      );
    });

    rightSlides = gsap.utils.toArray(".second-c .right-slide");

    rightSlides.forEach((rightslide) => {
      gsap.fromTo(
        rightslide,
        { opacity: 0, x: "100px" },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: rightslide,
            start: "-800",
            end: "-30",
            scrub: true,
          },
        }
      );
    });
}