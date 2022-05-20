//IndexedDB fo Tuzuri

//objectStore.getAll()
Object.defineProperty(IDBObjectStore, 'getAll', {value:()=>{
    return {
        onerror:()=>{},
        onsuccess:()=>{}
    }
}, writable:false});