<template>
    <div class="slantContainer">

    </div>
</template>

<style scoped> 
.slantContainer {
    background-color: var(--main-bg-color);
    height: 100px;
    width: 100%;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
    position: relative;
    z-index: 0;
}

@media only screen and (max-width: 768px) { 
    .slantContainer {height: 80px;}
}
</style>