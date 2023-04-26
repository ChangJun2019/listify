<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="mt-4 text-center font-lxgwwenkai">
    <p>
      <a class="hover:text-green-500 hover:underline" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
    </p>
    <p mt-2>
      © <a class="hover:text-green-500 hover:underline" :href="appConfig.listify.authorLink">{{ appConfig.listify.author }}</a>  All Rights Reserved.
    </p>
  </footer>
</template>
