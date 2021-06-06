import Link from "next/link";

const Header = () => {
    return(
        <nav className="flex justify-between py-4 px-11 sticky top-0 shadow-xl w-full z-50 text-white font-display text-xl bg-gray-900">
            <div>
                <Link href="/">
                    <a className="bg-indigo-600 p-2 text-white border-solid border-white border-b-2 inline-block">Poorna's blog</a>
                </Link>
            </div>
            <div className="flex justify-around flex-row">
                <div className="p-2">
                    <Link href="/say-hello">
                        <a>
                            <p>
                                Say Hello
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;