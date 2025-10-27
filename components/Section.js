class Section {
constructor({ items, renderer, containerSelector }){
   this._items = items;
   this._renderer = renderer;
   this._container = document.querySelector(containerSelector)
}

renderItems(){
this._items.forEach((item)=> {
    const todoElement = this._renderer(item);
    })
}
addItem(element){
    this._container.append(element);
}
}

export default Section;