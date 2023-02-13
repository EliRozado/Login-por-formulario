import { Router } from "express";

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!user){
        return res.status
    }

    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.post('/register', async (req, res) => {
    const { firstName, email, age, password } = req.body;
    
    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('login');
})

export default router;