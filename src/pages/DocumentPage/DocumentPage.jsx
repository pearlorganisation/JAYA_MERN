import { HiOutlineDotsVertical } from "react-icons/hi";
import DropdownBasic from "../../components/Dropdown/Dropdown";

const DocumentPage = () => {
    return (
        <div className='py-10'>
            <div>
                <div className='flex py-8 px-6 gap-8 items-center '>
                    <img src='botHead.png' />
                    <div className='flex flex-col gap-1'>
                        <p>Hey !</p>
                        <p>Upload your certificates and documents for better experience also,</p>
                        <p>save as your e-certificates.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src='documentImage.svg' className='size-80' />
                </div>
                <div className='p-10 flex flex-col  gap-5'>
                    <h1 className='text-lg font-bold text-[#315288]'>Citizen 1</h1>

                    <div className='grid  grid-cols-3'>
                        {
                            Array.from({ length: 3 }).map(item => {
                                return <div className='border-green-400   border-2 rounded-md w-72  h-44 flex flex-col justify-end'>
                                    <div className='flex justify-between px-2 items-center border-t-2 border-t-green-300 '>
                                        <h4 className='text-[#393939]  font-semibold '>Aadhar</h4>
                                        <DropdownBasic />
                                    </div>

                                </div>
                            })
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}

export default DocumentPage