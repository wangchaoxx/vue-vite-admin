<template>
  <div class="va-common-layout">
    <el-container>
      <el-aside class="vac-aside">
        <SiderBar />
      </el-aside>
      <el-container>
        <el-header>
          <VaHeader />
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<style lang="scss">
@import './index.scss';
</style>
