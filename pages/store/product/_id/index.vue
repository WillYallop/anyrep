<template>
    <div class="pageCon">
        <!-- Page Header -->
        <SiteHeader/>

        <!-- Banner -->
        <StoreBanner
        :title="'We sell refurbished and new appliances!'"
        :title2="''"
        :subTitle="`If you are looking for a refurbished appliance that works like new, but doesn't break the bank. Then look no further!`"
        :buttons="[{id: 1, href: '/contact', text: 'Contact Us'}, {id: 2, href: '/store', text: 'Store'}]"/>
        <SlantBottom/>

        <!-- Info Bar -->
        <ProductInfo/>

        <!-- Product -->
        <Product/>

        <!-- Footer -->
        <SlantTop/>
        <SiteFooter/>
    </div>
</template>

<script>
// Components
import SiteHeader from '@/components/Global/SiteHeader'
import Banner from '@/components/Page/Banner'
import Product from '@/components/Page/Product/Product'
import SiteFooter from '@/components/Global/SiteFooter'
import SlantTop from '@/components/SlantsComponents/SlantTop'
import SlantBottom from '@/components/SlantsComponents/SlantBottom'
import ProductInfo from '@/components/Page/Product/ProductInfo'

export default {
    data() {
        return {

        }
    },
    components: {
        SiteHeader,
        Banner,
        Product,
        SiteFooter,
        SlantTop,
        SlantBottom,
        ProductInfo

    }
}
</script>

<style scoped>
.pageCon {
  overflow: hidden;
}
</style>