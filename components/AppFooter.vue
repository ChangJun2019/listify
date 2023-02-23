<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="mt-4 text-center font-lxgwwenkai">
    <p>
      <span class="text-green-500 font-semibold">@{{ appConfig.listify.author }}</span>
    </p>
  </footer>
</template>
