<template>
    <div class="slantContainer">

    </div>
</template>

<style scoped> 
.slantContainer {
    background-color: var(--main-bg-color);
    height: 150px;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 0% 100%);
    position: relative;
    z-index: 0;
}
@media only screen and (max-width: 868px) { 
    .slantContainer {height: 100px;}
}
</style>