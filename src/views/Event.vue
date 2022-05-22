<template>
    <div>
        <v-timeline
            id="event-timeline"
        >
            <v-timeline-item
                v-for="(event, i) in events"
                class="py-0 mb-9"
                :key="i"
                :color="event.color"
                small
                right
            >
                
                <v-card
                    
                    class="py-3 px-1 mr-5"
                    @click="handleClick(event)"
                >
                    <v-card-title class="ml-3">
                        <h2 :class="`headline font-weight-light ${event.color}--text`">
                            {{ event.title }}
                        </h2>
                    </v-card-title>

                    <v-card-subtitle class="mt-1 mb-3 ml-3">
                        <h4 :class="`font-weight-light ${event.color}--text`">
                            {{ event.date }}
                        </h4>
                    </v-card-subtitle>

                    <v-card-text class="ml-3">
                        <div
                            id="event-timeline-content"
                            v-html="event.content"
                        >
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
        events: require('../assets/events.json'),
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
    margin-top: 5vh;
}

#event-timeline-content {
    width: 90%;
}
</style>