<template>
    <div class="banCon">
        <div class="banWrap globWrap">

            <div class="textareaCol">
                <h1 class="siteHeading">{{title}}<span v-if="title2"><br>{{title2}}</span> </h1>
                <p class="siteSubheading">{{subTitle}}</p>
                <div class="btnCon">
                    <button class="btnStyle1" :key="button.id" v-for="button in buttons">{{button.text}}</button>
                </div>
            </div>
            <div class="imageCol">
                <img class="bannerImg desktopVersion" src="../../assets/images/bannerImg.png" alt="EXODIA app preview" draggable="false">
                <img class="bannerImg mobileVersion" src="../../assets/images/phoneImg.png" alt="EXODIA app preview on mobile" draggable="false">
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
    mounted() {

    },
    props: {
        title: String,
        title2: String,
        subTitle: String,
        buttons: Array

    },
    methods: {

    }
}
</script>

<style scoped>
.banCon {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--main-bg-color);
    z-index: 1;
    position: relative;
}
.banWrap {
    display: flex;
    justify-content: space-between;
}
/* Text area */
.textareaCol {
    width: 60%;
    max-width: 600px;
    padding: 30px 0;
}
.siteHeading {
    color: #FFF;
    font-weight: 900;
    margin-bottom: 20px;
    line-height: clamp(2.5rem, 3vw, 3.5rem);
    font-size: clamp(2.5rem, 3vw, 3.5rem);
}
.siteSubheading {
    color: #FFF;
    font-size: clamp(1.2rem, 2vw, 1rem);
}
.btnCon {
    margin-top: 30px;
}
.btnStyle1 {
    margin-top: 10px;
}
.btnStyle1:first-child {
    margin-right: 20px;
}

/* Image Area */
.imageCol {
    width: 40%;
    padding-left: 80px;
    position: relative;
}
.bannerImg {
    position: absolute;
    top: 0;
    height: calc(100% + 150px)
}
.bannerImg::selection {background-color: transparent !important; color: #FFF;}
.mobileVersion {display: none; object-fit: cover;}

/* Media Queries */
@media only screen and (max-width: 868px) { 
    .bannerImg {height: 100%;}
    .textareaCol {width: 70%;padding-top: 20px;}
    .imageCol {padding-left: 40px;}
}
@media only screen and (max-width: 525px) {
    .desktopVersion {display: none;}
    .mobileVersion {display: flex;}
}
</style>
