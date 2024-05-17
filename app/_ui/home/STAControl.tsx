'use client'
import { useEffect, useState } from 'react'
import Station from '@/app/_utils/graph/Station'
import { WifiTethering, WifiTetheringOff, Edit } from '@mui/icons-material'
import { HashToSevenDigit } from '@/app/_utils/graph/NetworkNodeIdUtils'
import ControlLoading from '@/app/_ui/home/ControlLoading'
import ControlButton from '@/app/_ui/ControlButton'
import { useSelector } from 'react-redux'
import { HomeStoreState } from '@/app/_utils/home/store'
export default function STAControl() {
    const [data, setData] = useState<Station>()
    const [loading, setLoading] = useState<boolean>(true)
    const id = useSelector((state: HomeStoreState) => state.graph.id)
    useEffect(() => {
        if (!id) {
            setLoading(true)
            return
        }
        Station.createStation(id).then((sta) => {
            setData(sta)
            setLoading(false)
        })
    }, [id])
    if (loading) {
        return <ControlLoading />
    } else {
        return (
            <div className="z-10 flex w-full flex-col bg-zinc-100 p-6 drop-shadow-2xl">
                <div className="flex flex-col gap-3">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-medium">
                                {HashToSevenDigit(data!.id)}
                            </span>
                            <span className="text-sm font-light text-gray-600">
                                {data?.ip}
                            </span>
                        </div>
                        {data?.status === 'up' ? (
                            <WifiTethering className="text-green-500" />
                        ) : (
                            <WifiTetheringOff className="text-red-500" />
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-full  items-center gap-4">
                            <span className="text-sm font-normal text-gray-500">
                                연결된 AP
                            </span>
                            <span className="text-sm font-medium">
                                {data?.ap}
                            </span>
                        </div>

                        <div className="flex w-full  items-center gap-4">
                            <span className="text-sm font-normal text-gray-500">
                                MAC 주소
                            </span>
                            <span className="text-sm font-medium">
                                {data?.mac}
                            </span>
                            <Edit
                                fontSize={'small'}
                                className="text-gray-500"
                            />
                        </div>
                        <div className="flex w-full  items-center gap-4">
                            <span className="text-sm font-normal text-gray-500">
                                업타임
                            </span>
                            <span className="text-sm font-medium">
                                {Math.floor(
                                    (Date.now() - data?.since! || 0) / 60,
                                )}
                                분
                            </span>
                        </div>

                        <div className="flex w-full  items-center gap-5">
                            <span className="text-sm font-normal text-gray-500">
                                연결된 AP
                            </span>
                            <span className="text-sm font-medium">
                                {HashToSevenDigit(data?.ap!)}
                            </span>
                        </div>
                    </div>
                    <div className="grid h-7 w-full  grid-cols-3 items-center gap-3">
                        <ControlButton text={'AP 재시작'} onClick={() => {}} />
                        <ControlButton
                            text={'Telnet 접속'}
                            onClick={() => {}}
                        />
                        <ControlButton text={'설정'} onClick={() => {}} />
                    </div>
                </div>
            </div>
        )
    }
}
