<template>
  <div class="pageCon">

    <!-- Page Header -->
    <SiteHeader/>

    <!-- Banner -->
    <Banner
    :title="'Get a quote on'"
    :title2="'your faulty appliance!'"
    :subTitle="`Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier!`"
    :buttons="[{id: 1, href: '/contact/', text: 'Contact Us'}, {id: 2, href: '/store/', text: 'Store'}]"/>
    <SlantBottom/>

    <!-- Intro -->
    <PageIntro
    :title="'Why choose Anyrep Appliance Repairs?'"
    :subTitle="'The only solution your to appliance repair needs.'"
    :body="'Here at Anyrep Appliance Repairs we offer our reliable services on the same day where possible! So if you need your appliance repaired and you reside in the Norwich, Norfolk area then look no further. We have over 25 years of experience in the trade and our services are carried out by factory trained professionals. What’s more, all our work is guaranteed!'"/>

    <!-- Our Services Part 1 -->
    <SlantTop/>
    <Services
    :title="'Our services'"
    :subtitle="'Any appliance, we can repair it!'"
    :body="'Here is a comprehensive list of all the appliance repairs we offer. Rest assured any issue your appliance may have we can fix it like new, if not, we can offer a suitable replacement that doesnt break the bank.'"
    :town="'Norwich'"/>
    <SlantBottom/>

    <!-- Accordion -->
    <Accordion
    :accordionData="accordionData"/>

    <!-- Our Services Part 2 -->
    <SlantTop/>
    <BookToday 
    :title="'Book your appliance repair today!'"
    :subTitle="'Dont hesitate to get your machine up and running again!'"
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
import Services from '@/components/Page/Home/Services'
import Accordion from '@/components/Page/accordion'
import Testimonials from '@/components/Page/Testimonials'
import Contact from '@/components/Page/Contact'
import CallToAction from '@/components/Page/CallToAction'
import SiteFooter from '@/components/Global/SiteFooter'
import BookToday from '@/components/Page/Repairs/BookToday'

export default {
  data() {
    return {
      accordionData: [
        { id: 1, title: 'What area do you cover?', body: 'Anyrep Appliance repairs covers the Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don’t hesitate to contact us straight away.', button: false },
        { id: 2, title: 'How long will my repair take?', body: 'Anyrep always try’s its best to complete your repair on the same day where possible and on average our repairs last between 1 and 2 hours.', button: false },
        { id: 3, title: 'Will my machine need new parts?', body: 'Depending on the issue with your appliance you may not need parts, however if you do, we keep a stock of common parts so we can still ensure a speedy and professional repair service.', button: false },
        { id: 4, title: 'How does your pricing work?', body: 'For domestic appliance repairs we charge a fixed rate regardless of how long your appliance takes to repair, and then the costs of parts on top of that if you need them. There are no hidden fees!', button: false }
      ],
        bookBodyArray: [
        { id: 1, body: 'Rest assured our factory-trained technicians can fix any issue your appliance may be facing. So what are you waiting for? Book your repair today and get back up and running as soon as possible.' },
        { id: 2, body: `If you call us before 10 am, we'll be able to fix your appliance the same day. So, regardless of the work your appliance needs, call us.` },
      ]
    }
  },
  head: {
    title: 'Anyrep Appliance Repairs | Book online | Norwich',
    meta: [
      {
        name: 'description',
        content: 'Book online with Anyrep for same or next day appliance repairs. Providing our guaranteed repair services across the Norwich and Norfolk area at great prices.'
      },
      {
        property: 'og:url',
        content: 'https://anyrep.co.uk/'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Anyrep Appliance Repairs | Book online | Norwich'
      },
      {
        property: 'og:description',
        content: 'Book online with Anyrep for same or next day appliance repairs. Providing our guaranteed repair services across the Norwich and Norfolk area at great prices.'
      },
      {
        property: 'og:image',
        content: 'https://drive.google.com/uc?export=view&id=1Zuwa1GignayLp8G7HujEO7LAVv_gV0D3'
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
    Services,
    Contact,
    CallToAction,
    SiteFooter,
    BookToday
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
