import { CharacterGender } from '../constants/characterGender'
import { CharacterStatus } from '../constants/characterStatus'
import { LocationDto } from './location.dto'

export class CharacterDto {
    public id: number
    public name: string
    public species: string
    public image: string
    public status: CharacterStatus
    public gender: CharacterGender
    public location: LocationDto
    public origin: LocationDto
}
