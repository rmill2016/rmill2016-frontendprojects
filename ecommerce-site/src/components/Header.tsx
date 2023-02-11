import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
    const [menu, setMenu] = useState<boolean>(false)
    console.log(menu)

    return (
        <>
            <nav id="mobileHeader" className="fixed top-0 z-[1] w-full h-auto">
                <div className="flex justify-between h-20 px-4 bg-neutral-white text-neutral-black">
                    <div className="flex items-center justify-start w-full h-auto gap-4">
                        <img
                            src="images/icon-menu.svg"
                            alt="menu"
                            onClick={() => setMenu(true)}
                            className="w-6 h-auto"
                        />
                        <img
                            src="images/logo.svg"
                            alt="logo"
                            className="w-40 h-auto"
                        />
                    </div>
                    <div className="flex items-center justify-end h-full gap-4">
                        <img
                            src="images/icon-cart.svg"
                            alt="cart"
                            className="w-6 h-auto"
                        />
                        <img
                            src="images/image-avatar.png"
                            alt="avatar"
                            className="w-8 h-auto rounded-full"
                        />
                    </div>
                </div>
                <div
                    id="overlay"
                    className="absolute z-[5] w-auto h-screen bg-black pointer-events-none opacity-40 top-0 left-0"
                    style={
                        menu
                            ? { width: '100%', overflow: 'hidden' }
                            : { width: 0 }
                    }
                />
                <motion.aside
                    id="sidebar"
                    className="fixed top-0 left-0 z-10 w-auto h-screen overflow-x-hidden bg-neutral-white text-neutral-black "
                    initial={{ width: 0 }}
                    animate={menu ? { width: '65%' } : { width: 0 }}
                    transition={{
                        type: 'tween',
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="flex flex-col items-start justify-start gap-12 px-4 py-8">
                        <img
                            src="images/icon-close.svg"
                            alt="close"
                            onClick={() => setMenu(false)}
                            className="w-4 h-auto"
                        />
                        <ul className="flex flex-col gap-6 font-semibold list-none text-neutral-black">
                            <Link href={'#collections'}>
                                <li>Collections</li>
                            </Link>
                            <Link href={'#collections'}>
                                <li>Men</li>
                            </Link>
                            <Link href={'#collections'}>
                                <li>Women</li>
                            </Link>
                            <Link href={'#collections'}>
                                <li>About</li>
                            </Link>
                            <Link href={'#collections'}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </motion.aside>
            </nav>
            <nav id="desktopHeader" className="hidden md:flex"></nav>
        </>
    )
}

export default Header
