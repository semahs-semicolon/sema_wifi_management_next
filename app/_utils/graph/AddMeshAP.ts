import Graph from 'graphology'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
import FetchMeshAp from '@/app/_utils/graph/fetch/FetchMeshAp'
export async function AddApClientNode(graph: Graph, floor: string) {
    try {
        const apList = await FetchMeshAp(floor)
        const rootAp = apList.find((ap) => ap.isRoot)
        if (rootAp) {
            graph.addNode(rootAp.id, {
                x: 0,
                y: 0,
                size: 20,
                label: `Root Router ${rootAp.floor}F(${rootAp.ip})`,
                color: '#FA4F40',
            })
        } else {
            throw new Error('Root AP not found')
        }
        const nodeCoordinates = getCoordinatesByCircularSector(
            {
                x: graph.getNodeAttributes(rootAp)['x'],
                y: graph.getNodeAttributes(rootAp)['y'],
            },
            15,
            3,
            { to: 420, from: 200 },
        )
        apList.forEach((ap, i) => {
            if (ap.isRoot) return
            graph.addNode(ap.id, {
                x: nodeCoordinates[i].x,
                y: nodeCoordinates[i].y,
                size: 15,
                label: `${ap.displayName}(${ap.ip})`,
                color: '#7b20ff',
            })
            graph.addEdge(rootAp.id, ap.id, { size: 3, color: '#333' })
        })
    } catch (error) {
        throw error
    }
}
