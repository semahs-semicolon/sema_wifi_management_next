"use client"
import Image from "next/image";
import {ExpandMore, ExpandLess} from "@mui/icons-material"
import {Fragment, useState} from "react";
export default function Header() {
    const [floorExpand, setExpand] = useState(false);
    return (
        <header className="flex flex-col gap-5">
            <div className="flex items-center justify-between w-full py-4 px-5 bg-blue-300 dark:bg-zinc-800/30">
                <div className="flex items-center space-x-3">
                    <a href="/">
                        <div className='w-7 h-7 relative'>
                            <Image src={'/SEDA_Logo.svg'} alt={'logo'} fill/>
                        </div>
                    </a>
                    <h1 className="text-base font-medium">SEMA WiFi</h1>
                </div>
                <nav>
                    <ul className="flex items-center space-x-4 text-sm font-normal px-2">
                        <li>
                            <a href="/login">라우터 목록</a>
                        </li>
                        <li>
                            <a href="/signup">사용자 관리</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-full h-8 flex items-center px-5 gap-4">
                <div className="flex items-center justify-center h-full w-8 bg-blue-300 rounded-2xl p-3 hover:bg-blue-400" onClick={() => {setExpand((a) => !a)}}>
                    {floorExpand ? <ExpandMore /> : <ExpandLess />}
                </div>
                {floorExpand ?
                    (
                        <Fragment>
                            <div
                                className="flex items-center justify-center h-full w-20 bg-blue-100 rounded-xl py-2 hover:bg-blue-200">
                    <span className="text-sm font-normal">
                        1층
                    </span>
                            </div>
                            <div
                                className="flex items-center justify-center h-full w-20 bg-blue-100 rounded-xl py-2 hover:bg-blue-200">
                    <span className="text-sm font-normal">
                        1층
                    </span>
                            </div>
                            <div
                                className="flex items-center justify-center h-full w-20 bg-blue-100 rounded-xl py-2 hover:bg-blue-200">
                    <span className="text-sm font-normal">
                        1층
                    </span>
                            </div>
                            <div
                                className="flex items-center justify-center h-full w-20 bg-blue-100 rounded-xl py-2 hover:bg-blue-200">
                    <span className="text-sm font-normal">
                        1층
                    </span>
                            </div>
                        </Fragment>

                    )
                    : null}
            </div>
        </header>
    )
}
