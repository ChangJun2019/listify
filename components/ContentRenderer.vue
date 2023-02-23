<script setup lang="ts">
const { page } = useContent()
const isCustomRender = computed(() => {
  return ['json', 'yaml'].includes(unref(page)._extension)
})
</script>

<template>
  <div>
    <ListContentRenderer v-if="isCustomRender" />
    <ContentRendererMarkdown v-else :value="page" />
  </div>
</template>
