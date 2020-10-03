<template>
  <div class="mobileNav" :class="{ 'active' : navStatus }">
      <h1>Hello</h1>
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
  props: {
    navStatus: Boolean

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
    background-color: #FFF;
    right: calc(-100% + 80px);
    width: calc(100% - 80px);
    transition: right 0.3s;
    box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}
.mobileNav.active {
    right: 0;
}

@media only screen and (min-width: 768px) {
    .mobileNav.active {right: calc(-100% + 80px);}
}
</style>
