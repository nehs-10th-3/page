import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import vuetify from './js/vuetify'

Vue.config.productionTip = false
let mixin = {
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
