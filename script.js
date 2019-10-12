document.getElementById("usdsubmit").addEventListener("click", function(event) {
  event.preventDefault();
  let out = "";
  const value = document.getElementById("currency").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://api.exchangerate-api.com/v4/latest/USD";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += '<h2>Exchange for ' + value + "</h2>";
      if (value === "EUR" || value === "Germany" || value === "Austria" || value === "Belgium" || value === "Cyprus" || value === "Estonia" || value === "Finland" || value === "France" || value === "Greece"
      || value === "Ireland" || value === "Italy" || value === "Latvia" || value === "Lithuania" || value === "Luxembourg" || value === "Malta" || value === "Netherlands" || value === "Portugal" || value === "Slovakia" || value === "Slovenia" || value === "Spain") {
            results += "<h2>The currency is the Euro</h2>";
            out = json.rates.EUR;
      }
      else if (value === "AED" || value === "United Arab Emirates") {
          results += "<h2>The currency is the UAE Dirham	</h2>";
            out = json.rates.AED;
      }
      else if (value === "ARS" || value === "Argentina") {
          results += "<h2>The currency is the Argentine Peso	</h2>";
            out = json.rates.ARS;

      }
      else if (value === "AUD" || value === "Australia") {
          results += "<h2>The currency is the Australian Dollar</h2>";
            out = json.rates.AUD;
      }
      else if (value === "BGN" || value === "Bulgaria") {
          results += "<h2>The currency is the Bulgarian Lev</h2>";
            out = json.rates.BGN;
      }
      else if (value === "BRL" || value === "Brazil") {
          results += "<h2>The currency is the Brazilian Real	</h2>";
            out = json.rates.BRL;
      }
      else if (value === "BSD" || value === "Bahamas") {
          results += "<h2>The currency is the Bahamian Dollar</h2>";
            out = json.rates.BSD;
      }
      else if (value === "CAD" || value === "Canada") {
          results += "<h2>The currency is the Canadian Dollar</h2>";
            out = json.rates.CAD;
      }
      else if (value === "CHF" || value === "Switzerland") {
          results += "<h2>The currency is the Swiss Franc</h2>";
            out = json.rates.CHF;
      }
      else if (value === "CLP" || value === "Chile") {
          results += "<h2>The currency is the Chilean Peso	</h2>";
            out = json.rates.CLP;
      }
      else if (value === "CNY" || value === "China") {
          results += "<h2>The currency is the Chinese Renminbi	</h2>";
            out = json.rates.CNY;
      }
      else if (value === "COP" || value === "Colombia") {
          results += "<h2>The currency is the Colombian Peso	</h2>";
            out = json.rates.COP;
      }
      else if (value === "CZK" || value === "Czech Republic") {
          results += "<h2>The currency is the Czech Koruna	</h2>";
            out = json.rates.CZK;
      }
      else if (value === "DKK" || value === "Denmark") {
          results += "<h2>The currency is the Argentine</h2>";
            out = json.rates.DKK;
      }
      else if (value === "DOP" || value === "Dominican Republic") {
          results += "<h2>The currency is the Dominican Peso	</h2>";
            out = json.rates.DOP;
      }
      else if (value === "EGP" || value === "Egypt") {
          results += "<h2>The currency is the Egyptian Pound	</h2>";
            out = json.rates.EGP;
      }
      else if (value === "GBP" || value === "United Kingdom") {
          results += "<h2>The currency is the Pound Sterling	</h2>";
            out = json.rates.GBP;
      }
      else if (value === "GTQ" || value === "Guatemala") {
          results += "<h2>The currency is the Guatemalan Quetzal	</h2>";
            out = json.rates.GTQ;
      }
      else if (value === "HKD" || value === "Hong Kong") {
          results += "<h2>The currency is the Hong Kong Dollar	</h2>";
            out = json.rates.HKD;
      }
      else if (value === "HRK" || value === "Croatian") {
          results += "<h2>The currency is the Croatian Kuna	</h2>";
            out = json.rates.HRK;
      }
      else if (value === "HUF" || value === "Hungary") {
          results += "<h2>The currency is the Hungarian Forint	</h2>";
            out = json.rates.HUF;
      }
      else if (value === "IDR" || value === "Indonesia") {
          results += "<h2>The currency is the Indonesian Rupiah	</h2>";
            out = json.rates.IDR;
      }
      else if (value === "ILS" || value === "Israel") {
          results += "<h2>The currency is the Israeli Shekel</h2>";
            out = json.rates.ILS;
      }
      else if (value === "INR" || value === "India") {
          results += "<h2>The currency is the Indian Rupee	</h2>";
            out = json.rates.INR;
      }
      else if (value === "ISK" || value === "Iceland") {
          results += "<h2>The currency is the Icelandic Krona</h2>";
            out = json.rates.ISK;
      }
      else if (value === "JPY" || value === "Japan") {
          results += "<h2>The currency is the Japanese Yen	</h2>";
            out = json.rates.JPY;
      }
      else if (value === "KRW" || value === "Korea") {
          results += "<h2>The currency is the South Korean Won	</h2>";
            out = json.rates.KRW;
      }
      else if (value === "KZT" || value === "Kazakhstan") {
          results += "<h2>The currency is the Kazakhstani Tenge	</h2>";
            out = json.rates.KZT;
      }
      else if (value === "MXN" || value === "Mexico") {
          results += "<h2>The currency is the Mexican Peso	</h2>";
            out = json.rates.MXN;
      }
      else if (value === "MYR" || value === "Malaysia") {
          results += "<h2>The currency is the Malaysian Ringgit	</h2>";
            out = json.rates.MYR;
      }
      else if (value === "NOK" || value === "Norway") {
          results += "<h2>The currency is the Norwegian Krone	</h2>";
            out = json.rates.NOK;
      }
      else if (value === "NZD" || value === "New Zealand") {
          results += "<h2>The currency is the New Zealand Dollar</h2>";
            out = json.rates.NZD;
      }
      else if (value === "PAB" || value === "Panama") {
          results += "<h2>The currency is the Panamanian Balboa	</h2>";
            out = json.rates.PAB;
      }
      else if (value === "PEN" || value === "Peru") {
          results += "<h2>The currency is the Peruvian Nuevo Sol</h2>";
            out = json.rates.PEN;
      }
      else if (value === "PHP" || value === "Philippines") {
          results += "<h2>The currency is the Philippine Peso	</h2>";
            out = json.rates.PHP;
      }
      else if (value === "PKR" || value === "Pakistan") {
          results += "<h2>The currency is the Pakistani Rupee	</h2>";
            out = json.rates.PKR;
      }
      else if (value === "PLN" || value === "Poland") {
          results += "<h2>The currency is the Polish Zloty	</h2>";
            out = json.rates.PLN;
      }
      else if (value === "PHP" || value === "Philippines") {
          results += "<h2>The currency is the Philippine</h2>";
            out = json.rates.PHP;
      }
      else if (value === "PYG" || value === "Paraguay") {
          results += "<h2>The currency is the Paraguayan Guarani	</h2>";
            out = json.rates.PYG;
      }
      else if (value === "RON" || value === "Romania") {
          results += "<h2>The currency is the Romanian Leu	</h2>";
            out = json.rates.RON;
      }
      else if (value === "RUB" || value === "Russia") {
          results += "<h2>The currency is the Russian Ruble	</h2>";
            out = json.rates.RUB;
      }
      else if (value === "SAR" || value === "Saudi Arabia") {
          results += "<h2>The currency is the Saudi Riyal	</h2>";
            out = json.rates.SAR;
      }
      else if (value === "SEK" || value === "Sweden") {
          results += "<h2>The currency is the Swedish Krona	</h2>";
            out = json.rates.SEK;
      }
      else if (value === "SGD" || value === "Singapore") {
          results += "<h2>The currency is the Singapore Dollar	</h2>";
            out = json.rates.SGD;
      }
      else if (value === "THB" || value === "Thailand") {
          results += "<h2>The currency is the Thai Baht	</h2>";
            out = json.rates.THB;
      }
      else if (value === "TRY" || value === "Turkey") {
          results += "<h2>The currency is the Turkish Lira	</h2>";
            out = json.rates.TRY;
      }
      else if (value === "TWD" || value === "Taiwan") {
          results += "<h2>The currency is the New Taiwan Dollar	</h2>";
            out = json.rates.TWD;
      }
      else if (value === "UAH" || value === "Ukraine") {
          results += "<h2>The currency is the Ukrainian Hryvnia	</h2>";
            out = json.rates.UAH;
      }
      else if (value === "UYU" || value === "Uruguay") {
          results += "<h2>The currency is the Uruguayan Peso	</h2>";
            out = json.rates.UYU;
      }
      else if (value === "VND" || value === "Vietnam") {
          results += "<h2>The currency is the Vietnamese Dong	</h2>";
            out = json.rates.VND;
      }
      else if (value === "ZAR" || value === "South Africa") {
          results += "<h2>The currency is the South African Rand	</h2>";
            out = json.rates.ZAR;
      }
      else {
          results += "<p>Sorry check your spelling and use caps, or try the currency code. we may not have the information for this</p>";
      }

      results += '<h2> the exchange rate of the US Dollar is ' + out + "</h2>";
      document.getElementById("exchange").innerHTML = results; 
    });
    console.log('hi');
  
});