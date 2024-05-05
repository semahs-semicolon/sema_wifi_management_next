export default async function FetchApClientNode(apNode: string) {
    try {
        /*const data: STA[] = await (await fetch(`/api/ap/${apNode})/sta`)).json();
        const staList: STA[] = [];
        for (const sta of data) {
            const staData = await (await fetch(`/api/sta/${sta.id}`)).json();
            staList.push(staData)
        }*/
        const staList: STA[] = [
            {
                id: '1',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: 'dd4f926fdf281683f8f2376c2275c805',
                since: 0,
                isMeshAP: true,
            },
            {
                id: '2',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: 'dd4f926fdf281683f8f2376c2275c805',
                since: 0,
                isMeshAP: true,
            },
            {
                id: '4',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: '1',
                since: 0,
                isMeshAP: false,
            },
            {
                id: '5',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: '1',
                since: 0,
                isMeshAP: false,
            },
            {
                id: '6',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: '1',
                since: 0,
                isMeshAP: false,
            },
            {
                id: '7',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: '2',
                since: 0,
                isMeshAP: false,
            },
            {
                id: '8',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: '2',
                since: 0,
                isMeshAP: false,
            },
            {
                id: '9',
                ip: '192.168.4.2',
                status: 'up',
                mac: '00:00:00:00:00:00',
                ap: '2',
                since: 0,
                isMeshAP: false,
            },
        ]
        return staList
    } catch (error) {
        throw error
    }
}
