<script setup lang="ts">
const { page } = useContent()
useHead({
  title: page.frontmatter.title,
  meta: [
    { name: 'description', content: page.frontmatter.description || '' },
  ],
})
</script>

<template>
  <div class="w-auto mt-10">
    <div class="flex text-3xl py-4 justify-between">
      <span>{{ page.frontmatter.title }}</span>
      <Icon :name="page.frontmatter.icon" />
    </div>
    <ListSimple :data="page.listify" />
  </div>
</template>
