<script setup lang="ts">
interface ListItem {
  name: string
  link?: string
}

const props = defineProps<{
  data: ListItem[]
}>()
</script>

<template>
  <div class="w-auto m-auto text-left mb-3 flex flex-col border rounded-md p-3 mt-2">
    <NuxtLink v-for="(item, index) of props.data" :key="index" :to="item.link" :target="item.link?.includes('//') ? '_blank' : '_self'">
      <p class="h-9 leading-9 hover:text-green-500 hover:font-bold">
        {{ index + 1 }}. {{ item.name }}
      </p>
    </NuxtLink>
  </div>
</template>
