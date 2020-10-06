<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

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

    <!-- Accordion -->
    <Accordion
    :accordionData="accordionData"/>

    <!-- Our Services Part 2 -->
    <SlantTop/>
    <OurSevicesP2/>
    <SlantBottom/>

    <!-- Testimonials -->
    <Testimonials/>

    <!-- Contact -->
    <SlantTop/>
    <Contact/>
    <SlantBottom/>

    <!-- Call To Action -->
    <CallToAction/>

    <!-- Footer -->
    <SlantTop/>
    <SiteFooter/>

  </div>
</template>

<script>
// Components
import SiteHeader from '@/components/Global/SiteHeader'
import SlantTop from '@/components/SlantsComponents/SlantTop'
import SlantBottom from '@/components/SlantsComponents/SlantBottom'
import Banner from '@/components/Page/Banner'
import PageIntro from '@/components/Page/PageIntro'
import OurSevicesP1 from '@/components/Page/Home/OurServicesP1'
import Accordion from '@/components/Page/accordion'
import OurSevicesP2 from '@/components/Page/Home/OurServicesP2'
import Testimonials from '@/components/Page/Testimonials'
import Contact from '@/components/Page/Contact'
import CallToAction from '@/components/Page/CallToAction'
import SiteFooter from '@/components/Global/SiteFooter'

export default {
  data() {
    return {
      accordionData: [
        { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.' },
        { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.', button: false },
        { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.', button: [ '/contact', 'Contact Us' ] },
        { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.', button: false }
      ]
    }
  },
  mounted() {

  },
  components: {
    SiteHeader,
    SlantTop,
    SlantBottom,
    Banner,
    PageIntro,
    OurSevicesP1,
    OurSevicesP2,
    Contact,
    CallToAction,
    SiteFooter
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
