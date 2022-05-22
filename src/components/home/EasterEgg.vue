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
                    <span class="text-h5">班級歷史上的今天</span>
                </v-card-title>
                <v-card-subtitle class="mt-1">
                    {{ title }}
                </v-card-subtitle>

                <v-card-text v-html="content">
                    
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
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        value: false,
    },
    data: () => ({
        events: require('../../assets/events.json')
    }),
    created() {
        this.events = this.events.filter( event => {
            let today = new Date();
            let eventDate = new Date(Date.parse(event.date));

            return today.getMonth() === eventDate.getMonth() && today.getDate() === eventDate.getDate();
        })
        // console.log(this.events)
    },
    computed: {
        title() {
            if(this.events[0]) {
                return this.events[0].title;
            } else {
                return "";
            }
        },

        content() {
            if(this.events[0]) {
                return this.events[0].content;
            } else {
                return "今天甚麼事都沒有:)<br>改天再來看看吧~";
            }
        }
    }
}
</script>

<style>

</style>