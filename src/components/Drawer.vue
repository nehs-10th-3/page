<template>
    <v-navigation-drawer
        :value="value"
        @input="$emit('input')"
        absolute
        temporary
    >
        <v-list-item>

            <v-list-item-avatar>
                <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Ha Ha is me</v-list-item-title>
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
                icon: "mdi-view-dashboard",
                title: "Home",
                link: "/home",
            },
            {
                icon: "mdi-view-dashboard",
                title: "Event",
                link: "/event",
            },
            {
                icon: "mdi-view-dashboard",
                title: "Gallery",
                link: "/gallery",
            }
        ]
    })
}
</script>

<style>

</style>