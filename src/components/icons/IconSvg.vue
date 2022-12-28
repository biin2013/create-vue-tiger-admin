<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    required: true,
    type: String
  },
  prefix: {
    type: String,
    default: 'icon'
  },
  classes: {
    type: String,
    default: ''
  },
  marginLeft: {
    type: String,
    default: '0.5rem'
  },
  marginRight: {
    type: String,
    default: '0.5rem'
  }
});

const resolveClasses = computed(() => props.prefix + ' ' + props.classes);

const resolveHref = computed(() => '#' + props.prefix + '-' + props.name);

const resolveStyle = computed(() => {
  return {
    marginLeft: props.marginLeft,
    marginRight: props.marginRight
  };
});
</script>

<template>
  <svg :class="resolveClasses" aria-hidden="true" :style="resolveStyle">
    <use :xlink:href="resolveHref"></use>
  </svg>
</template>
