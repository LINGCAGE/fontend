<template>
    <div style="z-index: 100;width: 1000px;">
      <div v-html="htmlContent"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        htmlContent: ''
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get("http://localhost:5174/search/banana?dict_num=0");
          this.htmlContent = response.data.answer;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    },
    mounted() {
      this.fetchData();
    }
  };
  </script>

  

<!--async function register()
{
  const url = apiUrl + "/server/api/register";
  let response;
  try{
    const response_ = await axios.post(url,{
      username: username,
      email: email,
      password: password
    });
    response = response_.data.status;
    console.log(response);
  }
  catch (error) {
    // 处理错误
    console.error("error!!!");
  }
}-->