document.addEventListener('DOMContentLoaded', () => {
   //declare selector functions
   function selectElement(selector) {
      return document.querySelector(selector)
   }

   function selectAllElements(selector) {
      return document.querySelectorAll(selector)
   }

   //search input
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

   // language select
   const languageElement = selectElement('.language'),
       languageSelected = selectElement('.language__selected'),
       languageList = selectElement('.language__list'),
       languageItems = selectAllElements('.language__item')

   function showLanguagesList() {
      languageList.classList.remove('hidden')
   }

   function hideLanguageList() {
      languageList.classList.add('hidden')
   }

   languageSelected.addEventListener('click', e => {
      if (languageList.classList.contains('hidden')) {
         showLanguagesList()
      } else {
         hideLanguageList()
      }
   })

   window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
         hideLanguageList()
      }
   })

   window.addEventListener('click', e => {
      if (e.target !== languageSelected) {
         hideLanguageList()
      }
   })

   let selectedLanguageIndex

   if (localStorage.getItem('selectedLanguageIndex')) {
      selectedLanguageIndex = localStorage.getItem('selectedLanguageIndex')
   } else {
      selectedLanguageIndex = 0
   }

   languageSelected.textContent = languageItems[selectedLanguageIndex].dataset.selected

   languageList.addEventListener('click', e => {
      const target = e.target
      languageItems.forEach((item, index) => {
         item.classList.remove('language__item--active')

         if (target === item) {
            selectedLanguageIndex = index
            languageSelected.textContent = languageItems[selectedLanguageIndex].dataset.selected
            localStorage.setItem('selectedLanguageIndex', selectedLanguageIndex)
         }
      })

      target.classList.add('language__item--active')
   })


   //navigation bar
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

   //scroll top top element

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
})
