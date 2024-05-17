import Graph from 'graphology'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
import Station from '@/app/_utils/graph/Station'
import { AppendNodeTypePrefix } from '@/app/_utils/graph/NetworkNodeIdUtils'
export async function AddApClientNode(graph: Graph, apId: string) {
    try {
        const staList = (await Station.querySTA({ ap: apId })).filter(
            (sta) => !sta.isMeshAP,
        )
        const prefixedApId = AppendNodeTypePrefix('ap', apId)
        const nodeCoordinates = getCoordinatesByCircularSector(
            {
                x: graph.getNodeAttributes(prefixedApId)['x'],
                y: graph.getNodeAttributes(prefixedApId)['y'],
            },
            50,
            staList.length,
            { to: 360, from: 0 },
        )
        for (const sta of staList) {
            const i = staList.indexOf(sta)
            graph.addNode(AppendNodeTypePrefix('sta', sta.id), {
                x: nodeCoordinates[i].x,
                y: nodeCoordinates[i].y,
                size: 12,
                label: `${sta.id}`,
                color: '#20ffc4',
            })
            graph.addEdge(
                AppendNodeTypePrefix('ap', apId),
                AppendNodeTypePrefix('sta', sta.id),
                {
                    size: 2,
                    color: '#888',
                    label: sta.ip,
                },
            )
        }
    } catch (error) {
        throw error
    }
}
