import React from 'react'
import styles from './CheckoutForm.module.css'
import instance from '../../utils/axios'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

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
                    amount: 999,
                })
                console.log(res)
            } catch (err: any) {
                console.log(err.response)
            }

        } else {
            console.log(error)
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
