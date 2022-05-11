import React from 'react'
import styles from './CheckoutForm.module.css'
import instance from '../../utils/axios'
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const items = useSelector((state: RootState) => state.products.cart)

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe?.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!
        });

        if (!error) {
            try {
                const { id } = paymentMethod!
                const res = await instance.post('/checkout/', {
                    id: id,
                    items: items
                })
                alert(res.data.message)
            } catch (err: any) {
            }

        } else {
        }
    }
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <CardElement />
            <button type="submit">Checkout</button>
        </form>
    )
}

export default CheckoutForm
