$(function () {

    // API Key...
    const key = '14ebc28191939c6f4f85f340'
    // API Endpoint...
    let endPoint = 'https://prime.exchangerate-api.com/v5/' //Example: https://prime.exchangerate-api.com/v5/YOUR-API-KEY/latest/USD

    /**Different Curerncies Objects Array... */
    /**Array of country objects that contain each 
     * country's curreny name, currency code, 
     * currency symbol, and country flag...
     * */
    const curerncies = [{
            currency: 'UAE Dirham',
            code: 'AED',
            symbol: '&#x62f;&#x2e;&#x625;',
            flag: 'https://i.postimg.cc/vmyh57Qw/united-arab-emirates.png'
        },
        {
            currency: 'Argentine Peso',
            code: 'ARS',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/W1886FtD/argentina.png'
        },
        {
            currency: 'Australian Dollar',
            code: 'AUD',
            symbol: '&#x41;&#x24;',
            flag: 'https://i.postimg.cc/9ffpxmqL/australia.png'
        },
        {
            currency: 'Bulgarian Lev',
            code: 'BGN',
            symbol: '&#x43b;&#x432;',
            flag: 'https://i.postimg.cc/Z58FY967/bulgaria.png'
        },
        {
            currency: 'Brazilian Real',
            code: 'BRL',
            symbol: '&#x52;&#x24;',
            flag: 'https://i.postimg.cc/Y2vPr30d/brazil.png'
        },
        {
            currency: 'Bahamian Dollar',
            code: 'BSD',
            symbol: '&#x42;&#x24;',
            flag: 'https://i.postimg.cc/GpSjVWFd/bahamas.png'
        },
        {
            currency: 'Canadian Dollar',
            code: 'CAD',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/B6V272G6/canada.png'
        },
        {
            currency: 'Swiss Franc',
            code: 'CHF',
            symbol: '&#x43;&#x48;&#x46;',
            flag: 'https://i.postimg.cc/3JMtKQPw/switzerland.png'
        },
        {
            currency: 'Chilean Peso',
            code: 'CLP',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/GpzFYZ7v/chile.png'
        },
        {
            currency: 'Chinese Renminbi',
            code: 'CNY',
            symbol: '&#xa5;',
            flag: 'https://i.postimg.cc/vmG74QzQ/china.png'
        },
        {
            currency: 'Colombian Peso',
            code: 'COP',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/5NGkQFYf/colombia.png'
        },
        {
            currency: 'Czech Koruna',
            code: 'CZK',
            symbol: '&#x4b;&#x10d;',
            flag: 'https://i.postimg.cc/nzHdf45G/czech.png'
        },
        {
            currency: 'Danish Krone',
            code: 'DKK',
            symbol: '&#x6b;&#x72;',
            flag: 'https://i.postimg.cc/q7cmFbm7/denmark.png'
        },
        {
            currency: 'Dominican Peso',
            code: 'DOP',
            symbol: '&#x52;&#x44;&#x24;',
            flag: 'https://i.postimg.cc/fRD59jWn/dominican-republic.png'
        },
        {
            currency: 'Egyptian Pound',
            code: 'EGP',
            symbol: '&#xa3;',
            flag: 'https://i.postimg.cc/KjtrK4d8/egypt.png'
        },
        {
            currency: 'Euro',
            code: 'EUR',
            symbol: '&#x20ac;',
            flag: 'https://i.postimg.cc/SsBfNc1P/european.png'
        },
        {
            currency: 'Fiji Dollar',
            code: 'FJD',
            symbol: '&#x46;&#x4a;&#x24;',
            flag: 'https://i.postimg.cc/ydgTHLj9/fiji.png'
        },
        {
            currency: 'Pound Sterling',
            code: 'GBP',
            symbol: '&#xa3;',
            flag: 'https://i.postimg.cc/wvvhk0ZZ/great-britain.png'
        },
        {
            currency: 'Guatemalan Quetzal',
            code: 'GTQ',
            symbol: '&#x51;',
            flag: 'https://i.postimg.cc/jCVPtK2Y/guatemala.png'
        },
        {
            currency: 'Hong Kong Dollar',
            code: 'HKD',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/J0HZft1Q/hong-kong.png'
        },
        {
            currency: 'Croatian Kuna',
            code: 'HRK',
            symbol: '&#x6b;&#x6e;',
            flag: 'https://i.postimg.cc/3wQSn5F6/croatia.png'
        },
        {
            currency: 'Hungarian Forint',
            code: 'HUF',
            symbol: '&#x46;&#x74;',
            flag: 'https://i.postimg.cc/nVNPCDQp/hungary.png'
        },
        {
            currency: 'Indonesian Rupiah',
            code: 'IDR',
            symbol: '&#x52;&#x70;',
            flag: 'https://i.postimg.cc/htdZLPTT/indonesia.png'
        },
        {
            currency: 'Israeli New Shekel',
            code: 'ILS',
            symbol: '&#x20aa;',
            flag: 'https://i.postimg.cc/Vvh4t3NK/israel.png'
        },
        {
            currency: 'Indian Rupee',
            code: 'INR',
            symbol: '&#x20b9;',
            flag: 'https://i.postimg.cc/nz03Fsfb/india.png'
        },
        {
            currency: 'Icelandic Krona',
            code: 'ISK',
            symbol: '&#x6b;&#x72;',
            flag: 'https://i.postimg.cc/hPx3xt9x/iceland.png'
        },
        {
            currency: 'Japanese Yen',
            code: 'JPY',
            symbol: '&#xa5;',
            flag: 'https://i.postimg.cc/XqqQpVnZ/japan.png'
        },
        {
            currency: 'South Korean Won',
            code: 'KRW',
            symbol: '&#x20a9;',
            flag: 'https://i.postimg.cc/d3Cn85Tv/south-korea.png'
        },
        {
            currency: 'Kazakhstani Tenge',
            code: 'KZT',
            symbol: '&#x43b;&#x432;',
            flag: 'https://i.postimg.cc/YqfzMG6X/kazakhstan.png'
        },
        {
            currency: 'Mexican Peso',
            code: 'MXN',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/L89BX9vm/mexico.png'
        },
        {
            currency: 'Malaysian Ringgit',
            code: 'MYR',
            symbol: '&#x52;&#x4d;',
            flag: 'https://i.postimg.cc/YqfzMG6X/kazakhstan.png'
        },
        {
            currency: 'Norwegian Krone',
            code: 'NOK',
            symbol: '&#x6b;&#x72;',
            flag: 'https://i.postimg.cc/1zWWPnQx/norway.png'
        },
        {
            currency: 'New Zealand Dollar',
            code: 'NZD',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/Hkgvt12N/new-zealand.png'
        },
        {
            currency: 'Panamanian Balboa',
            code: 'PAB',
            symbol: '&#x42;&#x2f;&#x2e;',
            flag: 'https://i.postimg.cc/7LPBp1jM/panama.png'
        },
        {
            currency: 'Peruvian Sol',
            code: 'PEN',
            symbol: '&#x53;&#x2f;&#x2e;',
            flag: 'https://i.postimg.cc/sfHTbZJ5/peru.png'
        },
        {
            currency: 'Philippine Peso',
            code: 'PHP',
            symbol: '&#x20b1;',
            flag: 'https://i.postimg.cc/qMt1rMmS/philippines.png'
        },
        {
            currency: 'Pakistani Rupee',
            code: 'PKR',
            symbol: '&#x20a8;',
            flag: 'https://i.postimg.cc/Z5x77ss5/pakistan.png'
        },
        {
            currency: 'Polish Zloty',
            code: 'PLN',
            symbol: '&#x7a;&#x142;',
            flag: 'https://i.postimg.cc/9FvJQ5KM/poland.png'
        },
        {
            currency: 'Paraguayan Guarani',
            code: 'PYG',
            symbol: '&#x47;&#x73;',
            flag: 'https://i.postimg.cc/63yMQWW8/paraguay.png'
        },
        {
            currency: 'Romanian Leu',
            code: 'RON',
            symbol: '&#x6c;&#x65;&#x69;',
            flag: 'https://i.postimg.cc/L8xkgc0L/romania.png'
        },
        {
            currency: 'Russian Ruble',
            code: 'RUB',
            symbol: '&#x20bd;',
            flag: 'https://i.postimg.cc/253QQ0PJ/russia.png'
        },
        {
            currency: 'Saudi Riyal',
            code: 'SAR',
            symbol: '&#xfdfc;',
            flag: 'https://i.postimg.cc/3Rv26drF/saudi-arabia.png'
        },
        {
            currency: 'Swedish Krona',
            code: 'SEK',
            symbol: '&#x6b;&#x72;',
            flag: 'https://i.postimg.cc/3r0L5xf6/sweden.png'
        },
        {
            currency: 'Singapore Dollar',
            code: 'SGD',
            symbol: '&#x53;&#x24;',
            flag: 'https://i.postimg.cc/YSV1b17S/singapore.png'
        },
        {
            currency: 'Thai Baht',
            code: 'THB',
            symbol: '&#xe3f;',
            flag: 'https://i.postimg.cc/NjmbyCvx/thailand.png'
        },
        {
            currency: 'Turkish Lira',
            code: 'TRY',
            symbol: '&#x20ba;',
            flag: 'https://i.postimg.cc/bJNRBzD6/turkey.png'
        },
        {
            currency: 'New Taiwan Dollar',
            code: 'TWD',
            symbol: '&#x4e;&#x54;&#x24;',
            flag: 'https://i.postimg.cc/Qxp0Cn3J/taiwan.png'
        },
        {
            currency: 'Ukrainian Hryvnia',
            code: 'UAH',
            symbol: '&#x20b4;',
            flag: 'https://i.postimg.cc/Xvg8LZJG/ukraine.png'
        },
        {
            currency: 'United States Dollar',
            code: 'USD',
            symbol: '&#x24;',
            flag: 'https://i.postimg.cc/SRLCS3MX/united-states.png'
        },
        {
            currency: 'Uruguayan Peso',
            code: 'UYU',
            symbol: '&#x24;&#x55;',
            flag: 'https://i.postimg.cc/44pzQ7SJ/uruguay.png'
        },
        {
            currency: 'South African Rand',
            code: 'ZAR',
            symbol: '&#x52;',
            flag: 'https://i.postimg.cc/MTNdMCHd/south-africa.png'
        }
    ]

    /**Different Rates Boxes Colors Array... */
    /**Array of colors that are used on the rates 
     * boxes border tops... 
     * */
    const colors = ['red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua',
        'red', 'orange', 'lime', 'purple', 'yellow', 'teal', 'maroon', 'olive', 'fuchsia', 'aqua', 'red'
    ]


    /**Home Page Initial Load Function... */
    let init = () => {

        /**Initializes and sets the courrentCurrency variable to a 
         * specific currency object by filtering the currencies 
         * array using the filetr method to filter the array by 
         * a string value of USD... 
         * */
        let currentCurrency = curerncies.filter((currency) => {
             // Returns the array element that has a code property that's equal to the value USD...
            return currency.code === 'USD'
        })

        /**Executes the attribute method on the img html element 
         * inside of the #current-flag element and sets its src property 
         * to the value of the selected current currency's flag
         * location... 
         * */
        $('#current-flag').attr('src', currentCurrency[0].flag)

        // Executes the html method to change the inner html of the dom element with the id of current-currency...
        $('#current-currency').html(
            currentCurrency[0].code + ':  ' + currentCurrency[0].currency
        )

        // Executes the html method to change the inner html of the dom element with the id of current-value...
        $('#current-value').html(
            currentCurrency[0].symbol + '  1.00'
        )

        // Initializes and sets the getRquest variable with the GET request url...
        let getRequest = endPoint + key + '/latest/' + currentCurrency[0].code

        /**Creates the ajax request object for the GET request 
         * url and the request method...
         * */
        let request = $.ajax({
            // Stores the GET request url...
            url: getRequest,
            // Stores the request method type...
            method: "GET"
        })

        /**Creates a response variable to store the GET request done 
         * function that has a callback function to get retrive the 
         * data from the GET request and store that data into an 
         * data arrary variable create currency rates boxes and 
         * repopuplate the html select drop-down options elements...  
         * */
        let response = request.done((data) => {
            // Creates an initializes a counter variable to 0...
            let counter = 0
           
            // For each method to loop through each element inside of the currencies array...
            curerncies.forEach((currency) => {

                // If statement to check the value of the currency.code with the value of the selected current currency code...
                if (currency.code != currentCurrency[0].code) {
                    // If True:
                    // Executes the append method on the html element with the class of grid inside of the html element with the class of exchange-rates...
                    $(".exchange-rates .grid").append(
                        "<!-- start of rate --><div class='cell small-12 medium-6 large-6 rate' style='border-left: 5px solid " + colors[counter] + ";'>" +
                        "<!-- start of stats --><div class='stats'>" +
                        "<img class='flag' src=" + currency.flag + "  alt='This is the country flag of my current currency.'>" +
                        "<h6 class='currency'>" + currency.currency + "</h6></div><hr><!-- end of stats --><p>" + currency.symbol + " " + data.conversion_rates[currency.code] +
                        "  <span>(" +  currency.code + ")</span></p></div><!-- end of rate -->"
                    )

                }
                // Increment the counter variable by 1...
                counter++
            })

        })

        // For each method to loop through each element inside of the currencies array...
        curerncies.forEach((s) => {
            // If statement to check the value of the currency.code with the value of the current currency code...
            if (s.code != currentCurrency[0].code) {
                // If True:
                // Executes the append method on the html element with the id of selector to add html option elements for each country...
                $('#selector').append(
                    "<option value=" + s.code + ">" + s.code + ":  " + s.currency + "</option>"
                )
            }

        })
    }

    /**Conversion Page Initial Load Function... */
    /**The convertInit function filters the currencies array 
     * and sets up the #convert-currency and #convert-to-currency 
     * select options html elements then executing a GET request 
     * to retrive data to populate the rates boxes with the 
     * appropriate conversion rates for each country... 
     * */
    let convertInit = () => {
        /**Initializes and sets the conversionCurrency variable to  
         * the USD currency object by filtering the currencies 
         * array using the filetr method to filter the array with 
         * a USD string... 
         * */
        let conversionCurrency = curerncies.filter((currency) => {
            // Returns the array element that has a code property that's equal to the value USD...
            return currency.code === 'USD'
        })

        // Executes the append method on the html element with the id of convert-currency to add an html option element...
        $('#convert-currency').append(
            "<option value=" + conversionCurrency[0].code + ">" + conversionCurrency[0].symbol + "  " + conversionCurrency[0].code + " " + conversionCurrency[0].currency + "</option>"
        )

        // For each method to loop through each element inside of the currencies array...
        curerncies.forEach((c) => {
            // If statement to check the value of the currency.code with the value of the conversion currency code...
            if (c.code != conversionCurrency[0].code) {
                // If True:
                // Executes the append method on the html element with the id of convert-currency to add html option elements for each country...
                $('#convert-currency').append(
                    "<option value=" + c.code + ">" + c.symbol + "  " + c.code + " " + c.currency + "</option>"
                )
            }
        })

        // For each method to loop through each element inside of the currencies array...
        curerncies.forEach((c) => {
            // Executes the append method on the html element with the id of convert-to-currency to add html option elements for each country...
            $('#convert-to-currency').append(
                "<option value=" + c.code + ">" + c.symbol + "  " + c.code + " "+ c.currency +"</option>"
            )
        })

         // Initializes and sets the getRquest variable with the GET request url...
        let getRequest = endPoint + key + '/latest/' + conversionCurrency[0].code

        /**Creates the ajax request object for the GET request 
         * url and the request method...
         * */
        let request = $.ajax({
            // Stores the GET request url...
            url: getRequest,
            // Stores the request method type...
            method: "GET"
        })

        /**Creates a response variable to store the GET request done 
         * function that has a callback function to get retrive the 
         * data from the GET request and store that data into an 
         * data arrary variable and initialize the value for the 
         * .converted-dollar html element and round both the .dollar 
         * and converted-dollar elements to 2 decimals. Finally a 
         * foreach method loops through the currencies array and 
         * creates rate boxes with the appropriate cureency rates 
         * for each country... 
         * */
        let response = request.done((data) => {
            // Executes the html method to change the inner html of the dom element with the class of dollar...
            $('.dollar').html("&#x24;" + data.conversion_rates["USD"].toFixed(2))

            // Executes the html method to change the inner html of the dom element with the class of converted-dollar...
            $('.converted-dollar').html("&#x62f;&#x2e;&#x625;" + data.conversion_rates["AED"].toFixed(2))

            // Creates an initializes a counter variable to 0...
            let counter = 0

            // For each method to loop through each element inside of the currencies array...
            curerncies.forEach((currency) => {

                // If statement to check the value of the currency.code with the value of the selected conversion currency code...
                if (currency.code != conversionCurrency[0].code) {
                    // If True:
                    // Executes the append method on the html element with the class of grid inside of the html element with the class of calcu-rates...
                    $(".calcu-rates .grid").append(
                        "<!-- start of rate --><div class='cell small-12 medium-6 large-6 rate' style='border-left: 5px solid " + colors[counter] + ";'>" +
                        "<!-- start of stats --><div class='stats'>" +
                        "<img class='flag' src=" + currency.flag + "  alt='This is the country flag of my current currency.'>" +
                        "<h6 class='currency'>" + currency.currency + "</h6></div><hr><!-- end of stats --><p>" + currency.symbol + " " 
                        + data.conversion_rates[currency.code] + "  <span>(" +  currency.code + ")</span></p></div><!-- end of rate -->"
                    )
                }
                // Increment the counter variable by 1...
                counter++
            })

        })

    }

    // Home Page Currency Change Process Function... 
    /**The change function user input from the html select element 
     * and repopulates the currency rates boxes with the appropriate 
     * rates for each country as well as repopulating the html select 
     * element's options elements...  
     * */
    let change = (val) => {
        /**Initializes and sets the courrentCurrency variable to a 
         * specific currency object by filtering the currencies 
         * array using the filetr method to filter the array by 
         * the passed in variable parameter... 
         * */
        let currentCurrency = curerncies.filter((currency) => {
            // Returns the array element that has a code property that's equal to the value of the passed in variable parameter...
            return currency.code === val
        })

        /**Executes the attribute method on the img html element 
         * inside of the #current-flag element and sets its src property 
         * to the value of the selected current currency's flag
         * location... 
         * */
        $('#current-flag').attr('src', currentCurrency[0].flag)

        // Executes the html method to change the inner html of the dom element with the id of current-currency...
        $('#current-currency').html(
            currentCurrency[0].code + ':  ' + currentCurrency[0].currency
        )
        // Executes the html method to change the inner html of the dom element with the id of current-value...
        $('#current-value').html(
            currentCurrency[0].symbol + '  1.00'
        )

        // Executes the remove method to remove all html elements with a class of rate...
        $('.rate').remove()
        
        // Initializes and sets the getRquest variable with the GET request url...
        let getRequest = endPoint + key + '/latest/' + currentCurrency[0].code

        /**Creates the ajax request object for the GET request 
         * url and the request method...
         * */
        let request = $.ajax({
            // Stores the GET request url...
            url: getRequest,
            // Stores the request method type...
            method: "GET"
        })

        /**Creates a response variable to store the GET request done 
         * function that has a callback function to get retrive the 
         * data from the GET request and store that data into an 
         * data arrary variable create currency rates boxes and 
         * repopuplate the html select drop-down options elements...  
         * */
        let response = request.done((data) => {
            // Creates an initializes a counter variable to 0...
            let counter = 0

            // For each method to loop through each element inside of the currencies array...
            curerncies.forEach((currency) => {
                // If statement to check the value of the currency.code with the value of the selected current currency code...
                if (currency.code != currentCurrency[0].code) {
                    // If True:
                    // Executes the append method on the html element with the class of grid inside of the html element with the class of exchange-rates...
                    $(".exchange-rates .grid").append(
                        "<!-- start of rate --><div class='cell small-12 medium-6 large-6 rate' style='border-left: 5px solid " + colors[counter] + ";'>" +
                        "<!-- start of stats --><div class='stats'>" +
                        "<img class='flag' src=" + currency.flag + "  alt='This is the country flag of my current currency.'>" +
                        "<h6 class='currency'>" + currency.currency + "</h6></div><hr><!-- end of stats --><p>" + currency.symbol + " " + data.conversion_rates[currency.code] +
                        "  <span>(" +  currency.code + ")</span></p></div><!-- end of rate -->"
                    )
                }
                // Increment the counter variable by 1...
                counter++
            })
        })

        // Executes the remove method to remove all html option elements inside of the element with an id of selector...
        $('#selector option').remove()
        
        // Executes the append method on the html element with the id of selector to add an html option element...
        $('#selector').append(
            "<option value=" + currentCurrency[0].code + ">" + currentCurrency[0].code + ":  " + currentCurrency[0].currency + "</option>"
        )

        // For each method to loop through each element inside of the currencies array...
        curerncies.forEach((s) => {
            // If statement to check the value of the currency.code with the value of the current currency code...
            if (s.code != currentCurrency[0].code) {
                // If True:
                // Executes the append method on the html element with the id of selector to add html option elements for each country...
                $('#selector').append(
                    "<option value=" + s.code + ">" + s.code + ":  " + s.currency + "</option>"
                )
            }
        })
    }

    // Conversion Page Conversion Process Function... 
    /**The conversion function retrives the user's input 
     * from the convert page's html input and select elemnts 
     * and calculates the conversion rates for every country 
     * and displays a block of html markup for each of the 
     * converted country ammounts rounded to 2 decimal places...   
     * */
    let conversion = () => {
        // Initializes the ammount variable... 
        let ammount;

        // If statement to check the value of the html #convet-num element...
        if ($('#convert-num').val() <= 0.01) {
            // If True:
            // Sets the ammount variable value to 1 rounded to 2 decimal places...
            ammount = 1.00
            // Executes the val method to set the html #convert-num element to 1...
            $('#convert-num').val(ammount)
        } else {
            // If False:
            // Sets the ammount variable value to user's input rounded to 2 decimal places...
            ammount = Number($('#convert-num').val()).toFixed(2)
        }
        

        $('#convert-num').val(ammount)

        // Initializes and sets the convertType variable to the value of the #convert-currency html element using the val method...
        let convertType = $('#convert-currency').val()

        /**Initializes and sets the convertObject variable to a 
         * specific currency object by filtering the currencies 
         * array using the filetr method to filter the array by 
         * the convertType variable... 
         * */
        let convertObject = curerncies.filter((currency) => {
            // Returns the array element that has a code property that's equal to the value of the convertType variable...
            return currency.code === convertType
        })

        /**Executes the attribute method on the img html element 
         * inside of the original class element and sets its src property 
         * to the value of the selected convert currency's flag
         * location... 
         * */
        $('.original img').attr('src', convertObject[0].flag)
        $('#convert-code').html("(" + convertObject[0].code + ")")

        // Initializes and sets the convertToType variable to the value of the #convert-to-currency html element using the val method...
        let convertToType = $('#convert-to-currency').val()

        /**Initializes and sets the convertToObject variable to a 
         * specific currency object by filtering the currencies 
         * array using the filetr method to filter the array by 
         * the convertTo                            Type variable... 
         * */
        let convertToObject = curerncies.filter((currency) => {
            // Returns the array element that has a code property that's equal to the value of the convertToType variable...
            return currency.code === convertToType
        })

        /**Executes the attribute method on the img html element 
         * inside of the .result element and sets its src property 
         * to the value of the selected convert to curreny's flag
         * location... 
         * */
        $('.result img').attr('src', convertToObject[0].flag)
        $('#converted-code').html("(" + convertToObject[0].code + ")")

        // Executes the remove method to remove all html elements with a class of rate...
        $('.rate').remove()

        // Initializes and sets the getRquest variable with the GET request url...
        let getRequest = endPoint + key + '/latest/' + convertType

        /**Creates the ajax request object for the GET request 
         * url and the request method...
         * */
        let request = $.ajax({
            // Stores the GET request url...
            url: getRequest,
            // Stores the request method type...
            method: "GET"
        })

        /**Creates a response variable to store the GET request done 
         * function that has a callback function to get retrive the 
         * data from the GET request and store that data into an 
         * data arrary variable. Next, the html element with the 
         * class of dollar's html is changed to show the 
         * selected convert symbol an the ammount value entered by 
         * the user. Next, the html element with the class of 
         * converted-dollar is changed to show selected convert to symbol
         * and ammount value entered by the user multiplied by the 
         * selected currency conversion rate rounded to 2 decimal places.
         * Next, a counter variable is initialized and set to zero.
         * Finally, a for each method loops through the currencies array
         * and uses an if statement to display a block of code with each
         * element in the array with the append method accept for the
         * element with the value of the currency code that matched the 
         * user selected convert currency code value...  
         * */
        let response = request.done((data) => {

            // Executes the html method to change the inner html of the dom element with the class of dollar...
            $('.dollar').html(convertObject[0].symbol + " " + ammount)

            // let convertedAmmount = ammount * data.conversion_rates[convertToObject[0].code]
            let convertAmmount = data.conversion_rates[convertToObject[0].code]

            // Executes the html method to change the inner html of the dom element with the class of converted-dollar...
            $('.converted-dollar').html(convertToObject[0].symbol + " " + (ammount * convertAmmount).toFixed(2))
            
            // Creates an initializes a counter variable to 0...
            let counter = 0

            // For each method to loop through each element inside of the currencies array...
            curerncies.forEach((currency) => {
                // If statement to check the value of the currency.code with the value of the convertObject[0].code...
                if (currency.code != convertObject[0].code) {
                    // If True:

                    let rateAmmount = data.conversion_rates[currency.code]

                    // Executes the append method on the html element with the class of grid inside of the html element with the class of calcu-rates...
                    $(".calcu-rates .grid").append(
                        // Creates a block of html markup...
                        "<!-- start of rate --><div class='cell small-12 medium-6 large-6 rate' style='border-left: 5px solid " + colors[counter] + ";'>" +
                        "<!-- start of stats --><div class='stats'>" +
                        "<img class='flag' src=" + currency.flag + "  alt='This is the country flag of my current currency.'>" +
                        "<h6 class='currency'>" + currency.currency + "</h6></div><hr><!-- end of stats --><p>" +
                        currency.symbol + " " + (rateAmmount * ammount).toFixed(2) + "  <span>(" +  currency.code + ")</span></p></div><!-- end of rate -->"
                    )
                }
                // Increment the counter variable by 1...
                counter++
            })
        })
    }


    $('#convert-num').focus(()=> { 
        $('#convert-num').val("")  
    })

    /**Data Events */
    // Home Page Change Event...
    /**This is an on method for the html element with an id 
     * of selector that uses a change event to store the 
     * value of the html element with the id of selector 
     * in a variable. Then the change function is called 
     * passing in the newly created variable as a parameter...
     * */
    // Executes the on method with a change function...
    $('#selector').on('change', () => {
        // Creates a variable to store the value of the #selector html element... 
        let selected = $('#selector').val()
        // Calls the Change Function with a parameter...
        change(selected)
    })

    // Conversion Page Click Event... 
    /**This is an on method for either the html element with 
     * the id of covert-btn or responsive-btn that uses a 
     * click event function that calls the conversion function... 
     * */
    // Executes the on method with a click function...
    $('#convert-btn').on('click', () => {
        // Calls the Conversion Function...
        conversion()
    })

    /**Mobile Menu Controls... */
    // Open mobile menu...
    /**This is an on method for the html element with 
     * an id of open-mobile-btn. It has a click function
     * that executes a css method on the html element with 
     * an id of open-mobile-btn to change it's css style 
     * display property to none. It also has a toggleClass
     * method to add a class of closed from the html 
     * element with the class of mobile-menu. Finally, 
     * there is an if statement that uses the width method 
     * to check if the width of the screen's window is 
     * lessthan or equal to 330px. If true, a css method 
     * is called on the html tag called main to change it's 
     * css style margin top property to 70px...
     * */
    // Executes the on method with a click function...
    $('#open-mobile-btn').on('click', () => {
        // Executes the css method...
        $('#open-mobile-btn').css({
            // Changes the display property value...
            display: 'none'
        })
        // Execute the toggleClass method...
        $('.mobile-menu').toggleClass('closed')
        // If statement to check the window width...
        if ($(window).width() <= 330) {
            // If True:
            // Executes the css method...
            $('main').css({
                // Changes the margin top property value...
                marginTop: '70px'
            })
        }
    })
    // Close mobile menu...
    /**This is an on method for the html element with 
     * an id of close-mobile-btn. It has a click function
     * that executes a css method on the html element with 
     * an id of open-mobile-btn to change it's css style 
     * display property to flex. It also has a toggleClass
     * method to remove a class of closed from the html 
     * element with the class of mobile-menu. Finally, 
     * there is an if statement that uses the width method 
     * to check if the width of the screen's window is 
     * lessthan or equal to 330px. If true, a css method 
     * is called on the html tag called main to change it's 
     * css style margin top property to 78px...
     * */
    // Executes the on method with a click function...
    $('#close-mobile-btn').on('click', () => {
        // Executes the css method...
        $('#open-mobile-btn').css({
            // Changes the display property value...
            display: 'flex'
        })
        // Execute the toggleClass method...
        $('.mobile-menu').toggleClass('closed')
        // If statement to check the window width...
        if ($(window).width() <= 330) {
            // If True:
            // Executes the css method...
            $('main').css({
                // Changes the margin top property value...
                marginTop: '78px'
            })
        }
    })

    /**Page Load Function Calls... */
    // Calls the Init Function...
    init()
    // Calls the ConvertInit Function...
    convertInit()






})