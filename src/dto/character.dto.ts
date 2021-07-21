import { CharacterStatus } from '../constants/characterStatus'

export class CharacterDto {
    public id: number
    public name: string
    public species: string
    public image: string
    public status: CharacterStatus
}
