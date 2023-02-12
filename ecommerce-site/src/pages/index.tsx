import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'

type Data = {
    name: string
    price: number
    value: number
    activeSlide: number
}

const Home: NextPage = () => {
    const [items, setItems] = useState<Data[]>([])

    const handleSubmit = (data: Data[]) => {
        setItems(data)
    }
    return (
        <main className="relative w-full h-auto">
            <Header items={items} />
            <Slider handleSubmit={handleSubmit} />
        </main>
    )
}

export default Home
