<template>
    <div class="serviceCon compCon">
        <div class="compWrap globWrap oddPad">
            
            <div class="servicesRowContainer" :key="service.id" v-for="service in services"> 
                <div class="rowImageContainer" :style="{ backgroundImage: `url(${getImageUrl(service.image)})` }">
                    <div class="rowImageOverlay">
                        <img src="../../../assets/images/chevron-right.svg" :alt="`Got to ` + service.title + `'s page`" v-on:click="$router.push(service.btnHref)">
                    </div>
                </div>
                <div class="servicesRow"> 
                    <h4>{{service.title}}</h4>
                    <h5 class="subHeadingHighlight">{{service.highlightText}}</h5>
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
                { id: 1, image: 'washingMachine.jpg', title: 'Washing Machine Repairs', highlightText: 'Top rated Washing Machine repairs in Norwich.', body: 'Don’t let your broken washing machine leave you without clean clothes. When your washing machine won’t drain or spin, trust Anyrep Appliance Repairs to get your washing machine up and running at the earliest possible opportunity.', btnHref: '/repair/washing-machine', btnText: 'Find out more' },
                { id: 2, image: 'friedgeAndFreezer.jpg', title: 'Fridge & Freezer Repairs', highlightText: 'Top rated Fridge & Freezer repairs in Norwich', body: 'Keep your food from spoiling! If your freezer is faulty, don’t hesitate to call us. Our engineers are regularly trained to service all models, including freestanding, integrated and built in units from all leading manufacturers.', btnHref: '/repair/fridge-freezer', btnText: 'Find out more' },
                { id: 3, image: 'dishwasher.jpg', title: 'Dishwasher Repairs', highlightText: 'Top rated Dishwasher repairs in Norwich', body: 'If you’re in need of a prompt dishwasher repair in the Norwich, Norfolk region look no further. We understand how time consuming it is to wash your dishes by hand and so we are committed to providing you a quick repair at a competitive price.', btnHref: '/repair/dishwasher', btnText: 'Find out more' }
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
    background-position: center;
    background-size: cover;
    background-repeat: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rowImageContainer::after {
    content: '';
    display: block;
    padding-bottom: 60%;
}

.servicesRow {
    width: 100%;
    padding: 30px 30px 30px 60px;
    background-color: #201C42;
    border-radius: 20px;
    z-index: 0;
    position: relative;
}

.servicesRow h4 {
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
    width: 0px;
    height: 0px;
    background-color: rgba(2, 141, 233, 0.6);
    transition: 0.3s;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
}
.rowImageOverlay img {
    height: 20px;
    cursor: pointer;
}
.rowImageContainer:hover .rowImageOverlay {
    width: 100%;
    height: 100%;
    border-radius: 10px;
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