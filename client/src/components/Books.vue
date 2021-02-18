<template>
  <div>
    <h1>Book Application</h1>
    <div class="container">
      <div class="col">
        <form>
          <label for="title">Title</label>
          <input v-model="selectedBook.title" id="title"/>
          <label for="author">Author</label>
          <input v-model="selectedBook.author" id="author"/>
          <label for="description">Description</label>
          <textarea v-model="selectedBook.description" id="description"></textarea>
          <button type="submit" @click="handleSaveNew()">Save New</button>
          <button type="submit" @click="handleUpdate()">Save</button>
          <button type="submit" @click.prevent="handleDelete()">Delete</button>
        </form>
      </div>
      <div id="bookList" class="col">
        <div v-for="(book) in bookList" :key="book.id" @click="handleSelect(book)" class="book" :id="book.id">
          {{ 'Title: ' + book.title + ' | Author: ' + book.author}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Books',
  data: function () {
    return {
      selectedBook: {},
      selection: false
    }
  },
  computed: {
    ...mapState('book', ['bookList'])
	},
  methods: {
    ...mapActions('book', ['getBooks', 'updateBook', 'createBook', 'deleteBook']),
    handleSelect(book) {
      var el = document.getElementById(book.id)
      if(this.selection && this.selectedBook == book) {
        el.style.border = 'none'
        this.selectedBook = {}
        this.selection = false
      }
      else {
        var books = document.getElementsByClassName("book");
        books.forEach(element => {
          element.style.border = 'none'
        });
        el.style.border = '1px solid green'
        this.selectedBook = book
        this.selection = true
      }
    },
    handleSaveNew() {
      if (this.selectedBook.title && this.selectedBook.author && this.selectedBook.description) {
        this.createBook(this.selectedBook)
        .then(
          () => {
            this.selectedBook = {}
            this.getBooks()
          }
        )
      }
    },
    handleUpdate() {
      if (this.selectedBook.title && this.selectedBook.author && this.selectedBook.description) {
        this.updateBook(this.selectedBook)
        .then(
          () => {
            this.selectedBook = {}
            this.getBooks()
          }
        )
      }
    },
    handleDelete() {
      if (this.selectedBook.title && this.selectedBook.author && this.selectedBook.description) {
        this.deleteBook(this.selectedBook)
        .then(
          () => {
            this.selectedBook = {}
            this.getBooks()
          }
        )
      }
    },
  },
  created() {
    this.getBooks()
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
}

.col {
  flex: 1;
}

form {
  text-align: left;
}

label {
  margin: 5px
}

input {
  width: 95%;
  margin: 5px
}

button {
  margin: 5px;
}

.book {
  margin: 5px;
}

textarea {
  width: 95%;
  height: 100%;
  margin: 5px
}

#bookList {
  margin-top: 20px;
  border: 1px solid black;
  text-align: center;
}
</style>
