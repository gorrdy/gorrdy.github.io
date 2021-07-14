function CreateInvoice(){
  amount = parseInt(prompt("Zadejte počet satoshi", "0"), 10);
  let JsonStringWithAmount = '{"out":false,'+
  '"amount":' + amount +
  ', "memo": "Donate", "webhook": "false"}';

  var xhr = new XMLHttpRequest();
  var url = "https://lnbits.com/api/v1/payments";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Api-Key", "561ab0f0829f4d2395e3cad011990613");
  xhr.onreadystatechange = function (invoice) {
    if (xhr.readyState === 4 && xhr.status === 201) {
      var jsonobject = JSON.parse(xhr.responseText)
      var invoice = jsonobject.payment_request
      console.log(invoice)
      insertQr2(invoice)
      return invoice
    }
  };

  const data = JSON.stringify(JSON.parse(JsonStringWithAmount));
  xhr.send(data);

}

function insertQr2 (lninvoice) {
  let str2 = '<div class="center-div" style="width:250px"><img alt="QR platba" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data='+
	     lninvoice +
	     '"><br></div><div class="center-text">'+
	     lninvoice +
	     '<br /><br /><a id="donate2" onclick="CreateInvoice()" href="#donate2">Běžná LN Faktura</a></div></div>'
  $("#lnurl").html(str2)
  $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
}
