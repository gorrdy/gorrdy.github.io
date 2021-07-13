function GetBtcPrice (name) {
  var datum = document.getElementById("date").value
  var sats  = document.getElementById("amount").value
  var date = datum
  $("#den_datum").html(date)
  var url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start='
  var url = url.concat (date, "&end=", date)
  var test = $.getJSON( url , function() {
  var price_btc = test.responseJSON.bpi[date]
    var url2='https://api.kb.cz/openapi/v1/exchange-rates/USD'
    var usd = $.getJSON( url2 , function() {
      var usdczk = usd.responseJSON.middle
      var price_btc = test.responseJSON.bpi[date]

      var price_btc_czk = price_btc * usdczk
      price_btc = round(price_btc, 1)
      price_btc_czk = round(price_btc_czk, 1)
      $("#btcprice").html(price_btc)
      $("#btcpriceczk").html(price_btc_czk)

      var price_sats = price_btc / 100000000 * sats
      var price_sats_czk = price_sats * usdczk
      price_sats = round(price_sats, 1)
      price_sats_czk = round(price_sats_czk, 1)
      $("#satscount").html(sats)
      $("#satsprice").html(price_sats)
      $("#satspriceczk").html(price_sats_czk)
    })
  })
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function insertQr () {
  var string = '<div class="center-div" style="width:250px"><img alt="QR platba" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data=LNURL1DP68GURN8GHJ7MRWVF5HGUEWVDHK6TMVDE6HYMRS9ASHQ6F0WCCJ7MRWW4EXCTENXSEQD0Z9ZY"><br><div class="center-text">LNURL<br /><br /><a target="_blank" href="https://lnbits.com/tpos/EPdibZWaMyLFRvr4g6Rikp">Běžná LN Faktura</a></div></div>'
  $("#lnurl").html(string)
}
