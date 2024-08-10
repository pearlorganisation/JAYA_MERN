import  { useState } from 'react'
import ProfileSavedCard from '../../components/ProfileSavedCard/ProfileSavedCard';







const ProfilePage = () => {

    const [documentSwitch, setDocumentSwitch] = useState(0);





    return (
        <div className='py-12 px-20 space-y-6'>

            <div class="w-full">
                <div class="rounded-lg border bg-white px-4 pt-8 pb-10 ">
                    <div class="relative mx-auto w-36 rounded-full">
                        <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    </div>
                    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">Jayavarshan ss</h1>
                    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">jayavarshan.off@gmail.com</h3>
                    <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">91+ 6379470141</p>
                    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                        <li class="flex items-center py-3 text-sm">
                            <span></span>
                            <span class="ml-auto"><button class=" bg-green-200 py-2 px-6 text-xs font-medium text-green-700">Edit</button></span>
                        </li>
                        <li class="flex items-center py-3 text-sm">
                            <span>Joined On</span>
                            <span class="ml-auto">Apr 08, 2024</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='rounded-lg border bg-white p-5'>
                <div className=' grid grid-cols-2 overflow-hidden  '>


                    <button
                        onClick={() => setDocumentSwitch(0)}
                        className={`${documentSwitch === 0 ? 'border-green-400' : 'border-green-200'} border-b-[0.5rem] text-center py-3 `}
                    > Saved</button>

                    <button onClick={() => setDocumentSwitch(1)} className={`${documentSwitch === 1 ? 'border-green-400' : 'border-green-200'} border-b-[0.5rem] text-center py-3 `}>My Documents</button>


                </div>

                <div className=''>
                    <div >
                        {
                            documentSwitch === 0
                                ? <div className='flex flex-col py-4 gap-5'>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <ProfileSavedCard key={index} />
                                    ))}
                                </div>
                                : <div> this is document</div>
                        }
                    </div>

                </div>
            </div>





        </div>
    )
}

export default ProfilePage