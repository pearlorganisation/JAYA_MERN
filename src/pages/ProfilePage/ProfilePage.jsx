import React, { useState } from 'react'
import ProfileSavedCard from '../../components/ProfileSavedCard/ProfileSavedCard';







const ProfilePage = () => {

    const [documentSwitch, setDocumentSwitch] = useState(0);





    return (
        <div className='py-12 px-20'>

            <div className='grid md:grid-cols-3 gap-4 py-4  justify-center items-center'>

                <div className='rounded-full  size-44 bg-black border border-red-400'>
                    <img src="" alt="" />
                </div>
                <div className='grid grid-cols-2 gap-4  justify-between border-yellow-500 border-2'>
                    <p>Jayavarshan ss</p>
                    <p>91+ 6379470141</p>
                    <p>jayavarshan.off@gmail.com</p>
                </div>

                <button className='flex gap-2 justify-center'>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.7075 4.29329L20.7075 0.293287C20.6146 0.20031 20.5043 0.126551 20.3829 0.0762267C20.2615 0.0259024 20.1314 0 20 0C19.8686 0 19.7385 0.0259024 19.6171 0.0762267C19.4957 0.126551 19.3854 0.20031 19.2925 0.293287L7.2925 12.2933C7.19967 12.3862 7.12605 12.4965 7.07586 12.6179C7.02568 12.7393 6.9999 12.8694 7 13.0008V17.0008C7 17.266 7.10536 17.5204 7.29289 17.7079C7.48043 17.8954 7.73478 18.0008 8 18.0008H12C12.1314 18.0009 12.2615 17.9751 12.3829 17.9249C12.5042 17.8747 12.6146 17.8011 12.7075 17.7083L24.7075 5.70829C24.8005 5.61541 24.8742 5.50513 24.9246 5.38373C24.9749 5.26233 25.0008 5.1322 25.0008 5.00079C25.0008 4.86937 24.9749 4.73924 24.9246 4.61785C24.8742 4.49645 24.8005 4.38616 24.7075 4.29329ZM11.5863 16.0008H9V13.4145L17 5.41454L19.5863 8.00079L11.5863 16.0008ZM21 6.58704L18.4137 4.00079L20 2.41454L22.5863 5.00079L21 6.58704ZM24 13.0008V23.0008C24 23.5312 23.7893 24.0399 23.4142 24.415C23.0391 24.7901 22.5304 25.0008 22 25.0008H2C1.46957 25.0008 0.960859 24.7901 0.585786 24.415C0.210714 24.0399 0 23.5312 0 23.0008V3.00079C0 2.47035 0.210714 1.96165 0.585786 1.58657C0.960859 1.2115 1.46957 1.00079 2 1.00079H12C12.2652 1.00079 12.5196 1.10614 12.7071 1.29368C12.8946 1.48122 13 1.73557 13 2.00079C13 2.266 12.8946 2.52036 12.7071 2.70789C12.5196 2.89543 12.2652 3.00079 12 3.00079H2V23.0008H22V13.0008C22 12.7356 22.1054 12.4812 22.2929 12.2937C22.4804 12.1061 22.7348 12.0008 23 12.0008C23.2652 12.0008 23.5196 12.1061 23.7071 12.2937C23.8946 12.4812 24 12.7356 24 13.0008Z" fill="#668DCB" />
                        </svg>

                    </div> <p>Edit</p>
                </button>


            </div>

            <div className=' grid grid-cols-2 rounded overflow-hidden '>


                <button
                    onClick={() => setDocumentSwitch(0)}
                    className={`${documentSwitch === 0 ? 'border-green-400' : 'border-green-200'} border-b-[0.5rem] text-center`}
                > Saved</button>

                <button onClick={() => setDocumentSwitch(1)} className={`${documentSwitch === 1 ? 'border-green-400' : 'border-green-200'} border-b-[0.5rem] text-center`}>My Documents</button>


            </div>

            <div className='p-5'>
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
    )
}

export default ProfilePage