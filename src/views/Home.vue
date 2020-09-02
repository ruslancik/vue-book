<template>
  
  <div class="home">
    <div class="filter">
      <label for="search">Search</label>
      <input v-model="filterText" type="text" name="search" id="search" placeholder="Search Books">
      <button @click="sortByName" class="name">Filter by Name</button>
      <button @click="sortByPrice" class="price">Filter by Price</button>
    </div>
    <div class="book-cart" :key="book.id" v-for="book in filteredFilms">
      <div @click="bookDetails(book)" class="img-container">
        <img :src="book.img" alt="random image" />
      </div>
      <p>{{ book.title }}</p>
      <p>$ {{ book.price }}</p>
      <button  v-if="book.price == 'Free'" @click="addShelf(book)">{{message}}</button>
      <button v-show="book.bought == false" v-else @click="addProduct(book)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data(){
    return {
      message: 'Add to BookShelf',
      filterText: '' }
  },
  computed: {
 ...mapGetters(["allBooks"]),
 ...mapGetters(["allCart"]),
 ...mapGetters(["allShelf"]),
 filteredFilms() {
      let filter = new RegExp(this.filterText, 'i')
      return this.allBooks.filter(el => el.title.match(filter))
    }
},
  methods: {
    bookDetails(item) {
      this.$router.push({ name: "book-detail", params: item });
    },
      addProduct(book) {
      //before adding to cart check if same item already exist or not
      const existedCartItem = this.allCart.find(item => item.id === book.id);
      if(existedCartItem) {
        alert('This item is already exist in shopping cart')
      } else {
        this.$store.dispatch('addToCart', book)
      }
		},
      addShelf(book) {
        if(book.bought == false){
         this.$store.dispatch('addToShelf', book);
         book.bought = true}
         if(book.bought == true){
         this.message = 'Already in Bookshelf'}     
    },
    sortByName() {
      this.allBooks.sort((a, b) => a.title > b.title ? 1 : -1);
    },
    sortByPrice() {
      this.allBooks.sort((a, b) => a.price < b.price ? 1 : -1);
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.filter {
  height: 100px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 20px;
    padding-right: 10px;
  }

  .name {
    margin: 0 20px;
  }
  .name,
  .price {
    padding:10px;
    border: none;
    background-color: coral;
    font-weight: bold;
    color: cornsilk;
  }

}

.book-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  color: white;
  height: 100%;
  width: 250px;
  padding: 10px;
  margin: 10px;

  .img-container {
    margin: 0 auto;
    width: 200px;
    height: 250px;

    img {
      width: 200px;
      height: 250px;
      object-fit: contain;
      cursor: pointer;
    }
  }
}
</style>
