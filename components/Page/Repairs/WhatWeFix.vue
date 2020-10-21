<template>
    <div class="fixCon compCon">
        <div class="compWrap globWrap oddPad">
            <div class="imgCol">
                <img :src="getImage(image)" alt="">
            </div>
            <div class="contCol">
                <div class="mobImgCon">
                    <img class="textareaImg" :src="getImage(image)" alt="">
                </div>
                <div class="textarea">
                    <h3 class="componentTitle">{{title}}</h3>
                    <h4 class="subHeadingHighlight">{{subTitle}}</h4>
                    <p class="componentBody">{{body}}</p>
                    <nuxt-link class="aStyle1" to="/book/">Book Now</nuxt-link >
                </div>
                <div class="issuesCon">
                    <div class="issue" :key="issue.id" v-for="issue in issuesArray">
                        <div class="issueInner">
                            <div class="iconCon">
                                <img src="../../../assets/images/checkIcon.svg" alt="">
                            </div>
                            <p>{{issue.issue}}</p>
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
    
        }
    },
    props: {
        title: String,
        subTitle: String,
        body: String,
        issuesArray: Array,
        image: String
    },
    methods: {
        getImage(im) {
            var images = require.context('../../../assets/images/', false)
            return images('./' + im)
        }

    }
}
</script>

<style scoped>
.fixCon {
    width: 100%;
    display: flex; 
    background-color: var(--main-bg-color);
}

/* Image Col */
.imgCol {
    width: 25%;
} 
.imgCol img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
} 

/* Content Col */
.contCol {
    width: 75%;
    padding-left: 20px;
} 
.textarea {
    background-color: var(--main-bg-box-color);
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 10px;
} 
.mobImgCon {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    display: none;
}
.textareaImg {
    width: 80%;
    height: 150px;
    object-fit: cover;
    margin-bottom: -30px;
    border-radius: 20px;
    z-index: 1;
    position: relative;
}
.componentTitle {
    max-width: 280px;
} 
.subHeadingHighlight {
    color: var(--highlight-text);
    font-size: 14px;
    margin: 10px 0 20px;
}
.aStyle1 {
    margin-top: 20px;
}
/* Issues */
.issuesCon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
} 
.issue {
    width: 25%;
    margin-top: 10px;
}
.issueInner {
    padding-right: 20px;
    display: flex;
    align-items: center;
} 
.issueInner p {
    padding-left: 20px;
    font-size: 16px;
    color: var(--title-text);
}
.iconCon {
    height: 30px;
    width: 30px;
    min-width: 30px;
    background-color: var(--highlight-text);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.iconCon img {
    height: 15px;
}

@media only screen and (max-width: 1000px) {
    .issue {width: 33.33%;}
}
@media only screen and (max-width: 768px) {
    .contCol {width: 100%; padding-left: 0; }
    .imgCol {display: none;}
    .mobImgCon {display: flex;}
    .textarea {padding-top: 60px; margin-bottom: 30px;}
    .aStyle1 {width: 100%;}
}
@media only screen and (max-width: 600px) {
    .issue {width: 50%;}
}
</style>