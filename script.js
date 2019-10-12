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

      results += '<h2> the exchange rate of the US Dollar is ' + out + "</h2>";
      document.getElementById("exchange").innerHTML = results; 
    });
    console.log('hi');
  
});