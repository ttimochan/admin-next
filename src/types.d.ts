import { MessageApi } from 'naive-ui'
import { VNodeProps } from 'vue'

declare global {
  export interface Window {
    message: MessageApi
  }

  export const message: MessageApi

  export const Fragment: {
    new (): {
      $props: VNodeProps
    }
    __isFragment: true
  }
}

export {}
