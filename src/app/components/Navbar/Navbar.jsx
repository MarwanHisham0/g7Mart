"use client"
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const pages = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Cart', href: '/cart' },
        { name: 'Contact', href: '/contact' },
        { name: 'About US', href: '/about-us' },
    ]


    const path = usePathname();

    return (
        <header className="bg-transparent backdrop-blur-2xl sticky top-0 z-50 shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block text-sky-600" href="/">
                          <Image
                          className="h-16 w-16 object-cover"
                          src={"/assets/logo.png"}
                          width={2000}
                          height={2000}
                          alt='logo'
                          />
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {
                                    pages.map(
                                        (page,index) => (
                                        <li key={index}>
                                            <Link className={`${path === page?.href?"font-bold  text-sky-600":null} text-gray-500 transition hover:text-gray-500/75`} href={page.href}>
                                                {
                                                    page.name
                                                }
                                            </Link>
                                            </li>)
                                )}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm" href="/login">
                                    Login
                                </Link>

                                <div className="hidden sm:flex">
                                    <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600" href="/register">
                                        Register
                                    </Link>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
