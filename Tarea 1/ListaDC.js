class nodo{
    constructor(dato){
        this.dato = dato;
        this.lugar = null;
        this.siguiente = null;
        this.anterior = null;
    }

}

class listaDoble{
    constructor(){
        this.primero = null;
        this.ultimo=null
    }

    insertar(dato){
        let nuevo = new nodo(dato); 

        if(this.primero == null){ //la lista esta vacia
            this.primero = nuevo;
            this.primero.lugar='p'
            this.ultimo=this.primero
            //this.primero.siguiente=this.primero
        }else{
            //Referenciando el nuevo con el anterior
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            //Referenciando con el primero
            nuevo.siguiente = this.primero;
            this.primero.anterior = nuevo;
            
            this.ultimo.lugar="o"
            this.ultimo=nuevo;
            this.primero.lugar='p'
            nuevo.lugar="u"
        }
        
    }

    mostrar(){
        let aux = this.primero;
        let lista=''
        console.log("***** Recorriendo Lista *****")
        while(true){
            if (aux.lugar != 'u'){
                lista+=aux.dato+'<->';
                aux = aux.siguiente;
            }else{
                //Mostrando el que tiene la etiqueta de ultimo y el siguiente al que apunta (el primer nodo que se creo)
                lista+=aux.dato+'<->'+aux.siguiente.dato;
                break
            }
            
        }
        console.log(lista)
    }
    mostrarI(){
        let aux = this.ultimo;
        let lista=''
        console.log("***** Recorriendo Lista a la Inversa*****")
        while(true){
            if (aux.lugar != 'p'){
                lista+=aux.dato+'<->';
                aux = aux.anterior;
            }else{
                //Mostrando el que tiene la etiqueta de ultimo y el siguiente al que apunta (el primer nodo que se creo)
                lista+=aux.dato+'<->'+aux.anterior.dato;
                break
            }
            
        }
        console.log(lista)
    }
    mostrarP(pos){
        let aux = this.primero;
        console.log("***** Elemento en la posicion "+pos+" *****")
        let x=0
        while(aux != null){
            if (pos==x){
                console.log("-> " + aux.dato);
                break;
            }
            aux = aux.siguiente;
            x++;
        }
    }
    obtenerP(pos){
        let aux = this.primero;
        //console.log("***** Nodo en la posicion "+pos+" *****")
        let x=0
        while(aux != null){
            if (pos==x){
                return aux
            }
            aux = aux.siguiente;
            x++;
        }
    }
}

let lista = new listaDoble();

lista.insertar(1);
lista.insertar(2);
lista.insertar(3);
lista.insertar(4);
lista.insertar(5);
lista.insertar(6);
lista.insertar(7);
lista.insertar(8);
lista.insertar(9);

//Mostrando desde el primer dato (recorriendo hacia la derecha)
lista.mostrar();
//Mostrando desde el ultimo dato (recorriendo hacia la izquierda)
lista.mostrarI();

/*Solicitando un elemento por su posicion, siendo el primer elemento insertado en 
la posicion 0 y al dar la vuelta a la lista circular (sobrepasar el valor de la 
posicion del ultimo valor ingresado) se repite el primero que se ingreso*/
console.log('\n')
lista.mostrarP(0);
lista.mostrarP(1);
lista.mostrarP(2);
lista.mostrarP(3);
lista.mostrarP(4);
lista.mostrarP(5);
lista.mostrarP(6);
lista.mostrarP(7);
lista.mostrarP(8);
lista.mostrarP(9);
lista.mostrarP(10);
lista.mostrarP(11);

//Otra prueba, a continuacion se imprime el siguiente del ultimo elemento
console.log('\nUltimo dato '+lista.ultimo.dato);
console.log('Siguiente '+lista.ultimo.siguiente.dato);

//Y viceversa, el anterior del primero 
console.log('\nPrimer dato '+lista.primero.dato);
console.log('Anterior '+lista.primero.anterior.dato);
