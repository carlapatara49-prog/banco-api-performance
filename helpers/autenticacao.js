 import http from 'k6/http';
 const postLogin = JSON.parse(open ('../fixture/postLogin.json'))
 
 export function obterToken(){ 
  
  const url = 'http://localhost:3000/login';
  const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

   const resp = http.post(url, payload, params);

   return resp.json('token')
}