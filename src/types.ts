export type ProductItemType = {
    category: number
    id: number
    imageUrl: string
    name: string
    price: number
    rating: number
}

export type ItemCartType = {
    items: ProductItemType[]
    totalPrice: number
}

export type ItemsCartType = {
    id: number
}