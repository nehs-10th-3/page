<template>
    <div>
        <v-timeline id="event-timeline">
            <v-timeline-item
                v-for="(event, i) in events"
                :key="i"
                :color="event.color"
                small
                right
            >
                
                <v-card
                    
                    class="py-3 px-1 mr-5"
                    @click="handleClick(event)"
                >
                    <v-card-title>
                        <h2 :class="`headline font-weight-light ${event.color}--text`">
                            {{ event.title }}
                        </h2>
                    </v-card-title>

                    <v-card-subtitle>
                        <h4 :class="`font-weight-light ${event.color}--text`">
                            {{ event.date }}
                        </h4>
                    </v-card-subtitle>

                    <v-card-text>
                        <div id="event-timeline-content">
                            {{ event.content }}
                        </div>
                    </v-card-text>
                </v-card>

            </v-timeline-item>
        </v-timeline>
        
        <event-dialog 
            v-model="dialog"
            :description="dialogContent"
        ></event-dialog>
    </div>
</template>

<script>
import EventDialog from '@/components/event/EventDialog.vue'
export default {
  components: { EventDialog },
    data: () => ({  
        dialog: false,
        dialogContent: {},
        events: [
            {
                color: 'cyan',
                date: '1960',
                title: 'Lollipop',
                content: 'delicious',
            },
            {
                color: 'green',
                date: '1970',
                title: 'OK',
                content: 'Ha',
            },
            {
                color: 'pink',
                date: '1980',
                title: 'Good job!',
                content: 'umnnn',
            },
            {
                color: 'amber',
                date: '2022-4-12',
                title: '分科仔模考',
                content: '妳各位加油',
            },
            {
                color: 'orange',
                date: '2022-4-8',
                title: '運動會',
                content: '拉拉拉ㄌ拉',
            },
        ],
    }),
    methods: {
        handleClick (event) {
            this.dialog = !this.dialog
            this.dialogContent = event
        }
    }
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/common.scss';

#event-timeline {
    margin-left: -70vw;
}

#event-timeline-content {
    width: 90%;
}
</style>