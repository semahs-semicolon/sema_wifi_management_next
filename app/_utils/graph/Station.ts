export default class Station {
    id: string
    _ip: string | undefined
    _status: NetworkNodesStatus | undefined
    _mac: string | undefined
    _ap: string | undefined
    _since: number | undefined
    _isMeshAP: boolean | undefined
    _isInited: boolean = false
    private constructor(data: STA) {
        this.id = data.id
        this._ip = data.ip
        this._status = data.status
        this._mac = data.mac
        this._ap = data.ap
        this._since = data.since
        this._isMeshAP = data.isMeshAP
        this._isInited = true
    }
    static async createStation(id: string) {
        try {
            const data = await (
                await fetch(`http://localhost:8080/api/sta/${id}`)
            ).json()
            return new this(data)
        } catch (error) {
            throw error
        }
    }
    get isInited() {
        return this._isInited
    }

    get ip() {
        if (!this._ip) {
            throw new Error('The IP is not initialized')
        }
        return this._ip
    }
    get status() {
        if (!this._status) {
            throw new Error('The status is not initialized')
        }
        return this._status
    }
    get mac() {
        if (!this._mac) {
            throw new Error('The MAC is not initialized')
        }
        return this._mac
    }
    get ap() {
        if (!this._ap) {
            throw new Error('The AP is not initialized')
        }
        return this._ap
    }
    get since() {
        if (!this._since) {
            throw new Error('The since is not initialized')
        }
        return this._since
    }
    get isMeshAP() {
        if (!this._isMeshAP) {
            throw new Error('The isMeshAP is not initialized')
        }
        return this._isMeshAP
    }
    static querySTA(resources: staResources): Promise<STA[]> {
        return fetch(`http://localhost:8080/api/sta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resources),
        }).then((res) => res.json())
    }
}
