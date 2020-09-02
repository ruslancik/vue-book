<template>
  <div class="book-details">
      <div class="img-container">
          <img :src='details.img' alt="image-detail">
      </div>
      <div class="details">
          <p>Title:{{details.title}}</p>
          <p>Author: {{details.author}}</p>
          <p>Description: {{details.description}}</p>
          <p>Price: {{details.price}}</p>
          <button @click="addProduct(details)">Add To Card</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BookDetails',
    data(){
        return {
            details: this.$route.params
        }
    },

    computed: {
        allCart(){
            return this.$store.getters.allCart;
        }
    },
    methods: {
    addProduct(book) {
      //before adding to cart check if same item already exist or not
      const existedCartItem = this.allCart.find(item => item.id === book.id);
      if(existedCartItem) {
        alert('This item is already exist in shopping cart')
      } else {
        this.$store.dispatch('addToCart', book)
      }
		}
    },

    created(){
        //when page reload details disappear so, lets add to localstorage
        if(this.$route.params.id !== undefined) {
            localStorage.setItem("details", JSON.stringify(this.$route.params));
        }
    },

    mounted() {
        //get data from localstorage
        this.details = JSON.parse(localStorage.getItem("details"));
    }
}
</script>

<style lang='scss'>
    .book-details {
        width: 100%;
        display: flex;
        padding: 20px;
        justify-content: center;
        align-items: center;
        .img-container {
            width: 200px;
            height: 250px;

            img {
            width: 200px;
            height: 250px;
            object-fit: contain;
            }
         }

         .details {
             width: auto;
             display: flex;
             flex-direction: column;
             align-items: flex-start;
             justify-content: center;
             padding-left: 20px;
         }
    }
</style>