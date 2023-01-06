import React from 'react'

const Litag = ({listItems,values}) => {
  return (
    <div>
       {/* {
                  listItems.map(item=>(
                        <li key={item.id}>{item.Nameitem}</li>
                  ))
      } */}
      {
            values.map(value=>(
                  <li key={value.id}>{value.Nameitem}</li>
            ))
      }
      
    </div>
  )
}

export default Litag