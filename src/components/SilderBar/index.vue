<script lang="ts" setup>
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'

import { routes } from '~/router/routes'
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="/"
    text-color="#fff"
    class="va-menu"
    router
  >
    <template v-for="route in routes" :key="route.path">
      <el-menu-item v-if="!route.children" :index="route.path">
        <el-icon><IconMenu /></el-icon>
        <span>{{ route.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="route.children" :index="route.path">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>{{ route.name }}</span>
        </template>
        <el-menu-item v-for="child in route.children" :key="child.path" :index="route.path + child.path">
          {{ child.name }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
