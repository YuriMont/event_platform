import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return (
        <footer className="border-t p-2 md:px-8">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/">
                    <Image 
                        src="/assets/images/logo.svg"
                        alt="logo"
                        width={128}
                        height={38}
                    />
                </Link>

                <p>2024 Evently. All Rights reserved</p>
            </div>
        </footer>
    );
}