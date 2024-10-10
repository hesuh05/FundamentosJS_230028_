// Objetos

const producto = {
    nombre: "Tablet \"",
    marca: "Mac",
    modelo: "iPad",
    costo_compra: 11500.25,
    costo_venta: 15400,
    disponible: true,
    SKU: Symbol("553GGD546442"),
    Colores: ["Blanco","Negro","Rosa","Azul","Amarillo"]
}
// Imprimir el objeto
console.warn("--- OBJETOS ---");
console.log(producto);

//Los objetos también pueden representarse en formato de tabla utilizando la función console.table
console.table(producto);

// Acceder a las propiedades de un objeto

console.warn("Leyendo las Propiedades de un Objeto y sus tipos de dato\n")
console.log(`Nombre del Producto: ${producto.nombre} que es del tipo: ${typeof(producto.nombre)}`);
console.log(`Nombre de la marca: ${producto.marca} que es del tipo: ${typeof(producto.marca)}`);
console.log(`Nombre del modelo: ${producto.modelo} que es del tipo: ${typeof(producto.modelo)}`);
console.log(`Costo de la compra: ${producto.costo_compra} que es del tipo: ${typeof(producto.costo_compra)}`);
console.log(`Costo de la venta: ${producto.costo_venta} que es del tipo: ${typeof(producto.costo_venta)}`);
console.log(`Disponibilidad: ${producto.disponible} que es del tipo: ${typeof(producto.disponible)}`);
console.log(`SKU: ${String(producto.SKU)} que es del tipo: ${typeof(producto.SKU)}`);
console.log(`Colores: ${producto.Colores} que es del tipo: ${typeof(producto.Colores)}`);