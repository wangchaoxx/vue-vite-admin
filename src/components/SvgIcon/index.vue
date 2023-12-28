<script lang="ts" setup>
const props = defineProps({
  iconClass: {
    type: String,
    required: false,
  },
})

const iconName = computed(() => `#icon-${props.iconClass}`)
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
