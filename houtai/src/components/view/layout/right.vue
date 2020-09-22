<template>
  <div class="right">
    <!-- <h1>右侧主体</h1> -->
    <Content></Content>
  </div>
</template>

<script>
import Header from "./header";
import Content from "./content";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Content,
  },
  
};
</script>

<style  scoped=''>
.right {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}

</style>