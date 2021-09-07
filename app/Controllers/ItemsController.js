import { ProxyState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"



function _drawItems(){
  let template = ''
  ProxyState.items.forEach(i => template += i.ItemTemplate)
  document.getElementById('app').innerHTML = template
}
export default class ItemsController{
  constructor(){
    ProxyState.on('items', _drawItems)
    _drawItems()
  }

  buy(key){
    itemsService.buy(key)
  }
}
