function o2_getMonthName(day) {
  names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December']
  return names[day];
}

function displayStockInfo(stockInfo) {
  var stockPrice  = document.querySelector("#sm-stock-ticker .price");
  var stockChange = document.querySelector("#sm-stock-ticker .change");
  var stockDelay  = document.querySelector("#sm-stock-ticker .delay");
  var stockDate   = document.querySelector("#sm-stock-ticker .date");
  
  var date = new Date(stockInfo.TradeDate);
  var month = o2_getMonthName(date.getMonth());
  
  var hbcbStock = divide(stockInfo.TradePrice)

  stockPrice.innerHTML = 'You\'ve got at least <br> ' + hbcbStock + '<br> Honey Butter Chicken Biscuits! <br><br> Otherwise known as: <br>' + '$' + stockInfo.TradePrice.toFixed(2);

  if (stockInfo.Change > 0) {
    stockChange.innerHTML = "+" + stockInfo.Change + " (" + stockInfo.PercChange + "%)";
    // In case the change had previously been negative
    stockChange.classList.remove('change--negative');
  } else if (stockInfo.Change === 0) {
    stockChange.innerHTML = stockInfo.Change + " (" + stockInfo.PercChange + "%)";
    // In case the change had previously been negative
    stockChange.classList.remove('change--negative');
  }
  else {
    stockChange.innerHTML = stockInfo.Change + " (" + stockInfo.PercChange + "%)";
    stockChange.classList.add('change--negative');
  }

  stockDate.innerHTML = month + " " + date.getDate() + ", " + date.getFullYear();
}

jQuery.ajax({
    url: "https://smenergy2017ir.q4web.com/feed/StockQuote.svc/GetStockQuoteList",
    type: "GET",
    data: {
        "apiKey": "BF185719B0464B3CB809D23926182246",
        "exchange": "NASDAQ",
        "symbol": "TSLA",
        "pageSize": "1",
    },
})
.done(function(data, textStatus, jqXHR) {
  console.log("HTTP Request to http Succeeded: " + jqXHR.status);
  console.log(data)
  displayStockInfo(data.GetStockQuoteListResult[0]);
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
    stockPrice.innerHTML = "Stock Price Currently Unavailable"
})
.always(function() {
});

function divide(stockPrice){
  return Math.floor (stockPrice / 2.79).toFixed(0);
}
  