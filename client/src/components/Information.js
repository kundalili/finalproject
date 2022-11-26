import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import RegistrationBtn from './Registration/RegistrationBtnPregnant';
import RegistrationBtnPregnant from './Registration/RegistrationBtnPregnant';
import RegistrationBtnMidwife from './Registration/RegistrationBtnMidwife';

export default function Information() {
  return (
    <div>
    <RegistrationBtnPregnant />
    <RegistrationBtnMidwife />
    <div className=''>
        <div className='bg-lotionPink'>
        <h2 className='text-3xl pl-7 pt-4 text-vividBlue font-bold'>
        INA helps you to...
        </h2>
        <ul className='font-medium list-disc pl-12 text-justify py-8 text-l marker:text-coral text-vividBlue'>
            <li>Find midwives with free capacities</li>
            <li>Send requests online</li>
            <li>Reach midwives on the emergency list</li>
            <li>And do many other things for your pregnancy</li>
        </ul>   
        <h2 className='text-3xl pl-7 pt-4 text-vividBlue font-bold'>How does INA work?</h2>
        <h3 className='text-l p-7 text-justify text-vividBlue font-medium'>The most important thing in your pregnancy is a midwife who you trust and who will assist you with her experience and expertise before, during and after childbirth. Unfortunately, it is incredibly difficult to find a midwife for you and your baby, especially in urban areas. The INA midwife search is the platform that saves you all those countless requests. You enter the calculated birth date and your place of residence and INA will find all midwives who still have capacity for you and your baby. There is no need to phone, email and hope for a positive answer.</h3>
    </div>
    <div className='bg-coral'>
        <h2 className='text-3xl pl-7 pt-4 text-white font-bold'>
        FAQ
        </h2>
        <h3 className='text-darkGray text-l font-bold p-7 text-justify'>What information does ina need to find me a midwife?
        </h3>
        <h3 className='text-white text-l p-7 text-justify font-medium'>
        All we need is your due date and your zip code. You can further refine your search criteria and specify the type of care you want (prenatal care , aftercare) or whether you expect twins, for example. The more information you give in the search, the more accurately INA can evaluate the capacities of our midwives and find your midwife.
        </h3>
        <h3 className='text-darkGray text-l font-bold p-7 text-justify'>Do I have to register with INA to find a midwife?</h3>
        <h3 className='text-white text-l p-7 text-justify font-medium'>Yes, before you send your first request, you will create a INA account. With this account you can log in at any time and check the status of your requests.</h3>
        <h3 className='text-darkGray text-l font-bold p-7 text-justify'>How much does the INA midwife search cost me?</h3>
        <h3 className='text-white text-l p-7 text-justify font-medium'>The INA midwife search as well as the list for searching moms are completely free. The paid INA Premium option allows you to use additional features like multiple open requests at the same time and an unlimited entry in the list for searching moms.</h3>

        </div>
    </div>
    </div>
  )
}
  