import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "custom-layout" | "default" | "main-layout"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}