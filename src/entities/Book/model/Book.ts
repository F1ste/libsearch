export interface IBook {
    id: string,
    selfLink: string,
    volumeInfo: IVolumeInfo
}

export interface IVolumeInfo{
    title: string
    categories: string[]
    authors: string[]
    imageLinks: {
        thumbnail: string
    }
    description?: string;
}
