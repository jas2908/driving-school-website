import React from 'react'

const Back = ({ title }) => {
    return (
        <>
            <section className="back">
                <div className="overlay"></div>
                <h1>{title}</h1>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Back