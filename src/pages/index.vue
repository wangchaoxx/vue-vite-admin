<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div i-carbon-campsite inline-block text-4xl />
    <div>
      <el-button>我是 ElButton</el-button>
    </div>
    <TheFooter />
  </main>
</template>
