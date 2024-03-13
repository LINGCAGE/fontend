<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  
  /*后端的服务器地址 要查找的单词 词典编号 用户名 密码 优香*/
  let apiUrl = 'http://localhost:5174';
  let entry = "value";
  let dict_num = 1;
  let cout = ref("gfdgfdhgkjhk");

  let is_menu_visable = ref(false);


  const dic_list = ["21世纪大英汉词典","柯林斯COBUILD高阶\n英汉双解学习词典","牛津高阶英汉\n双解词典第9版","韦氏高阶学习词典","现代汉英综合大辞典","新汉英大辞典","音标与发音库集合"];

  /*搜索单词的函数，点击单词页面的“查找单词”按钮调用*/
  async function search_word()
  {
    //输入单词
    let inputElement = document.getElementById("top1");
    entry = inputElement.value;

    const url = apiUrl + "/search/" + entry + "?dict_num=" + dict_num;
    let response;
    try{
      const response_ = await axios.get(url);
      response = response_.data.answer;
      if(response === "没查到哎宝宝")
      {
        //没查到
        console.log("没输出");
        cout = ref('<div style="font-size: 16px">没查到哎宝宝</div>');
        //以下使用element.insertAdjacentHTML
        let outcome_ = document.getElementById("outcome_");
        outcome_.innerHTML = ' ';
        outcome_.insertAdjacentHTML('beforeend', cout.value);
      }
      else
      {

        //----------施工保护区start
        console.log("有输出");
        cout = ref(response);
        //----------施工保护区end

        //以下使用element.insertAdjacentHTML
        //原生，启动！
        let outcome_ = document.getElementById("outcome_");
        outcome_.innerHTML = ' ';
        outcome_.insertAdjacentHTML('beforeend', cout.value);
      }
    }
    catch (error) {
      console.error("error!!!");
    }
  }
</script>

<template>

  <div id="main">
    <div id="main_top">
      <input type="text" id="top1">

      <div id="top2" @click="() => {is_menu_visable = !is_menu_visable}">
        <div id="menu" v-if="is_menu_visable">
        </div>
      </div>

      <button id="top3" @click="search_word">查找</button>
    </div>

    <div id="main_bu">
      <div id="outcome">
        <!--<div v-html="cout"></div>-->
        <div id="outcome_"></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style>
  #main{
    z-index: 100;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 240px auto;
  }

  #main_top{
    padding: 80px;
    display: grid;
    grid-template-columns: auto 320px 120px;
    column-gap: 80px;
    position: relative;
  }

  #top1{
    background-color: #F2ECD9;
    border-radius: 10px;
    font-size: 30px;
    border: none;
    padding-left: 30px;
    height: 80px;
  }

  #top2{
    background-color: #F2ECD9;
    border-radius: 10px;
    border: 1px solid black;
    position: relative;
    height: 80px;
  }

  #menu{
    position: relative;
    top: 80px;
    height: 480px;
    background-color: #F2ECD9;
    width: 320px;
    border: 1px solid black;
    border-radius: 10px;
  }

  #top3{
    height: 80px;
    background-color: #7D5C55;
    border-radius: 10px;
    font-size: 35px;
    font-weight: 300;
    color: white;
  }
  #top3:hover{
    cursor: pointer;
  }

  #main_bu{
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 80px;
  }

  #outcome{
    margin-left: 80px;
    margin-right: 80px;
    padding: 50px;
    background-color: #F2ECD9;
    border-radius: 10px;
    overflow-y:visible;
  }
</style>