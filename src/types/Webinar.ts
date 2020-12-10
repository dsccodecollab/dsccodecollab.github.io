import FireDate from './FireDate'

export default interface Webinar {
    name: string,
    description: string,
    links: {
        embed: string,
        link: string,
        name: string
    }[],
    startTime: FireDate,
    endTime: FireDate
}
