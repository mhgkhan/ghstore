"use client"
import React from 'react'

const Filter = () => {
    return (
        <div className="filter-container">


            <div className="filter-block filter-block-country">
                <select name="filter-countries" >
                    <option defaultValue={'select country'} disabled>Select Country</option>
                    <option value="pakistan" >Pakistan</option>
                </select>
            </div>


            <div className="filter-block filter-block-field">
                <select name="filter-field" >
                    <option defaultValue={'select field'} disabled>Select Field</option>
                    <option value="coder" >Coder</option>
                </select>
            </div>


            <div className="filter-block filter-block-org">
                <select name="filter-org" >
                    <option defaultValue={'select org'} disabled>Select Org</option>
                    <option value="paf" >Pakistan Air force </option>
                </select>
            </div>



        </div>
    )
}

export default Filter
