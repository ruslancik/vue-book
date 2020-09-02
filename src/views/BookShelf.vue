<template>
  <div class="shelf">
    <div class="shelf-items" :key="shelfItem.id" v-for="shelfItem in allShelf">
        <div class="img-container">
            <img :src="shelfItem.img" :alt="shelfItem.title">
        </div>
        <div class="details">
            <p> Title: {{shelfItem.title}}</p>
            <p> Author: {{shelfItem.author}}</p>
            <p> Desc: {{shelfItem.description}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'shelf',
    computed: {
        ...mapGetters(["allShelf"])
    },
};
</script>

<style lang="scss">
    .shelf {
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

        .shelf-totals {
            margin: 50px auto;
            width: 100%;
            color: red;
            font-size: 20px;
            
        }
    }
</style>
