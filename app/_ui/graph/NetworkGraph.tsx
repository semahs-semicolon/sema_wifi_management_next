import { useEffect } from 'react'
import Graph from 'graphology'
import {
    SigmaContainer,
    useLoadGraph,
    useRegisterEvents,
} from '@react-sigma/core'
import '@react-sigma/core/lib/react-sigma.min.css'
import { AddMeshAP } from '@/app/_utils/graph/AddMeshAP'
import { AddApGroupRoot } from '@/app/_utils/graph/AddApGroupRoot'
import { AddApClientNode } from '@/app/_utils/graph/AddApClientNode'
import AccessPoint from '@/app/_utils/graph/AccessPoint'
import { useDispatch, useSelector } from 'react-redux'
import { HomeStoreDispatch, HomeStoreState } from '@/app/_utils/home/store'
import { nodeId, nodeType } from '@/app/_utils/graph/redux/NetworkGraphSlicer'
import {
    GetNodeIdFromPrefix,
    GetNodeTypeFromPrefix,
} from '@/app/_utils/graph/NetworkNodeIdUtils'
const sigmaStyle = {
    height: '600px',
    width: '100vw',
    backgroundColor: 'rgb(228 228 231)',
}
export type ClickNodeHandler = (nodeId: string) => void

export const LoadGraph = () => {
    const loadGraph = useLoadGraph()
    const registerEvents = useRegisterEvents()
    const [floor] = useSelector((state: HomeStoreState) => [state.graph.floor])
    const dispatch: HomeStoreDispatch = useDispatch()
    useEffect(() => {
        const graph = new Graph()
        addNodeWrapper().then(() => {
            registerEvents({
                clickNode: (event) => {
                    const rawId = event.node
                    dispatch(nodeId(GetNodeIdFromPrefix(rawId)))
                    dispatch(nodeType(GetNodeTypeFromPrefix(rawId)))
                },
            })
            loadGraph(graph)
        })
        async function addNodeWrapper() {
            await AddApGroupRoot(graph, floor)
            const apList = await AccessPoint.queryAP({ floor: floor })
            const apGroupList = new Set<string>()
            apList.forEach((ap) => {
                apGroupList.add(ap.apGroupAP)
            })
            // @ts-ignore
            for (const apGroup of apGroupList) {
                await AddMeshAP(graph, apGroup)
                for (const ap of apList.filter(
                    (ap) => ap.apGroupAP === apGroup,
                )) {
                    await AddApClientNode(graph, ap.id)
                }
            }
        }
    }, [dispatch, floor, loadGraph, registerEvents])
    return null
}

// Component that display the graph
export const DisplayGraph = () => {
    return (
        <SigmaContainer
            style={sigmaStyle}
            settings={{
                renderEdgeLabels: true,
                labelFont: 'Pretendard',
                labelWeight: '500',
                labelSize: 14,
            }}
        >
            <LoadGraph />
        </SigmaContainer>
    )
}
