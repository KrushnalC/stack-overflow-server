import express from 'express';
import auth from '../middleware/auth.js';

import dotenv from 'dotenv';

dotenv.config();
// import { stripe } from '../utils/stripe.js';


const router = express.Router();
import Stripe from 'stripe';



export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15"
});


router.get("/prices", auth,async(req,res) => {
    const prices = await stripe.prices.list({
        apiKey: process.env.STRIPE_SECRET_KEY
    })
    return res.json(prices);
})



export default router;