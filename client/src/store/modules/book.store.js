import { bookService } from '../../services'

const state = () => ({
  bookList: [],
  book: {}
})

const actions = {
  getBooks({ commit }) {
    return bookService.getBooks()
      .then(
        books => {
          commit('getSuccess', books)
        },
        error => {
          commit('getFailure', error)
        }
      )
  },
  createBook({ commit }, book) {
    return bookService.createBook(book)
      .then(
        book => {
          commit('createSuccess', book)
        },
        error => {
          commit('createFailure', error)
        }
      )
  },
  updateBook({ commit }, book) {
    return bookService.updateBook(book)
      .then(
        book => {
          commit('updateSuccess', book)
        },
        error => {
          commit('updateFailure', error)
        }
      )
  },
  deleteBook({ commit }, book) {
    return bookService.deleteBook(book)
      .then(
        book => {
          commit('deleteSuccess', book)
        },
        error => {
          commit('deleteFailure', error)
        }
      )
  }
}

const mutations = {
  getSuccess(state, books) {
    state.bookList = books
  },
  getFailure(state, error) {
    state.error = error
  },
  createSuccess(state, book) {
    state.book = book
  },
  createFailure(state, error) {
    state.error = error
  },
  updateSuccess(state, book) {
    state.book = book
  },
  updateFailure(state, error) {
    state.error = error
  },
  deleteSuccess(state, book) {
    state.book = book
  },
  deleteFailure(state, error) {
    state.error = error
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}