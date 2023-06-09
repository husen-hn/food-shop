import useImage from '../hooks/useImage'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiAlertCircle } from 'react-icons/fi'
import { FData } from '../hooks/useData'

interface Props {
    item: FData
    itemClicked: (item: FData) => void
}

function FoodItem({ item, itemClicked }: Props) {
    const { loading, error, image } = useImage({ imgName: item.image })

    return (
        <div className="animate-fade-in-up bg-dark dark:bg-gold items-center w-70 h-80 rounded-xl mt-32">
            {loading ? (
                <div className="bg-white dark:bg-gold w-44 h-44 -mt-20 ml-20 mr-20 rounded-full" />
            ) : error ? (
                <div className="bg-white dark:bg-gold w-44 h-44 -mt-20 ml-20 mr-20 rounded-full">
                    {error as string}
                </div>
            ) : (
                <img
                    className="w-44 h-44 -mt-20 mx-auto rounded-full"
                    src={image}
                    alt={item.title}
                />
            )}

            <div className="flex flex-col items-center">
                <h1 className="text-white dark:text-dark mx-2 text-center mt-5 line-clamp-1">
                    {item.title}
                </h1>

                <h2 className="text-white dark:text-dark mt-5 font-bold">
                    $ {item.price}
                </h2>
                <h2 className="text-grayLight mt-5 text-center">
                    {item.inventory} Bowls available
                </h2>
                <div className="flex flex-row mt-5">
                    <button
                        className="mr-2 text-red dark:text-gray text-md p-2 border-2 border-gray rounded-md flex items-center gap-3 px-3 text-center"
                        onClick={() => itemClicked(item)}
                    >
                        <AiOutlinePlus /> Select
                    </button>
                    <button className="text-grayLight text-md p-2 border-2 border-gray rounded-md flex items-center gap-3 px-3 text-center">
                        <FiAlertCircle /> Recipe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
