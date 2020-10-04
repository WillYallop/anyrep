<template>
    <div class="contactCon compCon evenPad">
        <div class="compWrap globWrap">
            <!-- Form Con -->
            <div class="formCon">
                <label for="nameId">Name</label> 
                <input id="nameId" type="text" class="inputStyle">
                <label for="emailId">Email</label>
                <input id="emailId" type="text" class="inputStyle">
                <label for="messageId">Message</label>
                <textarea id="messageId" class="textareaStyle"></textarea>
                <button class="btnStyle1">Send</button>
            </div>
            <!-- Contact Info Con -->
            <div class="infoCon">
                <h4 class="componentTitle">Let us hear your message today!</h4>
                <div class="rowCon">
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.</p>
                    </div>
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.</p>
                    </div>
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.</p>
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
    }
}
</script>

<style scoped>
.contactCon {
    width: 100%;
    display: flex; 
    background-color: var(--main-bg-color);
}

/* Form */
.formCon {
    width: 60%;
    background-color: var(--main-bg-box-color);
    padding: 30px;
    border-radius: 20px;
}
.formCon label {
    color: var(--body-text);
}
.inputStyle {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    margin-top: 5px;
} 
.textareaStyle {
    height: 150px;
    border-radius: 5px;
    border: none;
    width: 100%;
    width: 100%;
    resize: none;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 10px;
}

/* Info */
.infoCon {
    width: 40%;
    padding-left: 80px;
    margin-top: 40px;
}
.rowCon {
    margin-top: 20px;
}
.rowCon .row {
    width: 100%;
    color: var(--body-text);
    margin: 0 0 20px;
    display: flex;
    position: relative;
}
.icon {
    width: 20px;
    height: 20px;
    min-width: 20px;
    background-color: var(--highlight-text);
    border-radius: 5px;
    margin-right: 20px;
    position: relative;
}
.line {
    position: absolute;
    height: calc(100% + 20px);
    top: 20px;
    left: 10px;
    width: 1px;
    background-color: #FFF;
}
.infoCon .row:last-child .line {
    display: none;
}

@media only screen and (max-width: 1150px) {
    .infoCon {padding-left: 40px;}
}
@media only screen and (max-width: 980px) {
    .infoCon {width: 50%;}
    .formCon {width: 50%;}
}
@media only screen and (max-width: 768px) {
    .compWrap {flex-wrap: wrap-reverse;}
    .infoCon {width: 80%; padding-left: 0; margin-top: 0; margin-bottom: 20px;}
    .formCon {width: 100%;}
}
@media only screen and (max-width: 500px) {
    .infoCon {width: 90%;}
}
</style>