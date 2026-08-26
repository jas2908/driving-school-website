import React from 'react'
import Back from '../common/Back'
import PriceList from '../pricelist/PriceList'
import CoursesCard from './CoursesCard'
import Packages from '../packages/Packages'


const Courses = () => {
    return (
        <>
            <Back title='Kurs/Pris'/>   
                    
            <PriceList />
            {/* <CoursesCard />  */}
            <Packages />
        </>
    )
}

export default Courses
