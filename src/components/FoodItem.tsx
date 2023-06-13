import useImage from '../hooks/useImage'

interface Props {
    imgName: string
    title: string
    price: string
    inventory: number
}

function FoodItem({ imgName, title, price, inventory }: Props) {
    const { loading, error, image } = useImage({ imgName: imgName })

    return (
        <div className="bg-darkBlack items-center w-70 h-80 rounded-2xl mt-20">
            {loading ? (
                <div className="bg-white w-40 h-40 -mt-20 ml-20 mr-20 rounded-full" />
            ) : error ? (
                <div className="bg-white w-40 h-40 -mt-20 ml-20 mr-20 rounded-full">
                    {error as string}
                </div>
            ) : (
                <img
                    className="w-40 h-40 -mt-20 rounded-full mx-40 md:mx-12 lg:mx-20 "
                    src={image}
                    alt={title}
                />
            )}

            <div className="flex flex-col items-center">
                <h1 className="text-white font-bold mx-20 text-center mt-10 line-clamp-2">
                    {title}
                </h1>

                <h2 className="text-gray font-semibold mt-5">$ {price}</h2>
                <h2 className="text-grayDark font-semibold mt-5 text-center">
                    {inventory} Bowls available
                </h2>
            </div>
        </div>
    )
}

export default FoodItem
