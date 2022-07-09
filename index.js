const axios = require('axios');

const anchor_url = 'PUT ANCHOR URL HERE'
const post_data = "v={}&reason=q&c={}&k={}&co={}"
var url_base = 'https://www.google.com/recaptcha/'
var re = new RegExp('([api2|enterprise]+)\/anchor\?(.*)');
var matches = anchor_url.match(re);
url_base += matches[0]+'/';
params = matches[1]
axios({
    method: 'GET',
    url: url_base + 'anchor',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    params: {params}
}).then(response => { 
    var re = new RegExp('"recaptcha-token" value="(.*?)"');
    var token = response.data.match(re)
    params2 = ""
    for (var pair of params.split('&')) {  
        params2 += pair.split('=')
    }
    var post_data = params2['v'] + token + params2['k'] + params2['co']
    var re = new RegExp('value="(.*?)"');
    var key = post_data.match(re)[0].split('"')[1]
    console.log(key)
}).catch(error => {
    console.log(error)
})