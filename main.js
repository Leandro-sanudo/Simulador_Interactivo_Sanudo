//Funcion
function Producto(nombre, stock){
    this.nombre = nombre;
    this.stock = stock; 
}

const Producto1=new Producto("Asper Girl", 10);
const Producto2=new Producto("Parasite in Love", 0);

let nombreDeProducto = prompt("Ingresar el nombre del producto");
//Algoritmo condicional y algoritmo con ciclo
while(nombreDeProducto != "cancelar"){
    switch(nombreDeProducto){
        case "Asper Girl":
            if(Producto1.stock <1){
                alert("Por el momento no hay stock de este producto disponible")
            }else{
                alert("Este producto se encuentra disponible")
            }
            break
        case "Parasite in Love":
            if(Producto2.stock <1){
                alert("Por el momento no hay stock de este producto disponible")
            }else{
                alert("Este producto se encuentra disponible")
            }
            break
        default:
            alert("Error: producto no encontrado")
}
    nombreDeProducto = prompt ("Consultar por otro producto");
}
