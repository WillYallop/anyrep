<template>
  <div class="topBarCon">
      <div class="topbarWrap globWrap">
          <div class="leftCol">
                <a class="linkSt" href="https://www.facebook.com/anyrep/" target="_blank">Facebook</a>
                <nuxt-link class="linkSt" to="/contact">Contact</nuxt-link>
          </div>
       
      </div>
  </div>
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
.topBarCon {
    width: 100%;
    height: 30px;
    background-color: #000000;
    display: flex;
    justify-content: center;
}
.topbarWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.linkSt {
    color: #FFF;
    text-decoration: none;
    margin-right: 10px;
}
.linkSt:hover {
    text-decoration: underline;
}

</style>
