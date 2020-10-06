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
    :subTitle="'The only solution your appliance repair needs.'"
    :body="'Here at Anyrep Appliance Repairs we offer our reliable services on the same day where possible! So if you need your appliance repaired and you reside in the Norwich, Norfolk area then look no further. We have over 25 years of experience in the trade and our services are carried out by factory trained professionals. What’s more, all our work is guaranteed!'"/>

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
        { id: 1, title: 'What area do you cover?', body: 'Anyrep Appliance repairs covers the Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don’t hesitate to contact us straight away.', button: false },
        { id: 2, title: 'How long will my repair take?', body: 'Anyrep always try’s its best to complete your repair on the same day where possible and on average our repairs last between 1 and 2 hours.', button: false },
        { id: 3, title: 'Will my machine need new parts?', body: 'Depending on the issue with your appliance you may not need parts, however if you do, we keep a stock of common parts so we can still ensure a speedy and professional repair service.', button: false },
        { id: 4, title: 'How does your pricing work?', body: 'For domestic appliance repairs we charge a fixed rate regardless of how long your appliance takes to repair, and then the costs of parts on top of that if you need them. There are no hidden fees!', button: false }
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
