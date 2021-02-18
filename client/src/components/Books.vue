<template>
  <div>
    <h1>Book Application</h1>
    <div class="container">
      <div class="col">
        <form>
          <label for="title">Title</label><br>
          <input id="title"/>
          <label for="title">Author</label><br>
          <input id="title"/>
          <label for="title">Description</label><br>
          <textarea id="title"></textarea>
        </form>
      </div>
      <div id="bookList" class="col">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
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

textarea {
  width: 95%;
  height: 100%;
  margin: 5px
}

#bookList {
  margin-top: 20px;
  border: 1px solid black;
}
</style>
