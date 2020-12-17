import BlogItem from './BlogItem'

export default interface Blogs {
    status: string,
    feed: {
        url: string,
        title: string,
        link: string,
        suthor: string,
        description: string,
        image: string
    },
    items: BlogItem[]
}
