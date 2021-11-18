import { UA } from "nuxt-user-agent/lib/types";

declare module "@nuxt/vue-app/types/index" {
  interface Context {
    $ua: UA;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $ua: UA;
  }
}

declare module '*.svg?inline' {
  const content: any;
  export default content;
}