<template>
  <div class="register">
    <div class="reg-content">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Register',
  props: {

  },
  components : {
    
  },
  mounted(){
    
  },
  data(){
    var checkPhone = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('手机号不能为空'));
        }else{
            callback();
        }
    };
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
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };
    return{
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
    }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!'+formName);
            this.$router.push("/login");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss">
  .register {
    background-image: url("../assets/imgs/regback2.png");
    background-size: 100% 100%;
    padding: 200px 0px;
    .reg-content {
        width: 400px;
        margin: 0 auto;
        padding: 30px 20px 10px;
        background-color: beige;
        border-radius: 4px;
    }
    .el-form {
        width: 400px;
        margin-left: -20px;
    }
  }
  .clearfix:after {
      content: ' ';
      height: 0;
      display: block;
      clear: both;
  }
</style>