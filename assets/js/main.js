//hero slider
var swiper = new Swiper(".hero__container", {
    loop: true,
    autoplay: {
        delay: 4e3,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

//Mobile Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//countdown
(function() {
    const second = 1e3, minute = second * 60, hour = minute * 60, day = hour * 24;
    let matchDay = "Sep 30, 2021 00:00:00", countDown = new Date(matchDay).getTime(), x = setInterval(function() {
        let now = new Date().getTime(), distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / day), document.getElementById("hours").innerText = Math.floor(distance % day / hour), 
        document.getElementById("minutes").innerText = Math.floor(distance % hour / minute), 
        document.getElementById("seconds").innerText = Math.floor(distance % minute / second);
        //do something later when date is reached
        if (distance < 0) {
            let headline = document.getElementById("headline"), countdown = document.getElementById("countdown"), content = document.getElementById("content");
            headline.innerText = "It's Match Day!";
            countdown.style.display = "none";
            content.style.display = "block";
            clearInterval(x);
        }
        //seconds
    }, 0);
})();

//Heart
$(function() {
    $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
    });
});

//video slider
var swiper = new Swiper(".video__container", {
    loop: true,
    autoplay: {
        delay: 4e3,
        disableOnInteraction: true
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".video__pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        440: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

//shop slider
var swiper = new Swiper(".shop__container", {
    loop: true,
    autoplay: {
        delay: 4e3,
        disableOnInteraction: true
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        440: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

//award slider
var swiper = new Swiper(".award__container", {
    loop: true,
    autoplay: {
        delay: 5e3,
        disableOnInteraction: false
    }
});

//Video Box
$(document).ready(function() {
    $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});