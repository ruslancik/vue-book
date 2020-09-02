<template>
  <div class="nav">
      <div class="img-container">
          <img src="https://www.imageupload.net/upload-image/2019/09/29/Lion-Logo-4.jpg" alt="logo">
      </div>
      <ul class="navlist">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/bookshelf">Bookshelf</router-link>
          </li>
      </ul>
      <div class="cart">
          <span><router-link to="/cart">Cart </router-link></span>
          <span class="cart-count">{{[cart.length]}}</span>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed : mapState(['cart'])
}
</script>

<style lang='scss'>
    .nav {
        background: wheat;
        width: 100%;
        height: 55px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        .img-container {
            display: inline-block;
            height: 52px;
            width: 52px;

            img {
                height: 52px;
                width: 52px;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .navlist {
            li {
                display: inline-block;
                list-style: none;
                margin-right: 30px;
                 a {
                    font-weight: bold;
                    color: #2c3e50;
                    text-decoration: none;

                    &.router-link-exact-active {
                    color: #42b983;
                    }
                }
            }
        }

        .cart {
            display: inline-block;
            a {
                text-decoration: none;
                color: blue;
            }
        }
    }
</style>