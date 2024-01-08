import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";

type Props = {
    boxtype: number,
    id: number,
    clickHandler: (event: React.MouseEvent<HTMLDivElement>) => void
}

// const MarkBox = ({ boxtype }: { boxtype: string }) => {
const MarkBox = ({ boxtype, id, clickHandler }: Props) => {
    return (
        <div className='bg-white bg-opacity-10 text-white text-opacity-60 text-base flex justify-center items-center text-[150px] hover:bg-opacity-30 cursor-pointer rounded-xl' onClick={clickHandler}>
            {
                boxtype === 0 ?
                    <FaRegCircle className=" text-[150px]"/> : boxtype === 1 ?
                        <RxCross2 className=" text-[150px]"/> : ""
            }
        </div>
    )
}

export default MarkBox