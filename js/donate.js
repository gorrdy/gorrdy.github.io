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
      insertQr2(invoice)
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


function CallSatsPay(){
  amount = document.getElementById("satspaynumberczk").value
  var btcrateurl='https://api.coindesk.com/v1/bpi/currentprice/CZK.json'
  var response = $.getJSON( btcrateurl , function() {
    var czk = response.responseJSON.bpi.CZK.rate_float
    amount = amount * 100000000 / czk
    amount = round(amount, 0)
    let JsonStringWithAmount = '{"onchainwallet": "QdzqnLnSqNgmcvMf7foubg", "description": "Muj byznys - HODLeri s.r.o.", "webhook":"false", "time": 60, '+
    '"amount":' + amount +
    ', "lnbitswallet":"a698f79f97f94a0f80baad5a98586913"}';

    var xhr = new XMLHttpRequest();
    var url = "https://lnbits.com/satspay/api/v1/charge";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Api-Key", "7c3956ad17b44ce2927b3d33de03e744");
    xhr.onreadystatechange = function (invoice) {
      if (xhr.readyState === 4 && xhr.status === 201) {
        var jsonobject = JSON.parse(xhr.responseText)
        var invoice = jsonobject.payment_request
        var btcaddress = jsonobject.onchainaddress
        $("#myidlabel").show();
        $("#myid2label").show();
        insertQrToDiv(invoice, "#myid")
	      console.log(invoice)
        insertQrToDiv(btcaddress, "#myid2")
      }
    };

    const data = JSON.stringify(JSON.parse(JsonStringWithAmount));
    xhr.send(data);
  })
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function insertQrToDiv (data, id){
  var div = document.getElementById( id )
  var QR = QRCode({

    msg :  data
    ,dim :  256 
    ,pad :   6
    ,mtx :  -1 
    ,ecl :  "L"
    ,ecb :   0
    ,pal : ["#000000", "#f2f4f8"]
    ,vrb :   1

  });
  $(id).html(QR) 
}
