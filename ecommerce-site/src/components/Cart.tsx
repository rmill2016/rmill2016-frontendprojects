import React, { useEffect, useState } from 'react'

type Items = {
    thumbnail: string
    name: string
    price: number
    quantitiy: number
}

const Cart = ({ items }: { items: number }) => {
    /* Cart is responsible for holding current items in cart */
    const [cart, setCart] = useState<Items[]>([])
    /* Passing number of items in cart to items prop */
    const [numItems, setItems] = useState<number>(0)

    const handleCheckout = () => {}
    const handleDelete = () => {}

    useEffect(() => {
        setItems(cart.length)
    }, [cart])

    items = numItems

    return (
        <div className="flex flex-col w-full h-auto gap-6 shadow-xl bg-neutral-white rounded-xl aspect-video">
            <p className="pt-6 pl-6 font-semibold">Cart</p>
            <hr className="w-full h-px p-0 bg-neutral-grayBlue" />
            {cart.length > 0 &&
                cart.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[50px_1fr_25px] grid-rows-2 grid-flow-row"
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.name}
                            className="w-12 h-auto aspect-square rounded-2xl"
                        />
                        <div className="flex flex-col items-start justify-between w-full h-full">
                            <p className="text-neutral-grayBlue">{item.name}</p>
                            <p className="text-neutral-grayBlue">
                                ${item.price} x {item.quantitiy}{' '}
                                <span className="text-neutral-black">
                                    ${item.price * item.quantitiy}
                                </span>
                            </p>
                        </div>
                        <img
                            src="images/icon-delete.svg"
                            alt="remove"
                            aria-label="remove item"
                            className="w-6 h-auto"
                            onClick={handleDelete}
                        />
                    </div>
                ))}
            {cart.length > 0 && (
                <button
                    id="checkout"
                    className="w-full h-auto py-4 text-white bg-primary-orange rounded-2xl"
                >
                    Checkout
                </button>
            )}
        </div>
    )
}

export default Cart
