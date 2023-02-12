import React, { useEffect, useState } from 'react'

type Items = {
    name: string
    price: number
    value: number
    activeSlide: number
}

const Cart = (props: any) => {
    const { items }: { items: Items[] } = props.items

    const handleCheckout = () => {}
    const handleDelete = () => {}

    return (
        <div className="flex flex-col w-full h-auto gap-6 shadow-xl bg-neutral-white rounded-xl aspect-video">
            <p className="pt-6 pl-6 font-semibold">Cart</p>
            <hr className="w-full h-px p-0 bg-neutral-grayBlue" />
            {items &&
                items.map((value, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[50px_1fr_25px] grid-rows-2 grid-flow-row"
                    >
                        <img
                            src={`images/image-product-${
                                value.activeSlide + 1
                            }-thumbnail.jpg`}
                            alt="product"
                            className="w-12 h-auto aspect-square rounded-2xl"
                        />
                        <div className="flex flex-col items-start justify-between w-full h-full">
                            <p className="text-neutral-grayBlue">
                                {value.name}
                            </p>
                            <p className="text-neutral-grayBlue">
                                ${value.price} x {value.value}{' '}
                                <span className="text-neutral-black">
                                    ${value.price * value.value}
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
            {items && (
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
