<template>
    <div class="banCon compCon">
        <div class="compWrap globWrap">

            <div class="banGroup1">
                <div class="textareaCol">
                    <h1 class="siteHeading">{{title}}<span v-if="title2"><br>{{title2}}</span> </h1>
                    <p class="siteSubheading">{{subTitle}}</p>
                    <div class="btnCon">
                        <button class="btnStyle1" :key="button.id" v-for="button in buttons">{{button.text}}</button>
                    </div>
                </div>
                <div class="formCol">
                    <div class="formContainer">
                        <div class="formInner">
                            <label for="appType" class="hideLabel">Appliance Type</label>
                            <select id="appType" class="selectStyle">
                                <option value="1">Choose the appliance type</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <label for="appMake" class="hideLabel">Appliance Make</label>
                            <select id="appMake" class="selectStyle">
                                <option value="1">Choose the appliance make</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <label for="appModel" class="hideLabel">Appliance Model</label>
                            <select id="appModel" class="selectStyle">
                                <option value="1">Choose the appliance model</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <label for="appBody" class="hideLabel">What's the issue</label>
                            <textarea id="appBody" class="textareaStyle" placeholder="What's the issue"></textarea>
                            <button class="btnStyle1">Get Quote</button>
                        </div>

                        <div class="tabletBtnsCon">
                            <div class="speakerGrill"></div>
                            <div class="homeBtn"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="imageCol">
                <img class="bannerImg" src="../../assets/images/bannerImgPhone.png" alt="Call Anyrep Appliance Repairs" draggable="false">
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
    background-color: var(--main-bg-color);
    z-index: 1;
    position: relative;
}
.compWrap {
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
}
.banGroup1 {
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}
/* Text area */
.textareaCol {
    width: 55%;
    max-width: 600px;
    padding: 30px 60px 40px 0;
}
.siteHeading {
    color: #FFF;
    font-weight: 900;
    margin-bottom: 20px;
    line-height: clamp(2.2rem, 2vw, 3.5rem);
    font-size: clamp(2.2rem, 2vw, 3.5rem);
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

/* Form Area */
.formCol {
    width: 45%;
    position: relative;
}
.formContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000000;
    border-radius: 20px;
    padding: 20px 20px 40px;
    border: 1px solid #2C2B2B;
}
.formInner {
    height: 100%;
    width: 100%;
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
}
.formInner h2 {
    font-size: 18px;
    margin-bottom: 10px;
}
.formInner label {
    font-size: 14px;
}
.hideLabel {
    display: none;
}
.tabletBtnsCon {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
}
.speakerGrill {
    margin-top: 7.5px;
    width: 40px;
    height: 5px;
    background-color: #FFF;
    border-radius: 10px;
} 
.homeBtn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-color: #FFF;
}
/* Form inputs */
.selectStyle {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ECECEC;
    background-color: #FAFAFA;
}
.selectStyle::placeholder {
    color: #1C1C1C;
}
.textareaStyle {
    width: 100%;
    padding: 10px;
    height: 100px;
    resize: none;
    border-radius: 5px;
    border: 1px solid #ECECEC;
    font-size: 14px;
    background-color: #FAFAFA;
}
.textareaStyle::placeholder {
    color: #1C1C1C;
}
.formCol .btnStyle1 {
    width: 100%;
}
.formCol .btnStyle1:hover {
    transform: scale(1.05);
}

/* Image Area */
.imageCol {
    width: 20%;
    padding-left: 20px;
    position: relative;
    display: none;
}
.bannerImg {
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: cover;
}
.bannerImg::selection {background-color: transparent !important; color: #FFF;}

/* Media Queries */
@media only screen and (max-width: 768px) { 
    .compWrap {flex-wrap: wrap; margin: 30px 0 60px;}
    .banGroup1 {width: 80%;}
    .textareaCol {width: 100%; padding: 0 0 20px;}
    .btnCon {display: none;}
    .formCol {width: 100%;}
    .formContainer { position: relative; padding: 20px 10px 40px;}
    .formInner {padding: 15px;}
    .imageCol {display: flex;}

}

@media only screen and (max-width: 525px) {
    .btnCon .btnStyle1 {width: 100%;}
}
@media only screen and (max-width: 400px) {
    .formInner {padding: 10px;}
}
@media only screen and (max-width: 370px) {
    .banGroup1 {width: 100%;}
    .imageCol {display: none;}
}
</style>
