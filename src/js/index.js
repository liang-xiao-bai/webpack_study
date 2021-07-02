const testFunc = ()=>{
    console.log('箭头函数')
}

let myPromise = Promise.resolve()
myPromise.then(res=>{
    console.log('打包成功')
})