<template>
    <div class="findUsCon compCon evenPad">
        <div class="compWrap globWrap">
            <div class="infoCol">
                <h4 class="componentTitle">Address:</h4>
                <p class="componentBody" style="max-width: 150px">3 Montrose Court, Norwich, NR7 0RY</p>
                <div class="spacer"></div>
                <h4 class="componentTitle">Business Hours:</h4>
                <p class="componentBody">Mon - Fri:  8:00 am - 5:00 pm</p>
                <p class="componentBody secT">Saturday:  8:00 am - 12:00 pm</p>
            </div>
            <div class="iframeCol">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.1401691055107!2d1.3593686158119225!3d52.639380579836974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e317d71bfd13%3A0xe64136f010e51a48!2sAnyrep!5e0!3m2!1sen!2suk!4v1555624037897!5m2!1sen!2suk" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
.findUsCon {
    width: 100%;
    display: flex; 
    background-color: var(--main-bg-color);
}
.infoCol {
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.componentTitle {
    margin-bottom: 5px;
}
.secT {
    margin-top: 2px;
}
.spacer {
    margin: 20px 0;
    width: 80%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
}
.iframeCol {
    padding-left: 80px;
    width: calc(100% - 260px);
}
.iframeCol iframe {
    width: 100%;
    height: 300px;
    border-radius: 20px;
}

@media only screen and (max-width: 1100px) {
    .iframeCol {padding-left: 40px;}
}
@media only screen and (max-width: 768px)  {
    .compWrap {flex-wrap: wrap;}
    .iframeCol {padding-left: 0; width: 100%;}
    .infoCol {width: 100%; margin-bottom: 40px;}
}
</style>