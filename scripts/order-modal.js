import {selectAllElements, selectElement} from "./selector-functions"

export default function orderModal() {
    const orderModalLayer = selectElement('.order-modal'),
        orderModalContent = selectElement('.order-modal__content'),
        orderForm = selectElement('.order-modal__form'),
        customerNameLabel = selectElement('#customer_name_span'),
        customerPhoneLabel = selectElement('.customer_phone_span'),
        customerNameInput = selectElement('#customer_name'),
        customerPhoneInput = selectElement('#customer_phone'),
        orderFormSubmit = selectElement('.order-modal__form .order-btn'),
        productNameLabel = selectElement('.product-name-label span:first-child'),
        productNameInForm = selectElement('.product-name-label strong'),
        productNameInput = selectElement('#product_name'),
        scrollTopButton = selectElement('#scroll-top'),
        errorMessage = selectElement('.error-message')

    function openModal(productName, productNameShow) {
        document.body.style.overflow = 'hidden'
        orderModalLayer.classList.remove('hide-modal')
        scrollTopButton.style.display = 'none'
        productNameInForm.textContent = productNameShow
        productNameInput.value = productName
    }

    function closeModal() {
        document.body.style.overflow = ''
        orderModalLayer.classList.add('hide-modal')
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopButton.style.display = 'block'
        }
        orderForm.reset()
        errorMessage.classList.add('hidden')
    }

    let orderButtons = selectAllElements('[data-product-name]')

    orderButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            const target = e.target
            const productName = target.getAttribute('data-product-name'),
                productNameShow = target.getAttribute('data-product-name-show').replace(/_/gi, ' ')

            openModal(productName, productNameShow)
        })
    })

    orderModalLayer.addEventListener('click', e => {
        if (e.target === orderModalLayer) {
            closeModal()
        }
    })

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal()
        }
    })

    selectElement('.close-modal').addEventListener('click', () => {
        closeModal()
    })

    orderFormSubmit.addEventListener('click', () => {
        let customerName = customerNameInput.value,
            customerPhone = customerPhoneInput.value

        if (customerName.replace(/ /gi, '').length >= 5 && customerPhone.length === 17) {
            orderForm.submit()
            errorMessage.classList.add('hidden')
            orderForm.reset()
        } else {
            errorMessage.classList.remove('hidden')
        }
    })
}