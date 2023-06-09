import { useEffect, useState } from 'react'

interface Props {
    imgName: string
}

function useImage({ imgName }: Props) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown>(null)
    const [image, setImage] = useState<string>('')

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/${imgName}.png`)
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [imgName])

    return { loading, error, image }
}

export default useImage
