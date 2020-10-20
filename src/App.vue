<template>
  <Header />
  <router-view></router-view>
</template> 

<script>
import styleVariables from './assets/css/variables.css';
import stylePrototype from './assets/css/prototype.css';
import styleTypography from './assets/css/typography.css';
import styleCommon from './assets/css/common.css';
import normalizeCSS from './assets/css/normalize.css';

import Portfolio from './components/Portfolio.vue';
import About from './components/About.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Portfolio,
    About,
    Header
  }
}

</script>
