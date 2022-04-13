<template>
    <div>
        <v-app-bar
            app
            fixed
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
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
                ref="navIcon"
            ></v-app-bar-nav-icon>

            <v-app-bar-title>
                NEHS-10th-3
            </v-app-bar-title>

            <v-spacer></v-spacer>
        
            <template 
                v-slot:extension
            >
                <v-tabs
                    class="d-none d-sm-block"
                    align-with-title
                    grow
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
    data: () => ({
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
}
</script>

<style scope>

</style>