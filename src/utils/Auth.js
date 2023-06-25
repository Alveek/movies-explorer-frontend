class Auth {
  constructor({ url }) {
    this._url = url;
  }

  checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    // получаю текст ошибки с сервера, отклоняю запрос, возвращаю объект с кодом и текстом
    return res.text().then((text) => {
      return Promise.reject({
        status: res.status,
        errorText:
          JSON.parse(text).message === 'Validation failed'
            ? JSON.parse(text).validation.body.message
            : JSON.parse(text).message
      });
    });
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
  url: 'https://api.ak-movies-explorer.nomoredomains.monster'
  // url: 'http://localhost:3000'
});
