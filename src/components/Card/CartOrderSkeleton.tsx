function CartOrderSkeleton() {
    return (
        <div className="animate-pulse bg-gray dark:bg-gold w-full h-20 rounded-xl mt-2">
            <div className="bg-grayLight dark:bg-lightGold w-12 h-12 mx-2 mt-2 rounded-full"></div>
            <div className="flex flex-col items-center">
                <h1 className="mt-10 mx-20 text-center"></h1>
                <h2 className="mt-5"></h2>
                <h2 className="mt-5 text-center"></h2>
            </div>
        </div>
    )
}

export default CartOrderSkeleton
