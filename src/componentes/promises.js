const products =[
    {
        product1:`Accesorios `,
        color: `red`,
        id:"1",  
        imagen:`/imagenes/correas.jpg`,
        category:"accesorios",
        precio: 500
    },
    { 
        product1:`Abrigos`,
        color: `blue`,
        id:"2",
        imagen:`/imagenes/buzitogato.jpg`,
        category:"abrigos",
        precio: 600,

    },
    {  
        product1:`Pipeta`,
        color: `white`,
        id:"3", 
        imagen:`/imagenes/pipeta.png`,
        category:"pipetas",
        precio: 300,

    },    
    ] 
export const somethingWillhappen = () => {
    return new Promise ((resolve,reject) => {
        if (true){
            setTimeout(() =>{
            resolve(products)
        }, 1000)
    }else{
            reject (`oh no,lo hice mal!`)
        }
    })
}