class nodo1{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
        this.lista2 = new lista2();
    }
}

class lista1{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo1(dato); 

        if(this.primero == null){ //lista vacia
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    mostrar(){
        let aux = this.primero;
        
        while(aux != null){
            console.log("* " + aux.dato);
            aux.lista2.mostrar()
            aux = aux.siguiente;
        }
    }

    
    insertarL2(nombre,dato){
        let aux= this.primero;
        while(aux!= null){
            if(nombre == aux.dato){
                aux.lista2.insertar(dato);
                //console.log("se inserto el valor en la lista de "+aux.dato);
                return 
            }else{
                aux = aux.siguiente;
            }
        }
        console.log("no se encontro el dato en la lista")
        return null;
    }
}

class lista2{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo1(dato); 

        if(this.primero == null){ //lista vacia
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }
    mostrar(){
        let aux = this.primero;
        
        while(aux != null){
            console.log("    -> " + aux.dato);
            //aux.pila.mostrar_pila();
            aux = aux.siguiente;
        }
    }
}

let lista = new lista1();

lista.insertar("Javier");
lista.insertar("Alejandro");
lista.insertar("Rodrigo");
lista.insertar("Daniel");

lista.insertarL2("Javier",2);
lista.insertarL2("Alejandro",45);
lista.insertarL2("Javier",65);
lista.insertarL2("Daniel",76);
lista.insertarL2("Alejandro",98);
lista.insertarL2("Javier",45);
lista.insertarL2("Javier",34);
lista.insertarL2("Daniel",56);

lista.mostrar()