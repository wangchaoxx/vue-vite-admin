<template>
  <div class="va-common-layout">
    <el-container>
      <el-aside class="vac-aside">
        <SiderBar />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
