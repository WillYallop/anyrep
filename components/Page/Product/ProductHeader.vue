<template>
  <header class="headerCon">
      <div class="headerWrap globWrap">
            <nuxt-link to="/" class="siteLogo"><img class="siteLogo" src="../../../assets/images/logo.svg" alt="Anyrep Logo"></nuxt-link>
            <button class="navigationBtn" v-on:click="$store.commit('toggleNavigation')"><img src="../../../assets/images/hamburger.svg" alt=""></button>
            <ul class="headerUl">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/book/">Book</nuxt-link></li>
                <li @mouseover="dropdown = true" v-on:click="dropdown = !dropdown">
                    Services
                    <div class="dropdownContainer" v-show="dropdown" @mouseleave="dropdown = false">
                        <nuxt-link to="/washing-machine-repairs/">Washing Machines Repairs</nuxt-link>
                        <nuxt-link to="/fridge-and-freezer-repairs/">Fridge / Freezer Repairs</nuxt-link>
                        <nuxt-link to="/dishwasher-repairs/">Dishwasher Repairs</nuxt-link>
                        <nuxt-link to="/tumbledryer-repairs/">Tumbledryer Repairs</nuxt-link>
                        <nuxt-link to="/cooker-repairs/">Cooker Repairs</nuxt-link>
                        <nuxt-link to="/hob-repairs/">Hob Repairs</nuxt-link>
                        <nuxt-link to="/commercial-appliance-repairs/">Commercial Appliance Repairs</nuxt-link>
                        <nuxt-link to="/extractor-hood-repairs/">Extractor Hood Repairs</nuxt-link>
                        <nuxt-link to="/hoover-repairs/">Hoover Repairs</nuxt-link>
                        <nuxt-link to="/microwave-repairs/">Microwave Repairs</nuxt-link>
                    </div>
                </li>
                <li><nuxt-link to="/store/">Store</nuxt-link></li>
                <li><nuxt-link to="/contact/">Contact</nuxt-link></li>
            </ul>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false
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
    padding: 10px 0;
    background-color: var(--main-bg-color);
    display: flex;
    justify-content: center;
}

.headerWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.siteLogo {
    height: 30px;
    transition: 0.3s;
}
.headerUl {
    padding: 0;
    user-select:none;
}
.headerUl li {
    display: inline;
    margin-left: 20px;
    font-size: 18px;
    color: #FFF;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
    position: relative;
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

/* Dropdown */
.dropdownContainer {
    position: absolute;
    top: 30px;
    right: 0;
    width: 300px;
    z-index: 100;
    background-color: var(--secondary-bg-color);
    padding: 10px 0;
    border-radius: 10px;
}
.dropdownContainer a {
    display: block;
    width: 100%;
    font-size: 16px !important;
    color: #FFF;
    padding: 5px 10px !important;
}
.dropdownContainer a:hover {
    background-color: #0269AE;
}



@media only screen and (max-width: 768px) {
    /* Desktop */
    .headerUl {display: none;}
    .headerCon {padding: 10px 0; }
    /* Mobile */
    .navigationBtn {display: flex;}
}
</style>
