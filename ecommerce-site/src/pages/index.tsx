import type { NextPage } from 'next'
import Header from '../components/Header'
import Slider from '../components/Slider'

const Home: NextPage = () => {
    return (
        <main className="relative w-full h-auto">
            <Header />
            <Slider />
        </main>
    )
}

export default Home
