<template>
  <router-view></router-view>
</template> 

<script>
import styleVariables from '../public/css/variables.css';
import stylePrototype from '../public/css/prototype.css';
import styleTypography from '../public/css/typography.css';
import styleCommon from '../public/css/common.css';
import normalizeCSS from '../public/css/normalize.css';

import Portfolio from './components/Portfolio.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Portfolio,
    About
  }
}

</script>
