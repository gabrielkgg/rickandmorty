export class LocationDto {
    public name: string
    public type: string
    public dimension: string
    public residents: {
        id: number
    }[]
}
