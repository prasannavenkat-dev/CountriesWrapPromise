


//XMLHTTP REQUEST WRAPPING IN PROMISE

var myPromise = new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            resolve(xhttp.responseText);
        }
        else if (this.readyState == 4 && this.status !== 200) {
            reject('error');
        }

    }
    xhttp.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xhttp.send();

});


//DATAS FROM PROMISE 

myPromise.then(function (data) {
    console.log(JSON.parse(data))
    return (JSON.parse(data))
})
    .then(function (result) {


        for (i = 0; i < 250; i++) {


            var card = [];
            var countryName = [];
            var img = [];
            var details = [];
            var capital = [];
            var currencyCode = [];
            var currencyName = [];
            var currencySymbol = [];
            var region = [];
            var latlng = [];



            card[i] = document.createElement('div');
            card[i].setAttribute('class', 'card');
            card[i].setAttribute('style', 'width: 18rem');


            /*Title */
            countryName[i] = document.createElement('h6');
            countryName[i].setAttribute('class', 'card-header');


            /*FLAG */
            img[i] = document.createElement('img');
            img[i].setAttribute('class', 'card-img-top');



            /*LIST-ITEMS*/
            details[i] = document.createElement('ul');
            details[i].setAttribute('class', 'list-group list-group-flush');



            //CAPITAL

            capital[i] = document.createElement('li');
            capital[i].setAttribute('class', 'list-group-item')



            //CURRENCY-CODE

            currencyCode[i] = document.createElement('li');
            currencyCode[i].setAttribute('class', 'list-group-item');



            //CURRENCY-NAME

            currencyName[i] = document.createElement('li');
            currencyName[i].setAttribute('class', 'list-group-item');


            //CURRENCY-SYMBOL

            currencySymbol[i] = document.createElement('li');
            currencySymbol[i].setAttribute('class', 'list-group-item');


            //REGION

            region[i] = document.createElement('li');
            region[i].setAttribute('class', 'list-group-item');


            //LAT-LONG

            latlng[i] = document.createElement('li');
            latlng[i].setAttribute('class', 'list-group-item');

            /*APPENDING*/

            document.body.append(card[i]);
            card[i].append(countryName[i]);
            card[i].append(img[i])
            card[i].append(details[i]);
            details[i].append(capital[i]);
            details[i].append(currencyCode[i]);
            details[i].append(currencyName[i]);
            details[i].append(currencySymbol[i]);
            details[i].append(region[i])
            details[i].append(latlng[i]);




            //DATA FALLBACK

            if (result[i].capital === null || result[i].capital === ""||result[i].capital.length===0) {
                result[i].capital = 'NO CAPITAL'
            }
            else if (result[i].currencies[0].code === null || result[i].currencies[0].code === ""||result[i].currencies[0].code.length===0) {
                result[i].currencies[0].code = 'NO CODE'
            }
            else if (result[i].currencies[0].symbol === null || result[i].currencies[0].symbol === ""||result[i].currencies[0].symbol.length===0) {
                result[i].currencies[0].symbol = 'NO SYMBOL'
            }
            else if (result[i].region === null || result[i].region === ""||result[i].region.length===0) {
                result[i].region = 'NO REGION'
            }
            else if (result[i].latlng === null || result[i].latlng === ""||result[i].latlng.length===0) {
                result[i].latlng = 'NO DATA'
            }



            //DATA INITIALIZATION


            /*NAME */
            countryName[i].innerHTML = result[i].name;

            /*FLAG */
            img[i].setAttribute('src', result[i].flag);
            img[i].setAttribute('alt', 'Flag.svg');

            /*CAPITAL */
            capital[i].innerHTML = 'Capital : ' + result[i].capital;

            /*CURRENCY CODE */
            currencyCode[i].innerHTML = 'Country Code : ' + result[i].currencies[0].code;

            /*CURRENCY NAME */
            currencyName[i].innerHTML = 'Currency : ' + result[i].currencies[0].name;

            /*CURRENCY SYMBOL */
            currencySymbol[i].innerHTML = 'Symbol : ' + result[i].currencies[0].symbol;

            /*REGION */
            region[i].innerHTML = 'Region : ' + result[i].region;

            /*LAT-LONG*/
            latlng[i].innerHTML = 'Lat,Lng : ' + result[i].latlng;
        }


    })

    .catch(function (err) {

        console.log('error')
    })
