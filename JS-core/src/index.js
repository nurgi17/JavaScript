import '../styles/main.css'
import { Site } from './classes/site'
import { SideBar } from './classes/sidebar'
import { model } from './model'

const site = new Site('#site')

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new SideBar('#panel', updateCallback)
site.render(model)
