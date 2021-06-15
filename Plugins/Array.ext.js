//Array.extension
const version = "";
console.log("Array Extension ver. "+ version);

//Array.prototype.uniquify [new define]
//Usage: Make array values only appears once
//Params: multi-demension flags(Boolean)
//Output: filtered output(array)
Object.defineProperty(Array.prototype, "uniquify", { value:function(k=null) {
    if(k) {
        return this.filter((v,i,a)=>{return i == a.findIndex(fv=>fv[k] == v[k])});
    } else {
        return this.filter((v,i,a)=>{return i == a.findIndex(fv=>JSON.stringify(fv)===JSON.stringify(v))});
    }
}, writable:false, enumerable:false });
