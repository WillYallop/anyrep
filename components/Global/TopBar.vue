<template>
  <div class="topBarCon">
      <div class="topbarWrap globWrap">
          <div class="leftCol">
            <a class="linkSt" href="https://www.facebook.com/anyrep/">Facebook</a>
            <nuxt-link class="linkSt" to="/book/">Book Now</nuxt-link>
          </div>
          <div class="rightCol"> 
            <div class="linkCon">
              <img class="phoneImg" src="../../assets/images/phoneIcon.svg" alt="Call us now!">
              <a href="tel:01603433083">01603 433083</a>
            </div>
            <div class="linkCon">
              <img class="phoneImg" src="../../assets/images/phoneIcon.svg" alt="Call us now!">
              <a href="tel:07525150999">07525 15099</a>
            </div>
            <div class="linkCon hideMobile">
              <img src="../../assets/images/emailIcon.svg" alt="Email us now!">
              <a href="mailto:anyrep@gmail.com">anyrep@gmail.com</a>
            </div>
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
    background-color: var(--head-foot-bg-color);
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

.rightCol {
  display: flex;
  align-items: center;
} 
.linkCon {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.linkCon img {
  height: 12px;
  margin-right: 10px;
}
.phoneImg {
  margin-top: -2px;
}
.linkCon a {
  color: #FFF;
  text-decoration: none;
}
.linkCon a:hover {
  text-decoration: underline;
}
.numbTwo {
  margin-left: 20px;
}
@media only screen and (max-width: 768px) {
  .topbarWrap {justify-content: flex-end;}
  .leftCol {display: none;}
  .hideMobile {display: none;}
  .linkCon:first-child {margin-left: 0;}
}
</style>
