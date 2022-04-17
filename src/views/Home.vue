<template>
    <div id="my-container">
        <dragable-card></dragable-card>
    </div>
</template>

<script>
import DragableCard from '@/components/home/DragableCard.vue'
export default {
    name: 'Home',

    components: {
        DragableCard
    },
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/common.scss';
#my-container {
    height: 200vh;
    width: 100vw;
}
</style>
