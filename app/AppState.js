import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  items = [
    new Item({
      name: 'Pepsi',
      price: 1.25,
      quantity: 30,
      imgUrl: 'https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    }),
    new Item({
      name: 'Coke',
      price: 1.25,
      quantity: 25,
      imgUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
    })
  ]
  totalMoney = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
