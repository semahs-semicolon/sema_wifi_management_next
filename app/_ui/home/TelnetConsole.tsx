import { Close } from '@mui/icons-material'
import AccessPoint from '@/app/_utils/graph/AccessPoint'
import { KeyboardEvent, useEffect, useState } from 'react'
import { HashToSevenDigit } from '@/app/_utils/graph/NetworkNodeIdUtils'
import { Ubuntu_Mono } from 'next/font/google'
import { useSelector } from 'react-redux'
import { HomeStoreState } from '@/app/_utils/home/store'

const mono = Ubuntu_Mono({
    subsets: ['latin'],
    weight: ['400'],
})
interface PrintHistory {
    type: 'input' | 'output'
    content: string
}
export default function TelnetConsole() {
    const [ap, setAp] = useState<AccessPoint>()
    const [cmdHistory, setCmdHistory] = useState<PrintHistory[]>([])
    const [inputValue, setInputValue] = useState<string[]>([])
    const [isReady, setReady] = useState<boolean>(false)
    const id = useSelector((state: HomeStoreState) => state.graph.id)
    const keyEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'Backspace':
                setInputValue(inputValue.slice(0, -1))
                break
            case 'Enter':
                setCmdHistory([
                    ...cmdHistory,
                    {
                        type: 'input',
                        content: inputValue.join(''),
                    },
                ])
                setInputValue([])
                break

            default:
                setInputValue([...inputValue, e.key])
                break
        }
    }
    useEffect(() => {
        if (!ap) {
            setReady(false)
        }
        AccessPoint.createAccessPoint(id).then((ap) => {
            setAp(ap)
        })
    }, [ap, id])
    return (
        <div
            className={`relative z-10 grid max-h-full w-full grid-rows-[15%_85%] ${mono.className}`}
        >
            <input
                className={'absolute h-full w-full opacity-0'}
                onKeyDown={keyEventHandler}
                type={'text'}
            />
            <div className="flex h-full w-full items-center justify-between overflow-y-scroll bg-gray-100 px-6 py-2">
                <span className="text-base font-medium">Telnet Console</span>
                <Close fontSize={'small'} />
            </div>
            {isReady ? (
                <div className={'flex w-full flex-col gap-2 bg-zinc-800 p-6'}>
                    {cmdHistory.map((cmd, index) => {
                        return (
                            <span
                                className="break-all text-sm font-light text-gray-200"
                                key={index}
                            >
                                {cmd.type === 'input'
                                    ? `${HashToSevenDigit(ap?.id)}@${ap?.ip}`
                                    : ''}{' '}
                                {cmd.content}
                            </span>
                        )
                    })}
                    <span className="consoleText break-all text-sm font-light text-gray-200">
                        {HashToSevenDigit(ap?.id)}@{ap?.ip}:{' '}
                        {inputValue.join('')}
                    </span>
                </div>
            ) : null}
        </div>
    )
}
