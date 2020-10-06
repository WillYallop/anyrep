<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

    <!-- Banner -->
    <Banner
    :title="'Get your Commercial Appliance repaired!'"
    :title2="''"
    :subTitle="`If you have a faulty Commercial Appliance, don't hesitate to call Anyrep today to get it fixed! Or view our store!`"
    :buttons="[{id: 1, href: '/book', text: 'Book Now'}, {id: 2, href: '/store', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Commercial Appliance Repairs!'"
    :subTitle="'Over 25 years of experience repairing Commercial Appliances.'"
    :body="`A sudden breakdown of a commercial appliance can bring a lot of inconvenience and lost profit to your business. That’s why you need experienced professionals who can work quickly and effectively. At Anyrep Appliance Repairs we have the experience and capacity to handle any simple or complex repairs quickly and successfully.`"/>

    <!-- What We Fix -->
    <SlantTop/>
    <WhatWeFix
    :title="'Commercial Appliances that we repair'"
    :subTitle="'There a multiple things that can go wrong, and we can fix them!'"
    :body="`We are qualified and experienced in repairing a wide range of Commercial Appliances, so no matter what you have you can rst assured that Anyrep has the technical knowledge to get you Appliance fixed so your business can resume its full operations.`"
    :issuesArray="issuesArray"
    :image="'commercialAppliances.jpg'"/> 
    <SlantBottom/>

    <!-- Accordion -->
    <Accordion
    :accordionData="accordionData"/>

    <!-- Book Today  -->
    <SlantTop/>
    <BookToday 
    :title="'Book your Commercial Appliance repair today'"
    :subTitle="'We serve clients throughout Norwich and the surrounding areas.'"
    :body="bookBodyArray"/>
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
import WhatWeFix from '@/components/Page/Repairs/WhatWeFix'
import Accordion from '@/components/Page/accordion'
import BookToday from '@/components/Page/Repairs/BookToday'
import Testimonials from '@/components/Page/Testimonials'
import Contact from '@/components/Page/Contact'
import CallToAction from '@/components/Page/CallToAction'
import SiteFooter from '@/components/Global/SiteFooter'

export default {
  data() {
    return {
        issuesArray: [
            { id: 1, issue: 'Refrigerators!' },
            { id: 2, issue: 'Ovens!' },
            { id: 3, issue: 'Fryers!' },
            { id: 4, issue: 'Cookers!' },
            { id: 5, issue: 'Freezers & Icemakers!' },
            { id: 6, issue: 'Washers!' },
            { id: 7, issue: 'Coolers!' }
        ],
        accordionData: [
        { id: 1, title: 'What area do you cover?', body: 'Anyrep Appliance repairs covers the Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don’t hesitate to contact us straight away.', button: false },
        { id: 2, title: 'How long will my repair take?', body: 'Anyrep always try’s its best to complete your repair on the same day where possible and on average our repairs last between 1 and 2 hours.', button: false },
        { id: 3, title: 'Will my machine need new parts?', body: 'Depending on the issue with your appliance you may not need parts, however if you do, we keep a stock of common parts so we can still ensure a speedy and professional repair service.', button: false },
        { id: 4, title: 'How does your pricing work?', body: 'For domestic appliance repairs we charge a fixed rate regardless of how long your appliance takes to repair, and then the costs of parts on top of that if you need them. There are no hidden fees!', button: false }
        ],
        bookBodyArray: [
          { id: 1, body: 'Our factory-trained technicians can repair Commercial Appliances of any make or model, and can also replace any damaged parts quickly.' },
          { id: 2, body: `If you call us before 10 am, we'll be able to fix your appliance the same day. So, regardless of the work your Commercial Appliance needs, call us.` },
        ]
    }
  },
  head: {
    title: 'Commercial Appliance Repairs | Anyrep | Norwich',
    meta: [
      {
        hid: 'description',
          name: 'description',
        content: 'Book your commercial appliance repair online for same or next day appliance repairs. We hold stock for common parts so we can get your machine repaired the same day!'
      }
    ],
  },
  mounted() {

  },
  components: {
    SiteHeader,
    SlantTop,
    SlantBottom,
    Banner,
    PageIntro,
    WhatWeFix,
    BookToday,
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
