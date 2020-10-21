<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

    <!-- Banner -->
    <Banner
    :title="'Dont hesitate to contact or book with us!'"
    :title2="''"
    :subTitle="`If you are experiencing any problems with your domestic or commercial appliances then don't hesitate to contact us today!`"
    :buttons="[{id: 1, href: '/book/', text: 'Book Now'}, {id: 2, href: '/store/', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Why choose Anyrep Appliance Repairs?'"
    :subTitle="'Top rated Norwich Appliance repairs'"
    :body="'If you need you appliance repaired and you reside in the Norwich / Norfolk area, then dont hesitate to contact us! We repair a wide range of appliances, so no matter what you are looking for, we have you covered!'"/>

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
  head: {
    title: 'Contact Anyrep Appliance Repairs | Norwich',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Book online with Anyrep for same or next day appliance repairs. Providing our guaranteed repair services across the Norwich and Norfolk area at a competitive price.'
      },

    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://anyrep.co.uk/contact'
      }
    ]
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
