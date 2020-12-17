import FireDate from './FireDate'

export default interface Contest {
    name: string,
    description: string,
    link: string,
    img: string,
    time: FireDate,
    status: boolean
}
