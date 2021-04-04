export default function maskedPhone() {
    let element = document.getElementById('customer_phone');
    let maskOptions = {
        mask: '+{998}(00)000-00-00'
    };
    let mask = IMask(element, maskOptions);
}