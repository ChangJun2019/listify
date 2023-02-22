<script setup lang="ts">
const lists = await queryContent('').where({
  _extension: { $in: ['json', 'yaml'] },
}).only(['frontmatter', '_path', '_id']).find()
</script>

<template>
  <div class="w-auto flex justify-between border rounded-md p-3">
    <nuxt-link to="/" class="border border-0 rounded-md p-2 text-2xl leading-4 bg-gray-50 dark:bg-gray-900">
      <Icon name="fa6-solid:list-ol" />
    </nuxt-link>
    <nuxt-link v-for="item in lists" :key="item._id" :to="item._path" class="border border-0 rounded-md p-2 text-2xl leading-4 bg-gray-50 dark:bg-gray-900">
      <Icon :name="item.frontmatter.icon" />
    </nuxt-link>
  </div>
</template>
