class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0
    }

    peek(){}

    push(value){
        //agregar un valor al stack
        let nuevoNodo = new Node(value); 


        if (this.size === 0) { //si el stack esta vacio
            this.top = nuevoNodo; 
            this.bottom = nuevoNodo; 
        }else{// si el stack no esta vacio
            var currentTop = this.top;
            this.top = nuevoNodo; 
            nuevoNodo.next = currentTop;
        }
        this.size++;
    }

    pop(){
        if(this.top.next !== null){
            var newTop = this.top.next;
            //borro top
            //asign un nuevo top
            this.top = newTop;
        }else{
            this.top = null;
            this.bottom = null;
        }
        //reducir el size

        if (this.size > 0) {
            this.size--;   
        }
    }
    
    size(){
        return this.size;
    }
}

let miStack = new Stack();

miStack.push('Chris');
miStack.push('Luna');
miStack.push('Calderon');


console.log('prePop', miStack);

miStack.pop();
miStack.pop();
miStack.pop();

console.log('postPop', miStack);

