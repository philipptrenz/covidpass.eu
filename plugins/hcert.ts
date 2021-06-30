import Vue from 'vue';
import { decodeData } from './src/decode';

declare module 'vue/types/vue' {
  interface Vue {
    $hcertDecode(rawData: string): any
  }
}

declare module '@nuxt/types' {
  interface Context {
    $hcertDecode(rawData: string): any
  }
}

Vue.prototype.$hcertDecode = decodeData