<template>
  <div class="pageCon">

    <!-- Banner -->
    <Banner
    :title="'Get a quote on'"
    :title2="'your faulty appliance!'"
    :subTitle="`Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier!`"
    :buttons="[{id: 1, href: '/contact', text: 'Contact Us'}, {id: 2, href: '/store', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Why choose Anyrep Appliance Repairs?'"
    :subTitle="'Norfolks top rated Appliance repairs'"
    :body="'Here at Anyrep Domestic & Commercial Appliance Repairs, we offer our reliable services on the same day where possible. We have over 25 years of experience in the trade and all our services are carried out by our factory trained professionals. Whats more, all our work is guaranteed.'"/>

    <!-- Our Services Part 1 -->
    <SlantTop/>
    <OurSevicesP1/>
    <SlantBottom/>

    <!-- Testimonials -->
    <Testimonials/>

    <!-- Our Services Part 2 -->
    <SlantTop/>
    <OurSevicesP2/>
    <SlantBottom/>
  </div>
</template>

<script>
// Components
import SlantTop from '@/components/SlantsComponents/SlantTop'
import SlantBottom from '@/components/SlantsComponents/SlantBottom'
import Banner from '@/components/Global/Banner'
import PageIntro from '@/components/Page/PageIntro'
import Testimonials from '@/components/Page/Testimonials'
import OurSevicesP1 from '@/components/Page/Home/OurServicesP1'
import OurSevicesP2 from '@/components/Page/Home/OurServicesP2'

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
    PageIntro,
    OurSevicesP1,
    OurSevicesP2
  },
  methods: {

  }
}
</script>

<style scoped>
.pageCon {
  overflow: hidden;
}
</style>
