import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("r-card", defineAsyncComponent(() => import("D:/workspace/study/rainbow-ui/docs/.vuepress/components/r-card.vue")))
}
