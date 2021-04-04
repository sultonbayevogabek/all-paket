import {selectAllElements, selectElement} from "./selector-functions"
import orderModal from './order-modal'

export default function languageFunction() {
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
        languageItems.forEach(item => item.classList.remove('language__item--active'))
        languageItems[selectedLanguageIndex].classList.add('language__item--active')
    } else {
        selectedLanguageIndex = 0
        languageItems.forEach(item => item.classList.remove('language__item--active'))
        languageItems[selectedLanguageIndex].classList.add('language__item--active')
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
        renderOnChangeLanguage(selectedLanguageIndex)

        target.classList.add('language__item--active')
    })

    const siteNavUl = selectElement('.site-nav__ul'),
        searchInput = selectElement('.search-input'),
        siteIntroContainer = selectElement('.site-intro .container'),
        siteInfoLeft = selectElement('.site-info__left'),
        ourProductsTitle = selectElement('.our-products h2'),
        ourProductsRow = selectElement('.our-products .row'),
        additionalTitle = selectElement('.additional h2'),
        shoeCoversTitle = selectElement('.shoe-covers__info h3'),
        shoeCoversUl = selectElement('.shoe-covers__ul'),
        shoeCoversOrder = selectElement('.shoe-covers__info button'),
        medicalMasksTitle = selectElement('.medical-masks h3'),
        medicalMasksUl = selectElement('.medical-masks ul'),
        medicalMasksOrder = selectElement('.medical-masks button'),
        greenHouseTitle = selectElement('.greenhouse h3'),
        greenHouseUl = selectElement('.greenhouse .shoe-covers__ul'),
        greenHouseOrder = selectElement('.greenhouse .order-btn'),
        contactsTitle = selectElement('.site-footer h2'),
        contactsMapLink = selectElement('.map-link'),
        orderModalTitle = selectElement('.order-modal__content h2'),
        customerNameLabel = selectElement('#customer_name_span'),
        customerPhoneLabel = selectElement('#customer_phone_span'),
        orderFormSubmit = selectElement('.order-modal__form .order-btn'),
        productNameLabel = selectElement('.product-name-label span:first-child'),
        errorMessage = selectElement('.error-message')

    function renderOnChangeLanguage(languageIndex = 0) {
        const {
            site_nav,
            site_intro,
            site_info,
            our_products,
            additional,
            greenhouse,
            contact_us,
            order,
            search,
            fill_form,
            enter_name,
            enter_phone,
            product_name,
            error_message
        } = content[languageIndex]

        siteNavUl.innerHTML = ''
        siteNavUl.innerHTML += `
            <li class="site-nav__li">
              <a class="site-nav__link" href="#our-products">${site_nav[0]}</a>
           </li>
           <li class="site-nav__li">
              <a class="site-nav__link" href="#additional">${site_nav[1]}</a>
           </li>
           <li class="site-nav__li">
              <a class="site-nav__link" href="#contacts">${site_nav[2]}</a>
           </li>
        `
        searchInput.setAttribute('placeholder', search)

        siteIntroContainer.innerHTML = `
            <div class="site-intro__left">
                <h1>${site_intro.title}</h1>
                <a href="#">${site_intro.button_text}</a>
            </div>
            <div class="site-intro__right">
                <div>15</div>
                <div>${site_intro.in_market}</div>
            </div>
        `

        siteInfoLeft.innerHTML = `
            <h2 class="section-title">${site_info.title}</h2>
            <ul class="site-info__ul">
                <li class="site-info__li">
                    <a class="site-info__link" href="#our-products">${site_info.links[0]}</a>
                </li>
                <li class="site-info__li">
                    <a class="site-info__link" href="#additional">${site_info.links[1]}</a>
                </li>
                <li class="site-info__li">
                    <a class="site-info__link" href="#greenhouse">${site_info.links[2]}</a>
                </li>
                <li class="site-info__li">
                    <a class="site-info__link" href="#contacts">${site_info.links[3]}</a>
                </li>
            </ul>
        `

        ourProductsTitle.textContent = our_products.title
        ourProductsRow.innerHTML = ''
        our_products.cards.forEach(({img, title, data, product_name}) => {
            ourProductsRow.innerHTML += `
                <div class="card">
                    <div class="card-header">
                        <div class="card-img">
                            <img src=${img} alt=${title} width="200" height="200">
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${title}</h3>
                        <div>
                            <strong>${data[0].key}: </strong>
                            <span>${data[0].value}</span>
                        </div>
                        <div>
                            <strong>${data[1].key}: </strong>
                            <span>${data[1].value}</span>
                        </div>
                        <div>
                            <strong>${data[2].key}: </strong>
                            <span>${data[2].value}</span>
                        </div>
                        <div>
                            <button class="order-btn" data-product-name=${product_name} data-product-name-show=${title.split(' ').join('_')}>${order}</button>
                        </div>
                    </div>
                </div>
            `
        })

        additionalTitle.textContent = additional.title
        shoeCoversTitle.textContent = additional.shoe_covers.title
        shoeCoversUl.innerHTML = ''
        additional.shoe_covers.data.forEach(({key, value}) => {
            shoeCoversUl.innerHTML += `
                 <li class="shoe-covers__li">
                    <strong>${key}: </strong>
                    <span>${value}</span>
                </li>
            `
        })
        shoeCoversOrder.textContent = order
        shoeCoversOrder.dataset.productName = 'бахилы'
        shoeCoversOrder.dataset.productNameShow = additional.shoe_covers.title.split(' ').join('_')
            medicalMasksTitle.textContent = additional.masks.title
        medicalMasksUl.innerHTML = ''
        additional.masks.data.forEach(({key, value}) => {
            medicalMasksUl.innerHTML += `
               <li class="shoe-covers__li">
                  <strong>${key}: </strong>
                  <span>${value}</span>
               </li> 
            `
        })
        medicalMasksOrder.textContent = order
        medicalMasksOrder.dataset.productName = 'медицинские_маски'
        medicalMasksOrder.dataset.productNameShow = additional.masks.title.split(' ').join('_')

        greenHouseTitle.textContent = greenhouse.title
        greenHouseUl.innerHTML = ''
        greenhouse.data.forEach(({key, value}) => {
            greenHouseUl.innerHTML += `
                <li class="shoe-covers__li">
                    <strong>${key}: </strong>
                    <span>${value}</span>
                </li>
            `
        })
        greenHouseOrder.textContent = order
        greenHouseOrder.dataset.productName = 'тепличные_плёнки'
        greenHouseOrder.dataset.productNameShow = greenhouse.title.split(' ').join('_')

        contactsTitle.textContent = contact_us.title
        contactsMapLink.textContent = contact_us.address

        orderModalTitle.textContent = fill_form
        customerNameLabel.textContent = enter_name
        customerPhoneLabel.textContent = enter_phone
        productNameLabel.textContent = product_name
        orderFormSubmit.textContent = order
        errorMessage.textContent = error_message

        orderModal()
    }

    renderOnChangeLanguage(selectedLanguageIndex)
}