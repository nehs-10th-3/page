<template>
    <div id="my-container">
        <v-img
            src="@/assets/home/changeGift.jpg"
            max-width="90%"
            class="ml-auto mr-auto mt-6 rounded"
        ></v-img>

        <h3 class="text-center">
            <br>
            茫茫人海中，能夠遇見你們<br>
            或許<br>
            就是最幸運的一件事<br>
        </h3>
        <h4 class="text-center">--賴渝沛<br><br></h4>

        <v-row>
            <v-btn
                icon
                class="ml-auto mr-auto"
            >
                <v-icon>mdi-emoticon-outline</v-icon>
            </v-btn>
        </v-row>
        
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
