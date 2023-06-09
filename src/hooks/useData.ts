import { useEffect, useState } from 'react'

interface FData {
    image: string
    title: string
    price: string
    inventory: number
    categories: string[]
    types: string[]
}

interface FDataDeps {
    category: string
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
                    fData.filter((food) =>
                        food.categories.includes(deps.category)
                    )
                )
                setLoading(false)
            }, 1000)
        } catch (error) {
            setError(error as string)
        }

        return () => controller.abort()
    }, [])

    return { data, error, loading }
}

export default useData
