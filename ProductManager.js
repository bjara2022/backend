class ProductManager {
  //creo variable privada
  #id = 0;
  constructor() {
    this.products = [];
  }
  //creo metodo para agregarproductos
  addProduct(title, description, price, thumbnail, code, stock) {
    // valido que todos los campos sean obligatorios
    if (title && description && price && thumbnail && code && stock) {
      // valido que el campo code no se repita
      const validacion = this.products.find((product) => product.code === code);
      if (validacion) {
        console.log("El Code ya existe");

        // creo el producto
      } else {
        const product = {
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        // agrego un campo a mi producto (ID) y luego incremeto con metodo privado de abajo
        product.id = this.#incrementId();
        // subo el producto al arreglo
        this.products.push(product);
      }
    } else {
      console.log("Faltan datos");
    }
  }
  // Incremento mi variable privada en 1 cada vez que sumo un producto
  #incrementId() {
    this.#id++;
    return this.#id;
  }
  // Metodo para mastrar la listas de producto
  getProducts() {
    return this.products;
  }
  // Creo el metodo para buscar un ID de producto
  getProductsById(id) {
    // busca el index del producto
    const index = this.products.findIndex((product) => product.id === id);
    // si el producto existe me lo muestra
    if (index !== -1) {
      const product1 = Object.entries(this.products[index]);
      console.log(product1);
    } else {
      console.log("Not Found");
    }
  }
}
// Pruebas
const articulos = new ProductManager();
console.log(articulos.getProducts());
articulos.addProduct(
  "Producto Prueba",
  "Este es un producto prueba",
  200,
  "Sin Imagen",
  "abc123",
  25
);
console.log(articulos.getProducts());
articulos.addProduct(
  "Producto Prueba",
  "Este es un producto prueba",
  200,
  "Sin Imagen",
  "abc123",
  25
); // intento de colocar un mismo codigo
articulos.getProductsById(1);
articulos.getProductsById(2); // Busco un producto inexistente
articulos.addProduct(
  "Producto Prueba",
  "Este es un producto prueba",
  "Sin Imagen",
  "abc123",
  25
); // intento agregar un producto sin un campo
