global.bind = function (fn, context) {
 var newArray = [].slice.call(arguments,2);
    return function(){
        return fn.apply(context, newArray);
    }
};
var obj2 = {
	shoes:'sneakers',
	jeans:'hat',
}
var obj = {
	shoes:'boots',
	jeans:'jeans',
	}
var bott = function  (args) {
	console.log('dress up ' + this.shoes + args)
}
var anotherBott = global.bind(bott, obj,' data');

console.log(anotherBott.call(obj2))
console.log(bott.call(obj2,' data'))