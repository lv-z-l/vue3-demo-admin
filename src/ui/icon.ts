import { LogOutOutline, Link, LinkOutline, SearchOutline, ChatbubbleOutline } from '@vicons/ionicons5'
import { App, Component } from 'vue'

const icons: Array<Component> = [LogOutOutline, Link, LinkOutline, SearchOutline, ChatbubbleOutline]

function install(app: App) {
  icons.forEach((icon: Component) => {
    if (icon.name) {
      app.component(icon.name, icon)
    }
  })
}

export default {
  install
}
