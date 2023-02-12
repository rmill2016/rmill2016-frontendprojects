import React, { Dispatch, SetStateAction, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

type Images = {
    id: number
    src: string
    alt: string
}

const images: Array<Images> = [
    {
        id: 1,
        src: 'images/image-product-1.jpg',
        alt: 'sneakers 1',
    },
    {
        id: 2,
        src: 'images/image-product-2.jpg',
        alt: 'sneakers 2',
    },
    {
        id: 3,
        src: 'images/image-product-3.jpg',
        alt: 'sneakers 3',
    },
    {
        id: 4,
        src: 'images/image-product-4.jpg',
        alt: 'sneakers 4',
    },
]

const Slider = (props: any) => {
    const [value, setValue] = useState<number>(0)
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const price: number = 125
    const name = 'Fall Limited Edition Sneakers'

    const handleIncrement = () => {
        setValue(value + 1)
    }

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1)
        } else {
            setValue(0)
        }
    }

    return (
        <section className="w-full h-auto">
            <div className="grid grid-flow-row grid-cols-1">
                <Swiper
                    className="z-0 w-full h-full"
                    modules={[Navigation]}
                    navigation
                    loop
                    onSlideChange={(e) => setActiveSlide(e.activeIndex)}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id} className="w-auto h-auto">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto lg:max-w-[600px] aspect-square lg:rounded-3xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex flex-col items-start justify-center h-full gap-4 p-8 md:px-12">
                    <p className="space-x-1 font-semibold uppercase text-primary-orange">
                        Sneaker Company
                    </p>
                    <h4 className="text-3xl font-semibold md:text-4xl 2xl:text-5xl text-neutral-black">
                        Fall Limited Edition Sneakers
                    </h4>
                    <p className="text-neutral-grayBlue">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they'll withstand everything the weather can offer.
                    </p>
                    <div className="flex items-center justify-between w-full h-auto">
                        <h4 className="relative text-neutral-black after:absolute after:top-[6px] after:-right-16 after:w-auto after:h-auto after:py-px after:px-2 after:bg-primary-paleOrange after:text-primary-orange after:content-['50%'] after:rounded-md after:font-semibold text-3xl font-semibold after:text-base">
                            $125.00
                        </h4>
                        <span className="line-through text-neutral-grayBlue">
                            $250.00
                        </span>
                    </div>
                    <div className="bg-neutral-lightGrayBlue grid grid-cols-[50px_1fr_50px] grid-flow-row w-full h-auto p-4 rounded-xl place-items-center">
                        <img
                            src="images/icon-minus.svg"
                            alt="minus"
                            onClick={handleDecrement}
                            className="w-6 h-auto fill-primary-orange"
                        />
                        {value}
                        <img
                            src="images/icon-plus.svg"
                            alt="minus"
                            onClick={handleIncrement}
                            className="w-6 h-auto fill-primary-orange"
                        />
                    </div>
                    <button
                        className="inline-flex items-center justify-center w-full h-auto gap-4 p-4 bg-primary-orange rounded-xl text-neutral-white focus-within:bg-opacity-80"
                        onClick={() =>
                            props.handleSubmit(value, price, activeSlide, name)
                        }
                    >
                        <img
                            src="images/icon-cart-white.svg"
                            alt="cart"
                            className="w-6 h-auto"
                        />
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Slider
