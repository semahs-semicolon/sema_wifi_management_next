import Graph from 'graphology'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
import AccessPoint from '@/app/_utils/graph/AccessPoint'
export async function AddMeshAP(graph: Graph, floor: number) {
    try {
        const apList = await AccessPoint.queryAP({ floor: floor })
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
            apList.length - 1,
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
            const parentAP = new AccessPoint(ap.id).getParentAP()
            graph.addEdge(parentAP.id, ap.id, { size: 3, color: '#333' })
        })
    } catch (error) {
        throw error
    }
}
