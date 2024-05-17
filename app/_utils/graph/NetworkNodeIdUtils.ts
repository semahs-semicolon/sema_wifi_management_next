export function HashToSevenDigit(hash: string | undefined): string {
    return (hash || '').slice(0, 7)
}
export function AppendNodeTypePrefix(type: 'ap' | 'sta', id: string) {
    return `${type}/${id}`
}
const regex = new RegExp('(ap|sta)/([0-9a-zA-Z]+)')
export function GetNodeTypeFromPrefix(rawString: string) {
    const match = rawString.match(regex)
    if (!match) return
    return match[1] as 'ap' | 'sta'
}
export function GetNodeIdFromPrefix(rawString: string) {
    const match = rawString.match(regex)
    if (!match) return
    return match[2]
}
