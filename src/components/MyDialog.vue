<template>
  <div class="dialogwrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
        <i class="el-icon-close" @click="close"></i>
      </header>
      <body>
        <slot></slot>
      </body>
    </div>
  
  </div>
</template>
<script>
export default {
  name: 'MyDialog',
  props: ['title', 'visible'],
  methods: {
    close() {
      this.$emit('close')
    }
  }

}
</script>
<style lang="scss" scoped>
.dialogwrapper{
  position: fixed;
  background: hsla(0,0%, 0%, 0.25);
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center; 
 
}
.dialog{
  background: white;
  min-height: 16em;
  min-width: 24em;
  max-width: 24em;
  max-height: 32em;
  >header{
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }
  >body{
    padding: 16px;
    max-width: 25em;
  }
}
</style>

