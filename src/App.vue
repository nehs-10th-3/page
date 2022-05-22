<template>
  <v-app>
    <Header
      :tabIndex="tabIndex"
    ></Header>
    <v-main id="background">
        <v-container fluid>
            <router-view @index-change="setIndex"></router-view>
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
      tabIndex: 0,
    }),
    methods: {
      setIndex(value) {
        if(value) {
          this.tabIndex = value;
        }
      }
    }
};
</script>

<style scoped lang='scss'>
@import 'assets/scss/common.scss';
.container {
  padding: 0px;
}
</style>
