import { HiOutlineDotsVertical } from "react-icons/hi";
import DropdownBasic from "../../components/Dropdown/Dropdown";

const DocumentPage = () => {
    return (
        <div className='py-10 min-h-screen'>
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
                    <img src='documentImage.svg' className='' />
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
                {/* <div className="flex justify-center items-start w-full border-2">
                    <label for="uploadFile1"
                        className="bg-white text-gray-500 w-full font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000" />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000" />
                        </svg>
                        Upload file

                        <input type="file" id='uploadFile1' className="hidden" />
                        <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                    </label>
                </div> */}
            </div>

        </div>
    )
}

export default DocumentPage