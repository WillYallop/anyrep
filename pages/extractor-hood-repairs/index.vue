<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

    <!-- Banner -->
    <Banner
    :title="'We can repair any Extractor Hood brand!'"
    :title2="''"
    :subTitle="`If you have a faulty Extractor Hood, don't hesitate to call Anyrep today to get it fixed! Or view our store for an instant solution!`"
    :buttons="[{id: 1, href: '/book/', text: 'Book Now'}, {id: 2, href: '/store/', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Extractor Hood Repairs!'"
    :subTitle="'Over 25 years of experience repairing Extractor Hoods.'"
    :body="`When your Extractor Hood breaks down, the impact is drastic and so we ensure Anyrep will do all it can to get your Extractor Hood up and running like new. Most repairs are completed on the first visit and on the same day where possible.`"/>

    <!-- What We Fix -->
    <SlantTop/>
    <WhatWeFix
    :title="'All types of Extractor Hood problems resolved'"
    :subTitle="'There a multiple things that can go wrong, and we can fix them!'"
    :body="`If you are experiencing any of the issues seen bellow, or even something different. We assure our services are for you. We keep stock of common parts that go wrong for many brands of Extractor Hoods, and if we dont have the part you need, we have a supply network that can get us the parts needed within a couple days.`"
    :issuesArray="issuesArray"
    :image="'extractorHood.jpg'"/> 
    <SlantBottom/>

    <!-- Accordion -->
    <Accordion
    :accordionData="accordionData"/>

    <!-- Book Today  -->
    <SlantTop/>
    <BookToday 
    :title="'Book your Extractor Hood repair today'"
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
            { id: 1, issue: 'Lights not working?' },
            { id: 2, issue: 'Not extracting?' },
            { id: 3, issue: 'Broken fan motor?' },
            { id: 4, issue: 'Damaged exterior?' },
            { id: 5, issue: 'Old filter?' },
            { id: 6, issue: 'Tripping electrics?' },
            { id: 7, issue: 'Loud operation?' }
            
        ],
        accordionData: [
        { id: 1, title: 'What area do you cover?', body: 'Anyrep Appliance repairs covers the Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don’t hesitate to contact us straight away.', button: false },
        { id: 2, title: 'How long will my repair take?', body: 'Anyrep always try’s its best to complete your repair on the same day where possible and on average our repairs last between 1 and 2 hours.', button: false },
        { id: 3, title: 'Will my machine need new parts?', body: 'Depending on the issue with your appliance you may not need parts, however if you do, we keep a stock of common parts so we can still ensure a speedy and professional repair service.', button: false },
        { id: 4, title: 'How does your pricing work?', body: 'For domestic appliance repairs we charge a fixed rate regardless of how long your appliance takes to repair, and then the costs of parts on top of that if you need them. There are no hidden fees!', button: false }
        ],
        bookBodyArray: [
          { id: 1, body: 'Our factory-trained technicians can repair Extractor Hoods of any make or model, and can also replace any damaged parts quickly.' },
          { id: 2, body: `If you call us before 10 am, we'll be able to fix your appliance the same day. So, regardless of the work your Extractor Hood needs, call us.` },
        ]
    }
  },
  head: {
    title: 'Extractor Hood Repairs Norwich | Anyrep',
    meta: [
      {
        hid: 'description',
          name: 'description',
        content: 'Book your extractor hood repair online for same or next day appliance repairs. We hold stock for common parts so we can get your machine repaired the same day!'
      },
      {
          hid: "og:url",
          property: 'og:url',
          content: 'https://anyrep.co.uk/extractor-hood-repairs/'
      },
      {
          hid: "og:type",
          property: 'og:type',
          content: 'website'
      },
      {
          hid: "og:title",
          property: 'og:title',
          content: 'Extractor Hood Repairs Norwich | Anyrep'
      },
      {
          hid: "og:description",
          property: 'og:description',
          content: 'Book your extractor hood repair online for same or next day appliance repairs. We hold stock for common parts so we can get your machine repaired the same day!'
      },
      {
          hid: "og:image",
          property: 'og:image',
          content: 'https://anyrep.co.uk/_nuxt/img/logo.ed8952e.svg'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://anyrep.co.uk/extractor-hood-repairs/'
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
