export default async function FetchMeshAp(apNode: string) {
    try {
        /*const data: AP[] = await (await fetch(`/api/ap/${apNode})/sta`)).json()
        const apList: AP[] = []
        for (const sta of data) {
            const staData = await (await fetch(`/api/sta/${sta.id}`)).json()
            if (staData.isMeshAP && staData.meshID) {
                const apData = await (await fetch(`/api/ap/${staData.meshID}`)).json()
                apList.push(apData)
            }
        }*/
        const apList: AP[] = [
            {
                id: 'dd4f926fdf281683f8f2376c2275c805',
                ip: '192.168.4.1',
                displayName: 'AP1',
                floor: 1,
                status: 'up',
                mac: '00:00:00:00:00:00',
                sta: ['ap1', 'ap2'],
                isRoot: true,
                staInterface: 'root',
            },
            {
                id: '1',
                ip: '192.168.4.3',
                status: 'up',
                displayName: 'AP2',
                floor: 1,
                mac: '00:00:00:00:00:00',
                sta: ['4', '5', '6'],
                isRoot: false,
                staInterface: '1',
            },
            {
                id: '2',
                ip: '192.168.4.2',
                status: 'up',
                displayName: 'AP3',
                floor: 1,
                mac: '00:00:00:00:00:00',
                sta: ['7', '8', '9'],
                isRoot: false,
                staInterface: '2',
            },
        ]
        return apList
    } catch (error) {
        throw error
    }
}
