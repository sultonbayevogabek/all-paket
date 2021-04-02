import {selectElement} from "./selector-functions"

export default function scrollTop() {
    const scrollBtn = selectElement("#scroll-top");

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block"
        } else {
            scrollBtn.style.display = "none"
        }
    }

    function topFunction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    scrollBtn.addEventListener('click', () => {
        topFunction()
    })
}