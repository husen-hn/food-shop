import { useEffect, useState } from 'react'
import { FData } from './useData'

interface Props {
    key: string
    data?: FData
    deleteData?: FData
}

function useStorage({ key, data, deleteData }: Props) {
    const [storageData, setStorageData] = useState<FData[]>([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        try {
            const cartItems = JSON.parse(localStorage.getItem(key) ?? '[]')

            if (deleteData) {
                // start to delete items
                if (cartItems.length !== 0) {
                    const fItemIndex = cartItems.findIndex(
                        (i: { id: number }) => i.id === deleteData.id
                    )

                    cartItems.splice(fItemIndex, 1)

                    localStorage.setItem(key, JSON.stringify([...cartItems]))
                }
            } else if (data) {
                if (cartItems.length !== 0) {
                    // if Cart is not empty
                    const fItemIndex = cartItems.findIndex(
                        (i: { id: number }) => i.id === data.id
                    )

                    if (fItemIndex !== -1 || fItemIndex === undefined) {
                        // if item is available on cart update the qty
                        const fItem = cartItems[fItemIndex]
                        cartItems[fItemIndex] = {
                            id: fItem.id,
                            qty: fItem.qty + 1,
                            orderNote: fItem.orderNote
                        }

                        localStorage.setItem(
                            key,
                            JSON.stringify([...cartItems])
                        )
                    } else {
                        // if item is not available on cart
                        localStorage.setItem(
                            key,
                            JSON.stringify([
                                ...cartItems,
                                {
                                    id: data.id,
                                    qty: 1,
                                    orderNote: ''
                                }
                            ])
                        )
                    }
                } else {
                    // if Cart is empty
                    localStorage.setItem(
                        key,
                        JSON.stringify([
                            {
                                id: data.id,
                                qty: 1,
                                orderNote: ''
                            }
                        ])
                    )
                }
            }

            setStorageData(JSON.parse(localStorage.getItem(key) ?? '[]'))
            setLoading(false)
        } catch (error) {
            setError(error as string)
            setLoading(false)
        }
    }, [data, key, deleteData])

    return { storageData, error, loading }
}

export default useStorage
