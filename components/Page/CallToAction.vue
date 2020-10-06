<template>
    <div class="compCon evenPad">
        <div class="compWrap globWrap">
            <div class="cTACon">
                <a class="col" href="tel:01603433083">
                    <div class="iconCon">
                        <img src="../../assets/images/phoneIcon2.svg" alt="Call us on 01603 433083">
                    </div>  
                    <h4 class="componentTitle">Call us on<br>01603 433083</h4>
                </a>
                <a class="col" href="tel:07525150999">
                    <div class="iconCon">
                        <img src="../../assets/images/phoneIcon2.svg" alt="Call us on 07525 150 999">
                    </div>
                    <h4 class="componentTitle">Call us on<br>07525 150999</h4>
                </a>
                <a class="col" href="mailto:anyrep@gmail.com">
                    <div class="iconCon">
                        <img src="../../assets/images/emailIcon2.svg" alt="Email us at anyrep@gmail.com">
                    </div>
                    <h4 class="componentTitle">Email us at anyrep@gmail.com</h4>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cTACon {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.componentTitle {
    color: #0A0A0A;
}
.cTACon .col {
    width: 28%;
    padding: 30px;
    background-color: var(--even-bg-box-color);
    border: 1px solid #F6F6F6;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    text-decoration: none;
}
.cTACon .col:hover {
    transform: scale(1.1);
}
.iconCon {
    height: 100px;
    min-height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 4px solid var(--secondary-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.iconCon img {
    height: 40px;
}

@media only screen and (max-width: 1000px) {
    .cTACon .col {width: 32%;}
}
@media only screen and (max-width: 768px) {
    .cTACon {flex-wrap: wrap; justify-content: center;}
    .cTACon .col {width: 60%; margin-top: 20px;}
    .cTACon .col:first-child {margin-top: 0;}
}
@media only screen and (max-width: 500px) {
    .cTACon .col {width: 80%; margin-top: 20px;}
    .cTACon .col:first-child {margin-top: 0;}
}
</style>