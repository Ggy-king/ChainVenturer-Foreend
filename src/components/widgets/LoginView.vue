<!-- 登录组件 -->
<script setup lang="ts">
import { reactive } from 'vue'
import { loginFromStore } from '@/stores'

// ----------调控login组件中from是否显示
// 控制组件的显隐我给定到pinia中了
const loginFrom = loginFromStore()

// -----------登录相关内容
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

</script>

<template>
    <el-dialog v-model="loginFrom.loginFormVisible" title="Shipping address" width="500">
        <el-form :model="form">
          <el-form-item label="Promotion name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Zones" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai" />
              <el-option label="Zone No.2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>

        
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="loginFrom.changeLoginVisible(false)">Cancel</el-button>
            <el-button type="primary" @click="loginFrom.changeLoginVisible(false)">
              Confirm
            </el-button>
          </div>
        </template>
    </el-dialog>
</template>

<style scoped lang="scss">

</style>