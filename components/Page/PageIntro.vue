<template>
    <div class="compCon evenPad">
        <div class="compWrap globWrap">
            <div class="introCon">
                <h2 class="componentTitle">{{title}}</h2>
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
}
</style>