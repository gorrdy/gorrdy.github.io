$(document).ready(function(){
  var menuString = `<ul class="nav">
   <a href="index.html"><li class="nav-item">Domů</li></a>
   <a href="sats.html"><li class="nav-item">Cena BTC</li></a>
   <a href="pay_sats.html"><li class="nav-item">SatsPay</li></a>
   <a target="_blank" href="https://btcplatby.cz"><li class="nav-item">BTC Platby</li></a>
   <a target="_blank" href="https://btcpay.sats.cz"><li class="nav-item">Eshop</li></a>
   <a href="o_projektu.html"> <li class="nav-item">O projektu</li></a>
   <a href="apps.html"> <li class="nav-item">Aplikace</li></a>
   <a href="pay_sats.html"> <li class="nav-item">Aplikace</li></a>
  </ul>`
  $("#navigation").html(menuString)
  
  var footerString = `<div>
     © Gorrdy
     
     <p>
     Podpořit přes BTCPay
     <style type="text/css"> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #ccc; } #btcpay-input-price { -moz-appearance: none; -webkit-appearance: none; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; } #btcpay-input-price::-webkit-outer-spin-button, #btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } </style>
<style type="text/css"> input[type=range].btcpay-input-range { -webkit-appearance:none; width:100%; background: transparent; } input[type=range].btcpay-input-range:focus { outline:0; } input[type=range].btcpay-input-range::-webkit-slider-runnable-track { width:100%; height:3.1px; cursor:pointer; box-shadow:0 0 1.7px #020,0 0 0 #003c00; background:#f3f3f3; border-radius:1px; border:0; } input[type=range].btcpay-input-range::-webkit-slider-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; -webkit-appearance:none; margin-top:-9.45px } input[type=range].btcpay-input-range:focus::-webkit-slider-runnable-track { background:#fff; } input[type=range].btcpay-input-range::-moz-range-track { width:100%; height:3.1px; cursor:pointer; box-shadow:0 0 1.7px #020,0 0 0 #003c00; background:#f3f3f3; border-radius:1px; border:0; } input[type=range].btcpay-input-range::-moz-range-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; } input[type=range].btcpay-input-range::-ms-track { width:100%; height:3.1px; cursor:pointer; background:0 0; border-color:transparent; color:transparent; } input[type=range].btcpay-input-range::-ms-fill-lower { background:#e6e6e6; border:0; border-radius:2px; box-shadow:0 0 1.7px #020,0 0 0 #003c00; } input[type=range].btcpay-input-range::-ms-fill-upper { background:#f3f3f3; border:0; border-radius:2px; box-shadow:0 0 1.7px #020,0 0 0 #003c00; } input[type=range].btcpay-input-range::-ms-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; height:3.1px; } input[type=range].btcpay-input-range:focus::-ms-fill-lower { background:#f3f3f3; } input[type=range].btcpay-input-range:focus::-ms-fill-upper { background:#fff; } </style>
<form method="POST"  action="https://btcpay.sats.cz/api/v1/invoices" class="btcpay-form btcpay-form--block" target="_blank">
  <input type="hidden" name="storeId" value="4pDq6p7nVoNEeUBxm1NfE9h1wL6XuDt4r2o9kChfQSwE" />
  <input type="hidden" name="checkoutDesc" value="Donation" />
  <input type="hidden" name="browserRedirect" value="https://c.tenor.com/X-uYUxoUVdAAAAAM/hi-cute-cat.gif" />
  <input type="hidden" name="notifyEmail" value="gorrdy@sats.cz" />
  <div class="btcpay-custom-container">
    <input id="btcpay-input-price" name="price" type="text" min="0" max="none" step="any" value="50" style="width: 146px;" oninput="event.preventDefault();isNaN(event.target.value)? document.querySelector('#btcpay-input-price').value = 50 : event.target.value; if (this.value < undefined) {this.value = undefined; } else if(this.value > undefined){  this.value = undefined;}" onchange= "var el=document.querySelector('#btcpay-input-price'); var price = parseInt(el.value);  if(price< 10) { el.value = 10} else if(price> 1000) { el.value = 1000} document.querySelector('#btcpay-input-range').value = el.value" />
    <select name="currency" style="background-color:black">
      <option value="CZK">CZK</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
      <option value="BTC">BTC</option>
    </select>
    <input class="btcpay-input-range" id="btcpay-input-range" value="50" type="range" min="10" max="1000" step="10" style="width:146px;margin-bottom:15px;" oninput="document.querySelector('#btcpay-input-price').value = document.querySelector('#btcpay-input-range').value" />
  </div>
<button type="submit" class="submit" name="submit" style="min-width:146px; min-height:40px; border-radius: 4px;border-style: none;background-color: #0f3b21;" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"><span style="color:#fff">Příspěvek</span>
<img src="https://btcpay.sats.cz/img/logo.svg" style="height:40px;display:inline-block;padding: 5% 0 5% 5px;vertical-align: middle;">
</button></form>
     </p>
     <!--<p>
 	  <a id="donate" href="#donate" onclick="insertQr(); return false;">Podpořit projekt</a><br />
	  <div id="lnurl"></div>
     </p>-->
     <p>
      Najdete mě zde:<br />
      <a target="_blank" href="https://discord.gg/8KPPRCj">Discord</a>,
      <a target="_blank" href="https://twitter.com/_Honza_Dvorak">Twitter</a>,
      <a target="_blank" href="https://github.com/gorrdy">Github</a>,
      <a target="_blank" href="mailto:dvorakh1997@gmail.com">E-mail</a>
     </p>
     <p>
      Další zajímavé projekty:<br />
      <a target="_blank" href="https://adopcebtc.cz/">Adopce BTC pro firmy</a>,
      <a target="_blank" href="https://btc-slovnik.cz/">Bitcoinový slovníček pro mírně pokročilé</a>,
      <a target="_blank" href="https://www.kryptodoupe.cz/">Kryptodoupě.cz</a>,
      <a target="_blank" href="https://www.youtube.com/channel/UCCegl13nmUvxUKMJqng1S-A">Bitcoinovej kanál</a>
     </p>
     <p>
      Sats.cz lightning node:<br />
      <a target="_blank" href="https://amboss.space/node/0336bcab33a15ba931790d007b6bc1f604af31f461e7a3de6f608d266cc1973f2f">Amboss.space</a>,
      <a target="_blank" href="https://1ml.com/node/0336bcab33a15ba931790d007b6bc1f604af31f461e7a3de6f608d266cc1973f2f">1ml.com</a>
      <a target="_blank" href="https://amboss.space/community/8bb99bcc-c5da-4821-a151-106183a483fc">BTCKNL komunita Amboss</a>,
      0336bcab33a15ba931790d007b6bc1f604af31f461e7a3de6f608d266cc1973f2f@ifgc2ha73azgthsomot7vq255hubcjimfloxpmgx4hlbqdc7dhxskoyd.onion:9735
     </p>
     </div>`
   $("#footer").html(footerString)
})

function insertQr () {
  var string = '<div class="center-div" style="width:250px"><img alt="QR platba" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data=lnurl1dp68gurn8ghj7urp0yh8xct5wvhxx730d3h82unvwqhkzurf9amrztmvde6hymp0xymqlgh2vm"><br></div><div class="center-text">lnurl1dp68gurn8ghj7urp0yh8xct5wvhxx730d3h82unvwqhkzurf9amrztmvde6hymp0xymqlgh2vm<br /><br /><a id="donate2" onclick="CreateInvoice()" href="#donate2">Běžná LN Faktura</a></div></div>'
  $("#lnurl").html(string)
  $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
}
