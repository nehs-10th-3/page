<template>
    <v-row
        id="gallery-row"
        class="mt-5"
    >
        <v-spacer></v-spacer>
        <v-col sm="3" cols="12" class="py-0 px-3">
            <v-lazy
                v-for="index in segment"
                :key="index"
            >
                <v-img
                    id="gallery-img"
                    :src="images[index]"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img> 
            </v-lazy>
        </v-col>
        
        <v-col sm="3" cols="12" class="py-0 px-3">
            <v-lazy
                v-for="index in segment"
                :key="index"
            >
                <v-img
                    id="gallery-img"
                    :src="images[index + segment]"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img> 
            </v-lazy>
        </v-col>
        
        <v-col sm="3" cols="12" class="py-0 px-3">
            <v-lazy
                v-for="index in segment"
                :key="index"
            >
                <v-img
                    id="gallery-img"
                    :src="images[index + segment * 2]"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img> 
            </v-lazy>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
import router from '../js/router.js'
export default {
    data: () => ({
        images: [],
        eventName: router.currentRoute.params.eventName ? 
                        router.currentRoute.params.eventName : "default",
        context: null,
    }),
    methods: {

    },
    created() {
        this.context = require.context(`../assets/gallery`);
        this.context.keys()
            .filter(
                value => {
                    return value.includes(this.eventName)
                }
            )
            .forEach(
                value => {
                    this.images.push(this.context(value))
                }
            );
        // console.log(this.images)
    },
    computed: {
        segment() {
            return Math.round(this.images.length / 3);
        }
    }
}
</script>

<style scope>
#gallery-img {
    border-radius: 2px;
    margin-top: 3vh
}
#gallery-row {
    margin-left: 3vw;
    margin-right: 3vw;
}
</style>