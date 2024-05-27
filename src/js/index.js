import Alpine from 'alpinejs'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'

window.Alpine = Alpine

Alpine.start()

document.querySelectorAll('.swiper').forEach((swiper, index) => {
  new Swiper(swiper, {
    modules: [Autoplay],
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      reverseDirection: index % 2 == 0,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesOffsetBefore: index % 2 == 0 ? 0 : 100,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesOffsetBefore: index % 2 == 0 ? 0 : 100,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesOffsetBefore: index % 2 == 0 ? 0 : 100,
      },
    },
  })
})

if (document.querySelectorAll('.draw-svg-path').length > 0) {
  document.querySelectorAll('.draw-svg-path').forEach((svg) => {
    svg.querySelectorAll('.svg-path').forEach((line) => {
      const length = line.getTotalLength()
      line.style.strokeDasharray = length
      line.style.strokeDashoffset = length

      window.addEventListener('scroll', drawSvgOnScroll.bind(event, svg, line))
    })
  })
}

function drawSvgOnScroll(svg, line, _event) {
  console.log(_event)
  const windowHeight = window.innerHeight
  const svgPosition = svg.getBoundingClientRect().top
  const pixelsScrolled = svgPosition * -1 + windowHeight

  let speed = 1

  const onePercent = (windowHeight / 100) * speed
  let percentageScrolled = pixelsScrolled / onePercent
  console.log(onePercent)

  if (percentageScrolled < 0) {
    percentageScrolled = 0
  }
  if (percentageScrolled > 100) {
    percentageScrolled = 100
  }
  const length = line.getTotalLength()
  const draw = length * (percentageScrolled / 100)
  line.style.strokeDashoffset = length - draw
}


const videoElement = document.getElementById('myVideo')
const maxVideoHeight = 720
const minVideoHeight = 200

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const scrollFraction = scrollTop / maxScroll

  const newVideoHeight = Math.min(
    maxVideoHeight,
    Math.max(minVideoHeight, maxVideoHeight - scrollFraction * 1800)
  )

  videoElement.style.height = `${newVideoHeight}px`
})
