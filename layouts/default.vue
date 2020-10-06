<template>
  <div>

    <MobileNavigation/>
    <div class="pageGroup" :class="{ 'navActive' : navStatus }">
      <TopBar/>
      <Nuxt/>
    </div>
    <!-- <div v-if="$route.path != '/book' && $route.path != '/store' && $router.currentRoute.name != 'store-product-id'" class="siteBackground" :class="{ 'navActive' : navStatus }"><div class="sBgInner"></div></div> -->
    <button v-show="scrollPos > 200 || navStatus" v-on:click="$store.commit('toggleNavigation')" class="toggleNavBtn"><img src="../assets/images/hamburger.svg" alt="Toggle Navigation"></button>
  
    <div v-if="popUp & scrollPos < 200" class="sitePopup">
      <h4>Keeping Ahead of COVID-19</h4>
      <p>Rest assured Anyrep is taking all necessary precuations to counter the spread of COVID-19!</p>
      <button v-on:click="$store.commit('hideCovidPopUp')" class="closeBtn">close</button>
    </div>

  </div>
</template>

<script>
// Components
import TopBar from '@/components/Global/TopBar'
import MobileNavigation from '@/components/Global/MobileNavigation'
import SiteHeader from '@/components/Global/SiteHeader'

export default {
  data() {
    return {
      scrollPos: 0

    }
  },
  mounted() {
    
  },
  components: {
    TopBar,
    MobileNavigation,
    SiteHeader
  },
  computed: {
    navStatus() {
      return this.$store.state.navigation.navStatus
    },
    popUp() {
      return this.$store.state.navigation.covidPopup
    }
  },
  methods: {
    toggleNav() {
      
      this.navStatus = !this.navStatus
    },
    headerScrolled() {
      this.scrollPos = window.scrollY
    },
  },
  created() {
    if (process.client) { 
      window.addEventListener('scroll', this.headerScrolled);
    }
  },
  destroyed() {
    if (process.client) { 
      window.removeEventListener('scroll', this.headerScrolled);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

html {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
  -webkit-tap-highlight-color: transparent !important;
}
body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background-color: #F3F7FF;
}
textarea {font-family: 'Lato', sans-serif;}
textarea:focus {outline: none; border: none;}
input {font-family: 'Lato', sans-serif;}
input:focus {outline: none; border: none;}
button:focus {outline: none; border: none;}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* Page CSS logic */
.pageGroup {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: right 0.3s;
  
  z-index: 1;
}
.navActive {
  right: calc(100% - 80px);
} 

/* Global Styles */
.globWrap {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
}
    /* Btn Style */
.btnStyle1 {
  padding: 10px 40px;
  background-color: var(--main-accent-color);
  border-radius: 20px;
  border: none;
  color: #FFF;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.btnStyle1:hover {
  transform: scale(1.1);
}
.aStyle1 {
  margin-top: 20px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 37px;
  background-color: var(--main-accent-color);
  border-radius: 20px;
  border: none;
  color: #FFF;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.aStyle1:hover {
  transform: scale(1.1);
}
    /* Component Style */
.componentTitle {
  font-size: 20px;
  color: var(--title-text);
  width: 100%;
  max-width: 250px;
}
.componentBody {
  color: var(--body-text);
  width: 100%;
  max-width: 900px;
}
.compCon {
  width: 100%;
  display: flex;
  justify-content: center;
} 
.compWrap {
  display: flex;
}
.evenPad {
  padding-top: 80px;
  padding-bottom: 80px;
}
.oddPad {
  padding-top: 40px;
  padding-bottom: 40px;
}

/* Variables */
:root {
  --head-foot-bg-color: #090815;
  --main-bg-color: #110F26;
  --main-bg-box-color: #201C42;
  --main-accent-color: #EB0F0F;
  --secondary-bg-color: #0075C3;

  --even-bg-box-color: #FFF;
  --even-bg-highlight-text: #0075C3;
  
  --title-text: #FFF;
  --highlight-text: #028DE9;
  --body-text: #F3F3F3;
}

/* Site background */
.siteBackground {
  position: fixed;
  width: 100%;
  top: 0;
  height: calc(100% + 56px);
  bottom: -100px;
  right: 0;
  z-index: 0;
  background-image: url('../assets/images/siteBackground.jpeg');
  background-size: cover;
  background-position: center;
  transition: right 0.3s;
}
.siteBackground.navActive {
  right: calc(100% - 80px);
}
.sBgInner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -56px;
  background-color: var(--secondary-bg-color);
  opacity: 0.85;
}

/* Toggle Nav Btn */
.toggleNavBtn {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: var(--secondary-bg-color);
  z-index: 1020;
  cursor: pointer;
}
.toggleNavBtn img {
  height: 15px;
}

/* Site Popup */
.sitePopup {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #EB0F0F;
  height: auto;
  z-index: 1010;
  padding: 10px 20px;
}

.sitePopup h4 {
  font-size: 20px;
  color: #FFF;
  margin: 0 0 10px;
  padding: 0;
}
.sitePopup p {
  font-size: 16px;
  color: #FFF;
  margin: 0 0 5px;
  padding: 0;
}
.closeBtn {
  position: absolute;
  top: 10px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 14px;
  color: #FFF;
  cursor: pointer;
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .globWrap {padding: 0 20px;}
  .evenPad {padding-top: 60px;padding-bottom: 60px;}
  .oddPad {padding-top: 60px;padding-bottom: 60px;}
}
@media only screen and (min-width: 768.1px) {
  .toggleNavBtn {display: none;}
  .pageGroup.navActive {right: 0;}
  .siteBackground.navActive {right: 0;}
}
</style>
