class Api {
  constructor(options) {
   this._baseUrl = options.baseUrl;
   this._headers = options.headers;
  }

  _promiseReject(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers
    })
    .then((res) => this._promiseReject(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
  })
    .then(res => this._promiseReject(res));
  }

  patchUserProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(res => this._promiseReject(res));
  }

  postNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => this._promiseReject(res));
  }

  deleteUserCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._promiseReject(res));
  }

  putLikesCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => this._promiseReject(res));
  }

  deleteLikesCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._promiseReject(res));
  }

  patchUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => this._promiseReject(res));
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: 'ad4ff191-271f-4027-99f8-62ce89a12b83',
    'Content-Type': 'application/json'
  },
});

export default api;

