function FoodItemSkeleton() {
    return (
        <div className="bg-darkBlack w-70 h-80 rounded-2xl mt-20">
            <div className="bg-darkLight w-40 h-40 -mt-20 ml-20 mr-20 rounded-full"></div>
            <div className="flex flex-col items-center">
                <h1 className="mt-10 mx-20 text-center"></h1>
                <h2 className="mt-5"></h2>
                <h2 className="mt-5 text-center"></h2>
            </div>
        </div>
    )
}

export default FoodItemSkeleton
