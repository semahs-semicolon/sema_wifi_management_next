type NetworkNodesStatus = 'up' | 'down'

interface AP {
    id: string
    displayName: string
    status: NetworkNodesStatus
    ip: string
    floor: number
    mac: string
    sta: string[]
    isRoot: boolean
    staInterface: string
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
    floor?: number
    mac?: string
    sta?: string[]
    isRoot?: boolean
    staInterface?: string
}
