import {selectAllElements, selectElement} from "./selector-functions"

export default function orderModal() {
    class PhoneField {
        constructor(a, b = '+7(___)___-____', c = '_') {
            this.handler = a, this.mask = b, this.placeholder = c, this.setLength(), this.setValue(), this.start = this.placeHolderPosition() - 1, this.handler.addEventListener('focusin', () => {
                this.focused()
            }), this.handler.addEventListener('keydown', d => {
                this.input(d)
            })
        }

        focused() {
            let a = this.placeHolderPosition()
            this.handler.selectionStart = a, this.handler.selectionEnd = a
        }

        input(a) {
            if (this.isDirectionKey(a.key) || a.preventDefault(), this.isNum(a.key)) this.changeChar(a.key); else if (this.isDeletionKey(a.key)) if ('Backspace' === a.key) {
                let b = this.start;
                this.changeChar(this.placeholder, -1, b)
            } else this.changeChar(this.placeholder)
        }

        setLength() {
            this.handler.maxLength = this.mask.length
        }

        setValue() {
            this.handler.value = this.mask
        }

        isNum(a) {
            return !isNaN(a) && parseInt(+a) == a && !isNaN(parseInt(a, 10))
        }

        isDeletionKey(a) {
            return 'Delete' === a || 'Backspace' === a
        }

        isDirectionKey(a) {
            return 'ArrowUp' === a || 'ArrowDown' === a || 'ArrowRight' === a || 'ArrowLeft' === a || 'Tab' === a
        }

        isPlaceholder(a) {
            return a == this.placeholder
        }

        placeHolderPosition() {
            return this.handler.value.indexOf(this.placeholder)
        }

        changeChar(a, b = 1, c = this.mask.length) {
            let d = this.handler.value, f
            f = 0 < b ? this.handler.selectionStart : this.handler.selectionStart - 1
            let g = ''
            if (f === c) return !1
            if (!this.isNum(d[f]) && !this.isPlaceholder(d[f])) do if (f += b, f === c) return !1; while (!this.isNum(d[f]) && !this.isPlaceholder(d[f]))
            g = this.replaceAt(d, f, a), this.handler.value = g, 0 < b && (f += b), this.handler.selectionStart = f, this.handler.selectionEnd = f
        }

        replaceAt(a, b, c) {
            return a.substring(0, b) + c + a.substring(++b)
        }
    }

    let a = document.getElementsByClassName('masked-phone'), b = []
    for (let c = 0; c < a.length; c++) b.push(new PhoneField(a[c], a[c].dataset.phonemask, a[c].dataset.placeholder))

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
        scrollTopButton = selectElement('#scroll-top')

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
}