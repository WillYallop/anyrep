<template>
    <div class="pageCon">
        <!-- Banner -->
        <BookBanner
        :title="'Book your Appliance'"
        :title2="'repair with Anyrep!'"
        :subTitle="`Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier!`"
        :buttons="[{id: 1, href: '/contact', text: 'Contact Us'}, {id: 2, href: '/store', text: 'Store'}]"/>
        <SlantBottom/>

        <BookIntro/>

        <BookForm/>

    </div>
</template>

<script>
// Componetns
import SlantTop from '@/components/SlantsComponents/SlantTop'
import SlantBottom from '@/components/SlantsComponents/SlantBottom'
import BookBanner from '@/components/Page/Book/BookBanner'
import BookIntro from '@/components/Page/Book/BookIntro'
import BookForm from '@/components/Page/Book/BookForm'

export default {
    data() {
        return {

        }
    },
    components: {
        SlantTop,
        SlantBottom,
        BookBanner,
        BookIntro,
        BookForm

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