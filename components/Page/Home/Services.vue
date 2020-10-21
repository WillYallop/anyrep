<template>
    <div class="serviceCon compCon">
        <div class="globWrap oddPad">

            <!-- Textarea -->
            <div class="textarea">
                <h2 class="componentTitle">{{title}}</h2>
                <p class="subHeadingHighlight">{{subtitle}}</p>
                <p class="componentBody">{{body}}</p>
            </div>
            <!-- Service Cards -->
            <div class="swiperContainer">
                <div class="swiperOverlay"></div>
                <!-- Swiper Container -->
                <div class="swipeCon" v-swiper:mySwiper="swiperOptions">
                    <div class="swiper-wrapper">
                        <!-- Washing Machine Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/washingMachine.jpg" alt="Washing Machine Repairs">
                                    <p class="cardTitleP">Washing Machine Repair {{town}}</p>
                                    <p class="cardBodyP">Blocked pumps, failing to spin, not draining, stuck door, leaking, noisy drum, broken seal. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/washing-machine-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- Fridge Freezer Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/friedgeAndFreezer.jpg" alt="Fridge Freezer Repairs">
                                    <p class="cardTitleP">Fridge Freezer Repair {{town}}</p>
                                    <p class="cardBodyP">Not making ice, ice on back wall, leaking, condensation inside, not cold, no light. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/fridge-and-freezer-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- Dishwasher Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/dishwasher.jpg" alt="Dishwasher Repairs">
                                    <p class="cardTitleP">Dishwasher Repair {{town}}</p>
                                    <p class="cardBodyP">Blocked pumps, hinge stuck, broken panels, leaking, dishes not clean, load noises. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/dishwasher-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- Tumble Dryer Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/tumbledyrer.jpg" alt="Tumble Dryer Repairs">
                                    <p class="cardTitleP">Tumble Dryer Repair {{town}}</p>
                                    <p class="cardBodyP">Noisy operation, no drum action, clothes not dry, snapped belt, leaking, timer not working. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/tumble-dryer-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- Cooker Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/cooker.jpg" alt="Cooker Repairs">
                                    <p class="cardTitleP">Cooker Repair {{town}}</p>
                                    <p class="cardBodyP">Not heating, broken door, broken seal, broken timer, smells of gas, broken thermostat. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/tumble-dryer-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>       
                        <!-- Hob Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/hob.jpg" alt="Hob Repairs">
                                    <p class="cardTitleP">Hob Repair {{town}}</p>
                                    <p class="cardBodyP">Gas not lighting, gas not flowing, broken element, cracked glass, not getting hot. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/hob-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>     
                        <!-- Extractor Hood Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/extractorHood.jpg" alt="Extractor Hood Repairs">
                                    <p class="cardTitleP">Extractor Repair {{town}}</p>
                                    <p class="cardBodyP">Lights not working, not extracting, broken fan motor, damaged exterior, old filter. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/extractor-hood-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>                  
                        <!-- Commercial Appliance Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/commercialAppliances.jpg" alt="Commercial Appliance Repairs">
                                    <p class="cardTitleP">Commercial Repair {{town}}</p>
                                    <p class="cardBodyP">Refrigerators, Ovens, Fryers, Cookers, Freezers & Icemakers, Washers, Coolers. We fix the all!</p>
                                    <nuxt-link class="aStyle1" to="/commercial-appliance-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- Microwave Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/microwave.jpg" alt="Microwave Repairs">
                                    <p class="cardTitleP">Microwave Repair {{town}}</p>
                                    <p class="cardBodyP">Not running, not heating, tray not spinning, exhaust fan broken, unusual noise. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/microwave-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- Hoover Card -->
                        <div class="serviceCard swiper-slide">
                            <div class="cardInner">
                                <div class="cardBodyCon">
                                    <img class="cardImg" src="../../../assets/images/hoover.jpg" alt="Hoover Repairs">
                                    <p class="cardTitleP">Hoover Rerpair {{town}}</p>
                                    <p class="cardBodyP">Weak suction, broken belt, broken motor, broken filter, unusual noise. Don't worry!</p>
                                    <nuxt-link class="aStyle1" to="/hoover-repairs/">Find out more</nuxt-link>
                                </div>
                            </div>
                        </div>
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
            //Swiper options
            swiperOptions: {
                slidesPerView: 'auto',
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },
        }
    },
    props: {
        title: String,
        subtitle: String,
        body: String,
        town: String
    }
    
}
</script>

<style scoped>
.serviceCon {
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    background-color: var(--main-bg-color);
    position: relative;
}
/* Textarea */
.textarea {
    width: 100%;
}
.subHeadingHighlight {
    color: var(--even-bg-highlight-text);
    font-size: 14px;
    margin: 10px 0 20px;
    font-weight: bold;
}
/* Service Cards */
.swiperContainer {
    position: relative;
    margin-top: 40px;
}
.swiperOverlay {
    position: absolute;
    left: -100%;
    width: 100%;
    background-color: var(--main-bg-color);
    height: 100%;
    z-index: 1;
}
.swipeCon {
    width: calc(100% + 15px);
    overflow: visible;
    z-index: 0;
} 
.serviceCard {
    width: 25%;
    min-width: 280px;
    padding-right: 20px;
}
.cardInner {
    width: 100%;
    background-color: var(--main-bg-box-color);
    border-radius: 20px;
    position: relative;
    margin-top: 100px;
}
/* Card Style */
.cardImg {
    position: absolute;
    top: -100px;
    width: calc(100% - 40px);
    left: 20px;
    right: 20px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    margin-bottom: 20px;
    background-color: var(--main-bg-box-color);
}
.cardBodyCon {
    padding: 120px 20px 20px;
    text-align: center;
    
}
.cardTitleP {
    color: #FFF;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 20px;
    height: 20px;
    overflow: hidden;
}
.cardBodyP {
    color: #FFF;
    margin-bottom: 10px;
    line-height: 18px;
    height: 72px;
    overflow: hidden;
}
.aStyle1 {
    width: 100%;
}

@media only screen and (max-width: 768px) {
    .swiperOverlay {display: none;}
}
</style>