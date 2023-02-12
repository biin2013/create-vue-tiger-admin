<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale';
import { elLocales } from './config/locales';

const locale = useLocaleStore().locale;
</script>

<template>
  <el-config-provider :locale="elLocales[locale]">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
