<template>
    <div>
        <v-app-bar
            app
            fixed
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            :src="require('../assets/header/ray.jpg')"
            fade-img-on-scroll
            :key="templateKey"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>
            </template>

            <v-app-bar-nav-icon
                @click="isOpen = !isOpen"
                class="d-block d-sm-none"
                ref="icon"
            ></v-app-bar-nav-icon>

            <v-app-bar-title class="">
                NEHS-10th-3
            </v-app-bar-title>

            <v-spacer></v-spacer>
        
            <template
                v-if="!isNavigationIconShow()"
                v-slot:extension
            >
                <v-tabs
                    class="d-none d-sm-block"
                    align-with-title
                    grow
                    :value="tabIndex"
                >
                    <v-tab
                        v-for="tab in tabs"
                        :key="tab.name"
                        @click="changePath(tab.link)"
                    >
                        {{ tab.name }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <drawer v-model="isOpen"></drawer>
    </div>
</template>

<script>
import Drawer from './Drawer.vue'
export default {
    components: {
        Drawer 
    },
    props: {
        tabIndex: 0,
    },
    data: () => ({
        templateKey: 1,
        isOpen: false,
        tabs: [
            {
                name: 'HOME',
                link: '/home',
            },
            {
                name: 'EVENT',
                link: '/event',
            },
            {
                name: 'GALLERY',
                link: '/gallery',
            },
        ]
    }),
    methods: {
        isNavigationIconShow () {
            let velement = this.$refs.icon
            if(!velement) {
                return true;
            }
            let displayValue = window.getComputedStyle(velement.$el).display
            return displayValue == 'block'
        }
    },
    mounted() {
        this.templateKey += 1
    }
}
</script>

<style scope>
</style>