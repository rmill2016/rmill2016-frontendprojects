import React from 'react'
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

const Slider = () => {
    return (
        <Swiper
            className="z-0 w-full h-full"
            modules={[Navigation]}
            navigation
            loop
        >
            {images.map((image) => (
                <SwiperSlide key={image.id} className="w-auto h-auto">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto aspect-square"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
