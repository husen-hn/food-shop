import useData from '../hooks/useData'
import { Category } from '../services/category'
import fake_data from '../services/data/fake_data'
import { Type } from '../services/type'
import FoodPageSkeleton from './FoodPageSkeleton'
import NotFound from './NotFound'

function FoodPage() {
    const foodCategories: string[] = (
        Object.keys(Category) as Array<keyof typeof Category>
    ).map((key) => Category[key])

    const foodTypes: string[] = (
        Object.keys(Type) as Array<keyof typeof Type>
    ).map((key) => Type[key])

    const { data, error, loading } = useData({
        fData: fake_data,
        deps: {
            keyword: '',
            category: foodCategories[0],
            type: foodTypes[0]
        }
    })

    return (
        <div className="flex flex-col m-10">
            {loading ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                        <FoodPageSkeleton key={crypto.randomUUID()} />
                    ))}
                </div>
            ) : error ? (
                <h2 className="text-grayLight text-2xl font-bold w-full">
                    {error}
                </h2>
            ) : data.length === 0 ? (
                <NotFound />
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
            )}
        </div>
    )
}

export default FoodPage
