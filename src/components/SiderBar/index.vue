<script lang="ts" setup>
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'

import { useRoute } from 'vue-router'
import { routes } from '~/router/routes'

console.log(routes)

const route = useRoute()
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="route.path"
    text-color="#fff"
    class="va-menu"
    router
  >
    <template v-for="route in routes" :key="route.path">
      <el-menu-item v-if="route.children && route.children.length === 1" :index="route.children[0].path">
        <el-icon><IconMenu /></el-icon>
        <span>{{ route.children[0].meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-if="route.children && route.path !== '/'" :index="route.path">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item v-for="child in route.children" :key="child.path" :index="`${route.path}/${child.path}`">
          {{ child.meta.title }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
