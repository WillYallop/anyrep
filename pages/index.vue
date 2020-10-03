<template>
  <div>
    <!-- Banner -->
    <Banner
    :title="'Do you have a'"
    :title2="'faulty appliance?'"
    :subTitle="'Dont hesitate to contact us today and get it fixed, or visit our store to view our reconditioned appliances!'"
    :buttons="[{id: 1, href: '/contact', text: 'Contact Us'}, {id: 2, href: '/store', text: 'Store'}]"/>
    <SlantBottom/>
    <!-- Intro -->
    <PageIntro/>
  </div>
</template>

<script>
// Components
import SlantTop from '@/components/SlantsComponents/SlantTop'
import SlantBottom from '@/components/SlantsComponents/SlantBottom'
import Banner from '@/components/Global/Banner'
import PageIntro from '@/components/Page/PageIntro'

export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {
    SlantTop,
    SlantBottom,
    Banner,
    PageIntro
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
