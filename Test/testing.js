exports.data = ()=>{
    return {name : "udit"}
  }
exports.testfunction = (para)=>{
    return para("test");
  }
exports.testPromise = (para)=>{
    return new Promise((resolve, reject)=>{
       resolve("Success")
    })
  }
exports.testAsync = (para)=>{
    return new Promise((resolve, reject)=>{
       resolve("Success")
    })
  }
exports.before = ()=>{
    return "Udit";
  }
exports.after = ()=>{
    return "Kishor";
  }