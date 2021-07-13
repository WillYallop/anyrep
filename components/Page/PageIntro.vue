<template>
    <div class="compCon evenPad">
        <div class="compWrap globWrap">
            <div class="introCon">
                <h2 class="componentTitle">{{title}}</h2>
                <p class="subHeadingHighlight">{{subTitle}}</p>
                <p class="componentBody">{{body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        subTitle: String,
        body: String

    },
    methods: {

    }
}
</script>

<style scoped>
.introCon {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--even-bg-box-color);
    border-radius: 20px;
    padding: 30px;
}
.subHeadingHighlight {
    color: var(--even-bg-highlight-text);
    font-size: 14px;
    margin: 10px 0 20px;
    font-weight: bold;
}

</style>