<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale';

const locale = useLocaleStore().locale;
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
