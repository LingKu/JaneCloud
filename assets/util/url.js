const url = function(action, querystring) {

  return "http://192.168.96.149:5757" + action;
  if (process.env.NODE_ENV === 'development') {
    var url = '/app/index.php?i=4&t=0&v=1.0&from=wxapp&c=entry&a=weapp&m=jw_ys&';
  } else {
    var host = window.location.protocol + "//" + window.location.host;
    var url = host + '/web/index.php?c=site&a=entry&m=jw_ys&';
  }

  if (action.indexOf("/") === 0) {
    action = action.substr(1);
  }

  if (action) {
    action = action.split('/');
    if (action[0]) {
      //url += 'c=' + action[0] + '&';
    }
    if (action[1]) {
      url += 'do=' + action[1] + '&';
    }
    if (action[2]) {
      url += 'action=' + action[2] + '&';
    }
  }

  if (querystring && typeof querystring === 'object') {
    for (let param in querystring) {
      if (param && querystring.hasOwnProperty(param) && querystring[param]) {
        url += param + '=' + querystring[param] + '&';
      }
    }
  }
  return url.substr(0, url.length - 1);
}

export default url;
