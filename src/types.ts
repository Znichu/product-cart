export type ProductItemType = {
    category: number
    id: number
    imageUrl: string
    name: string
    price: number
    rating: number
}

export type CartProductType = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export type ItemCartType = {
    item: CartProductType
    quantity: number
}
