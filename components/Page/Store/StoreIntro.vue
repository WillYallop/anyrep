<template>
    <div class="compCon">
        <div class="compWrap globWrap">
            <div class="introCon">
                <h2 class="intoTitle">Browse our new and refurbished appliances.</h2>
                <h3 class="intoHighlight">Norfolk deliveries and installations only!</h3>
                <p class="introBody">If you're on a budget or just not looking for a brand new appliance, then we might have something you for you. If we don't currently have anything then check again later as we are constantly adding new appliances to our site.</p>
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