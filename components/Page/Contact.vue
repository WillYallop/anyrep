<template>
    <div class="contactCon compCon evenPad">
        <div class="compWrap globWrap">
            <!-- Form Con -->
            <div class="formCon">
                <label for="nameId">Name</label> 
                <input id="nameId" type="text" class="inputStyle" v-model="name" :class="{ 'validationError' : !verifyName, 'fieldError' : fieldError[0] }">
                <label for="phoneId">Phone</label>
                <input id="phoneId" type="text" class="inputStyle" v-model="phone" :class="{ 'validationError' : !verifyPhone, 'fieldError' : fieldError[1] }">
                <label for="emailId">Email</label>
                <input id="emailId" type="text" class="inputStyle" v-model="email" :class="{ 'validationError' : !verifyEmail, 'fieldError' : fieldError[2] }">
                <label for="messageId">Message</label>
                <textarea id="messageId" class="textareaStyle" v-model="message" :class="{ 'validationError' : !verifyMessage, 'fieldError' : fieldError[3] }"></textarea>

                <p class="mssageP" v-if="msg">{{msg}}</p>

                <button class="btnStyle1" v-on:click="sendMessage">Send <img class="emailSendingImg" v-if="sending" src="../../assets/images/loadingGif.gif" alt="Email Sending"></button>
                
            </div>
            <!-- Contact Info Con -->
            <div class="infoCon">
                <h2 class="componentTitle">Let us hear your message today!</h2>
                <div class="rowCon">
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>Based in the Norwich, Norfolk region and have a question? Don’t hesitate to contact!</p>
                    </div>
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>As soon as we receive your message well contact you at the earliest possible time!</p>
                    </div>
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>If you are looking for an appliance repair, we will arrange a date and time that suits you.</p>
                    </div>
                    <div class="row">
                        <div class="icon"></div>
                        <div class="line"></div>
                        <p>If not, we’re happy to answer and question and queries you may have!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Libs
import axios from 'axios'

export default {
    data() {
        return {
            // V-models
            name: '',
            phone: '',
            email: '',
            message: '',

            // Data Verification
            dataApproved: [ false, false, false, false ],
            fieldError: [ false, false, false, false ],

            // Regexs
            stringRegex: /^[a-zA-Z0-9.!?', ]*$/,
            postCodeRegex: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
            numberRegex: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
            emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

            // Errors
            msg: false, 

            // Logic
            sending: false
        }
    },
    computed: {
        verifyName() {
            if(this.name.length > 0) {
                if(this.stringRegex.test(this.name)) {
                    this.dataApproved[0] = true
                    this.fieldError[0] = false
                    return true
                } else {
                    this.dataApproved[0] = false
                    return false
                }
            } else {
                this.dataApproved[0] = false
                return false
            }
        }, 
        verifyPhone() {
            if(this.phone.length > 0) {
                if(this.numberRegex.test(this.phone)) {
                    this.dataApproved[1] = true
                    this.fieldError[1] = false
                    return true
                } else {
                    this.dataApproved[1] = false
                    return false
                }
            } else {
                this.dataApproved[1] = false
                return false
            }
        }, 
        verifyEmail() {
            if(this.email.length > 0) {
                if(this.emailRegex.test(this.email)) {
                    this.dataApproved[2] = true
                    this.fieldError[2] = false
                    return true
                } else {
                    this.dataApproved[2] = false
                    return false
                }
            } else {
                this.dataApproved[2] = false
                return false
            }
        },
        verifyMessage() {
            if(this.message.length > 0) {
                if(this.stringRegex.test(this.message)) {
                    this.dataApproved[3] = true
                    this.fieldError[3] = false
                    return true
                } else {
                    this.dataApproved[3] = false
                    return false
                }
            } else {
                this.dataApproved[3] = false
                return false
            }
        }, 
    },
    methods: {
        verifyData() {
            let checker = arr => arr.every(Boolean);
            if(checker(this.dataApproved)) {
                return true
            } else {
                return false
            }
        },
        sendMessage() {
            if(this.verifyData()) {
                this.sending = true
                this.$nuxt.$loading.start()
                // Approved
                // Reset errors
                this.fieldError = [ false, false, false, false ]
                this.msg = false
               
                // Post results
                axios.post('https://api.williamyallop.com/v1/anyrep/email/contact', {
                    name: this.name,
                    message: this.message,
                    phone: this.phone,
                    email: this.email
                })
                .then((response) => {
                    if(response.data.message === 'success') {
                        this.msg = 'Your email was successfully sent!' 
                        this.sending = false
                        this.$nuxt.$loading.finish()
                    }
                })
                .catch((err) => {
                    this.msg = 'There was an error sending the message! Please try again, or give us a call!'
                    this.sending = false
                    this.$nuxt.$loading.finish()
                })
            } else {
                // Reset errors
                this.fieldError = [ false, false, false, false ]
                this.msg = false
                // Not Approved
                if(!this.dataApproved[0]) {
                    this.fieldError[0] = true
                }
                if(!this.dataApproved[1]) {
                    this.fieldError[1] = true
                }
                if(!this.dataApproved[2]) {
                    this.fieldError[2] = true
                }
                if(!this.dataApproved[3]) {
                    this.fieldError[3] = true
                }
                this.msg = 'Make sure to fill in all the fields, and enter valid charcters!'
            }
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
    background-color: #FFF;
    border: 2px solid #FFF;
    font-size: 16px;
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
    background-color: #FFF;
    border: 2px solid #FFF;
    font-size: 16px;
}
.validationError:focus {
    border: 2px solid var(--main-accent-color)
}
.fieldError {
    border: 2px solid var(--main-accent-color)
}
.mssageP {
    margin-bottom: 20px;
    color: #FFF;
}
.btnStyle1 {
    width: 100%;
}
.btnStyle1:hover {
    transform: scale(1.05);
}
.emailSendingImg {
    height: 16px;
    margin-left: 5px;
    margin-bottom: -2px;
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