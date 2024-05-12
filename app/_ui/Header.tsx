'use client'
import Image from 'next/image'
export default function Header() {
    return (
        <header className="absolute z-10 flex w-full flex-col">
            <div className="flex h-16 w-full items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-3">
                    <a href="/public">
                        <div className="relative h-7 w-7">
                            <Image src={'/SEDA_Logo.svg'} alt={'logo'} fill />
                        </div>
                    </a>
                    <h1 className="text-base font-medium">SEMA WiFi</h1>
                </div>
                <nav>
                    <ul className="flex items-center space-x-4 px-2 text-sm font-normal">
                        <li>
                            <a href="/login">라우터 목록</a>
                        </li>
                        <li>
                            <a href="/signup">사용자 관리</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="grid h-7 w-full grid-cols-4 items-center gap-4 px-7">
                <div className="flex h-full items-center justify-center rounded-2xl bg-gray-300 hover:bg-slate-300">
                    <span className="text-sm font-normal">2층</span>
                </div>
                <div className="flex h-full items-center justify-center rounded-2xl bg-gray-300 hover:bg-slate-300">
                    <span className="text-sm font-normal">3층</span>
                </div>
                <div className="flex h-full items-center justify-center rounded-2xl bg-gray-300 hover:bg-slate-300">
                    <span className="text-sm font-normal">4층</span>
                </div>
            </div>
        </header>
    )
}
