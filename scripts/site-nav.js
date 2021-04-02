import {selectElement} from "./selector-functions"

export default function siteNav() {
    const menuBar = selectElement('.menu-bar'),
        siteNav = selectElement('.site-nav')

    menuBar.addEventListener('click', () => {
        siteNav.classList.toggle('site-nav-open')

        if (siteNav.classList.contains('site-nav-open')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    })

    siteNav.addEventListener('click', e => {
        if (e.target.classList.contains('site-nav__link')) {
            e.currentTarget.classList.remove('site-nav-open')
            document.body.style.overflow = ''
        }
    })
}
