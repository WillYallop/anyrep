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
  
}
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
  overflow-x: hidden;
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

/* Variables */
:root {
  --main-bg-color: #131313;
  --main-accent-color: #EB0F0F;
  --secondary-bg-color: #0192F2;
}

/* Site background */
.siteBackground {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  background-image: url('../assets/images/siteBackground.jpeg');
  transition: right 0.3s;
}
.siteBackground.navActive {
  right: calc(100% - 80px);
}
.sBgInner {
  height: 100%;
  width: 100%;
  background-color: var(--secondary-bg-color);
  opacity: 0.9;
}

@media only screen and (max-width: 768px) {
  .globWrap {padding: 0 20px;}
}
@media only screen and (min-width: 768px) {
  .pageGroup.navActive {right: 0;}
}
</style>
