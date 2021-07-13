<template>
  <div class="mobileNav" :class="{ 'active' : navStatus }">
      <nav class="navCon">
        <nuxt-link @click.native="$store.commit('toggleNavigation')" class="navLink" to="/">Home <img src="../../assets/images/homeIcon.svg" alt=""></nuxt-link>
        <nuxt-link @click.native="$store.commit('toggleNavigation')" class="navLink" to="/book/">Book <img class="clipboardIcon" src="../../assets/images/clipboardIcon.svg" alt=""></nuxt-link>
        <nuxt-link @click.native="$store.commit('toggleNavigation')" class="navLink" to="/store/">Store <img src="../../assets/images/cartIcon.svg" alt=""></nuxt-link>
        <nuxt-link @click.native="$store.commit('toggleNavigation')" class="navLink" to="/contact/">Contact <img src="../../assets/images/phoneIcon.svg" alt=""></nuxt-link>
        <div v-on:click="dropdown = !dropdown" class="navLink" to="/">Services <img src="../../assets/images/chevronDownIcon.svg" alt=""></div>
        <div class="servicesDropdown" v-show="dropdown">
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/washing-machine-repairs/">Washing Machines Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/fridge-and-freezer-repairs/">Fridge / Freezer Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/dishwasher-repairs/">Dishwasher Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/tumble-dryer-repairs/">Tumble Dryer Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/cooker-repairs/">Cooker Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/hob-repairs/">Hob Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/commercial-appliance-repairs/">Commercial Appliance Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/extractor-hood-repairs/">Extractor Hood Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/hoover-repairs/">Hoover Repairs</nuxt-link>
          <nuxt-link @click.native="$store.commit('toggleNavigation')" to="/microwave-repairs/">Microwave Repairs</nuxt-link>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: true
    }
  },
  mounted() {

  },
  computed: {
    navStatus() {
      return this.$store.state.navigation.navStatus
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.mobileNav {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: var(--head-foot-bg-color);
  right: calc(-100% + 80px);
  width: calc(100% - 80px);
  transition: right 0.3s;
  box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.mobileNav.active {
  right: 0;
}

.navCon {
  padding: 20px 20px;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.navCon::-webkit-scrollbar {
  display: none;
}

.navLink {
  display: flex;
  width: 100%;
  background-color: #3D3C49;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
  justify-content: space-between;
  z-index: 1;
  position: relative;
}
.navLink img {
  width: 15px;
}
.clipboardIcon {
  height: 15px;
  width: auto;
}

.servicesDropdown {
  width: 100%;
  margin-top: -10px;
  z-index: 0;
  position: relative;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
}
.servicesDropdown a {
  display: flex;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 8px;
  font-size: 16px;
  text-decoration: none;
  color: #FFF;
  justify-content: space-between;
}
.servicesDropdown a:first-child {
  padding-top: 18px;
}

@media only screen and (min-width: 768.1px) {
  .mobileNav.active {right: calc(-100% + 80px);}
}
</style>
