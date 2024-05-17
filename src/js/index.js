import Alpine from 'alpinejs';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';


window.Alpine = Alpine;

Alpine.start();

document.querySelectorAll('.swiper').forEach((swiper, index) => {
    new Swiper(swiper, {
        modules: [Autoplay],
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            reverseDirection: index % 2 == 0
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
    });
});
