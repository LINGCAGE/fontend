<script>//seas：这里改<script setup>
  import { mapMutations } from "vuex";
  export default {
  name: "Login",
  data: function () {
    return {
      loginForm: {
        account: "",
        passWord: "",
      },
      loginRules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    ...mapMutations(["changeLogin"]),
    submitForm() {
      const userAccount = this.loginForm.account;
      const userPassword = this.loginForm.passWord;
      if (!userAccount) {
        return this.$message({
          type: "error",
          message: "账号不能为空！",
        });
      }
      if (!userPassword) {
        return this.$message({
          type: "error",
          message: "密码不能为空！",
        });
      }
      console.log("用户输入的账号为：", userAccount);
      console.log("用户输入的密码为：", userPassword);

    },
  },
};
</script>

<template>
  <div class="login">
    <div class="mylogin" align="center"><!--seas：这里align和center用style="justify-content: center;align-items: center;-->
      <center>
        <div id="yonghudenglu">
          <h1>用户登录</h1>
        </div>
      </center>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
        <div class="input">
          <el-form-item label="" prop="account" style="margin-top: 10px">
            <el-row>
              <el-col :span="2">
                <span class="el-icon-s-custom"></span>
              </el-col>
              <el-col :span="22">
                <el-input class="inps" placeholder="邮箱或ID" v-model="loginForm.account">
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="passWord">
            <el-row>
              <el-col :span="2">
                <span class="el-icon-lock"></span>
              </el-col>
              <el-col :span="22">
                <el-input class="inps" type="password" placeholder="密码" v-model="loginForm.passWord"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </div>
        <el-form-item style="margin-top: 55px">
          <el-button type="primary" round class="submitBtn" @click="submitForm"><button id="denglu">登录</button>
        </el-button>
      </el-form-item>

        <div class="unlogin">
          <router-link :to="{ path: '/forgetpwd' }"><button id="wangji">忘记密码</button> </router-link>
          <router-link :to="{ path: '/register' }">
            <a href="register.vue" target="_blank" align="right"><button id="zhuce">注册</button></a>
          </router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style>
.login {
  width: 400px;
  height: 500px;
  background-color: #F2ECD9;
  position: fixed;
  bottom: 200px;
  left: 750px;
  border-radius: 10px;

}

#yonghudenglu {
  color: #000000;
  position: fixed;
  top: 250px;
  left: 890px;
}

.input {
  position: fixed;
  left: 800px;
  top: 320px;

}

#kuang1 {
  height: 40px;
  width: 280px;
  border-radius: 10px;
  box-shadow: 3px 2px 10px #000000;
  background-color: #F2ECD9;

}

#kuang2 {
  height: 40px;
  width: 280px;
  border-radius: 10px;
  box-shadow: 3px 2px 10px #000000;
}

#zhuce {
  color: aliceblue;
  background-color: #4D3833;
  position: fixed;
  left: 800px;
  top: 500px;
  height: 40px;
  width: 120px;
  border-radius: 10px;
}

#wangji {
  color: aliceblue;
  background-color: #4D3833;
  position: fixed;
  left: 960px;
  top: 500px;
  height: 40px;
  width: 120px;
  border-radius: 10px;
}

#denglu {
  color: aliceblue;
  background-color: #4D3833;
  position: fixed;
  left: 800px;
  top: 580px;
  height: 40px;
  width: 280px;
  border-radius: 10px;
}

.inps input {
  border: none;
  color: #fff;
  background-color: transparent;
  font-size: 12px;
}

.submitBtn {
  background-color: transparent;
  color: #39f;
  width: 200px;
}</style>
