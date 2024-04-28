//src/app/components/Dropdown.tsx
import { useAppDispatch } from "@/components/redux/hooks"
import { openAddAndEditBoardModal } from "@/components/redux/features/appSlice"

interface IDropdown {
    show: boolean
}

export default function Dropdown({ show }: IDropdown) {

    const dispatch = useAppDispatch();

    return (
        <div
            className={`${show ? "block" : "hidden"
                } w-48 absolute top-14 bg-white
            border shadow-lg right-1 py-2 rounded-2xl`}
        >
            <div className="hover:bg-gray-300">
                <button 
                    className="text-sm px-4 py-2"
                    onClick={() => dispatch(openAddAndEditBoardModal('Edit Board'))}
                >
                    Edit Board
                </button>
            </div>
            <div className="hover:bg-gray-300">
                <button className="text-sm px-4 py-2">
                    Delete Board
                </button>
            </div>
        </div>
    )
}