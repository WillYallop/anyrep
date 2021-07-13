<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

    <!-- Banner -->
    <Banner
    :title="'We can repair any Tumble Dryer brand!'"
    :title2="''"
    :subTitle="`If you have a faulty Tumble Dryer, don't hesitate to call Anyrep today to get it fixed! Or view our store for an instant solution!`"
    :buttons="[{id: 1, href: '/book/', text: 'Book Now'}, {id: 2, href: '/store/', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Tumble Dryer Repairs!'"
    :subTitle="'Over 25 years of experience repairing Tumble Dryers.'"
    :body="`Having problems with your tumble dryer? Anyrep Appliance Repairs use quality diagnostic equipment and methods to determine the fault and provide a prompt and professional tumble dryer repair service, ensuring a long terms solution.`"/>

    <!-- What We Fix -->
    <SlantTop/>
    <WhatWeFix
    :title="'All types of Tumble Dryer problems resolved'"
    :subTitle="'There a multiple things that can go wrong, and we can fix them!'"
    :body="`If you are experiencing any of the issues seen bellow, or even something different. We assure our services are for you. We keep stock of common parts that go wrong for many brands of Tumble Dryers, and if we dont have the part you need, we have a supply network that can get us the parts needed within a couple days.`"
    :issuesArray="issuesArray"
    :image="'tumbledyrer.jpg'"/> 
    <SlantBottom/>

    <!-- Accordion -->
    <Accordion
    :accordionData="accordionData"/>

    <!-- Book Today  -->
    <SlantTop/>
    <BookToday 
    :title="'Book your Tumble Dryer repair today'"
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
            { id: 1, issue: 'Noisy operation?' },
            { id: 2, issue: 'No drum action?' },
            { id: 3, issue: 'Clothes not dry?' },
            { id: 4, issue: 'Clothes are steaming?' },
            { id: 5, issue: 'Tripping electrics?' },
            { id: 6, issue: 'Timer not working?' },
            { id: 7, issue: 'Snapped belt?' },
            { id: 8, issue: 'Leaking water?' }
        ],
        accordionData: [
        { id: 1, title: 'What area do you cover?', body: 'Anyrep Appliance repairs covers the Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don’t hesitate to contact us straight away.', button: false },
        { id: 2, title: 'How long will my repair take?', body: 'Anyrep always try’s its best to complete your repair on the same day where possible and on average our repairs last between 1 and 2 hours.', button: false },
        { id: 3, title: 'Will my machine need new parts?', body: 'Depending on the issue with your appliance you may not need parts, however if you do, we keep a stock of common parts so we can still ensure a speedy and professional repair service.', button: false },
        { id: 4, title: 'How does your pricing work?', body: 'For domestic appliance repairs we charge a fixed rate regardless of how long your appliance takes to repair, and then the costs of parts on top of that if you need them. There are no hidden fees!', button: false }
        ],
        bookBodyArray: [
          { id: 1, body: 'Our factory-trained technicians can repair Tumble Dryers of any make or model, and can also replace any damaged parts quickly.' },
          { id: 2, body: `If you call us before 10 am, we'll be able to fix your appliance the same day. So, regardless of the work your Tumble Dryer needs, call us.` },
        ]
    }
  },
  head: {
    title: 'Tumble Dryer Repairs Norwich | Anyrep',
    meta: [
      {
        hid: 'description',
          name: 'description',
        content: 'Book your tumble dryer repair online for same or next day appliance repairs. We hold stock for common parts so we can get your machine repaired the same day!'
      },
      {
          hid: "og:url",
          property: 'og:url',
          content: 'https://anyrep.co.uk/tumble-dryer-repairs/'
      },
      {
          hid: "og:type",
          property: 'og:type',
          content: 'website'
      },
      {
          hid: "og:title",
          property: 'og:title',
          content: 'Tumble Dryer Repairs Norwich | Anyrep'
      },
      {
          hid: "og:description",
          property: 'og:description',
          content: 'Book your tumble dryer repair online for same or next day appliance repairs. We hold stock for common parts so we can get your machine repaired the same day!'
      },
      {
          hid: "og:image",
          property: 'og:image',
          content: 'https://drive.google.com/uc?export=view&id=1Zuwa1GignayLp8G7HujEO7LAVv_gV0D3'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://anyrep.co.uk/tumble-dryer-repairs/'
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
