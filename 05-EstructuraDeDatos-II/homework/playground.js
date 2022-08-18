function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function List() {
    this._length = 0;
    this.head = null; //primer nodo
}


List.prototype.add = function(data) {
    var node = new Node(data),
    current = this.head;
    // Si está vacia
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) { //buscar la cola
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
};

List.prototype.getAll = function(){
	current = this.head //empezamos en la cabeza
	if(!current){
		console.log('La lista esta vacia!')
		return
	}
	while(current){
		console.log(current.data);
		current = current.next;
	}
	return
};

//HASH TABLES (OBJETOS)

directorio = {
    chris: '000-000-0000', //memoria 6b34fe24ac2ff8103f6fce1f0da2ef57  : valor
}

directorio.chris = 'otro numero';
directorio.matu = 'nuevo numero';
directorio.francy = 'otro nuevo numero';
directorio.chris = 70;
directorio.chris = true;


vendedores = {
    //key: value
    //key es el termino con el accedes al valor de la propiedad
    chris: '$45' //memoria 6b34fe24ac2ff8103f6fce1f0da2ef57
}

maestros = {
    chris: 'nuevos' //memoria 6b34fe24ac2ff8103f6fce1f0da2ef57
}

arr = []
arr[2]

obj = {
    chris: 'algo'
}
obj['chris']
