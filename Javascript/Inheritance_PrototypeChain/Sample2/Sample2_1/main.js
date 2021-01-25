let object = {
    nInt : 10,
    func : function() {
        return this.nInt + 10;
    }
};

console.log(object.func());
// When calling o.m in this case, 'this' refers to object

let inh_object = Object.create(object);
// inh_object is an object that inherits from object

inh_object.nInt = 50;
// creates a property 'nInt' on inh_object

console.log(inh_object.func());
// when inh_object.func is called, 'this' refers to p.
// So when p inherits the function func of object,
// 'this.nInt' means inh_object.nInt, the property 'nInt' of inh_object
