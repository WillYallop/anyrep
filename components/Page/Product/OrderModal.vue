<template>
    <div class="modalContainer" v-if="modalStatus">
        <div class="modalWrapper"> 
            <div class="modalContent">  
                <div class="modalHeader">
                    <img class="logo" src="../../../assets/images/logo.svg" alt="Site Logo">
                    <p class="componentBody">Once you have placed an order, someone at Anyrep will get in contact with you within the next 24 hours to sort out the delivery and payment of the product.</p>
                    <button v-on:click="$emit('toggle-modal')" class="closeModal">close</button>
                </div>
                <div class="modalBody"> 

                    <label id="name">Name *</label>    
                    <input v-model="name" id="name" class="inputStyle" type="text" :class="{ 'validationError' : !verifyName, 'fieldError' : fieldError[0] }"> 

                    <label id="email">Email *</label>   
                    <input v-model="email" id="email" class="inputStyle" type="text" :class="{ 'validationError' : !verifyEmail, 'fieldError' : fieldError[1] }">

                    <label id="phone">Phone *</label>   
                    <input v-model="phone" id="phone" class="inputStyle" type="text" :class="{ 'validationError' : !verifyPhone, 'fieldError' : fieldError[2] }">

                    <p class="mssageP" v-if="msg">{{msg}}</p>

                    <button v-on:click="orderProduct" class="btnStyle1">Order <img class="emailSendingImg" v-if="sending" src="../../../assets/images/loadingGif.gif" alt="Email Sending"></button>
                </div>
            </div>
            <!-- overlay -->
            <div class="modalBackground" v-on:click="$emit('toggle-modal')"></div>
        </div>
    </div>
</template>

<script>
// libs
import axios from 'axios'

export default {
    data() {
        return {
            // Data Verification
            dataApproved: [ false, false, false ],
            fieldError: [ false, false, false ],

            // Regexs
            stringRegex: /^[a-zA-Z0-9.!?', ]*$/,
            postCodeRegex: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
            numberRegex: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
            emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

            // Errors
            msg: false, 

            // Logic
            sending: false,

            // V-models
            name: '',
            email: '', 
            phone: ''
        }
    },
    props: {
        modalStatus: Boolean,
        product: Object,
        prodId: String

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
        }
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
        orderProduct() {
            if(this.verifyData()) {
                this.sending = true
                this.$nuxt.$loading.start()
                // Approved
                // Reset errors
                this.fieldError = [ false, false, false ]
                this.msg = false
               
                // Post results
                axios.post('https://api.williamyallop.com/v1/anyrep/email/order', {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    product: this.product
                })
                .then((response) => {
                    if(response.data.message === 'success') {
                        this.msg = 'Order successfully placed, someone will contact you within 24h to proceed.' 
                        this.sending = false
                        this.$nuxt.$loading.finish()
                    }
                })
                .catch((err) => {
                    this.msg = 'There was an error making the order! Please try again, or give us a call!'
                    this.sending = false
                    this.$nuxt.$loading.finish()
                })
            } else {
                // Reset errors
                this.fieldError = [ false, false, false ]
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
                this.msg = 'Make sure to fill in all the fields, and enter valid charcters!'
            }
        }
    }
}
</script>

<style scoped>
/* Modal */
.modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -56px;
    padding-bottom: 56px;
    z-index: 2000;
}
.modalWrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    padding: 20px;
    position: relative;
    z-index: 20;
    scrollbar-width: none;  /* Firefox */
}
.modalWrapper::-webkit-scrollbar {
  display: none;
}
.modalContent {
    margin: auto;
    background-color: #FFF;
    pointer-events: all;
    position: relative;
    z-index: 20;
    max-width: 1200px;
    width: 100%;
    border-radius: 20px;
}
/* overlay */
.modalBackground {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -56px;
    padding-bottom: 56px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
    cursor: pointer;
}

/* Modal Content */
.modalHeader {
    width: 100%;
    padding: 20px;
    background-color: #201C42;
    border-radius: 20px 20px 0 0;
    position: relative;
} 
.logo {
    height: 40px;
} 
.modalHeader p {
    color: #FFF;
    margin-top: 20px;
}
.closeModal {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #FFF;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
} 
.closeModal:hover {
    background-color: rgba(255, 255, 255, 0.5);
}
.modalBody {
    padding: 20px;
} 
.inputStyle {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #FDFDFD;
    border: 1px solid #ECECEC;
    margin-top: 5px;
    margin-bottom: 10px;
} 
.validationError:focus {
    border: 1px solid var(--main-accent-color)
}
.fieldError {
    border: 1px solid var(--main-accent-color)
}
.mssageP {
    margin-bottom: 10px;
}

.emailSendingImg {
    height: 16px;
    margin-left: 5px;
    margin-bottom: -2px;
}
</style>