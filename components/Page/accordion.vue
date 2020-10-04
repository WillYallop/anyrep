<template>
    <div class="compCon evenPad">
        <div class="compWrap globWrap">
            <div class="accordionCol">
                <!-- Header -->
                <div class="accHeader">
                    <h4 class="componentTitle">Frequently asked questions</h4>
                    <h5 class="subHeadingHighlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </div>
                <!-- Accordion -->
                <div class="accCon">
                    <div class="row" :key="accordion.id" v-for="accordion in accordionData">
                        <div class="rowHead" v-on:click="activeAccordion = accordion.id">
                            <h4>{{accordion.title}}</h4>
                        </div>
                        <div class="rowBody" :class="{ 'active' : activeAccordion === accordion.id }">
                            <p>{{accordion.body}}</p>

                            <nuxt-link class="aStyle1" v-if="accordion.button" :to="accordion.button[0]">{{accordion.button[1]}}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="imageCol">
                <div class="imageCon">
                    <img src="../../assets/images/bannerImg.png" alt="Get an appliance repair quote norwich">
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeAccordion: 1
        }
    },
    props: {
        accordionData: Array

    }
}
</script>

<style scoped>
/* Accordion Col */
.accordionCol {
    width: 60%;
}
/* Header */
.accHeader {
    background-color: var(--main-bg-box-color);
    padding: 30px;
    border-radius: 20px;
    z-index: 1;
    position: relative;
}
.subHeadingHighlight {
    color: var(--highlight-text);
    font-size: 14px;
    margin: 10px 0 0;
}
/* Accordion */
.accCon {
    background-color: var(--main-bg-color);
    padding: 30px;
    border-radius: 20px;
    margin-top: 20px;
    z-index: 0;
    position: relative;
}
.accCon .row {
    background-color: var(--main-bg-box-color);
    margin-bottom: 10px;
    border-radius: 10px;
}
.rowHead {
    padding: 15px;
    cursor: pointer;
}
.rowHead h4 {
    color: var(--title-text);
}
.rowBody {
    padding: 10px 15px 15px;
    display: none;
}
.rowBody.active {
    display: block;
}
.rowBody p {
    color: var(--body-text);
}

/* Image Col */
.imageCol {
    width: 40%;
    position: relative;
}
.imageCon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
}
.imageCon img {
    height: 520px;
}

@media only screen and (max-width: 768px) {
    .imageCol {display: none;}
    .accordionCol {width: 100%;}
    .compWrap {flex-wrap: wrap;}
}
</style>