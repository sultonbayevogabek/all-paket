document.addEventListener('DOMContentLoaded', () => {
   //declare selector functions
   function selectElement(selector) {
      return document.querySelector(selector)
   }

   function selectAllElements(selector) {
      return document.querySelectorAll(selector)
   }

   //custom language selector
   let x, i, j, l, ll, selectElem, a, b, c

   x = document.getElementsByClassName('custom-select')

   l = x.length

   for (i = 0; i < l; i++) {
      selectElem = x[i].getElementsByTagName('select')[0]

      ll = selectElem.length
      a = document.createElement('DIV')
      a.setAttribute('class', 'select-selected')
      a.innerHTML = selectElem.options[selectElem.selectedIndex].innerHTML
      x[i].appendChild(a)
      b = document.createElement('DIV')
      b.setAttribute('class', 'select-items select-hide')
      for (j = 1; j < ll; j++) {
         c = document.createElement('DIV')
         c.innerHTML = selectElem.options[j].innerHTML
         c.addEventListener('click', function (e) {
            let y, i, k, s, h, sl, yl
            s = this.parentNode.parentNode.getElementsByTagName('select')[0]
            sl = s.length
            h = this.parentNode.previousSibling
            for (i = 0; i < sl; i++) {
               if (s.options[i].innerHTML === this.innerHTML) {
                  s.selectedIndex = i
                  h.innerHTML = this.innerHTML.slice(0, 3).toUpperCase()

                  y = this.parentNode.getElementsByClassName('same-as-selected')
                  yl = y.length
                  for (k = 0; k < yl; k++) {
                     y[k].removeAttribute('class')
                  }
                  this.setAttribute('class', 'same-as-selected')
                  break
               }
            }
            h.click()
         })
         b.appendChild(c)
      }
      x[i].appendChild(b)
      a.addEventListener('click', function (e) {
         e.stopPropagation()
         closeAllSelect(this)
         this.nextSibling.classList.toggle('select-hide')
         this.classList.toggle('select-arrow-active')
      })
   }

   function closeAllSelect(elem) {
      let x, y, i, xl, yl, arrNo = []
      x = document.getElementsByClassName('select-items')
      y = document.getElementsByClassName('select-selected')
      xl = x.length
      yl = y.length
      for (i = 0; i < yl; i++) {
         if (elem === y[i]) {
            arrNo.push(i)
         } else {
            y[i].classList.remove('select-arrow-active')
         }
      }
      for (i = 0; i < xl; i++) {
         if (arrNo.indexOf(i)) {
            x[i].classList.add('select-hide')
         }
      }
   }

   document.addEventListener('click', closeAllSelect)

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
   }

   function closeSearchInput() {
      searchInputElement.classList.remove('search-input-open')
      searchInputElement.classList.add('search-input-close')

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
})
