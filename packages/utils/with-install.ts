import { App, DefineComponent, Plugin } from "vue";
// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(main: T) => {
  (main as SFCWithInstall<T>).install = (app: App) => {
    app.component((main as DefineComponent).name, main as DefineComponent);
  }
  return main as SFCWithInstall<T>;
};