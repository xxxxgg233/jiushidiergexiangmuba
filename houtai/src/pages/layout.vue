<template>
  <div class="wrap">
    <!-- <h1>这是主页面</h1> -->
    <el-container class="page">
      <el-aside :width="iscollapse ? '64px':'220px'" class="page-nav">
        <Left title="左侧菜单"></Left>
      </el-aside>
      <el-container class="page-content">
        <el-header class="page-header">
          <Header></Header>
        </el-header>
        <el-container>
          <el-main class="page-main">
            <Right></Right>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script >
import Left from "../components/view/layout/left";
import Right from "../components/view/layout/right";
import Header from "../components/view/layout/header";
import { mapState } from "vuex"

export default {
  data() {
    return {
      // iscollapse: false
    };
  },
  computed: {
    ...mapState(["iscollapse"]),
  },
  components: {
    Left,
    Right,
    Header,
  },
  methods: {},
};
</script>

<style scoped>
/* .wrap {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.left {
  width: 300px;
  background: lightblue;
  height: 100vh;
}
.right {
  flex: 1;
  height: 100vh;
  background: lightslategrey;
} */
.page {
  width: 100vw;
  height: 100vh;
}
.page-nav {
  height: 100%;
  background-color: #444;
}
.page-content {
  height: 100%;
  background-color: #f7f7f7;
}
.page-header {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
</style>