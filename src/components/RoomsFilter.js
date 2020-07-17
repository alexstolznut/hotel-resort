import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

// const getUnique = (items, values) => {
//     const uniqueValues = items.map(items=> items[`${values}`]).filter((v,i,a) => a.indexOf(v) === i);
//     return uniqueValues;
// }

const getUnique = (items, values) => {
    return [...new Set(items.map(items=> items[values]))];
    // return uniqueValues;
}


export default function RoomsFilter() {
    
    const context = useContext(RoomContext);
    const {
        handleChange,
        type, 
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        rooms
    } = context

    console.log(getUnique(rooms, 'type'))
    let uniquePrices = getUnique(rooms, 'price')

    const uniqueOptions = () =>{
        let tempArray = rooms.map(item=>item.type)
        let uniqueOptionsArray = [...new Set(tempArray)];
        return uniqueOptionsArray
  
    }

    console.log(uniqueOptions())

 

    // console.log(uniqueOptions);
    // context.rooms.map(item => item.type)
    // console.log([...new Set(uniqueOptions)]);


    return (
       <section className="filter-container">
           <Title title="search rooms"></Title>
           <form className="filter-form">
            {/*select type*/}
            <div className="form-group">
                   <label htmlFor="type">room type</label>
                   <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {['all',...getUnique(rooms, 'type')]
                        .map((item, index)=>{
                            return <option value={item} key={index}>{item}</option>
                            })
                        }
                   </select>
               </div>
            {/*end select type*/}
            {/*select guests*/}
            <div className="form-group">
                   <label htmlFor="capacity">guests</label>
                   <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange} type="number">
                        {[...getUnique(rooms, 'capacity')]
                        .map((item, index)=>{
                            return <option value={item} key={index}>{item}</option>
                            })
                        }
                   </select>
               </div>
            {/*end select guests*/}
              {/*select price*/}
              <div className="form-group">
                   <label htmlFor="price">price: {price}</label>
                   <input  type="range" min={Math.min(...uniquePrices)} max={Math.max(...uniquePrices)} name="price" id="price" value={price} className="form-control" onChange={handleChange}/>
               </div>
            {/*end select price*/}
           </form>
       </section>
    )
}
