function page1Animation() {
  let tl = gsap.timeline()

  tl.from('.nav-part1 img', {
    y: -40,
    delay: 0.1,
    duration: 0.4,
    opacity: 0,
  })

  tl.from('.nav-part2 a', {
    y: -40,
    duration: 0.4,
    opacity: 0,
    stagger: 0.1,
  })

  tl.from('.nav-btn', {
    y: -40,
    duration: 0.4,
    opacity: 0,
  })

  tl.from('.center-part1 h1', {
    x: -100,
    opacity: 0,
    duration: 0.4,
  })

  tl.from('.center-part1 p', {
    x: -100,
    opacity: 0,
    duration: 0.5,
  })
  tl.from('.center-part1 button', {
    x: -100,
    scale: 0,
  })

  tl.from(
    '.center-part2',
    {
      x: 100,
      opacity: 0,
      duration: 0.5,
    },
    '-=0.4'
  )
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-2',
      scroller: 'body',
      // markers: true,
      start: 'top 50%',
      end: '-5%',
      scrub: 2,
    },
  })

  tl2.from('.bank-info h2 , .bank-info p', {
    x: -300,
    duration: 0.5,
    opacity: 0,
  })

  tl2.from('.info-card1', {
    y: -200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  })
}

function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-3',
      scroller: 'body',
      // markers: true,
      start: 'top 50%',
      end: '-5%',
      scrub: 2,
    },
  })

  tl3.from('.section-3 h2', {
    x: -300,
    duration: 0.5,
    opacity: 0,
  })

  tl3.from('.article-card', {
    y: -200,
    opacity: 0,
    duration: 0.5,
    stagger: -0.3,
  })
}

page1Animation()
page2Animation()
page3Animation()
