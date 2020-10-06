<template>
    <div class="skeleton-box" :class="{ 'sidebarSkeletonStyle' : sidebarClass  }">

    </div>
</template>

<script>
export default {
  props: {
    sidebarClass: { type: Boolean },
  },
}
</script>

<style scoped>
.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #E9E9E9;
  height: 100%;
  width: 100%;
}
.dm .skeleton-box {
  background-color: #202125;
}

.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
  -webkit-animation: shimmer 2s infinite;
          animation: shimmer 2s infinite;
  content: "";
}
.dm .skeleton-box::after {
    background-image: linear-gradient(90deg, rgba(48, 50, 55, 0) 0, rgba(48, 50, 55, 0.2) 20%, rgba(48, 50, 55, 0.5) 60%, rgba(48, 50, 55, 0));
}
@-webkit-keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}

@media only screen and (min-width: 900.1px) {
  .dm .sidebarSkeletonStyle {background-color: #17171A;}
}
</style>