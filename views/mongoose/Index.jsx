import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {

    const flight = props.flight 
    flight.sort((first, second) => first.departs - second.departs)

    // function dateHasPassed(date) {
    //     let today = new Date()
    //     let dateToCheck = new Date(date)
    //     return dateToCheck.getTime() < today.getTime()
    // }

    return (
        // <DefaultLayout>    
        <div >
        <h1>Flights Index View </h1>
        <ul>
        {flight.map((item, index) =>
                        (item.departs < Date.now()) ?
                             <li key={index}> <a href={`/flights/${item._id}`}>{item.airline} <br></br>{item.flightNo}</a><br></br> {item.departs.toDateString()} </li>
                            :
                            <li key={index}><a href={`/flights/${item._id}`}>{item.airline} <br></br>{item.flightNo}</a><br></br> {item.departs.toDateString()} </li>)
                    }
            
            </ul>

        <a href='/flights/new'>
        <button>New Flight</button>
        </a>
        
       </div>
        
        // </DefaultLayout>
        
    )
}

export default Index