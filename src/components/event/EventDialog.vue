<template>
    <div>
        <v-dialog
            :value="value"
            @input="$emit('input')"
            width="600px"
            class="zindex-tool"
        >            
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{ description.title }}</span>
                </v-card-title>
                <v-card-text>
                    {{ description.content }}
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="$emit('input')"
                    >
                        OK
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false; changePath(description.link)"
                    >
                        See Photo
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
    }),
    props: {
        description: Object,
        value: Boolean,
    }
}
</script>

<style>

</style>