function FoodItemSkeleton() {
    return (
        <div className="animate-pulse bg-dark w-70 h-80 rounded-2xl mt-32">
            <div className="bg-gray w-56 h-56 -mt-20 mx-16 md:mx-6 lg:mx-12 rounded-full"></div>
            <div className="flex flex-col items-center">
                <h1 className="mt-10 mx-20 text-center"></h1>
                <h2 className="mt-5"></h2>
                <h2 className="mt-5 text-center"></h2>
            </div>
        </div>
    )
}

export default FoodItemSkeleton
