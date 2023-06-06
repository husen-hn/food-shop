import { LuSearch } from 'react-icons/lu'

function Input() {
    return (
        <div>
            <div className="relative mb-6">
                <LuSearch className="pointer-events-none mx-2 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 text-white" />

                <input
                    className="bg-darkLight focus:bg-darkLight appearance-none border-2 border-darkLight focus:border-red rounded-xl w-full h-10 py-6 px-8 text-white leading-tight focus:outline-none overflow-ellipsis"
                    type="text"
                    placeholder="Search for food, coffe, etc..."
                />
            </div>
        </div>
    )
}

export default Input
