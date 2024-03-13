<template>
  <el-input
    v-model="input"
    type="password"
    placeholder="密码"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
