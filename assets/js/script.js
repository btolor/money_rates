$(function () {

    /**Different Curerncies Objects Array */
    const curerncies = [{
            currency: 'UAE Dirham',
            code: 'AED',
            symbol: '&#x62f;&#x2e;&#x625;',
            flag: 'assets/images/united-arab-emirates.png'
        },
        {
            currency: 'Argentine Peso',
            code: 'ARS',
            symbol: '&#x24;',
            flag: 'assets/images/argentina.png'
        },
        {
            currency: 'Australian Dollar',
            code: 'AUD',
            symbol: '&#x41;&#x24;',
            flag: 'assets/images/australia.png'
        },
        {
            currency: 'Bulgarian Lev',
            code: 'BGN',
            symbol: '&#x43b;&#x432;',
            flag: 'assets/images/bulgaria.png'
        },
        {
            currency: 'Brazilian Real',
            code: 'BRL',
            symbol: '&#x52;&#x24;',
            flag: 'assets/images/brazil.png'
        },
        {
            currency: 'Bahamian Dollar',
            code: 'BSD',
            symbol: '&#x42;&#x24;',
            flag: 'assets/images/bahamas.png'
        },
        {
            currency: 'Canadian Dollar',
            code: 'CAD',
            symbol: '&#x24;',
            flag: 'assets/images/canada.png'
        },
        {
            currency: 'Swiss Franc',
            code: 'CHF',
            symbol: '&#x43;&#x48;&#x46;',
            flag: 'assets/images/switzerland.png'
        },
        {
            currency: 'Chilean Peso',
            code: 'CLP',
            symbol: '&#x24;',
            flag: 'assets/images/chile.png'
        },
        {
            currency: 'Chinese Renminbi',
            code: 'CNY',
            symbol: '&#xa5;',
            flag: 'assets/images/china.png'
        },
        {
            currency: 'Colombian Peso',
            code: 'COP',
            symbol: '&#x24;',
            flag: 'assets/images/colombia.png'
        },
        {
            currency: 'Czech Koruna',
            code: 'CZK',
            symbol: '&#x4b;&#x10d;',
            flag: 'assets/images/czech.png'
        },
        {
            currency: 'Danish Krone',
            code: 'DKK',
            symbol: '&#x6b;&#x72;',
            flag: 'assets/images/denmark.png'
        },
        {
            currency: 'Dominican Peso',
            code: 'DOP',
            symbol: '&#x52;&#x44;&#x24;',
            flag: 'assets/images/dominican-republic.png'
        },
        {
            currency: 'Egyptian Pound',
            code: 'EGP',
            symbol: '&#xa3;',
            flag: 'assets/images/egypt.png'
        },
        {
            currency: 'Euro',
            code: 'EUR',
            symbol: '&#x20ac;',
            flag: 'assets/images/european.png'
        },
        {
            currency: 'Fiji Dollar',
            code: 'FJD',
            symbol: '&#x46;&#x4a;&#x24;',
            flag: 'assets/images/fiji.png'
        },
        {
            currency: 'Pound Sterling',
            code: 'GBP',
            symbol: '&#xa3;',
            flag: 'assets/images/great-britain.png'
        },
        {
            currency: 'Guatemalan Quetzal',
            code: 'GTQ',
            symbol: '&#x51;',
            flag: 'assets/images/guatemala.png'
        },
        {
            currency: 'Hong Kong Dollar',
            code: 'HKD',
            symbol: '&#x24;',
            flag: 'assets/images/hong-kong.png'
        },
        {
            currency: 'Croatian Kuna',
            code: 'HRK',
            symbol: '&#x6b;&#x6e;',
            flag: 'assets/images/croatia.png'
        },
        {
            currency: 'Hungarian Forint',
            code: 'HUF',
            symbol: '&#x46;&#x74;',
            flag: 'assets/images/hungary.png'
        },
        {
            currency: 'Indonesian Rupiah',
            code: 'IDR',
            symbol: '&#x52;&#x70;',
            flag: 'assets/images/indonesia.png'
        },
        {
            currency: 'Israeli New Shekel',
            code: 'ILS',
            symbol: '&#x20aa;',
            flag: 'assets/images/israel.png'
        },
        {
            currency: 'Indian Rupee',
            code: 'INR',
            symbol: '&#x20b9;',
            flag: 'assets/images/india.png'
        },
        {
            currency: 'Icelandic Krona',
            code: 'ISK',
            symbol: '&#x6b;&#x72;',
            flag: 'assets/images/iceland.png'
        },
        {
            currency: 'Japanese Yen',
            code: 'JPY',
            symbol: '&#xa5;',
            flag: 'assets/images/japan.png'
        },
        {
            currency: 'South Korean Won',
            code: 'KRW',
            symbol: '&#x20a9;',
            flag: 'assets/images/south-korea.png'
        },
        {
            currency: 'Kazakhstani Tenge',
            code: 'KZT',
            symbol: '&#x43b;&#x432;',
            flag: 'assets/images/kazakhstan.png'
        },
        {
            currency: 'Mexican Peso',
            code: 'MXN',
            symbol: '&#x24;',
            flag: 'assets/images/mexico.png'
        },
        {
            currency: 'Malaysian Ringgit',
            code: 'MYR',
            symbol: '&#x52;&#x4d;',
            flag: 'assets/images/malaysia.png'
        },
        {
            currency: 'Norwegian Krone',
            code: 'NOK',
            symbol: '&#x6b;&#x72;',
            flag: 'assets/images/norway.png'
        },
        {
            currency: 'New Zealand Dollar',
            code: 'NZD',
            symbol: '&#x24;',
            flag: 'assets/images/new-zealand.png'
        },
        {
            currency: 'Panamanian Balboa',
            code: 'PAB',
            symbol: '&#x42;&#x2f;&#x2e;',
            flag: 'assets/images/panama.png'
        },
        {
            currency: 'Peruvian Sol',
            code: 'PEN',
            symbol: '&#x53;&#x2f;&#x2e;',
            flag: 'assets/images/peru.png'
        },
        {
            currency: 'Philippine Peso',
            code: 'PHP',
            symbol: '&#x20b1;',
            flag: 'assets/images/philippines.png'
        },
        {
            currency: 'Pakistani Rupee',
            code: 'PKR',
            symbol: '&#x20a8;',
            flag: 'assets/images/pakistan.png'
        },
        {
            currency: 'Polish Zloty',
            code: 'PLN',
            symbol: '&#x7a;&#x142;',
            flag: 'assets/images/poland.png'
        },
        {
            currency: 'Paraguayan Guarani',
            code: 'PYG',
            symbol: '&#x47;&#x73;',
            flag: 'assets/images/paraguay.png'
        },
        {
            currency: 'Romanian Leu',
            code: 'RON',
            symbol: '&#x6c;&#x65;&#x69;',
            flag: 'assets/images/romania.png'
        },
        {
            currency: 'Russian Ruble',
            code: 'RUB',
            symbol: '&#x20bd;',
            flag: 'assets/images/russia.png'
        },
        {
            currency: 'Saudi Riyal',
            code: 'SAR',
            symbol: '&#xfdfc;',
            flag: 'assets/images/saudi-arabia.png'
        },
        {
            currency: 'Swedish Krona',
            code: 'SEK',
            symbol: '&#x6b;&#x72;',
            flag: 'assets/images/sweden.png'
        },
        {
            currency: 'Singapore Dollar',
            code: 'SGD',
            symbol: '&#x53;&#x24;',
            flag: 'assets/images/singapore.png'
        },
        {
            currency: 'Thai Baht',
            code: 'THB',
            symbol: '&#xe3f;',
            flag: 'assets/images/thailand.png'
        },
        {
            currency: 'Turkish Lira',
            code: 'TRY',
            symbol: '&#x20ba;',
            flag: 'assets/images/turkey.png'
        },
        {
            currency: 'New Taiwan Dollar',
            code: 'TWD',
            symbol: '&#x4e;&#x54;&#x24;',
            flag: 'assets/images/taiwan.png'
        },
        {
            currency: 'Ukrainian Hryvnia',
            code: 'UAH',
            symbol: '&#x20b4;',
            flag: 'assets/images/ukraine.png'
        },
        {
            currency: 'United States Dollar',
            code: 'USD',
            symbol: '&#x24;',
            flag: 'assets/images/united-states.png'
        },
        {
            currency: 'Uruguayan Peso',
            code: 'UYU',
            symbol: '&#x24;&#x55;',
            flag: 'assets/images/uruguay.png'
        },
        {
            currency: 'South African Rand',
            code: 'ZAR',
            symbol: '&#x52;',
            flag: 'assets/images/south-africa.png'
        }
    ]

    const colors = ['red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua','red'
    ]
    
    $('#selector').on('change', ()=> {
        let selected = $('#selector').val()  
        change(selected)
    })

    let change = (val) => {
        let currentCurrency = curerncies.filter((currency) => {
            return currency.code === val
        })
        $('#current-flag').attr('src', currentCurrency[0].flag)
        $('#current-currency').html(
            currentCurrency[0].code + ':  ' + currentCurrency[0].currency
        )
        $('#current-value').html(
            currentCurrency[0].symbol + '  1'
        )
        let counter = 0

        $('.rate').remove()

        curerncies.forEach((currency) => {

            if (currency.code != currentCurrency[0].code) {
                $(".exchange-rates .grid").append(
                    "<!-- start of rate --><div class='cell small-12 medium-6 large-6 rate' style='border-top: 1px solid " + colors[counter] + ";'>" +
                    "<!-- start of stats --><div class='stats' style='border-top: 5px solid " + colors[counter] + ";'>" +
                    "<img class='flag' src=" + currency.flag + "  alt='This is the country flag of my current currency.'>" +
                    "<h6 class='currency'>" + currency.currency + "</h6></div><hr><!-- end of stats --><p>" + currency.symbol + " 23</p></div><!-- end of rate -->"
                )
            }
            counter++
        })

        $('#selector option').remove()
        $('#selector').append(
            "<option value=" + currentCurrency[0].code + ">" + currentCurrency[0].code + ":  " + currentCurrency[0].currency + "</option>"
        )
        curerncies.forEach((s) => {
            if (s.code != currentCurrency[0].code) {
                $('#selector').append(
                    "<option value=" + s.code + ">" + s.code + ":  " + s.currency + "</option>"
                )
            }
    
        })
    }

    let init = ()=>{
        let currentCurrency = curerncies.filter((currency) => {
            return currency.code === 'USD'
        })
        $('#current-flag').attr('src', currentCurrency[0].flag)
        $('#current-currency').html(
            currentCurrency[0].code + ':  ' + currentCurrency[0].currency
        )
        $('#current-value').html(
            currentCurrency[0].symbol + '  1'
        )
        let counter = 0
    
        curerncies.forEach((currency) => {
    
            if (currency.code != currentCurrency[0].code) {
                $(".exchange-rates .grid").append(
                    "<!-- start of rate --><div class='cell small-12 medium-6 large-6 rate' style='border-top: 1px solid " + colors[counter] + ";'>" +
                    "<!-- start of stats --><div class='stats' style='border-top: 5px solid " + colors[counter] + ";'>" +
                    "<img class='flag' src=" + currency.flag + "  alt='This is the country flag of my current currency.'>" +
                    "<h6 class='currency'>" + currency.currency + "</h6></div><hr><!-- end of stats --><p>" + currency.symbol + " 23</p></div><!-- end of rate -->"
                )
            }
            counter++
        })
    
        curerncies.forEach((s) => {
            if (s.code != currentCurrency[0].code) {
                $('#selector').append(
                    "<option value=" + s.code + ">" + s.code + ":  " + s.currency + "</option>"
                )
            }
    
        })
    }

    init()
    

    let conversionCurrency = curerncies.filter((currency) => {
        return currency.code === 'USD'
    })
    $('#convert-currency').append(
        "<option value=" + conversionCurrency[0].code + ">" + conversionCurrency[0].symbol + "  " + conversionCurrency[0].code + "</option>"
    )
    
    curerncies.forEach((c) => {
        if (c.code != conversionCurrency[0].code) {
            $('#convert-currency').append(
                "<option value=" + c.code + ">" + c.symbol + "  " + c.code + "</option>"
            )
        }
    })
    curerncies.forEach((c) => {
        $('#convert-to-currency').append(
            "<option value=" + c.code + ">" + c.symbol + "  " + c.code + "</option>"
        )
    })

    $('#convert-btn').on('click', ()=> {
        let ammount  = $('#convert-num').val()
        let convert  = $('#convert-currency').val()
        let convertTo  = $('#convert-to-currency').val()
    })

  

    // Api Key...
    // const key = '14ebc28191939c6f4f85f340'
    // let endPoint = 'https://prime.exchangerate-api.com/v5/' //Example: https://prime.exchangerate-api.com/v5/YOUR-API-KEY/latest/USD

    // let code = 'usd'.toUpperCase()


    // $('#submit').on('click', () => {
    //     code = $('#u-input').val();
    //     code = code.trim().toUpperCase()



    //     let checkInput = curerncies.some((type) => {
    //         return type.code === code
    //     })



    //     if (checkInput) {
    //         console.log(code)
    //         let getRequest = endPoint + key + '/latest/' + code

    //         let request = $.ajax({
    //             url: getRequest,
    //             method: "GET"
    //         })

    //         request.done((data) => {
    //             console.log(data.conversion_rates)
    //             console.log(Object.keys(data.conversion_rates))
    //         })


    //     } else {
    //         console.log("Error")
    //         let getRequest = endPoint + key + '/latest/USD'

    //         let request = $.ajax({
    //             url: getRequest,
    //             method: "GET"
    //         })

    //         request.done((data) => {
    //             console.log(data.conversion_rates)
    //             console.log(Object.keys(data.conversion_rates))
    //         })

    //     }



    // })


    $('#open-mobile-btn').on('click', () => {
        $('#open-mobile-btn').css({
            display: 'none'
        })
        $('.mobile-menu').toggleClass('closed')
        if ($(window).width() <= 330) {
            $('main').css({
                marginTop: '70px'
            })
        }
    })

    $('#close-mobile-btn').on('click', () => {
        $('#open-mobile-btn').css({
            display: 'flex'
        })
        $('.mobile-menu').toggleClass('closed')
        if ($(window).width() <= 330) {
            $('main').css({
                marginTop: '78px'
            })
        }
    })


})