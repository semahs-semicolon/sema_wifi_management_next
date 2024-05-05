import Graph from 'graphology'
import FetchApClientNode from '@/app/_utils/graph/fetch/FetchApClientNode'
import { HashToSevenDigit } from '@/app/_utils/graph/HashSevenDigit'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
export async function AddApClientNode(graph: Graph, apNode: string) {
    try {
        const staList = (await FetchApClientNode(apNode)).filter(
            (sta) => !sta.isMeshAP && sta.ap == apNode,
        )
        const nodeCoordinates = getCoordinatesByCircularSector(
            {
                x: graph.getNodeAttributes(apNode)['x'],
                y: graph.getNodeAttributes(apNode)['y'],
            },
            10,
            3,
            { to: 420, from: 200 },
        )
        for (let i = 0; i < staList.length; i++) {
            graph.addNode(staList[i].id, {
                x: nodeCoordinates[i].x,
                y: nodeCoordinates[i].y,
                size: 15,
                label: `${HashToSevenDigit(staList[i].id)}(${staList[i].ip})`,
                color: '#7b20ff',
            })
            graph.addEdge(apNode, staList[i].id, { size: 3, color: '#333' })
        }
    } catch (error) {
        throw error
    }
}
