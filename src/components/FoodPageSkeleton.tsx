function FoodPageSkeleton() {
    return (
        <div className="animate-pulse bg-dark dark:bg-gold w-70 h-80 rounded-xl mt-32">
            <div className="bg-gray dark:bg-lightGold w-44 h-44 -mt-20 mx-auto rounded-full"></div>
            <div className="flex flex-col items-center">
                <h1 className="mt-10 mx-20 text-center"></h1>
                <h2 className="mt-5"></h2>
                <h2 className="mt-5 text-center"></h2>
            </div>
        </div>
    )
}

export default FoodPageSkeleton
