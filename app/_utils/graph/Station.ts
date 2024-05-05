export default class Station {
    id: string
    ip: string | undefined
    status: string | undefined
    mac: string | undefined
    ap: string | undefined
    since: number | undefined
    isMeshAP: boolean | undefined
    _isInited: boolean = false
    constructor(id: string) {
        this.id = id
        fetch(`/api/sta/${id}`)
            .then((res) => res.json())
            .then((data) => {
                this.ip = data.ip
                this.status = data.status
                this.mac = data.mac
                this.ap = data.ap
                this.since = data.since
                this.isMeshAP = data.isMeshAP
                this._isInited = true
            })
            .catch((error) => {
                throw error
            })
    }
    get isInited() {
        return this._isInited
    }
    static querySTA(resources: staResources): Promise<STA[]> {
        return fetch(`/api/sta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resources),
        }).then((res) => res.json())
    }
}
