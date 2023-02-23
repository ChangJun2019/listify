<script setup lang="ts">
const contentList = await queryContent('').where({
  _extension: { $in: ['json', 'yaml'] },
}).only(['frontmatter', '_path', '_id']).find()

const lists = computed(() => {
  return contentList.map((item) => {
    return {
      name: item.frontmatter.title,
      link: item._path,
    }
  })
})
</script>

<template>
  <div class="app-lists">
    <ListSimple :data="lists" />
  </div>
</template>
