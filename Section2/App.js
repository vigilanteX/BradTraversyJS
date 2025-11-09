console.log(100)
console.log(100,'aman','dixit')
console.log(100,'aman',true)
console.warn("hello warn")
console.error("hello error")

console.group('master group')
console.log('message from master group')
console.warn('warn from master group')
console.error('error from master group')
console.groupEnd()


const style='color:red;background:black'
console.log('%c styles',style)