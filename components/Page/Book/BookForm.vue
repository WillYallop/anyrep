<template>
    <div class="compCon">
        <div class="compWrap globWrap">
            
            <div class="formContainer">
                <!-- Appliance Details Section -->
                <div class="section">
                    <div class="sectionHeader">
                        <div class="sectionNumberIcon">1</div>
                        <h4 class="sectionTitle">Appliance Details</h4>
                    </div>  
                    <div class="sectionBody">
                        <div class="inputCol">
                            <!-- Appliance Type -->
                            <label for="appType">Appliance Type <span class="requiredInput">*</span></label>
                            <input class="inputStyle inputBotMarg" type="text" id="appType" v-model="type" :class="{ 'validationError' : !verifyAppType, 'fieldError' : fieldError[0] }">
                            <!-- Appliance Make -->
                            <label for="appMake">Appliance Make <span class="requiredInput">*</span></label>
                            <input class="inputStyle inputBotMarg" type="text" id="appMake" v-model="make" :class="{ 'validationError' : !verifyAppMake, 'fieldError' : fieldError[1] }">
                            <!-- Appliance Model -->
                            <label for="appModel">Appliance Model</label>
                            <input class="inputStyle" type="text" id="appModel" v-model="model">
                        </div>
                        <div class="inputCol">
                            <!-- Appliance Issues -->
                            <label for="appIssue">What is the issue? <span class="requiredInput">*</span></label>
                            <textarea class="textareaStyle" id="appIssue" v-model="issue" :class="{ 'validationError' : !verifyAppIssue, 'fieldError' : fieldError[2] }"></textarea>
                        </div>
                    </div>
                </div>
                <!-- Personal Details Section -->
                <div class="section">
                    <div class="sectionHeader">
                        <div class="sectionNumberIcon">2</div>
                        <h4 class="sectionTitle">Personal Details</h4>
                    </div>  
                    <div class="sectionBody">
                        <div class="inputCol">
                            <!-- First Name -->
                            <label for="fName">First Name <span class="requiredInput">*</span></label>
                            <input class="inputStyle inputBotMarg" type="text" id="fName" v-model="fName" :class="{ 'validationError' : !verifyFName, 'fieldError' : fieldError[3] }">
                            <!-- Post Code -->
                            <label for="postCode">Post Code <span class="requiredInput">*</span></label>
                            <input class="inputStyle inputBotMarg" type="text" id="postCode" v-model="postCode" :class="{ 'validationError' : !verifyPostCode, 'fieldError' : fieldError[4] }">
                            <!-- Town -->
                            <label for="town">Town <span class="requiredInput">*</span></label>
                            <input class="inputStyle" type="text" id="town" v-model="town" :class="{ 'validationError' : !verifyTown, 'fieldError' : fieldError[6] }">
                        </div>
                        <div class="inputCol">
                            <!-- Last Name -->
                            <label for="lName">Last Name</label>
                            <input class="inputStyle inputBotMarg" type="text" id="lName" v-model="lName">
                            <!-- Address -->
                            <label for="address">Address <span class="requiredInput">*</span></label>
                            <input class="inputStyle inputBotMarg" type="text" id="address" v-model="address" :class="{ 'validationError' : !verifyAddress, 'fieldError' : fieldError[5] }">
                            <!-- County -->
                            <label for="county">County <span class="requiredInput">*</span></label>
                            <input class="inputStyle" type="text" id="county" v-model="county" :class="{ 'validationError' : !verifyCounty, 'fieldError' : fieldError[7] }">
                        </div>
                    </div>
                </div>
                <!-- Contact Details Section -->
                <div class="section">
                    <div class="sectionHeader">
                        <div class="sectionNumberIcon">3</div>
                        <h4 class="sectionTitle">Contact Details</h4>
                    </div> 
                    <div class="sectionBody">
                        <div class="inputCol">
                            <!-- Phone Number -->
                            <label for="phoneNo">Phone NO <span class="requiredInput">*</span></label>
                            <input class="inputStyle" type="text" id="phoneNo" v-model="phone" :class="{ 'validationError' : !verifyPhone, 'fieldError' : fieldError[8] }">
                        </div>
                        <div class="inputCol">
                            <!-- Email -->
                            <label for="email">Email <span class="requiredInput">*</span></label>
                            <input class="inputStyle" type="text" id="email" v-model="email" :class="{ 'validationError' : !verifyEmail, 'fieldError' : fieldError[9] }">
                        </div>
                    </div>
                </div>
                <!-- Finishing Up Section -->
                <div class="section">
                    <div class="sectionHeader">
                        <div class="sectionNumberIcon">4</div>
                        <h4 class="sectionTitle">Finishing Up</h4>
                    </div>  
                    <div class="finishContainer">
                        <p class="boxTitle">Please check the box to proceed</p>
                        <div class="checkboxContainer">
                            <input id="checkbox" type="checkbox" v-model="termsAccepted">
                            <label for="checkbox">I agree to the <nuxt-link to="/terms-conditions" target="_blank">terms & conditions</nuxt-link></label> 
                        </div>
                    </div>
                    <div class="infoContainer">
                        <p style="margin-bottom: 5px;"><b>Please Note!</b></p>
                        <p class="finishBody">Payments are not made online and will be handled in person. For domestic repairs we charge a fixed rate plus the costs of parts if needed so regardless of the time required to fix your appliance, the price is the same.</p>
                    </div>

                    <p v-if="errorMsg" class="termsError">{{errorMsg}}</p>
                    <p v-if="fieldEmptyArray.length > 0" class="fieldErrorP">Make sure to fill in all of the required fields!</p>
                    <p v-if="successMsg" class="bookSuccessP">{{successMsg}}</p>
                   
                    <button class="btnStyle1" v-on:click="bookRepair">Book repair</button>
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
            dataApproved: [ false, false, false, false, false, false, false, false, false, false ],
            fieldError: [ false, false, false, false, false, false, false, false, false, false ],

            termsAccepted: false,

            // Regexs
            stringRegex: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
            postCodeRegex: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
            numberRegex: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
            emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

            // Error
            fieldEmptyArray: [],
            errorMsg: false,
            successMsg: false
        }
    },
    computed: {
        // Get, Set data
        type: {
            get() {
                return this.$store.state.booking.book.appliance.type
            },
            set(value) {
                this.$store.commit('setAppType', value)
            }
        },
        make: {
            get() {
                return this.$store.state.booking.book.appliance.make
            },
            set(value) {
                this.$store.commit('setAppMake', value)
            }
        },
        model: {
            get() {
                return this.$store.state.booking.book.appliance.model
            },
            set(value) {
                this.$store.commit('setAppModel', value)
            }
        },
        issue: {
            get() {
                return this.$store.state.booking.book.appliance.issue
            },
            set(value) {
                this.$store.commit('setAppIssue', value)
            }
        },
        fName: {
            get() {
                return this.$store.state.booking.book.personal.fName
            },
            set(value) {
                this.$store.commit('setFName', value)
            }
        },
        lName: {
            get() {
                return this.$store.state.booking.book.personal.lName
            },
            set(value) {
                this.$store.commit('setLName', value)
            }
        },
        postCode: {
            get() {
                return this.$store.state.booking.book.personal.postCode
            },
            set(value) {
                this.$store.commit('setPostCode', value)
            }
        },
        address: {
            get() {
                return this.$store.state.booking.book.personal.address
            },
            set(value) {
                this.$store.commit('setAddress', value)
            }
        },
        town: {
            get() {
                return this.$store.state.booking.book.personal.town
            },
            set(value) {
                this.$store.commit('setTown', value)
            }
        },
        county: {
            get() {
                return this.$store.state.booking.book.personal.county
            },
            set(value) {
                this.$store.commit('setCounty', value)
            }
        },
        phone: {
            get() {
                return this.$store.state.booking.book.contact.phone
            },
            set(value) {
                this.$store.commit('setPhone', value)
            }
        },
        email: {
            get() {
                return this.$store.state.booking.book.contact.email
            },
            set(value) {
                this.$store.commit('setEmail', value)
            }
        },

        // Verify
        verifyAppType() {
            if(this.type.length > 0) {
                if(this.stringRegex.test(this.type)) {
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
        verifyAppMake() {
            if(this.make.length > 0) {
                if(this.stringRegex.test(this.make)) {
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
        verifyAppIssue() {
            if(this.issue.length > 0) {
                if(this.stringRegex.test(this.issue)) {
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
        verifyFName() {
            if(this.fName.length > 0) {
                if(this.stringRegex.test(this.fName)) {
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
        verifyPostCode() {
            if(this.postCode.length > 0) {
                if(this.postCodeRegex.test(this.postCode)) {
                    this.dataApproved[4] = true
                    this.fieldError[4] = false
                    return true
                } else {
                    this.dataApproved[4] = false
                    return false
                }
            } else {
                this.dataApproved[4] = false
                return false
            }
        },
        verifyAddress() {
            if(this.address.length > 0) {
                if(this.stringRegex.test(this.address)) {
                    this.dataApproved[5] = true
                    this.fieldError[5] = false
                    return true
                } else {
                    this.dataApproved[5] = false
                    return false
                }
            } else {
                this.dataApproved[5] = false
                return false
            }
        },
        verifyTown() {
            if(this.town.length > 0) {
                if(this.stringRegex.test(this.town)) {
                    this.dataApproved[6] = true
                    this.fieldError[6] = false
                    return true
                } else {
                    this.dataApproved[6] = false
                    return false
                }
            } else {
                this.dataApproved[6] = false
                return false
            }
        },
        verifyCounty() {
            if(this.county.length > 0) {
                if(this.stringRegex.test(this.county)) {
                    this.dataApproved[7] = true
                    this.fieldError[7] = false
                    return true
                } else {
                    this.dataApproved[7] = false
                    return false
                }
            } else {
                this.dataApproved[7] = false
                return false
            }
        }, 
        verifyPhone() {
            if(this.phone.length > 0) {
                if(this.numberRegex.test(this.phone)) {
                    this.dataApproved[8] = true
                    this.fieldError[8] = false
                    return true
                } else {
                    this.dataApproved[8] = false
                    return false
                }
            } else {
                this.dataApproved[8] = false
                return false
            }
        }, 
        verifyEmail() {
            if(this.email.length > 0) {
                if(this.emailRegex.test(this.email)) {
                    this.dataApproved[9] = true
                    this.fieldError[9] = false
                    return true
                } else {
                    this.dataApproved[9] = false
                    return false
                }
            } else {
                this.dataApproved[9] = false
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
        bookRepair() {
            if(this.verifyData()) {
                // Approved
                // Reset errors
                this.fieldEmptyArray = []
                this.fieldError = [ false, false, false, false, false, false, false, false, false, false ]
                if(this.termsAccepted) {
                    this.errorMsg = false
                    console.log(this.$store.state.booking.book)
                    // Post results
                    axios.post('https://williamyallop.com/api/v1/anyrep/booking', {
                        booking: this.$store.state.booking.book
                    })
                    .then((response) => {
                        if(response.data.message === 'success') {
                            this.successMsg = 'Thank you for booking your appliance repair with Anyrep. A member of staff will contact you shortly to arrange a time and date.'
                        }
                    })
                    .catch((err) => {
                        this.errorMsg = 'There was an error submitting your booking, please contact us for your appliance repair instead. Sorry for the inconvenience!'
                    })
                } else {
                    this.errorMsg = 'You must agree to the terms and conditions before proceeding!'
                }
            } else {
                // Reset errors
                this.fieldEmptyArray = []
                this.fieldError = [ false, false, false, false, false, false, false, false, false, false ]

                // Not Approved
                if(!this.dataApproved[0]) {
                    this.fieldEmptyArray.push('Appliance Type')
                    this.fieldError[0] = true
                }
                if(!this.dataApproved[1]) {
                    this.fieldEmptyArray.push('Appliance Make')
                    this.fieldError[1] = true
                }
                if(!this.dataApproved[2]) {
                    this.fieldEmptyArray.push('Appliance Issue')
                    this.fieldError[2] = true
                }
                if(!this.dataApproved[3]) {
                    this.fieldEmptyArray.push('First Name')
                    this.fieldError[3] = true
                }
                if(!this.dataApproved[4]) {
                    this.fieldEmptyArray.push('Post Code')
                    this.fieldError[4] = true
                }
                if(!this.dataApproved[5]) {
                    this.fieldEmptyArray.push('Address')
                    this.fieldError[5] = true
                }
                if(!this.dataApproved[6]) {
                    this.fieldEmptyArray.push('Town')
                    this.fieldError[6] = true
                }
                if(!this.dataApproved[7]) {
                    this.fieldEmptyArray.push('County')
                    this.fieldError[7] = true
                }
                if(!this.dataApproved[8]) {
                    this.fieldEmptyArray.push('Phone')
                    this.fieldError[8] = true
                }
                if(!this.dataApproved[9]) {
                    this.fieldEmptyArray.push('Email')
                    this.fieldError[9] = true
                }
            }
        }
    }
}
</script>

<style scoped>
.compCon {
    padding-bottom: 80px;
}
.formContainer {
    width: 100%;
    padding: 30px;
    background-color: #FFFFFF;
    border: 1px solid #F6F6F6;
    border-radius: 20px;
}
.section {
    width: 100%;
    margin-bottom: 20px;
}
.section:last-child {
    margin-bottom: 0;
}
.sectionHeader {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.sectionNumberIcon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--secondary-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-weight: bold;
}
.sectionTitle {
    padding-left: 10px;   
}

/* Input Area */
.sectionBody {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.inputCol {
    width: calc(50% - 10px);
    margin-bottom: 10px;
} 
.inputCol label {
    font-size: 14px;
}
.requiredInput {
    color: var(--main-accent-color);
}
.inputStyle {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    background-color: #FDFDFD;
    border: 1px solid #ECECEC;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 5px;
} 
.inputBotMarg {
    margin-bottom: 10px;
}
.textareaStyle {
    width: 100%;
    height: calc(100% - 23px);
    padding: 10px;
    background-color: #FDFDFD;
    border: 1px solid #ECECEC;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 5px;
    resize: none;
}
.validationError:focus {
    border: 1px solid var(--main-accent-color)
}
.fieldError {
    border: 1px solid var(--main-accent-color)
}

.infoContainer {
    width: 100%;
    padding: 20px;
    background-color: var(--secondary-bg-color);
    border-radius: 10px;
    color: #FFF;
    margin-bottom: 20px;
}

/* Finish */
.finishContainer {
    width: 100%;
    border-radius: 10px;
    background-color: #F9F9F9;
    padding: 20px;
    margin-bottom: 10px;
}
.finishBody {
    width: 100%;
    max-width: 900px;
}
.boxTitle {
    font-weight: bold;
    margin-bottom: 5px;
}
.checkboxContainer {
    width: 100%;
    display: flex;
    align-items: center;
}
.checkboxContainer label {
    cursor: pointer;
}
.checkboxContainer input {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin-right: 10px;
    margin-top: -1px;
}
.checkboxContainer label a {
 text-decoration: none;
 color: var(--secondary-bg-color);
}
.checkboxContainer label a:hover {
    text-decoration: underline;
}
.termsError {
    margin-bottom: 20px;
    color: var(--main-accent-color);
}
.fieldErrorP {
    margin-bottom: 20px;
    color: var(--main-accent-color);
}
.bookSuccessP {
    margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
    .compCon {padding-bottom: 60px;}
}
@media only screen and (max-width: 650px) {
    .inputCol {width: 100%;}
}
</style>