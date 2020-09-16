<template>
  <div>
    <el-row class="login_bg">
      <el-col :span="8" class="login-box">
        <div class="grid-content bg-purple-dark">
          <h3>ABCD后台管理系统</h3>
          <el-form :model="forminfo" ref="form" >
            <el-form-item >
              <el-input v-model="forminfo.username" placeholder="请输入账号">
                  <template slot="prepend">
                    <i class="el-icon-user"></i>
                  </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="forminfo.password" show-password placeholder="请输入密码">
                  <template slot="prepend">
                    <i class="el-icon-lock"></i>
                  </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary" @click="submit">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    data(){
        return{
           forminfo:{
             username:"aaabbb",
             password:"aaabbb"
           },
           rules:{
              username:[{required:true,message:"必填！",trigger:'blur'}],
              password:[{required:true,message:"必填！",trigger:'blur'}],
           }
        }
    },
    created(){},
    methods:{
       ...mapActions({
         login:"user/login"
       }),
       submit(){
         this.$refs.form.validate(valid=>{
           if(valid){
              this.login(this.forminfo)
           }
         })
       }
    },
    components:{}
}
</script>

<style  scoped>
.login_bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/111.jpg) no-repeat 0 0;
  background-size: 100% 100%;
}
.login-box{
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.2);
  padding: 30px 40px;
  border-radius: 5px;
  border:1px solid #eee;
}
.login-box h3{
  line-height: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.login-btn{
  display: block;
  width: 100%;
}
</style>