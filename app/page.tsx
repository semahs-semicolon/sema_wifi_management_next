'use client'
import Header from '@/app/_ui/Header'
import { ClickNodeHandler, DisplayGraph } from '@/app/_ui/graph/NetworkGraph'
import { useState } from 'react'
import ConnectionControl from '@/app/_ui/home/ConnectionControl'
import store from '@/app/_utils/home/store'
import { Provider } from 'react-redux'
export default function Home() {
    const [selectedNode, setSelectedNode] = useState<string | null>(null)
    const nodeClickHandler: ClickNodeHandler = function (nodeId: string) {
        setSelectedNode(nodeId)
    }
    return (
        <Provider store={store}>
            <div className={'relative h-full w-full bg-zinc-200'}>
                <Header />
                <main className="grid max-h-screen min-h-screen grid-rows-[3fr_2fr] pt-14">
                    <div className="w-full overflow-hidden">
                        <DisplayGraph />
                    </div>
                    <ConnectionControl />
                </main>
            </div>
        </Provider>
    )
}
