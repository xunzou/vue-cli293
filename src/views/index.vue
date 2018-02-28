<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank">
                    Core Docs
                </a>
            </li>
            <li>
                <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
                    Docs for This Template
                </a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">
                    vue-router
                </a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">
                    vuex
                </a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">
                    vue-loader
                </a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">
                    awesome-vue
                </a>
            </li>
        </ul>

        <h2>Links</h2>
        <ul>
            <li>
                <router-link :to="{name:'login'}">Login</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  //计算
  computed: {},
  //dom 加载完后执行
  mounted: function(){
      
  },
  //方法
  methods: {}
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>