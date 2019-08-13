class myStorage{
    constructor(key,value) {
        this.key = key;
        this.value = value;
    }

    setItem(key, value) {
        localStorage.setItem(this.key, this.value);
    }

    removeItem(key, value) {
        localStorage.removeItem(this.key, this.value);
    }

}

var stor = new myStorage();
stor.setItem('1', 'first');
stor.setItem('2', 'second');