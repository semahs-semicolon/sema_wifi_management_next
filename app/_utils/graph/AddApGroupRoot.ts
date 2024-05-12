import Graph from 'graphology'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
import AccessPoint from '@/app/_utils/graph/AccessPoint'
import { HashToSevenDigit } from '@/app/_utils/graph/HashSevenDigit'
export async function AddApGroupRoot(graph: Graph, floor: number) {
    try {
        const rootAP = await AccessPoint.queryAP({ floor: floor, meshDepth: 0 })
        const nodeCoordinates = getCoordinatesByCircularSector(
            {
                x: 0,
                y: 0,
            },
            40,
            rootAP.length,
            { to: 0, from: 360 },
        )
        for (const ap of rootAP) {
            const i = rootAP.indexOf(ap)
            graph.addNode(ap.id, {
                x: nodeCoordinates[i].x,
                y: nodeCoordinates[i].y,
                size: 20,
                label: `Root AP: ${HashToSevenDigit(ap.id)}(${ap.ip})`,
                color: '#ff3c3c',
            })
        }
    } catch (error) {
        throw error
    }
}
