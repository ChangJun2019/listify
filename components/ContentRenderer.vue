<script setup lang="ts">
const { page } = useContent()
const isCustomRender = computed(() => {
  return ['json', 'yaml'].includes(unref(page)._extension)
})
</script>

<template>
  <div>
    <div v-if="isCustomRender" class="">
      自定义渲染 {{ page.listify.frontmatter.title }}
    </div>
    <ContentRendererMarkdown v-else :value="page" />
  </div>
</template>
