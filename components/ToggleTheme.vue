<script setup lang='ts'>
const colorMode = useColorMode()
const appConfig = useAppConfig()
const icons = appConfig.listify.icons

const colorIconName = computed(() => {
  const COLOR_TO_ICON = {
    system: icons.system,
    dark: icons.dark,
    light: icons.light,
  } as any
  return COLOR_TO_ICON[colorMode.preference] || ''
})

const toggleDark = function () {
  const COLOR_TO_CHANGE = {
    system: 'light',
    dark: 'system',
    light: 'dark',
  } as any
  colorMode.preference = COLOR_TO_CHANGE[colorMode.preference]
}
</script>

<template>
  <div class="border border-0 rounded-md p-2 cursor-pointer text-xl leading-4 bg-gray-50 dark:bg-gray-900" title="Toggle Color Scheme" @click="toggleDark">
    <ColorScheme placeholder="..." tag="span">
      <Icon :name="colorIconName" />
    </ColorScheme>
  </div>
</template>
