<template>
    <div class="formContainer">
        <div class="formInner">
            <label for="appType" class="hideLabel">Appliance Type</label>
            <select id="appType" class="selectStyle">
                <option value="1">Choose the appliance type</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label for="appMake" class="hideLabel">Appliance Make</label>
            <select id="appMake" class="selectStyle">
                <option value="1">Choose the appliance make</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label for="appModel" class="hideLabel">Appliance Model</label>
            <select id="appModel" class="selectStyle">
                <option value="1">Choose the appliance model</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label for="appBody" class="hideLabel">What's the issue</label>
            <textarea id="appBody" class="textareaStyle" placeholder="What's the issue"></textarea>
            <button class="btnStyle1">Get Quote</button>
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