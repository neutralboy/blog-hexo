import Link from "next/link";

const Header = () => {
    return(
        <nav className="flex justify-between py-4 px-6 sticky top-0 shadow-xl w-full z-50 text-white font-display text-xl bg-gray-900">
            <div className="" >
                <Link href="/">
                    <a className="bg-indigo-600 p-2 text-white border-solid border-white border-b-2 inline-block">Poorna's blog</a>
                </Link>
            </div>
            <div className="my-auto lg:hidden">
                <a aria-label="LinkedIn" rel="noopener" href="https://www.linkedin.com/in/poornachandra-v/" className="p-0.5 bg-blue-500 block" >
                    <svg className="fill-current text-white block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"></path>
                    </svg>
                </a>
            </div>
            <div className="flex justify-around flex-row lg:space-x-3">
                <div className="p-2">
                    <Link href="/say-hello">
                        <a>
                            <p className="hover:underline">
                                Say Hello
                            </p>
                        </a>
                    </Link>
                </div>
                <a rel="noopener" href="https://www.linkedin.com/in/poornachandra-v/" className="p-0.5 bg-blue-500 hover:bg-blue-600 lg:block hidden my-auto" >
                    <svg className="fill-current text-white block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"></path>
                    </svg>
                </a>
            </div>
        </nav>
    )
}

export default Header;