import {selectElement} from "./selector-functions"

export default function searchInput() {
    const searchFormElement = selectElement('.search-form'),
        searchInputElement = selectElement('.search-input'),
        searchButtonElement = selectElement('.search-button'),
        searchButtonIcon = selectElement('.search-button img')

    function openSearchInput() {
        setTimeout(() => {
            searchInputElement.classList.remove('search-input-close')
            searchInputElement.classList.add('search-input-open')
            searchInputElement.classList.remove('hidden')
        }, 200)
        setTimeout(() => {
            searchInputElement.focus()
        }, 600)
    }

    function closeSearchInput() {
        searchInputElement.classList.remove('search-input-open')
        searchInputElement.classList.add('search-input-close')
        searchFormElement.reset()
        setTimeout(() => {
            searchInputElement.classList.add('hidden')
        }, 400)
    }

    let isSearchInputOpen = false

    searchButtonElement.addEventListener('click', e => {
        isSearchInputOpen = !isSearchInputOpen

        if (isSearchInputOpen) {
            searchButtonIcon.src = 'img/icons/search_icon_green.svg'
            openSearchInput()
        } else {
            searchButtonIcon.src = 'img/icons/search_icon.svg'
            closeSearchInput()
        }
    })

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape' && isSearchInputOpen) {
            searchButtonIcon.src = 'img/icons/search_icon.svg'
            closeSearchInput()
            isSearchInputOpen = !isSearchInputOpen
        }
    })
}