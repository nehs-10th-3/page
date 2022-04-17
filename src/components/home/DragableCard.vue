<template>
    <div 
        id="dragable-card"
        :style="{ 'top': `${top}` }"
        @touchstart="touchStart"
        @touchmove="touchMove"    
    >
        <v-divider id="dragable-card-divider"></v-divider>
    </div>
</template>

<script>
export default {
    
    data: () => ({
        previousY: 0,
        top: '90vh',
        topValue: 90,
        deltaY: 0,
        rawY: 0,
    }),

    mounted() {
        this.rawY = this.vh(90);
    },

    methods: {
        vh(v) {
            let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return (v * h) / 100;
        },

        clamp(num, min, max) {
            return Math.min(Math.max(num, min), max);
        },

        touchStart(event) {
            this.previousY = event.touches[0].clientY
        },

        touchMove(event) {
            event.preventDefault();

            if(this.top === '90vh') {
                this.topValue = event.touches[0].clientY;
            } else {
                this.deltaY += (event.touches[0].clientY - this.previousY);
                this.deltaY = this.clamp(this.deltaY, -380, 0);
                this.topValue += (event.touches[0].clientY - this.previousY);
                this.previousY = event.touches[0].clientY;
            }

            if(this.deltaY <= -380) {
                this.topValue = this.rawY - 380;
                return;
            }

            if(this.deltaY >= 0) {
                this.topValue = this.rawY;
            }

            this.top = this.topValue + 'px'
        }
    }
}
</script>

<style scoped>
#dragable-card {
    background: #6a76ab;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    opacity: 90%;
    top: 90vh;
    height: 450px;
    position: fixed;
    width: 100vw;
}

#dragable-card:hover {
    opacity: 100%;
}

#dragable-card-divider {
    background: #ffffff;
    border-width: thick 0 0 0;
    border-radius: 3px;
    margin: 4.5vh auto;
    width: 25vw;
}
</style>