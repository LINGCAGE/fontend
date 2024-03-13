<script setup>
  import {ref,computed} from "vue";
  import { useRouter } from 'vue-router';

  import { provide } from 'vue';

  const router = useRouter()

  let account = ref("账号");
  //存储账号名称

  let login = ref(false);
  //先预设为未登录


  const is_login_nav = computed(() => {
    return login.value ? "#fff" : "#aaaaaa";
  })//控制侧边栏字样的颜色

  //路由跳转
  const search_ = () => {
  router.push('/search')
  }
  const log_ =() =>{
    router.push('/log_')
  }

  provide('fun_login', () => {login.value = true});
</script>

<template>
  <div id = "bac_"></div>
  <div class="student" ></div>
  
  <div class="root">
    <div class="head">
      <div class="left">
        <img src="/public/book1.svg" alt="" class="book1">
        <div class="title">学生在线单词本</div>
      </div>
      <div class="right">
        <img src="/public/img.png" alt="" class="people">
        <div class="account">{{login ? account + "（已登录）": "账号（未登录）" }}</div>
      </div>
    </div>

    <div class="root_2">
      <div class="nav">
        <div style="height: 200px;"></div><!--最上方留点空格-->

        <div class="nav_" style="color: #fff" @click="log_">账号管理</div>
        <div class="nav_" style="color: #fff" @click="search_">单词查找</div>

        <div :style="{color : is_login_nav}" class="nav_ nav_top">单词本管理</div>
        <div :style="{color : is_login_nav}" class="nav_">单词抽查</div>
        <div :style="{color : is_login_nav}" class="nav_">单词听写</div>
        <div :style="{color : is_login_nav}" class="nav_">大家的单词本</div>
        
        <div :style="{color : is_login_nav}" class="nav_ nav_top">句子翻译</div>
        <div :style="{color : is_login_nav}" class="nav_">句子翻译练习</div>
      </div>

      <div id="content" style="z-index: 100;overflow-y: scroll;"><!--主要的内容区，所有的页面内容以组件形式插入到这里-->
        <!--<LTB_login @do_login_="() => {login = !login}"/>-->
        <router-view></router-view>
        
      </div>
      
    </div>
  </div>
</template>

<style scoped>
  *{
      margin: 0;
      border: 0;
      padding: 0;
  }
  .root{
      width: 100vw;
      height: 100vh;
      z-index: 0;
      background: url("/public/base_background.jpg");
      background-size: cover;

      /*----------- */
      display: grid;
      grid-template-rows: 70px auto;
  }
  #bac_{
      position: fixed;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      background-color: rgba(256,256,256, 0.5);
  }
  .head{
      width: 100vw;
      height: 70px;
      z-index: 3;
      background-color: #4D3833;
      display: flex;
      justify-content: space-between;
  }
  .left{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
  }
  .right{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
  }
  .book1{
      height: 45px;
  }
  .title{
      margin: 15px;
      color: #fff;
      font-size:30px;
  }
  .people{
      height: 30px;
      margin-right: 20px;
  }
  .account{
      color: white;
      font-size:larger ;
      margin-right: 20px;
  }

  .root_2{
    display: grid;
    grid-template-columns: 300px auto;
    overflow-y: hidden;
  }

  .nav{
      width: 300px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      background-color: #7D5C55;
      overflow: auto;
      overflow-x: hidden;
  }
  .nav_{
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      width: 260px;
      font-size: 27px;
      font-weight: 100;
  }
  .nav_top{
      border-top: 1px solid #ffffff;
      padding-top: 20px;
  }
  .student{
      width: 300px;
      height: 300px;
      z-index: 2;
      position: fixed;
      left: 300px;
      bottom: 0;
      background-image: url("/public/img_1.png");
      background-size: contain;
  }
</style>