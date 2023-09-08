// 这里主要放置的是组件的props，以及一些公共的方法
import type { ExtractPropTypes } from 'vue';
export const iconProps = {
  size: {
    type: [Number, String],
  },
  color: {
    type: String,
  },
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
