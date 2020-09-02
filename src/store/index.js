import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";




const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      author: " J.R.R. Tolkien",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Novel",
      feature: false,
      price: 9.9,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
      bought: false
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Comic",
      feature: false,
      price: 3.9,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
      bought: false
    },
    {
      id: 3,
      title: "Gone with the Wind",
      author: "Margaret Mitchell",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Comic",
      feature: true,
      price: 5.5,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551144577l/18405._SY475_.jpg",
      bought: false
    },
    {
      id: 4,
      title: "The Shining",
      author: "Stephen King ",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "War",
      feature: false,
      price: 'Free',
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353277730l/11588.jpg",
      bought: false
    },
    {
      id: 5,
      title: "The Godfather",
      author: "Mario Puzo",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Horror",
      feature: true,
      price: 2.39,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394988109l/22034._SY475_.jpg",
      bought: false
    },
    {
      id: 6,
      title: "V for Vendetta",
      author: "Alan Moore ",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Horror",
      feature: true,
      price: 12.39,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343668985l/5805.jpg",
      bought: false
    },
    {
      id: 7,
      title: "Fight Club",
      author: "Chuck Palahniuk ",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Horror",
      feature: true,
      price: 17.39,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1357128997l/5759.jpg",
      bought: false
    },
    {
      id: 8,
      title: "Twelve Angry Men",
      author: "Reginald Rose",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Horror",
      feature: true,
      price: 4.39,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327910292l/29034.jpg",
      bought: false
    },
    {
      id: 9,
      title: "The Elephant Man",
      author: "Bernard Pomerance",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Horror",
      feature: true,
      price: 8.49,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391641544l/156377.jpg",
      bought: false
    },
    {
      id: 10,
      title: "The Great Escape",
      author: "Paul Brickhill",
      description: "lorem ipsum dolar sit amet lorem ipsum",
      category: "Horror",
      feature: true,
      price: 2.39,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1354746709l/107406.jpg",
      bought: false
    },
  ];

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: data,
    cart: [],
    shelf: []
  },
//  plugins: [createPersistedState()],
  getters: {
    allBooks: (state) => state.books,
    allCart: state => state.cart,
    allShelf : state => state.shelf,
    cartTotal : (state, getters) => {
      return getters.allCart.reduce((total, product) => total + product.price,0);
    }
   },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
      console.log(state.cart);
    },
    removeFromCart: (state, id) =>
    (state.cart = state.cart.filter((item) => item.id != id)),

    addToShelf(state, item) {
      state.shelf.push(item);
    },
  },
  actions: {
    addToCart({commit}, payload) {
      commit('addToCart', payload);
    },
    removeFromCart(store, id) {
      store.commit("removeFromCart", id);
    },
    addToShelf({commit}, payload) {
      commit('addToShelf', payload);
    },
  },
  modules: {},
});
