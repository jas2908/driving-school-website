import React from 'react'
import Back from '../common/Back'
import PriceList from '../pricelist/PriceList'
import CoursesCard from './CoursesCard'


const Courses = () => {
    return (
        <>
            <Back title='Kurs/Pris'/>   
                    
            <PriceList />
            <CoursesCard /> 
        </>
    )
}

export default Courses
