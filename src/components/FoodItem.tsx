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
        <div className="animate-fade-in-up bg-dark items-center w-70 h-80 rounded-3xl mt-32">
            {loading ? (
                <div className="bg-white w-56 h-56 -mt-20 ml-20 mr-20 rounded-full" />
            ) : error ? (
                <div className="bg-white w-56 h-56 -mt-20 ml-20 mr-20 rounded-full">
                    {error as string}
                </div>
            ) : (
                <img
                    className="w-56 h-56 -mt-20 mx-16 md:mx-6 lg:mx-12 rounded-full"
                    src={image}
                    alt={title}
                />
            )}

            <div className="flex flex-col items-center">
                <h1 className="text-white font-bold mx-20 text-center mt-5 line-clamp-2">
                    {title}
                </h1>

                <h2 className="text-white mt-5">$ {price}</h2>
                <h2 className="text-grayLight font-semibold mt-5 text-center">
                    {inventory} Bowls available
                </h2>
            </div>
        </div>
    )
}

export default FoodItem
