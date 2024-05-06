import Station from '@/app/_utils/graph/Station'

export default class AccessPoint {
    id: string
    _displayName: string | undefined
    _status: NetworkNodesStatus | undefined
    _ip: string | undefined
    _floor: number | undefined
    _mac: string | undefined
    _sta: string[] | undefined
    _isRoot: boolean | undefined
    _staInterface: string | undefined
    _isInited: boolean = false
    constructor(id: string) {
        this.id = id
        fetch(`/api/sta/${id}`)
            .then((res) => res.json())
            .then((data) => {
                this._displayName = data.displayName
                this._status = data.status
                this._ip = data.ip
                this._floor = data.floor
                this._mac = data.mac
                this._sta = data.sta
                this._isRoot = data.isRoot
                this._staInterface = data.staInterface
                this._isInited = true
            })
            .catch((error) => {
                throw error
            })
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
    get floor() {
        if (!this._floor) {
            throw new Error('The floor is not initialized')
        }
        return this._floor
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
    get isRoot() {
        if (!this._isRoot) {
            throw new Error('The isRoot is not initialized')
        }
        return this._isRoot
    }
    get staInterface() {
        if (!this._staInterface) {
            throw new Error('The staInterface is not initialized')
        }
        return this._staInterface
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
    getParentAP() {
        if (this._isRoot) {
            throw new Error('This AP is root AP')
        }
        const staInterface = new Station(this.staInterface)
        return new AccessPoint(staInterface.ap)
    }
    getStaList() {
        const staList: Station[] = []
        if (this.sta.length === 0) {
            return staList
        }
        this.sta.forEach((sta) => {
            staList.push(new Station(sta))
        })
        return staList
    }
}
