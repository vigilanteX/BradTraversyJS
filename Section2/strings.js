let x;

const name='John'
const age=24

x='My name is '+name+' '+age

x=`Hello this is my literal with name ${name} and age ${age} and height is ${180+1} cm`

const c='hello'
x=c.length

x=new String('aman')
x=x.toUpperCase()
console.log(x.slice(-5,-1))
console.log(x.substring(0,3))
console.log(x.charAt(0))
console.log(x[1])
console.log(x.indexOf('M'))
console.log(x, typeof x)

const z='    HELHO        '
console.log(z.trim())
console.log(z.trim().replace('H','X'))
console.log(z.trim().replaceAll('H','X'))

const d='HELAMANMXC'
console.log(d.includes('AMAN'))

const e=new String("jan")
console.log(e.valueOf())

const f='hello aman dixit'
console.log(f.split(' '))


const g='developer'
console.log(g[0].toUpperCase()+g.substring(1))