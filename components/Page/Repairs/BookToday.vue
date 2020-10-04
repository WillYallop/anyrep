<template>
    <div class="bookCon compCon">
        <div class="compWrap globWrap oddPad">
            <div class="bookComp">
                <GetQuote/>
            </div>
            <div class="textareaCol">
                <div class="textarea">
                    <h4 class="componentTitle">{{title}}</h4>
                    <h5 class="subHeadingHighlight">{{subTitle}}</h5>
                    <p :key="text.id" v-for="text in body" class="componentBody">{{text.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Components
import GetQuote from '@/components/Page/GetQuote'

export default {
    data() {
        return {

        }
    },
    props: {
        title: String, 
        subTitle: String,
        body: Array
    },
    components: {
        GetQuote
    }
}
</script>

<style scoped>
.bookCon {
    width: 100%;
    display: flex; 
    background-color: var(--main-bg-color);
}
.bookComp {
    width: 45%;
}
.textareaCol {
    width: 55%;
    padding-left: 40px;
}
.textarea {
    margin-top: 40px;
    background-color: var(--main-bg-box-color);
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 10px;
}
.subHeadingHighlight {
    color: var(--highlight-text);
    font-size: 14px;
    margin: 10px 0 20px;
}
.componentBody:last-child {
    margin-top: 10px;
}

@media only screen and (max-width: 768px) {
    .compWrap {flex-wrap: wrap-reverse;}
    .bookComp {width: 100%;}
    .textareaCol {width: 100%; padding-left: 0;}
    .textarea {margin: 0 0 40px;}
}
</style>