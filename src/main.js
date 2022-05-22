import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import vuetify from './js/vuetify'

Vue.config.productionTip = false
let mixin = {
  created() {
    let route = router.currentRoute.path.split('/')[1];
    switch(route) {
      case 'home':
        this.$emit('index-change', 0); break;
      case 'event':
        this.$emit('index-change', 1); break;
      case 'gallery':
        this.$emit('index-change', 2); break;
    }
  },
  methods: {
    changePath(goToPath) {
      if(!goToPath) {
        return;
      }
      router.push(goToPath)
        .catch((error) => {
            if (error.name != "NavigationDuplicated") {
                throw error;
            }
        });
    },
  }, 
}

Vue.mixin(mixin)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
