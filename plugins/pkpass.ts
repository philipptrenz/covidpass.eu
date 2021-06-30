import Vue from 'vue';
import { createPass } from './src/pass';

declare module 'vue/types/vue' {
  interface Vue {
    $createPass(data: any): any
  }
}

declare module '@nuxt/types' {
  interface Context {
    $createPass(data: any): any
  }
}

Vue.prototype.$createPass = createPass