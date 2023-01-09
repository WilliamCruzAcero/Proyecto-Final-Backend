class Productos {
    constructor() {
        this.productos = []
        this.id = 0

        
    }

    getAll() {
        return this.productos.length? this.productos : {error : 'No hay productos cargados.'}
    }

    getId(id) {
        let producto = this.productos.find(produc => produc.id == id)
            return producto || {error : 'Producto no encontrado.'}
    }    

    post(producto) {
        producto.id = ++this.id
        this.productos.push(producto)
    }

    put(producto, id) {
        producto.id = Number(id)
        let index = this.productos.findIndex( produc => produc.id == id)
        this.productos.splice( index, 1, producto )
    }

    delete(id) {
        let index = this.productos.findIndex(produc => produc.id === id)
        return this.productos.splice( index, 1 )
    }

}




/* export default Productos */