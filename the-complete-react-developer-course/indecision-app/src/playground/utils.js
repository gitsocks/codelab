console.log('utils.js is running')

export const square = (x) => x * x

export const add = (a, b) => a + b
 
export default (a, b) => a - b

/*
    two types of exports: 
        default export
        name export
*/

// export { square, add, subtract as default }