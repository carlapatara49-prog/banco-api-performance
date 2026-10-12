const configLocal = JSON.parse(open('../config/config.local.js'))

export function pegarBaseUrl(){

  return __ENV.BASE_URL  || configLocal.baseURL;


}