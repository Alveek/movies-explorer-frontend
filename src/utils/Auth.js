class Auth {
  constructor({ url }) {
    this._url = url;
  }

  checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }).then((response) => {
      return this.checkResponse(response);
    });
  };

  authorize = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((response) => this.checkResponse(response));
  };

  checkToken = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    }).then((res) => this.checkResponse(res));
  };
}

export const auth = new Auth({
  // url: 'https://api.ak-movies-explorer.nomoredomains.monster'
  url: 'http://localhost:3000'
});
