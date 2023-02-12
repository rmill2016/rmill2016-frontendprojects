import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Cart from './Cart'

const navLinks = [
    {
        id: 1,
        name: 'Collections',
        to: '#collections',
    },
    {
        id: 2,
        name: 'Men',
        to: '#men',
    },
    {
        id: 3,
        name: 'Women',
        to: '#women',
    },
    {
        id: 4,
        name: 'About',
        to: '#about',
    },
    {
        id: 5,
        name: 'Contact',
        to: '#contact',
    },
]

const Header = (props: any) => {
    /* Toggling offcanvas menu */
    const [menu, setMenu] = useState<boolean>(false)
    /* Toggling Cart */
    const [cart, setCart] = useState<boolean>(false)
    /* Updating quanity of items within cart */

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [menu])
    return (
        <>
            <nav
                id="mobileHeader"
                className="z-[1] w-full h-auto lg:hidden relative"
            >
                <div className="flex justify-between h-20 px-8 md:px-12 bg-neutral-white text-neutral-black">
                    <div className="flex items-center justify-start w-full h-full gap-4">
                        <img
                            src="images/icon-menu.svg"
                            alt="menu"
                            onClick={() => setMenu(true)}
                            className="w-4 h-auto mt-1 cursor-pointer"
                            aria-label="menu"
                        />
                        <Link href={'/'}>
                            <img
                                src="images/logo.svg"
                                alt="logo"
                                className="w-32 h-auto cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end h-full gap-4">
                        <div className="relative w-10 h-auto cursor-pointer">
                            <img
                                src="images/icon-cart.svg"
                                alt="cart"
                                onClick={() => setCart(!cart)}
                                className="object-cover"
                            />
                            {props.items > 0 && (
                                <span className="text-white bg-primary-orange w-auto h-auto px-2 absolute -top-2 -right-2 z-[2] pointer-events-none text-xs rounded-lg">
                                    {props.items}
                                </span>
                            )}
                        </div>
                        <img
                            src="images/image-avatar.png"
                            alt="avatar"
                            className="w-6 h-auto rounded-full cursor-pointer hover:border hover:border-primary-orange"
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
                    <div className="flex flex-col items-start justify-start gap-12 px-8 py-8 md:py-12 md:px-8">
                        <img
                            src="images/icon-close.svg"
                            alt="close"
                            onClick={() => setMenu(false)}
                            className="w-4 h-auto cursor-pointer md:w-6"
                        />
                        <motion.ul className="flex flex-col gap-6 text-2xl font-semibold list-none text-neutral-black">
                            <AnimatePresence>
                                {navLinks.map((link) => (
                                    <Link key={link.id} href={link.to}>
                                        <motion.li className="cursor-pointer">
                                            {link.name}
                                        </motion.li>
                                    </Link>
                                ))}
                            </AnimatePresence>
                        </motion.ul>
                    </div>
                </motion.aside>
                <div className="absolute left-0 w-full h-auto p-2 pointer-events-none top-20 aspect-square lg:hidden">
                    {cart && <Cart items={props.items} />}
                </div>
            </nav>
            <nav
                id="desktopHeader"
                className="items-center justify-between hidden w-full h-32 lg:flex z-[1] bg-neutral-white px-10 2xl:px-32 relative mb-20 after:absolute after:h-px after:bg-neutral-grayBlue after:bottom-0 after:left-0 after:right-0 after:mx-32"
            >
                <div className="flex items-center justify-start h-full gap-12">
                    <img
                        src="images/logo.svg"
                        alt="logo"
                        className="w-40 h-auto cursor-pointer"
                    />
                    <ul className="flex items-center h-auto gap-4 list-none text-neutral-grayBlue">
                        {navLinks.map((link) => (
                            <Link key={link.id} href={link.to}>
                                <li className="link-l-r hover:text-neutral-black">
                                    {link.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-end h-full gap-8">
                    <div className="relative h-auto cursor-pointer w-14">
                        <img
                            src="images/icon-cart.svg"
                            alt="cart"
                            className="object-cover"
                        />
                        {props.items > 0 && (
                            <span className="text-white bg-primary-orange w-fit h-auto px-1 absolute top-0 right-0 z-[2]">
                                {props.items}
                            </span>
                        )}
                    </div>
                    <img
                        src="images/image-avatar.png"
                        alt="avatar"
                        className="h-auto rounded-full cursor-pointer w-14 hover:border hover:border-primary-orange"
                    />
                </div>
            </nav>
        </>
    )
}

export default Header
