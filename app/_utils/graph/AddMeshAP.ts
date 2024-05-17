import Graph from 'graphology'
import { getCoordinatesByCircularSector } from '@/app/_utils/graph/GraphCoordinate'
import AccessPoint from '@/app/_utils/graph/AccessPoint'
import Station from '@/app/_utils/graph/Station'
import { AppendNodeTypePrefix } from '@/app/_utils/graph/NetworkNodeIdUtils'
export async function AddMeshAP(graph: Graph, apGroupID: string) {
    try {
        const apList = await AccessPoint.queryAP({ apGroupAP: apGroupID })
        let meshDepth = 0
        while (true) {
            meshDepth++
            const meshApList = apList.filter((ap) => ap.meshDepth === meshDepth)
            const relativeParentAP = apList.filter(
                (ap) => ap.meshDepth === meshDepth - 1,
            )
            if (meshApList.length === 0 || relativeParentAP.length === 0) break
            for (let meshAp of meshApList) {
                const staInterface = await Station.createStation(
                    meshAp.staInterface,
                )
                const parentAP = relativeParentAP.find(
                    (ap) => ap.id === staInterface.ap,
                )
                const index = meshApList.indexOf(meshAp)
                if (parentAP) {
                    const prefixedApId = AppendNodeTypePrefix('ap', parentAP.id)
                    const nodeCoordinates = getCoordinatesByCircularSector(
                        {
                            x: graph.getNodeAttributes(prefixedApId)['x'],
                            y: graph.getNodeAttributes(prefixedApId)['y'],
                        },
                        100,
                        meshApList.length,
                        { to: 420, from: 200 },
                    )
                    graph.addNode(AppendNodeTypePrefix('ap', meshAp.id), {
                        x: nodeCoordinates[index].x,
                        y: nodeCoordinates[index].y,
                        size: 15,
                        label: `Mesh AP ${meshAp.displayName}`,
                        color: '#7b20ff',
                    })
                    graph.addEdge(
                        AppendNodeTypePrefix('ap', parentAP.id),
                        AppendNodeTypePrefix('ap', meshAp.id),
                        {
                            size: 3,
                            color: '#888',
                            label: meshAp.ip,
                        },
                    )
                }
            }
        }
    } catch (error) {
        throw error
    }
}
