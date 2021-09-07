import { ProxyState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"

function _drawMoney(){
  document.getElementById('total-money').innerText = ProxyState.totalMoney.toString()
}
export default class MoneyController{
  constructor(){
    ProxyState.on('totalMoney', _drawMoney)
    _drawMoney()
  }

  addMoney(){
    moneyService.addMoney()
  }
}