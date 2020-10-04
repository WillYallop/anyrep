<template>
  <header class="headerCon">
      <div class="headerWrap globWrap">
            <img class="siteLogo" src="../../assets/images/logo.svg" alt="Anyrep Logo">
            <button class="navigationBtn" v-on:click="$emit('toggle-nav')"><img src="../../assets/images/hamburger.svg" alt=""></button>
            <ul class="headerUl">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/services">Services</nuxt-link></li>
                <li><nuxt-link to="/store">Store</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped>
.headerCon {
    width: 100%;
    padding: 30px 0;
    background-color: var(--main-bg-color);
    display: flex;
    justify-content: center;
}

.headerWrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.siteLogo {
    height: 60px;
    transition: 0.3s;
}
.headerUl {
    padding: 0;
}
.headerUl li {
    display: inline;
    margin-left: 20px;
}
.headerUl li:first-child {
    margin-left: 0;
}
.headerUl li a {
    font-size: 18px;
    color: #FFF;
    text-decoration: none;
    padding: 0;
}
.navigationBtn {
    display: none;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    border: none;
    justify-content: center;
    align-items: center;
}
.navigationBtn img {
    height: 15px;
}



@media only screen and (max-width: 768px) {
    /* Desktop */
    .headerUl {display: none;}
    .headerCon {padding: 30px 0; }
    /* Mobile */
    .navigationBtn {display: flex;}
}
</style>
