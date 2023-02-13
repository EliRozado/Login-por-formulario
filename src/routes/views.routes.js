import { Router } from "express";
import cartsDao from "../daos/dbManager/carts.dao.js";
import productsDao from "../daos/dbManager/products.dao.js";
import __dirname from '../utils.js';

const router = Router();

const isSession = (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/products')
    }
    next();
}

router.get('/products', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login')
    }

    const {page, limit, sort, category, status} = req.query;
    const products = await productsDao.getAll({page, limit, sort, category, status})
    
    res.render('products', { products })
})

router.get('/products/:id', async (req, res) => {
    const product = await productsDao.getById(req.params.id)
    
    res.render('productDetails', { product })
})

router.get('/carts/:cid', async (req,res) => {
    const cart = await cartsDao.getCartByID(req.params.cid)

    console.log(cart)

    res.render('cart', { cart })
})

router.get('/login', isSession, async (req, res) => {    
    res.render('login')
})

router.get('/register', isSession, async (req, res) => {    
    res.render('register')
})



export default router;