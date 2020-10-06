<template>
    <div class="compCon">
        <div class="compWrap globWrap">
            <div class="introCon">
                <h2 class="intoTitle">Important Information!</h2>
                <h3 class="intoHighlight">Norwich appliance repairs with Anyrep</h3>
                <p class="introBody">Due to restrictions Anyrep can only deliver and install appliances purchased on this website to people that live in Norfolk. Please if you live outside of Norfolk do not place an order! For more information about this you can contact us!</p>
                <p class="infoText">If your request was made out of hours, we will get back to you at our earliest opportunity.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.compCon {
    padding-top: 80px;
}
.introCon {
    width: 100%;
    margin-bottom: 20px;
    padding: 30px;
    background-color: #FFF;
    border: 1px solid #F6F6F6;
    border-radius: 20px;
}
.intoTitle {
    font-size: 20px;
    width: 100%;
    max-width: 250px;
}
.intoHighlight {
    color: var(--highlight-text);
    font-size: 14px;
    margin: 10px 0 20px;
}
.introBody {
    width: 100%;
    max-width: 900px;
}
.infoText {
    margin-top: 10px;
    color: #444444;
    font-size: 14px;
}

@media only screen and (max-width: 768px) {
    .compCon {padding-top: 60px;}
}
</style>