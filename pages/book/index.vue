<template>
    <div class="pageCon">

        <!-- Page Header -->
        <SiteHeader/>

        <!-- Banner -->
        <BookBanner
        :title="'Book your Appliance'"
        :title2="'repair with Anyrep!'"
        :subTitle="`Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier!`"
        :buttons="[{id: 1, href: '/contact/', text: 'Contact Us'}, {id: 2, href: '/store/', text: 'Store'}]"/>
        <SlantBottom/>

        <!-- Booking Intro -->
        <BookIntro/>

        <!-- Booking Form -->
        <BookForm/>

        <!-- Footer -->
        <SlantTop/>
        <SiteFooter/>

    </div>
</template>

<script>
// Componetns
import SiteHeader from '@/components/Global/SiteHeader'
import SlantTop from '@/components/SlantsComponents/SlantTop'
import SlantBottom from '@/components/SlantsComponents/SlantBottom'
import BookBanner from '@/components/Page/Book/BookBanner'
import BookIntro from '@/components/Page/Book/BookIntro'
import BookForm from '@/components/Page/Book/BookForm'
import SiteFooter from '@/components/Global/SiteFooter'

export default {
    data() {
        return {

        }
    },
    head: {
        title: 'Book online with Anyrep Appliance Repairs | Norwich',
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
                href: 'https://anyrep.co.uk/book'
            }
        ]
    },
    components: {
        SiteHeader,
        SlantTop,
        SlantBottom,
        BookBanner,
        BookIntro,
        BookForm,
        SiteFooter

    },
    methods: {

    }
}
</script>

<style scoped>
.pageCon {
  overflow: hidden;
  min-height: 100%;
}
</style>