import React from 'react'
import Back from '../common/Back'
import CoursesCard from './CoursesCard'
import PriceList from '../PriceList'


const Courses = () => {
    return (
        <>
            <Back title='Courses'/>
            <CoursesCard />
            <PriceList />
        </>
    )
}

export default Courses
