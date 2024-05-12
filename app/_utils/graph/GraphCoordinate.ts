export interface Coordinate {
    x: number
    y: number
}
export interface CircularSector {
    from: number
    to: number
}
export function getCoordinateByRadius(
    centerX: number,
    centerY: number,
    radius: number,
    angle: number,
): { x: number; y: number } {
    return {
        x: centerX + radius * Math.cos((Math.PI * angle) / 180),
        y: centerY + radius * Math.sin((Math.PI * angle) / 180),
    }
}
export function getCoordinatesByCircle(
    centerX: number,
    centerY: number,
    radius: number,
    count: number,
): { x: number; y: number }[] {
    const coordinates = []
    for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count
        coordinates.push(getCoordinateByRadius(centerX, centerY, radius, angle))
    }
    return coordinates
}
export function getCoordinatesByCircularSector(
    centerCoordinate: Coordinate,
    radius: number,
    count: number,
    circularSector: CircularSector,
): { x: number; y: number }[] {
    const coordinates = []
    const offset = (circularSector.to - circularSector.from) / count
    for (let i = 0; i < count; i++) {
        const angle = circularSector.from + offset * i
        coordinates.push(
            getCoordinateByRadius(
                centerCoordinate.x,
                centerCoordinate.y,
                radius,
                angle,
            ),
        )
    }
    return coordinates
}
