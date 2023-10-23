import categoriesRouter from './categories/categories.router.js';
import productsRouter from './products/products.router.js';

const initApp=(app,express)=>{

    app.use(express.json());
   
    app.use('/categories',categoriesRouter);
    app.use('/products',productsRouter);
    app.get('/',(req,res)=>{
        return res.status(200).json({Message:"You are welcome"})
    })
    app.get("*",(req,res)=>{
        return res.status(500).json({Message:"this page is not found!"})
    })

}

export default initApp;
