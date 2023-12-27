<script lang="ts" setup>
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'

function handleOpen() {
}
function handleClose() {
}
</script>

<template>
  <el-menu
    default-active="2"
    class="va-menu"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="4">
      <el-icon><IconMenu /></el-icon>
      <span>dashboard</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">
          item one
        </el-menu-item>
        <el-menu-item index="1-2">
          item two
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>
          item four
        </template>
        <el-menu-item index="1-4-1">
          item one
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>
