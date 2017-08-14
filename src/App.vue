<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <ResumeEditor class="editor" v-on:preview="preview" />
      <ResumePreview class="preview" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import './assets/reset.scss'
import 'normalize.css/normalize.css'
import Topbar from './components/Topbar'
import ResumePreview from './components/ResumePreview'
import ResumeEditor from './components/ResumeEditor'
import icons from './assets/icons'
import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'
export default {
  name: 'app',
  store,
  created() {
    document.body.insertAdjacentHTML('afterbegin', icons)
    let state = localStorage.getItem('state')
    if (state) {
      state = JSON.parse(state)
    }
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
   
  },
  data: function () {
    return {
      previewMode: false
    }
  },
  components: {
    Topbar, ResumeEditor, ResumePreview
  },

  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    },
   
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothiing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}


#app main {
  min-width: 1024px;
  max-width: 1440px;
  background: white;
  display: flex;
  flex: 1;
  width: 100%;
  align-self: center;

  background: white;


  >.preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    border-radius: 4px;
    overflow: auto;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }
}

.editor {

  margin: 16px 8px 16px 16px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}

.previewMode>.topbar {
  display: none;
}

.previewMode .editor {
  display: none;
  width: 0em;
}

.previewMode .preview {
  max-width: 800px;
  margin: 32px auto;
  justify-content: space-between;
  width: 100%;
  align-self: center;
}

#exitPreview {
  display: none;
}

.previewMode #exitPreview {
  width: 100px;
  height: 50px;
  display: inline-block;
  position: fixed;
  right: 64px;
}

svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}
</style>
