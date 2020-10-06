<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

    <!-- Banner -->
    <Banner
    :title="'Need your Washing'"
    :title2="'Machine repaired?'"
    :subTitle="`Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier!`"
    :buttons="[{id: 1, href: '/book', text: 'Book Now'}, {id: 2, href: '/store', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Washing Machine Repairs!'"
    :subTitle="'Over 25 years of experience repairing washing machines.'"
    :body="`Don’t let your broken washing machine leave you without clean clothes. When your washing machine won’t drain or spin, trust Anyrep Appliance Repairs to get your washing machine up and running at the earliest possible opportunity.`"/>

    <!-- What We Fix -->
    <SlantTop/>
    <WhatWeFix
    :title="'All types of washing machine problems resolved'"
    :subTitle="'There a multiple things that can go wrong, and we can fix them!'"
    :body="`If you are experiencing any of the issues seen bellow, or even something different. We assure our services are for you. We keep stock of common parts that go wrong for many brands of washing machines, and if we dont have the part you need, we have a supply network that can get us the parts needed within a couple days.`"
    :issuesArray="issuesArray"
    :image="'washingMachine.jpg'"/> 
    <SlantBottom/>

    <!-- Accordion -->
    <Accordion
    :accordionData="accordionData"/>

    <!-- Book Today  -->
    <SlantTop/>
    <BookToday 
    :title="'Book your washing machine repair today'"
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
            { id: 1, issue: 'Blocked Pumps?' },
            { id: 2, issue: 'Failing to spin?' },
            { id: 3, issue: 'Not draining?' },
            { id: 4, issue: 'Stuck door?' },
            { id: 5, issue: 'Noisy drum?' },
            { id: 6, issue: 'Water intake issues?' },
            { id: 7, issue: 'Water leaks?' },
            { id: 8, issue: 'Torn door seal?' }
        ],
        accordionData: [
        { id: 1, title: 'What area do you cover?', body: 'Anyrep Appliance repairs covers the Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don’t hesitate to contact us straight away.', button: false },
        { id: 2, title: 'How long will my repair take?', body: 'Anyrep always try’s its best to complete your repair on the same day where possible and on average our repairs last between 1 and 2 hours.', button: false },
        { id: 3, title: 'Will my machine need new parts?', body: 'Depending on the issue with your appliance you may not need parts, however if you do, we keep a stock of common parts so we can still ensure a speedy and professional repair service.', button: false },
        { id: 4, title: 'How does your pricing work?', body: 'For domestic appliance repairs we charge a fixed rate regardless of how long your appliance takes to repair, and then the costs of parts on top of that if you need them. There are no hidden fees!', button: false }
        ],
        bookBodyArray: [
          { id: 1, body: 'Our factory-trained technicians can repair washing machines of any make or model, and can also replace any damaged parts quickly.' },
          { id: 2, body: `If you call us before 10 am, we'll be able to fix your appliance the same day. So, whether you need repair work for your top load, front load, double door or single door washing machine, call us.` },
        ]
    }
  },
  head: {
    title: 'Washing Machine Repairs | Anyrep | Norwich',
    meta: [
      {
        hid: 'description',
          name: 'description',
        content: 'Book your washing machine repair online for same or next day appliance repairs. We hold stock for common parts so we can get your machine repaired the same day!'
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
