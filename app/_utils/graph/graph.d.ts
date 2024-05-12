type NetworkNodesStatus = 'up' | 'down'

interface AP {
    id: string
    displayName: string
    status: NetworkNodesStatus
    ip: string
    apGroupAP: string //apGroupAP is the rootAp id
    mac: string
    floor: number
    sta: string[]
    meshDepth: number
    staInterface: string
    since: number
}
interface STA {
    id: string
    ip: string
    status: NetworkNodesStatus
    mac: string
    ap: string
    since: number
    isMeshAP: boolean
    meshID?: string
}
interface staResources {
    id?: string
    ip?: string
    status?: NetworkNodesStatus
    mac?: string
    ap?: string
    since?: number
    isMeshAP?: boolean
    meshID?: string
}
interface ApResources {
    id?: string
    displayName?: string
    status?: NetworkNodesStatus
    ip?: string
    apGroupAP?: string
    mac?: string
    floor?: number
    sta?: string[]
    meshDepth?: number
    staInterface?: string
}
