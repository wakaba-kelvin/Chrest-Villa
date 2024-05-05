import React from 'react'

function Browse() {
  return (
    <div className="browse">
        <div className="top-categories">
            <button className='holiday' >Holiday Rentals</button>
            <button className='Residential'>Residential Spaces</button>
            <button className='Events'>Event Spaces</button>
            <button className='Commercial'>Commercial Spaces</button>
            <button className='More'>More</button>
            
        </div>
        <div className="featured">
            <div className="listing">
                <h2>Featured listings</h2>
            </div>
            <div className="itemz">
                <button className='All-Itrems'>All Items</button >
                <button className='resident'>Residential Spaces</button >
                <button className='sports'>Sports Venues</button >
                <button className='Meeting'>Meeting Spaces</button >
                <button className='vans'>Vans & Buses</button >
                <button className='cars'>Cars & SUVs</button >
                <button className='lorries'>Lorries</button>
                <button className='more'>...</button>
            </div>
        </div>
    </div>
  )
}

export default Browse