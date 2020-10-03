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
                    <p class="subHeadingHighlight">{{service.highlightText}}</p>
                    <p class="rowBodyP">{{service.body}}</p>
                    <nuxt-link class="aStyle1" :to="service.btnHref">{{service.btnText}}</nuxt-link>
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
                { id: 1, image: 'washingMachine.jpg', title: 'Washing Machines', highlightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien. Suspendisse potenti. Cras ac vestibulum est, vitae mattis turpis. Ut a justo mi. Curabitur molestie lobortis vulputate.', btnHref: '/washing-machine-repairs', btnText: 'Find out more' },
                { id: 2, image: 'friedgeAndFreezer.jpg', title: 'Fridges & Freezers', highlightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien. Suspendisse potenti. Cras ac vestibulum est, vitae mattis turpis. Ut a justo mi. Curabitur molestie lobortis vulputate.', btnHref: '/fridge-and-freezer-repairs', btnText: 'Find out more' },
                { id: 3, image: 'dishwasher.jpg', title: 'Dishwashers', highlightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nibh feugiat metus bibendum, sed faucibus arcu tempus. Donec dictum, nisi at molestie interdum, ex nunc dictum dui, quis gravida orci nibh in sapien. Suspendisse potenti. Cras ac vestibulum est, vitae mattis turpis. Ut a justo mi. Curabitur molestie lobortis vulputate.', btnHref: '/dishwasher-repairs', btnText: 'Find out more' }
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
    color: #FFF;
    font-size: 20px;
}
.subHeadingHighlight {
    color: #028DE9;
    font-size: 14px;
    margin: 10px 0 20px;
}
.rowBodyP {
    color: #F0F0F0;
    font-size: 16px;
}


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
@media only screen and (max-width: 500px) {
    .aStyle1 {width: 100%;}
}
</style>