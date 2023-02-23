<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="w-auto flex justify-between border rounded-md p-3">
    <nuxt-link to="/" class="border border-0 rounded-md p-2 text-xl leading-4 bg-gray-50 dark:bg-gray-900">
      <Icon :name="appConfig.listify.icons.home" />
    </nuxt-link>
    <ListIcon />
    <ToggleTheme />
  </div>
</template>
