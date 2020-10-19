<template>
  <div class="container-centered">
    <router-view></router-view>
  </div>
</template> 

<script>
import styleVariables from './assets/css/variables.css'
import styleCommon from './assets/css/common.css'
import normalizeCSS from './assets/css/normalize.css'

import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Portfolio,
    About
  }
}

</script>
