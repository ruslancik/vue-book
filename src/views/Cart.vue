<template>
  <div class="cart">
    <div class="cart-items" :key="cartItem.id" v-for="cartItem in allCart">
        <div class="img-container">
            <img :src="cartItem.img" :alt="cartItem.title">
        </div>
        <div class="details">
            <p>{{cartItem.title}}</p>
            <p>{{cartItem.author}}</p>
            <p>{{cartItem.price}}$</p>
            <button @click="removeFromCart(cartItem.id)">Remove</button>
        </div>
    </div>
    <div class="cart-totals">Total: {{total}} $</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'Cart',   
    computed: {
        //...mapGetters(['allCart']),
        allCart(){
            return this.$store.getters.allCart;
        },
        total(){
            return this.$store.getters.cartTotal;
        }
    },
    methods : {
        ...mapActions(['removeFromCart']),
    }
};
</script>

<style lang="scss">
    .cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-items {
            width: 500px;
            padding-top: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

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

        .details {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-left: 20px;
        }

        .cart-totals {
            margin: 50px auto;
            width: 100%;
            color: red;
            font-size: 20px;

        }
    }
</style>
