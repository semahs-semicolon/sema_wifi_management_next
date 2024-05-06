import Graph from 'graphology'
import { HashToSevenDigit } from '@/app/_utils/graph/HashSevenDigit'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
import AccessPoint from '@/app/_utils/graph/AccessPoint'
export async function AddApClientNode(graph: Graph, apNode: string) {
    try {
        const ap = new AccessPoint(apNode)
        const staList = ap
            .getStaList()
            .filter((sta) => !sta.isMeshAP && sta.ap == apNode)
        const nodeCoordinates = getCoordinatesByCircularSector(
            {
                x: graph.getNodeAttributes(apNode)['x'],
                y: graph.getNodeAttributes(apNode)['y'],
            },
            10,
            staList.length - 1,
            { to: 30, from: 330 },
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
