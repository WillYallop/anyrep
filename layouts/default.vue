<template>
  <div>
    
    <MobileNavigation :navStatus="navStatus"/>
    <div class="global" :class="{ 'navActive' : navStatus }">
      <TopBar/>
      <SiteHeader
      @toggle-nav="toggleNav"/>
      <Nuxt />
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

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.navActive {
  position: absolute;
  width: 100%;
  left: 100% - 60px;
}

/* Global Styles */
.globWrap {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
}

/* Variables */
:root {
  --main-bg-color: #131313;
}

@media only screen and (max-width: 768px) {
  .globWrap {padding: 0 20px;}
}
</style>
