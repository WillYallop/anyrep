<template>
    <div class="formContainer">
        <div class="formInner">
            <label for="appType2" class="hideLabel">Appliance Type</label>
            <input id="appType2" class="selectStyle" placeholder="Appliance Type" v-model="type">
            <label for="appMake2" class="hideLabel">Appliance Make</label>
            <input id="appMake2" class="selectStyle" placeholder="Appliance Make" v-model="make">
            <label for="appModel2" class="hideLabel">Appliance Model</label>
            <input id="appModel2" class="selectStyle" placeholder="Appliance Model" v-model="model">
            <label for="appBody2" class="hideLabel">What's the issue</label>
            <textarea id="appBody2" class="textareaStyle" placeholder="What's the issue" v-model="issue"></textarea>
            <button class="btnStyle1" v-on:click="bookRepair">Book Repair</button>
        </div>

        <div class="tabletBtnsCon">
            <div class="speakerGrill"></div>
            <div class="homeBtn"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: '',
            make: '',
            model: '',
            issue: ''
        }
    },
    methods: {
        bookRepair() {
            if(this.type.length > 0) {
                this.$store.commit('setAppType', this.type)
            }
            if(this.make.length > 0) {
                this.$store.commit('setAppMake', this.make)
            }
            if(this.model.length > 0) {
                this.$store.commit('setAppModel', this.model)
            }
            if(this.issue.length > 0) {
                this.$store.commit('setAppIssue', this.issue)
            }

            this.$router.push('/book')
        }
    }
}
</script>

<style scoped>
.formContainer {
    position: relative;
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
.btnStyle1 {
    width: 100%;
    margin-top: 20px;
}
.btnStyle1:hover {
    transform: scale(1.05);
}
</style>