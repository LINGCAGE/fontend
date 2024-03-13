<script setup>
    import { inject } from 'vue';

    const fun_login = inject('fun_login');
    function login_sure()
    {
        console.log("确认登录");
        fun_login();
    }
</script>

<template>
    <!--<div id="main" @click="event_login"></div>-->
    <div id="main">
        <div id="main_">
            <div id="main_head">用户登录</div>

            <div class="main_cin">
                <div id="ico_1"></div>
                <input type="text" placeholder="邮箱或账号" style="font-size: 20px;">
            </div>

            <div class="main_cin">
                <div id="ico_2"></div>
                <input type="password" placeholder="密码" style="font-size: 20px;">
            </div>

            <div id="two_buttons">
                <div class="button_1">注册</div>
                <div class="button_1" style="margin-left: 40px;">忘记密码</div>
            </div>

            <div id="button_2" @click="login_sure">登录</div>
            <div style="margin-top: 40px;width: 10px;"></div>
        </div>
    </div>
</template>

<style>
input {
  border: none;
  background: none;
  padding: 0;
  outline: none;
}

#main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#main_{
    width: 500px;
    background-color: #F2ECD9;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

#main_head{
    margin-top: 40px;
    font-size: 30px;
    color: #4D3833;
}
.main_cin{
    margin-top: 40px;
    width: 420px;
    height: 45px;
    box-shadow: 0 0 10px #aaa;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
}

#ico_1{
    margin-left: 10px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../../public/email.svg");
}

#ico_2{
    margin-left: 10px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../../public/key.svg");
}

#two_buttons{
    margin-top: 40px;
    display: flex;
}

.button_1{
    background-color: #4D3833;
    height: 45px;
    width: 190px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 20px;
}

#button_2{
    margin-top: 40px;
    background-color: #4D3833;
    height: 45px;
    width: 420px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 20px;
}
</style>