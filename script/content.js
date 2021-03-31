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
                    img: 'img/our_products/one.jpg',
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
                    img: 'img/our_products/two.jpg',
                    title: 'Рулоны',
                    data: [
                        {key: 'Материал', value: 'ПСД, ПВД'},
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'По вашему выбору'}
                    ]
                },
                {
                    img: 'img/our_products/three.jpg',
                    title: 'Мешки для мусора',
                    data: [
                        {key: 'Материал', value: 'полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 150 кг'},
                        {key: 'Печать', value: 'флексографическая до 6 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/four.jpg',
                    title: 'термусадочная плёнка',
                    data: [
                        {key: 'Материал', value: 'полиэтилен ПНД, ПСД, ПВД, полипропилен'},
                        {key: 'Тираж', value: 'от 200 кг'},
                        {key: 'Печать', value: 'до 4 цветов'}
                    ]
                },
                {
                    img: 'img/our_products/five.jpg',
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
                    img: 'img/our_products/six.jpg',
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
        order: 'Заказать',
        search: 'Поиск'
    },
    //O`Z
    {
        site_nav: ['Bizning mahsulotlar', 'Ishlab chiqarish', 'Bog\'lanish'],
        site_intro: {
            title: 'Toshkentning qulay narxlardagi eng zo\'r paketlari',
            button_text: 'Batafsil',
            in_market: 'yil bozorda'
        },
        site_info: {
            title: 'Fleksografik va o\'chib ketmaydigan bosma',
            links: ['Bizning paketlar', 'Qo`shimcha tovarlar', 'Poleitilen plyonkalar', 'Biz bilan bog`lanish']
        },
        our_products: {
            title: 'Bizning tovarlar',
            cards: [
                {
                    img: 'img/our_products/one.jpg',
                    title: 'Paket mayka',
                    data: [
                        {
                            key: 'Materiali',
                            value: 'polietilen PND 12 mkm (2 kilogramgacha yuk ko`tara oladi) dan 30 mkm (25 kilogramgacha yuk ko`tara oladi) gacha'
                        },
                        {key: 'Tiraji', value: '200 kilogramdan'},
                        {key: 'Bosmasi', value: '4 xil rangda'}
                    ]
                },
                {
                    img: 'img/our_products/two.jpg',
                    title: 'Rulonlar',
                    data: [
                        {key: 'Materiali', value: 'PSD, PVD'},
                        {key: 'Tiraji', value: '150 kilogramdan'},
                        {key: 'Bosmasi', value: 'Tanlovingizga qarab'}
                    ]
                },
                {
                    img: 'img/our_products/three.jpg',
                    title: 'Chiqindi uchun paketlar',
                    data: [
                        {key: 'Materiali', value: 'PND polietileni, PSD, PVD, polipropilen'},
                        {key: 'Tiraji', value: '150 kilogramdan'},
                        {key: 'Bosmasi', value: 'fleksografik, 6 xil rangda'}
                    ]
                },
                {
                    img: 'img/our_products/four.jpg',
                    title: 'Issiqqa chidamli plyonkalar',
                    data: [
                        {key: 'Materiali', value: 'PND polietileni, PSD, PVD, polipropilen'},
                        {key: 'Tiraji', value: '200 kilogramdan'},
                        {key: 'Bosmasi', value: '4 xil rangda'}
                    ]
                },
                {
                    img: 'img/our_products/five.jpg',
                    title: '"Reyter" paketi',
                    data: [
                        {
                            key: 'Materiali',
                            value: 'polietilen PND 12 mkm(2 kilogramgacha yuk ko`tara oladi)dan 30 mkm(25 kilogramgacha yuk ko`tara oladi)gacha'
                        },
                        {key: 'Tiraji', value: '150 kilogramdan'},
                        {key: 'Bosmasi', value: '4 xil rangda'}
                    ]
                },
                {
                    img: 'img/our_products/six.jpg',
                    title: 'To`ldiruvchi paketlar',
                    data: [
                        {key: 'Materiali', value: 'PND polietileni, PSD, PVD, polipropilen'},
                        {key: 'Tiraji', value: '200 kilgoramdan'},
                        {key: 'Bosmasi', value: 'Qadoq rangi: buyurtmadan kelib chiqqan holda'}
                    ]
                }
            ]
        },
        additional: {
            title: 'Qo`shimcha',
            shoe_covers: {
                title: 'Bahilalar',
                data: [
                    {key: 'Ko`rinishi', value: 'Bir martalik himoya vositasi'},
                    {key: 'Standart o`lchami', value: '38х45 | 17 mkm, 20 mkm, 30 mkm'},
                    {key: 'Materiali', value: 'Rezinali polietilen'},
                    {key: 'Tiraji', value: '100 kilogramdan'},
                    {key: 'Qadoq rangi', value: 'ko`k, yashil, qizil, binafsha'},
                    {key: 'Xususiyati', value: 'Oyoq kiyimlarini yopib turish uchun vosita'}
                ]
            },
            masks: {
                title: 'Tibbiy niqoblar',
                data: [
                    {key: 'Ko`rinishi', value: 'Bir martalik himoya vositasi'},
                    {key: 'Standart o`lchami', value: '38х45 | 17 mkm, 20 mkm, 30 mkm'},
                    {key: 'Materiali', value: 'Rezinali polietilen'},
                    {key: 'Tiraji', value: '100 kilogramdan'}
                ]
            }
        },
        greenhouse: {
            title: 'Issiqxona plyonkalari',
            data: [
                {key: 'Materiali', value: 'PND polietilen'},
                {key: 'Tiraji', value: '1 dan 6 metrgacha'},
                {key: 'Bosmasi', value: '4 xil rangda'},
            ]
        },
        contact_us: {
            title: 'Biz bilan bog`laning',
            address: 'Toshkent viloyati, Nazarbek mavzesi, Harakat MFY '
        },
        order: 'Buyurtma qilish',
        search: 'Qidirish'
    },
    //EN
    {
        site_nav: ['Our products', 'Manufacture', 'Contacts'],
        site_intro: {
            title: 'Best packages of Tashkent at the best prices',
            button_text: 'Learn more',
            in_market: 'years on the market'
        },
        site_info: {
            title: 'Flexographic and Gravure Printing',
            links: ['Our packages', 'Additional products', 'Polyethylene films', 'How to contact with us']
        },
        our_products: {
            title: 'our products',
            cards: [
                {
                    img: 'img/our_products/one.jpg',
                    title: 'T-shirt package',
                    data: [
                        {
                            key: 'Material',
                            value: 'Polyethylene PND from 12 microns ( can withstand up to 2 kg) up to 30 microns (can withstand up to 25 kg )'
                        },
                        {key: 'Circulation', value: 'from 200 kg'},
                        {key: 'Printing', value: 'up to 4 colors'}
                    ]
                },
                {
                    img: 'img/our_products/two.jpg',
                    title: 'Rools',
                    data: [
                        {key: 'Material', value: 'PSD, PVD'},
                        {key: 'Circulation', value: 'from 150 kg'},
                        {key: 'Printing', value: 'According to your choice'}
                    ]
                },
                {
                    img: 'img/our_products/three.jpg',
                    title: 'Garbage bags',
                    data: [
                        {key: 'Material', value: 'Polyethylene PND, PSD, PVD, polypropylene'},
                        {key: 'Circulation', value: 'from 150 kg'},
                        {key: 'Printing', value: 'flexographic up to 6 colors'}
                    ]
                },
                {
                    img: 'img/our_products/four.jpg',
                    title: 'Thermoshrinkable film',
                    data: [
                        {key: 'Material', value: 'Polyethylene PND, PSD, PVD, polypropylene'},
                        {key: 'Circulation', value: 'from 200 kg'},
                        {key: 'Printing', value: 'up to 4 colors'}
                    ]
                },
                {
                    img: 'img/our_products/five.jpg',
                    title: 'Package "Reuters"',
                    data: [
                        {
                            key: 'Material',
                            value: 'Polyethylene PND from 12 microns (can withstand up to 25kg) up to 30 microns (can withstand up to 25kg)'
                        },
                        {key: 'Circulation', value: 'from 150 kg'},
                        {key: 'Printing', value: 'up to 4 colors'}
                    ]
                },
                {
                    img: 'img/our_products/six.jpg',
                    title: 'Packing bags',
                    data: [
                        {key: 'Material', value: ' Polyethylene PND, PSD, PVD, polypropylene'},
                        {key: 'Circulation', value: 'from 200 kg'},
                        {key: 'Printing', value: 'Package color: depends on the order'}
                    ]
                }
            ]
        },
        additional: {
            title: 'Additional',
            shoe_covers: {
                title: 'Shoe covers',
                data: [
                    {key: 'Types', value: 'Single-use protective products'},
                    {key: 'Standard size', value: '38х45 | 17 microns, 20 microns, 30 microns'},
                    {key: 'Material', value: 'Polyethylene with elastic band'},
                    {key: 'Circulation', value: 'from 100 kg'},
                    {key: 'Package color', value: 'blue, green, red, purple'},
                    {key: 'Features', value: 'Necessary protective products for shoes'}
                ]
            },
            masks: {
                title: 'Medical masks',
                data: [
                    {key: 'Types', value: 'Single-use protective products'},
                    {key: 'Standard size', value: '38х45 | 17 microns, 20 microns, 30 microns'},
                    {key: 'Material', value: 'Polyethylene with elastic band'},
                    {key: 'Circulation', value: 'up to 100kg'}
                ]
            }
        },
        greenhouse: {
            title: 'Greenhouse film',
            data: [
                {key: 'Material', value: 'Polyethylene ПНД'},
                {key: 'Circulation', value: 'From 1 to 6 meters'},
                {key: 'Printing', value: 'up to 4 colors'},
            ]
        },
        contact_us: {
            title: 'Contact us',
            address: 'Tashkent region, Nazarbek district, Harakat MCM'
        },
        order: 'Order',
        search: 'Search'
    }
]
