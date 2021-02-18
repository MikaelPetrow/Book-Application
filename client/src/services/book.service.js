import { handleResponse } from '../helpers'

export const bookService = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
};

function createBook(book) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  };
  return fetch( process.env.VUE_APP_API_URL + '/api/book', requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    });
}

function getBooks() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch( process.env.VUE_APP_API_URL + '/api/book', requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    });
}

function updateBook(book) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  };
  return fetch( process.env.VUE_APP_API_URL + '/api/book/'+book.id, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    });
}

function deleteBook(book) {
  console.log(book)
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch( process.env.VUE_APP_API_URL + '/api/book/'+book.id, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    });
}