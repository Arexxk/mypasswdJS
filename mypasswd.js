dic = {}
dic['facebook.com'] = "sdfsdfsdf"


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function () {gen(document.getElementById('secret').value)});
});

function gen(secret)
{
    chrome.tabs.query({'active': true, 
                        'lastFocusedWindow': true}, 
      function (tabs) 
      {
        var url = tabs[0].url;
        //var encrypted = CryptoJS.AES.encrypt("facebook.com", secret);
        var encrypted = CryptoJS.SHA1(secret);
        //var decrypted = CryptoJS.AES.decrypt(encrypted, secret);
        //decrypted.toString(CryptoJS.enc.Utf8)
        alert(url + " => " + encrypted);
      });
}

