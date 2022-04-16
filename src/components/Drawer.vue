<template>
    <v-navigation-drawer
        app
        :value="value"
        @input="$emit('input')"
        temporary
    >
        <v-list-item>
            
            <v-list-item-avatar>
                <v-icon>mdi-navigation-variant-outline</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Navigator</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                @click="changePath(item.link)"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
        }
    },
    data: () => ({
        items: [
            {
                icon: "mdi-home",
                title: "Home",
                link: "/home",
            },
            {
                icon: "mdi-calendar-clock",
                title: "Event",
                link: "/event",
            },
            {
                icon: "mdi-image-multiple",
                title: "Gallery",
                link: "/gallery",
            }
        ]
    })
}
</script>

<style>

</style>