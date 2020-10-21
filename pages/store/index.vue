<template>
    <div class="pageCon">

        <!-- Page Header -->
        <SiteHeader/>

        <!-- Banner -->
        <StoreBanner
        :title="'We sell refurbished and new appliances!'"
        :title2="''"
        :subTitle="`If you are looking for a refurbished appliance that works like new, but doesn't break the bank. Then look no further!`"
        :buttons="[{id: 1, href: '/contact/', text: 'Contact Us'}, {id: 2, href: '/book/', text: 'Book Now'}]"/>
        <SlantBottom/>
        
        <!-- Products -->
        <Products/>

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
import StoreBanner from '@/components/Page/Store/StoreBanner'
import SiteFooter from '@/components/Global/SiteFooter'
import StoreIntro from '@/components/Page/Store/StoreIntro'
import Products from '@/components/Page/Store/Products'

export default {
    data() {
        return {

        }
    },
    head: {
        title: 'New & Refurbished Appliances | Anyrep | Norwich',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'If you are looking for a new or refurbished appliance look no further. We have a range of price competetive appliances.'
            },
            {
                hid: "og:url",
                property: 'og:url',
                content: 'https://anyrep.co.uk/store/'
            },
            {
                hid: "og:type",
                property: 'og:type',
                content: 'website'
            },
            {
                hid: "og:title",
                property: 'og:title',
                content: 'New & Refurbished Appliances | Anyrep | Norwich'
            },
            {
                hid: "og:description",
                property: 'og:description',
                content: 'If you are looking for a new or refurbished appliance look no further. We have a range of price competetive appliances.'
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
                href: 'https://anyrep.co.uk/store/'
            }
        ]
    },
    components: {
        SiteHeader,
        SlantTop,
        SlantBottom,
        StoreBanner,
        StoreIntro,
        SiteFooter,
        Products

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