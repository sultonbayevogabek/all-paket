const content = [
    //RU
    {
        site_nav: ['Наша продукция', 'Производство', 'Контакты'],
        site_intro: {
            title: 'Лучшые пакеты Ташкента по лучшым ценам',
            button_text: 'Узнать Больше',
            in_market: 'лет на рынке'
        },
        site_info: {
            title: 'Флексографическая и Глубокая Печать',
            links: ['Наши пакеты', 'Дополнительные товары', 'Полиетиленовые плёнки', 'Как связатся с нами']
        },
        our_products: {
            title: 'Наши товары',
            cards: [
                {
                    img: 'img/our_products/one.png',
                    title: 'Пакет майка',
                    data: [
                        {
                            key: 'Материал',
                            value: 'полиэтилен ПНД от 12 мкм (выдерживает до 2 кг) до 30 мкм (выдерживает до 25 кг)'
                        },
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Печать', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/two.png',
                    title: 'Рулоны',
                    data: [
                        {key: 'Материал', value: 'ПСД, ПВД'},
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'По вашему выбору'}
                    ]
                },
                {
                    img: 'img/our_products/three.png',
                    title: 'Мешки для мусора',
                    data: [
                        {key: 'Материал', value: 'полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'флексографическая до 6 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/four.png',
                    title: 'термусадочная плёнка',
                    data: [
                        {key: 'Материал', value: 'полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Печать', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/five.png',
                    title: 'Пакет "Рейтер"',
                    data: [
                        {
                            key: 'Материал',
                            value: 'полиэтилен ПНД от 12 мкм (выдерживает до 2 кг) до 30 мкм (выдерживает до 25 кг)'
                        },
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/six.png',
                    title: 'Фасовочные пакеты',
                    data: [
                        {key: 'Материал', value: ' полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Печать', value: 'Цвет упаковки: в зависимости от заказа'}
                    ]
                }
            ]
        },
        additional: {
            title: 'Дополнительно',
            shoe_covers: {
                title: 'Бахилы',
                data: [
                    {key: 'Виды', value: 'Одноразовые средства защиты'},
                    {key: 'Стандартный размер', value: '38х45 | 17 мкм, 20 мкм, 30 мкм'},
                    {key: 'Материал', value: 'Полиэтилен, с резинкой'},
                    {key: 'Тираж', value: 'от 100 кг'},
                    {key: 'Цвет упаковки', value: 'синий, зеленый, красный, фиолетовый'},
                    {key: 'Особенности', value: 'Необходимое средство защиты обуви'}
                ]
            },
            masks: {
                title: 'Медицинские маски',
                data: [
                    {key: 'Виды', value: 'Одноразовые средства защиты'},
                    {key: 'Стандартный размер', value: '38х45 | 17 мкм, 20 мкм, 30 мкм'},
                    {key: 'Материал', value: 'Полиэтилен, с резинкой'},
                    {key: 'Тираж', value: 'от 100 кг'}
                ]
            }
        },
        greenhouse: {
            title: 'Тепличные плёнки',
            data: [
                {key: 'Материал', value: 'полиэтилен ПНД'},
                {key: 'Тираж', value: 'от 1 до 6 метров'},
                {key: 'Печать', value: 'до 4 цветов'},
            ]
        },
        contact_us: {
            title: 'Свяжи тесь с нами',
            address: 'Ташкентcкая  область, Назарбекский округ, Харакат МФЙ '
        },
        order: 'Заказать'
    },
    //O`Z
    {
        site_nav: ['Bizning mahsulotlar', 'Ishlab chiqarish', 'Bog`lanish'],
        site_intro: {
            title: 'Toshkent qulay narxlardagi eng zo`r paketlari',
            button_text: 'Ko`proq Bilish',
            in_market: 'yil bozorda'
        },
        site_info: {
            title: 'Fleksografik va o`chmaydigan bosma',
            links: ['Bizning paketlar', 'Qo`shimcha tovarlar', 'Poleitilen plyonkalar', 'Biz bilan bog`lanish']
        },
        our_products: {
            title: 'Bizning tovarlar',
            cards: [
                {
                    img: 'img/our_products/one.png',
                    title: 'Paket mayka',
                    data: [
                        {
                            key: 'Materiali',
                            value: 'polietilen PND 12 mkm (2 kilogramgacha ko`taradi) dan 30 mkm (25 kilogramgacha ko`taradi) gacha'
                        },
                        {key: 'Tiraji', value: '200 kilogramdan'},
                        {key: 'Bosma', value: '4 xil rangacha'}
                    ]
                },
                {
                    img: 'img/our_products/two.png',
                    title: 'Rulonlar',
                    data: [
                        {key: 'Materiali', value: 'PSD, PVD'},
                        {key: 'Tiraji', value: '150 kilogramdan'},
                        {key: 'Bosma', value: 'Sizning tanlovingizga qarab'}
                    ]
                },
                {
                    img: 'img/our_products/three.png',
                    title: 'Axlat uchun paketlar',
                    data: [
                        {key: 'Materiali', value: 'PND polietileni, PSD, PVD, polipropilen'},
                        {key: 'Tiraji', value: '150 kilogramdan'},
                        {key: 'Bosma', value: 'fleksografik 6 xil rangacha'}
                    ]
                },
                {
                    img: 'img/our_products/four.png',
                    title: 'Issiqlik plyonkalari',
                    data: [
                        {key: 'Materiali', value: 'PND polietileni, PSD, PVD, polipropilen'},
                        {key: 'Tiraji', value: '200 kilogramdan'},
                        {key: 'Bosma', value: '4 xil rangacha'}
                    ]
                },
                {
                    img: 'img/our_products/five.png',
                    title: '"Reyter" paketi',
                    data: [
                        {
                            key: 'Materiali',
                            value: 'polietilen PND 12 mkm (2 kilogramgacha ko`taradi) dan 30 mkm (25 kilogramgacha ko`taradi) gacha'
                        },
                        {key: 'Tiraji', value: '150 kilogramdan'},
                        {key: 'Bosma', value: '4 xil rangacha'}
                    ]
                },
                {
                    img: 'img/our_products/six.png',
                    title: 'To`ldiruvchi paketlar',
                    data: [
                        {key: 'Materiali', value: 'PND polietileni, PSD, PVD, polipropilen'},
                        {key: 'Tiraji', value: 'от 200 кг'},
                        {key: 'Bosma', value: 'Цвет упаковки: в зависимости от заказа'}
                    ]
                }
            ]
        },
        additional: {
            title: 'Дополнительно',
            shoe_covers: {
                title: 'Бахилы',
                data: [
                    {key: 'Виды', value: 'Одноразовые средства защиты'},
                    {key: 'Стандартный размер', value: '38х45 | 17 мкм, 20 мкм, 30 мкм'},
                    {key: 'Материал', value: 'Полиэтилен, с резинкой'},
                    {key: 'Тираж', value: 'от 100 кг'},
                    {key: 'Цвет упаковки', value: 'синий, зеленый, красный, фиолетовый'},
                    {key: 'Особенности', value: 'Необходимое средство защиты обуви'}
                ]
            },
            masks: {
                title: 'Медицинские маски',
                data: [
                    {key: 'Виды', value: 'Одноразовые средства защиты'},
                    {key: 'Стандартный размер', value: '38х45 | 17 мкм, 20 мкм, 30 мкм'},
                    {key: 'Материал', value: 'Полиэтилен, с резинкой'},
                    {key: 'Тираж', value: 'от 100 кг'}
                ]
            }
        },
        greenhouse: {
            title: 'Тепличные плёнки',
            data: [
                {key: 'Материал', value: 'полиэтилен ПНД'},
                {key: 'Тираж', value: 'от 1 до 6 метров'},
                {key: 'Печать', value: 'до 4 цветов'},
            ]
        },
        contact_us: {
            title: 'Свяжи тесь с нами',
            address: 'Ташкентcкая  область, Назарбекский округ, Харакат МФЙ '
        },
        order: 'Buyurtma qilish'
    },
    //EN
    {
        site_nav: ['Our products', 'Производство', 'Contacts'],
        site_intro: {
            title: 'Лучшые пакеты Ташкента по лучшым ценам',
            button_text: 'Узнать Больше',
            in_market: 'лет на рынке'
        },
        site_info: {
            title: 'Флексографическая и Глубокая Печать',
            links: ['Наши пакеты', 'Дополнительные товары', 'Полиетиленовые плёнки', 'Как связатся с нами']
        },
        our_products: {
            title: 'Наши товары',
            cards: [
                {
                    img: 'img/our_products/one.png',
                    title: 'Пакет майка',
                    data: [
                        {
                            key: 'Материал',
                            value: 'полиэтилен ПНД от 12 мкм (выдерживает до 2 кг) до 30 мкм (выдерживает до 25 кг)'
                        },
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Print', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/two.png',
                    title: 'Рулоны',
                    data: [
                        {key: 'Материал', value: 'ПСД, ПВД'},
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'По вашему выбору'}
                    ]
                },
                {
                    img: 'img/our_products/three.png',
                    title: 'Мешки для мусора',
                    data: [
                        {key: 'Материал', value: 'полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'флексографическая до 6 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/four.png',
                    title: 'термусадочная плёнка',
                    data: [
                        {key: 'Материал', value: 'полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Печать', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/five.png',
                    title: 'Пакет "Рейтер"',
                    data: [
                        {
                            key: 'Материал',
                            value: 'полиэтилен ПНД от 12 мкм (выдерживает до 2 кг) до 30 мкм (выдерживает до 25 кг)'
                        },
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/six.png',
                    title: 'Фасовочные пакеты',
                    data: [
                        {key: 'Материал', value: ' полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Печать', value: 'Цвет упаковки: в зависимости от заказа'}
                    ]
                }
            ]
        },
        additional: {
            title: 'Дополнительно',
            shoe_covers: {
                title: 'Бахилы',
                data: [
                    {key: 'Виды', value: 'Одноразовые средства защиты'},
                    {key: 'Стандартный размер', value: '38х45 | 17 мкм, 20 мкм, 30 мкм'},
                    {key: 'Материал', value: 'Полиэтилен, с резинкой'},
                    {key: 'Тираж', value: 'от 100 кг'},
                    {key: 'Цвет упаковки', value: 'синий, зеленый, красный, фиолетовый'},
                    {key: 'Особенности', value: 'Необходимое средство защиты обуви'}
                ]
            },
            masks: {
                title: 'Медицинские маски',
                data: [
                    {key: 'Виды', value: 'Одноразовые средства защиты'},
                    {key: 'Стандартный размер', value: '38х45 | 17 мкм, 20 мкм, 30 мкм'},
                    {key: 'Материал', value: 'Полиэтилен, с резинкой'},
                    {key: 'Тираж', value: 'от 100 кг'}
                ]
            }
        },
        greenhouse: {
            title: 'Тепличные плёнки',
            data: [
                {key: 'Материал', value: 'полиэтилен ПНД'},
                {key: 'Тираж', value: 'от 1 до 6 метров'},
                {key: 'Печать', value: 'до 4 цветов'},
            ]
        },
        contact_us: {
            title: 'Свяжи тесь с нами',
            address: 'Ташкентcкая  область, Назарбекский округ, Харакат МФЙ '
        },
        order: 'Заказать'
    }
]
