import Station from '@/app/_utils/graph/Station'

export default class AccessPoint {
    id: string
    _displayName: string | undefined
    _status: NetworkNodesStatus | undefined
    _ip: string | undefined
    _apGroupAP: string | undefined
    _mac: string | undefined
    _sta: string[] | undefined
    _floor: number | undefined
    _meshDepth: number | undefined
    _staInterface: string | undefined
    _since: number | undefined
    _isInited: boolean = false
    private constructor(data: AP) {
        this.id = data.id
        this._displayName = data.displayName
        this._status = data.status
        this._ip = data.ip
        this._apGroupAP = data.apGroupAP
        this._mac = data.mac
        this._sta = data.sta
        this._meshDepth = data.meshDepth
        this._staInterface = data.staInterface
        this._floor = data.floor
        this._since = data.since
        this._isInited = true
    }
    static async createAccessPoint(id: string) {
        try {
            const data = await (
                await fetch(`http://localhost:8080/api/ap/${id}`)
            ).json()
            return new this(data)
        } catch (error) {
            throw error
        }
    }
    get isInited() {
        return this._isInited
    }
    //getter method for every member variable of the class, if the member variable is not initialized, it will throw an error
    get displayName() {
        if (!this._displayName) {
            throw new Error('The displayName is not initialized')
        }
        return this._displayName
    }
    get status() {
        if (!this._status) {
            throw new Error('The status is not initialized')
        }
        return this._status
    }
    get ip() {
        if (!this._ip) {
            throw new Error('The IP is not initialized')
        }
        return this._ip
    }
    get apGroupAP() {
        if (!this._apGroupAP) {
            throw new Error('The floor is not initialized')
        }
        return this._apGroupAP
    }
    get mac() {
        if (!this._mac) {
            throw new Error('The MAC is not initialized')
        }
        return this._mac
    }
    get sta() {
        if (!this._sta) {
            throw new Error('The STA is not initialized')
        }
        return this._sta
    }
    get meshDepth() {
        if (!this._meshDepth) {
            throw new Error('The meshDepth is not initialized')
        }
        return this._meshDepth
    }
    get staInterface() {
        if (!this._staInterface) {
            throw new Error('The staInterface is not initialized')
        }
        return this._staInterface
    }
    get floor() {
        if (!this._floor) {
            throw new Error('The floor is not initialized')
        }
        return this._floor
    }
    get since() {
        if (!this._since) {
            throw new Error('The since is not initialized')
        }
        return this._since
    }
    static queryAP(resources: ApResources): Promise<AP[]> {
        return fetch(`http://localhost:8080/api/ap`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resources),
        }).then((res) => res.json())
    }
    async getParentAP() {
        if (this.meshDepth === 0) {
            throw new Error('This AP is root AP')
        }
        const staInterface = await Station.createStation(this.staInterface)
        return await AccessPoint.createAccessPoint(staInterface.ap)
    }
    async getStaList() {
        const staList: Station[] = []
        if (this.sta.length === 0) {
            return staList
        }
        for (const sta1 of this.sta) {
            staList.push(await Station.createStation(sta1))
        }
        return staList
    }
}
