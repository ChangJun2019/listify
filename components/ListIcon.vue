<script setup lang="ts">
const lists = await queryContent('').where({
  _extension: { $in: ['json', 'yaml'] },
}).only(['frontmatter', '_path', '_id']).limit(4).find()
</script>

<template>
  <nuxt-link v-for="item in lists" :key="item._id" :to="item._path" class="border border-0 rounded-md p-2 text-xl leading-4 bg-gray-50 dark:bg-gray-900">
    <Icon :name="item.frontmatter.icon" />
  </nuxt-link>
</template>
