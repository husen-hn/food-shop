import { useEffect, useState } from 'react'

export interface FData {
    id: number
    image: string
    title: string
    price: string
    inventory: number
    categories: string[]
    types: string[]
}

interface FDataDeps {
    keyword: string
    category: string
    type: string
}

interface FDataType {
    fData: FData[]
    deps: FDataDeps
}

function useData({ fData, deps }: FDataType) {
    const [data, setData] = useState<FData[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()

        try {
            setTimeout(() => {
                setData(
                    fData.filter(
                        (food) =>
                            food.categories.includes(deps.category) &&
                            food.types.includes(deps.type) &&
                            food.title
                                .toLocaleLowerCase()
                                .includes(deps.keyword)
                    )
                )
                setLoading(false)
            }, 1000)
        } catch (error) {
            setError(error as string)
        }

        return () => controller.abort()
    }, [deps.category, deps.type, deps.keyword, fData])

    return { data, error, loading }
}

export default useData
