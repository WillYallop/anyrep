<template>
    <div class="serviceCon compCon">
        <div class="compWrap globWrap oddPad">

            <div class="servicesRowContainer" :key="service.id" v-for="service in services"> 
                <div class="rowImageContainer">
                    <img :src="getImageUrl(service.image)" :alt="service.title + 'image'">
                    <div class="rowImageOverlay">
                        <img src="../../../assets/images/chevron-right.svg" :alt="`Got to ` + service.title + `'s page`" v-on:click="$router.push(service.btnHref)">
                    </div>
                </div>
                <div class="servicesRow"> 
                    <h3>{{service.title}}</h3>
                    <h4 class="subHeadingHighlight">{{service.highlightText}}</h4>
                    <p class="rowBodyP">{{service.body}}</p>
                    <div class="linkContainer">
                        <nuxt-link class="aStyle1" :to="service.btnHref">{{service.btnText}}</nuxt-link>
                        <nuxt-link class="aStyle1 aStyle2" to="/book" >Book Now</nuxt-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                { id: 4, image: 'tumbledyrer.jpg', title: 'Tumble Dryer Repairs', highlightText: 'Top rated Tumble Dryer repairs in Norwich', body: 'Having problems with your tumble dryer? Anyrep Appliance Repairs use quality diagnostic equipment and methods to determine the fault and provide a prompt and professional tumble dryer repair service, ensuring a long terms solution.', btnHref: '/tumble-dryer-repairs', btnText: 'Find out more' },
                { id: 5, image: 'cooker.jpg', title: 'Cooker Repairs', highlightText: 'Top rated Cooker repairs in Norwich', body: 'When your cooker breaks down, the impact is drastic and so we ensure Anyrep will do all it can to get your cooker up and running like new. Most repairs are completed on the first visit and on the same day where possible.', btnHref: '/cooker-repairs', btnText: 'Find out more' },
                { id: 6, image: 'commercialAppliances.jpg', title: 'Commercial Appliance Repairs', highlightText: 'Top rated Commercial Appliance repairs in Norwich', body: 'A sudden breakdown of a commercial appliance can bring a lot of inconvenience and lost profit to your business. That’s why you need experienced professionals who can work quickly and effectively. At Anyrep Appliance Repairs we have the experience and capacity to handle any simple or complex repairs quickly and successfully.', btnHref: '/commercial-appliance-repairs', btnText: 'Find out more' }
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            var images = require.context('../../../assets/images/', false)
            return images('./' + name)
        },
    }
}
</script>

<style scoped>
.serviceCon {
    width: 100%;
    display: flex; 
    background-color: var(--main-bg-color);
}
.compWrap {
    flex-wrap: wrap;
}


.servicesRowContainer {
    display: flex;
    width: 90%;
    align-items: center;
    margin-top: 40px !important;
}
.servicesRowContainer:nth-child(even) {
    margin-left: 10%;
}
.servicesRowContainer:first-child {
    margin-top: 0 !important;
}
.rowImageContainer {
    height: 150px;
    width: 150px;
    min-width: 150px;
    margin-right: -30px;
    z-index: 1;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #CEF7DD;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
}
.rowImageContainer::after {
    content: '';
    display: block;
    padding-bottom: 60%;
}
.rowImageContainer img {
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 10px;
    position: relative;

}

.servicesRow {
    width: 100%;
    padding: 30px 30px 30px 60px;
    background-color: #201C42;
    border-radius: 20px;
    z-index: 0;
    position: relative;
}

.servicesRow h3 {
    color: var(--title-text);
    font-size: 20px;
}
.subHeadingHighlight {
    color: var(--highlight-text);
    font-size: 14px;
    margin: 10px 0 20px;
}
.linkContainer {
    display: flex;
    flex-wrap: wrap;
}
.rowBodyP {
    color: var(--body-text);;
    font-size: 16px;
}
.aStyle2 {margin-left: 10px;}


/* hover */
.rowImageOverlay {
    width: 100%;
    height: 100%;
    background-color: rgba(2, 141, 233, 0.6);
    transition: 0.3s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
.rowImageOverlay img {
    height: 20px;
    cursor: pointer;
}
.rowImageContainer:hover .rowImageOverlay {
    opacity: 1;
}

@media only screen and (max-width: 620px) {
    .servicesRowContainer {flex-direction: column; width: 100%; margin-left: 0 !important;}
    .rowImageContainer {margin: 0 0 -60px; width: 80%; height: auto; }
    .servicesRow {padding: 90px 30px 30px;}
}
@media only screen and (max-width: 768px) {
    .aStyle1 {width: 100%;}
    .aStyle2 {margin-top: 10px; margin-left: 0;}
}
</style>