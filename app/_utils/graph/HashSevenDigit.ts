export function HashToSevenDigit(hash: string | undefined): string {
    return (hash || '').slice(0, 7)
}
