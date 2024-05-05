export default class AccessPoint {
    id: string
    displayName: string | undefined
    status: NetworkNodesStatus | undefined
    ip: string | undefined
    floor: number | undefined
    mac: string | undefined
    sta: string[] | undefined
    isRoot: boolean | undefined
    staInterface: string | undefined
    _isInited: boolean = false
    constructor(id: string) {
        this.id = id
        fetch(`/api/sta/${id}`)
            .then((res) => res.json())
            .then((data) => {
                this.displayName = data.displayName
                this.status = data.status
                this.ip = data.ip
                this.floor = data.floor
                this.mac = data.mac
                this.sta = data.sta
                this.isRoot = data.isRoot
                this.staInterface = data.staInterface
                this._isInited = true
            })
            .catch((error) => {
                throw error
            })
    }
    get isInited() {
        return this._isInited
    }
    static queryAP(resources: ApResources): Promise<AP[]> {
        return fetch(`/api/ap`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resources),
        }).then((res) => res.json())
    }
}
