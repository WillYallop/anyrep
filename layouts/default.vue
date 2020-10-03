<template>
  <div>
    
    <MobileNavigation :navStatus="navStatus"/>
    <div class="pageGroup" :class="{ 'navActive' : navStatus }">
      <TopBar/>
      <SiteHeader
      @toggle-nav="toggleNav"/>
      <Nuxt />
    </div>
    <div class="siteBackground" :class="{ 'navActive' : navStatus }"><div class="sBgInner"></div></div>

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
      navStatus: false,

    }
  },
  components: {
    TopBar,
    MobileNavigation,
    SiteHeader
  },
  methods: {
    toggleNav() {
      this.navStatus = !this.navStatus
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  width: 100%;
  overflow-x: hidden;
}
textarea {font-family: 'Source Sans Pro', sans-serif;}
textarea:focus {outline: none; border: none;}
input {font-family: 'Source Sans Pro', sans-serif;}
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
  font-size: 26px;
  color: #FFF;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
}
.componentBody {
  color: #FFF;
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
  --main-bg-color: #110F26;
  --main-accent-color: #EB0F0F;
  --secondary-bg-color: #0075C3;
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

@media only screen and (max-width: 768px) {
  .globWrap {padding: 0 20px;}
  .evenPad {padding-top: 60px;padding-bottom: 60px;}
  .oddPad {padding-top: 60px;padding-bottom: 60px;}
}
@media only screen and (min-width: 768px) {
  .pageGroup.navActive {right: 0;}
}
</style>
