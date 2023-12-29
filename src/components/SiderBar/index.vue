<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { routes } from '~/router/routes'

const route = useRoute()

console.log(route);

import {useSettingsStore} from '~/stores/settings';

const store = useSettingsStore()
console.log(store);


</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="route.path"
    text-color="#fff"
    class="va-menu"
    router
    :collapse="store.isCollapse"
  >
    <template v-for="route in routes" :key="route.path">
      <el-menu-item v-if="route.children && route.children.length === 1" :index="route.children[0].path">
        <SvgIcon :icon-class="route.children[0].meta.icon" class="icon-class"/>
        <span>{{ route.children[0].meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-if="route.children && route.path !== '/'" :index="route.path">
        <template #title>
          <SvgIcon :icon-class="route.meta.icon" class="icon-class"/>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item v-for="child in route.children" :key="child.path" :index="`${route.path}/${child.path}`">
          {{ child.meta.title }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style lang="scss" scoped>
  @import './index.scss';
</style>
