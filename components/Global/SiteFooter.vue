<template>
    <footer class="findUsCon compCon evenPad">
        <div class="compWrap globWrap">
            <img class="siteLogo" src="../../assets/images/logo.svg" alt="Anyrep Logo">
            <div class="infoRow">
                <!-- Opening Hours -->
                <div class="openingCol">
                    <p class="componentBody">Book your appliance repair online with Anyrep. It takes less than a minute and couldn't be any easier.</p>
                    <nuxt-link to='/book' class="quoteLink">Book Now</nuxt-link>

                    <div class="businessInfoCon">
                        <h4 class="componentTitle">Address:</h4>
                        <p class="componentBody">3 Montrose Court, Norwich NR7 0RY</p>
                        <div class="spacer"></div>
                        <h4 class="componentTitle">Business Hours:</h4>
                        <p class="componentBody">Mon - Fri:  8:00 am - 5:00 pm</p>
                        <p class="componentBody secT">Saturday:  8:00 am - 12:00 pm</p>
                    </div>

                </div>
                <!-- Sitemap -->
                <div class="siteLinksCon">
                    <div class="col">
                        <h6 class="componentTitle">Links</h6>
                        <nuxt-link to="/">Home</nuxt-link>
                        <nuxt-link to="/book">Book</nuxt-link>
                        <nuxt-link to="/store">Store</nuxt-link>
                        <nuxt-link to="/contact">Contact</nuxt-link>
                        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                        <nuxt-link to="/terms-conditions">Terms & Conditions</nuxt-link>
                        <a href="https://www.facebook.com/anyrep/" target="_blank">Facebook</a>
                        <a href="https://www.yell.com/biz/anyrep-domestic-and-commercial-appliance-repairs-norwich-7112578/" target="_blank">Yell</a>
                        <nuxt-link to="/sitemap.xml">Sitemap</nuxt-link>
                    </div>
                    <div class="col">
                        <h6 class="componentTitle">Appliance Repair Services</h6>
                        <nuxt-link to="/repair/washing-machine">Washing Machines Repairs</nuxt-link>
                        <nuxt-link to="/repair/fridge-freezer">Fridge / Freezer Repairs</nuxt-link>
                        <nuxt-link to="/repair/dishwasher">Dishwasher Repairs</nuxt-link>
                        <nuxt-link to="/repair/tumbledryer">Tumbledryer Repairs</nuxt-link>
                        <nuxt-link to="/repair/cooker">Cooker Repairs</nuxt-link>
                        <nuxt-link to="/repair/hob">Hob Repairs</nuxt-link>
                        <nuxt-link to="/repair/commercial-appliance">Commercial Appliance Repairs</nuxt-link>
                        <nuxt-link to="/repair/extractor-hood">Extractor Hood Repairs</nuxt-link>
                        <nuxt-link to="/repair/hoover">Hoover Repairs</nuxt-link>
                        <nuxt-link to="/repair/microwave">Microwave Repairs</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="iframeRow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.1401691055107!2d1.3593686158119225!3d52.639380579836974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e317d71bfd13%3A0xe64136f010e51a48!2sAnyrep!5e0!3m2!1sen!2suk!4v1555624037897!5m2!1sen!2suk" frameborder="0"></iframe>
            </div>
        </div>
        <div class="copyrightBar">
            <p>Anyrep Domestic & Commercial Appliance Repairs   2020. All Rights Reserved.</p>
            <p>Made by <a href="https://williamyallop.com">William Yallop</a></p>
        </div>
    </footer>
</template>

<style scoped>
.findUsCon {
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    background-color: var(--main-bg-color);
}
.evenPad {
    padding-bottom: 0;
}
.compWrap {flex-wrap: wrap;}

/* Footer Row */
.siteLogo {
    height: 60px;
}
.infoRow {
    width: 100%;
    margin: 20px 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
/* Opening Col */
.openingCol {
    width: 320px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.quoteLink {
    text-decoration: underline;
    font-size: 18px;
    color: #FFF;
    margin-top: 10px;
}
.quoteLink:hover {
    color: #049BFF;
}
.businessInfoCon {
    background-color: var(--main-bg-box-color);
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
}
.componentTitle {
    margin-bottom: 5px;
}
.secT {
    margin-top: 2px;
}
.spacer {
    margin: 10px 0;
    width: 80%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
}
/* Links */
.siteLinksCon {
  width: 100%;
  padding-left: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.siteLinksCon .col {
  width: 50%;
  max-width: 350px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
}
.siteLinksCon .col:last-child {
  padding-right: 0;
}
.siteLinksCon .col h6 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}
.siteLinksCon .col a {
  padding: 5px 0;
  border-bottom: 1px solid var(--main-bg-box-color);
  color: #BCBCBC;
  text-decoration: none;
  font-size: 14px;
}
.siteLinksCon .col a:hover {
  text-decoration: underline;
}

/* Ifram Row */
.iframeRow {
    width: 100%;
}
.iframeRow iframe {
    width: 100%;
    height: 300px;
    border-radius: 20px;
}

/* Copyright bar */
.copyrightBar {
    margin-top: 40px;
    width: 100%;
    padding: 20px 40px;
    background-color: var(--head-foot-bg-color);
    text-align: center;
    color: var(--body-text);
}
.copyrightBar a {
    text-decoration: none;
    color: #049BFF;
}
.copyrightBar a:hover {
    text-decoration: underline;
}
.copyrightBar p:last-child {
    margin-top: 3px;
}

@media only screen and (max-width: 1100px) {
}
@media only screen and (max-width: 768px)  {
    .infoRow {flex-wrap: wrap;}
    .siteLinksCon {width: 100%; padding-left: 0; margin-top: 20px; background-color: var(--main-bg-box-color); border-radius: 20px; padding: 20px;}
    .siteLinksCon .col {width: 50%; max-width: 100%; padding-right: 40px;}
    .siteLinksCon .col a {border-bottom: 1px solid rgba(255, 255, 255, 0.2);}
}
@media only screen and (max-width: 500px)  {
    .siteLinksCon .col {width: 100%; padding-right: 0;}
    .siteLinksCon .col:last-child {margin-top: 20px;}
    .openingCol {width: 100%; min-width: auto;}
    .siteLinksCon .col h6 {font-size: 20px;}
}
</style>