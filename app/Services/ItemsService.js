import { ProxyState } from "../AppState.js"






class ItemsService{
  constructor(){
  }


  buy(key){
  let foundItem = ProxyState.items.find(i => i.name == key)
  if(ProxyState.totalMoney >= foundItem.price){
    ProxyState.totalMoney -= foundItem.price
    foundItem.quantity --
    ProxyState.items = ProxyState.items
  }
  }





}

export const itemsService = new ItemsService()