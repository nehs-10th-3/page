<template>
  <v-app>
    <Header></Header>
    <v-main id="background">
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
    name: 'App',

    components: { 
        Header,
    },

    data: () => ({
    
    }),
};
</script>

<style scoped lang='scss'>
@import 'assets/scss/common.scss';
.container {
  padding: 0px;
}
</style>
