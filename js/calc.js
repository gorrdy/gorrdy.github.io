function GetBtcPrice (name) {
  var usd_czk = 21
  var datum = document.getElementById("date").value
  var sats  = document.getElementById("amount").value
  console.log (datum)
  var date = datum
  $("#den_datum").html(date)
  var url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start='
  var url = url.concat (date, "&end=", date)
  console.log(url)
  var test = $.getJSON( url , function() {
    var price_btc = test.responseJSON.bpi[date]
    var price_btc_czk = price_btc * usd_czk
    price_btc = round(price_btc, 1)
    price_btc_czk = round(price_btc_czk, 1)
    $("#btcprice").html(price_btc)
    $("#btcpriceczk").html(price_btc_czk)

    var price_sats = price_btc / 100000000 * sats
    var price_sats_czk = price_sats * usd_czk
    price_sats = round(price_sats, 1)
    price_sats_czk = round(price_sats_czk, 1)
    $("#satsprice").html(price_sats)
    $("#satspriceczk").html(price_sats_czk)


  })
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
