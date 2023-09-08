<template>
  <i class="wh-icon" :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { iconProps } from './icon';

export default defineComponent({
  name: 'WhIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      const { color, size } = props;
      return {
        color,
        fontSize: typeof size === 'number' ? `${size}px` : size,
      };
    });
    return {
      style,
    };
  },
});
</script>