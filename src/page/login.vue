<template>
  <div class="login-div">
      <div class="login-content">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="phone">
              <el-input v-model="ruleForm.phone" autocomplete="off" placeholder="您的手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="您的密码"></el-input>
            </el-form-item>
          </el-form>
          <button @click="login">登   录</button>
      </div>
      
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Login',
  props: {

  },
  components : {
    
  },
  mounted(){
    
  },
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      }else {
        callback();
      }
    };
    return{
      ruleForm: {
        pass: '',
        phone: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ]
      }
    }
    
  },
  methods: {
    login(){
      console.log(this.ruleForm);
      this.$router.push("/index");
    }
  }
}
</script>

<style lang="scss">
  .login-div {
    width: 100%;
    height: 100%;
    background-image: url("../assets/imgs/regback1.png");
    background-size: 100% 100%;
    padding: 200px 0px;
    .login-content {
      width: 380px;
      height: 200px;
      background-color: antiquewhite;
      margin: 0px auto;
      position: relative;
      padding: 30px 0px;
      .el-form {
        width: 340px;
        margin-left: -20px;
      }
      button {
        width: 300px;
        height: 40px;
        margin-top: 20px;
        outline: none;
        background-color: #ff9d00;
        color: #fff;
        font-size: 18px;
        font-weight: 800;
        border-radius: 4px;
      }
    }
  }
  .clearfix:after {
      content: ' ';
      height: 0;
      display: block;
      clear: both;
  }
</style>