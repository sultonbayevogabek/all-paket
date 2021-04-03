import searchInputFunction from "./search-input"
import siteNav from "./site-nav"
import languageFunction from "./language"
import scrollTop from "./scroll-top"
import orderModal from "./order-modal"
import maskedPhone from "./masked-phone"

document.addEventListener('DOMContentLoaded', () => {
    searchInputFunction()
    siteNav()
    languageFunction()
    scrollTop()
    maskedPhone()
    orderModal()
})
