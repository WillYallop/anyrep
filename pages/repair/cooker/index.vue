<template>
  <div class="pageCon">

    <!-- Banner -->
    <Banner
    :title="'Need your Washing'"
    :title2="'Machine repaired?'"
    :subTitle="`Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier!`"
    :buttons="[{id: 1, href: '/contact', text: 'Contact Us'}, {id: 2, href: '/store', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Washing Machine Repairs!'"
    :subTitle="'Over 25 years of experience repairing washing machines.'"
    :body="`Don’t let your broken washing machine leave you without clean clothes. When your washing machine won’t drain or won't spin, trust Anyrep Domestic & Commercial Appliance Repairs to fix it at the earliest possible opportunity.`"/>

    <!-- What We Fix -->
    <SlantTop/>
    <WhatWeFix
    :title="'All types of washing machine problems resolved'"
    :subTitle="'Over 25 years of experience repairing washing machines.'"
    :body="`Don’t let your broken washing machine leave you without clean clothes. When your washing machine won’t drain or won't spin, trust Anyrep Domestic & Commercial Appliance Repairs to fix it at the earliest possible opportunity.`"
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
            { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.' },
            { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.', button: false },
            { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.', button: [ '/contact', 'Contact Us' ] },
            { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien.', button: false }
        ],
        bookBodyArray: [
            { id: 1, body: 'Our factory-trained technicians can repair washing machines of any make or model, and can also replace any damaged parts quickly.' },
            { id: 2, body: `If you call us before 10 am, we'll be able to fix your appliance the same day. So, whether you need repair work for your top load, front load, double door or single door washing machine, call us.` },
        ]
    }
  },
  mounted() {

  },
  components: {
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
