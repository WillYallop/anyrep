<template>
    <div class="compCon evenPad">
        <div class="compWrap globWrap">

            <div class="testimonialHeader">
                <h4 class="componentTitle">What our clients have to say about Anyrep</h4>
                <h5 class="subHeadingHighlight">You can leave us a review on our facebook or Google.</h5>
            </div>
            <div class="swiperContainer">
                <div class="swipeCon" v-swiper:mySwiper="swiperOptions">
                    <div class="swiper-wrapper">
                        <div class="testimonialCard swiper-slide" :key="testimonial.id" v-for="testimonial in testimonials">
                            <div class="testimonialCardInner">
                                <div class="profileHolder">
                                    <img src="../../assets/images/testimonial.jpg" alt="Testimonial Image" data-not-lazy>
                                </div>
                                <div class="textArea">
                                    <h4 class="testTitle">{{testimonial.name}}</h4>
                                    <p class="testBody">{{testimonial.body}}</p>
                                    <img class="ratingImg" src="../../assets/images/rating.png" alt="Testimonial Rating" data-not-lazy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiperPaginationCon">
                <div class="swiper-pagination" slot="pagination"></div>
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
                loop: true,
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },

            testimonials: [
                { id: 1, name: 'Nathan', body: 'Did a great job fixing my washing machine, arrived on time and he fixed it within the hour, luckily he had the parts on hand so I had my machine up and running quickly.' },
                { id: 2, name: 'Debra', body: "10/10 would definetly recommend to anyone that needs a quick and well priced appliance repair. My dryer was fixed in under an hour, couldn't be happier."},
                { id: 3, name: 'Charlotte', body: 'I called Anyrep the same day my Cooker broke and 5 hours later it was up and running like new, very good and quick service and would definetly use again.' },
            ]
        }
    }
}
</script>

<style scoped>
.compWrap {
    flex-wrap: wrap;
}
.testimonialHeader {
    width: 100%;
    background-color: var(--even-bg-box-color);
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 20px;
}
.subHeadingHighlight {
    color: var(--even-bg-highlight-text);
    font-size: 14px;
    margin: 10px 0 0;
}
/* Swiper */
.swiperContainer {
    width: calc(100% + 20px);
    margin-left: -10px;
}
.swipeCon { 
    width: 100%;
    border-radius: 10px;
}
.testimonialCard {
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 0 10px;
}
.testimonialCardInner {
    background-color: var(--even-bg-box-color);
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    display: flex;
}
.profileHolder {
    height: 100%;
    width: 100px;
    min-width: 100px;
    background-color: var(--main-bg-color);
    padding: 30px 0;
    display: flex;
    align-items: center;
}
.profileHolder img {
    width: 100%;
    margin-left: 30px;
    border-radius: 50%;
}
.textArea {
    padding: 30px 30px 30px 60px;
}
.testTitle {
    margin-bottom: 10px;
    font-size: 20px;
    color: var(--title-text);
}   
.testBody {
    margin-bottom: 10px;
    color: var(--body-text);
}
.ratingImg {
    height: 15px;
}
.swiperPaginationCon {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}
.swiper-pagination {
    top: 10px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
}

@media only screen and (max-width: 1000px) {
    .testimonialCard {width: 100%; padding: 0 10px;}
}
@media only screen and (max-width: 470px) {
    .testimonialCardInner {flex-wrap: wrap;}
    .profileHolder {width: 100%; height: 100px; justify-content: center; padding: 30px 0 0;}
    .profileHolder img { width: auto; height: 100px; margin: 0;}
    .textArea {padding: 30px; text-align: center;}
}
</style>

<style>
.swiper-pagination-bullet {
    background-color: #FFF;
    opacity: 0.4;
    margin: 0 5px;
}
.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>