import { generateId } from "../Utils/generateId.js"

export class Item{
  constructor(itemData){
    this.name = itemData.name,
    this.price = itemData.price,
    this.quantity = itemData.quantity,
    this.imgUrl = itemData.imgUrl,
    this.id = itemData.id || generateId()
  }

  get ItemTemplate(){
    return /*html*/`
    <div class = "col-2">
      <div class="card">
        <div class="card-body">
          <img class="img-fluid" src="${this.imgUrl}">
          <h3>
          ${this.name} - ${this.quantity}
          </h3>
          <button class="btn ${this.quantity <= 7 ? 'btn-danger':this.quantity <= 15 ? 'btn-warning' : 'btn-primary'}" onclick="app.itemsController.buy('${this.name}')">${this.price}</button>
        </div>
      </div>
    </div>
      `
  }

  
}