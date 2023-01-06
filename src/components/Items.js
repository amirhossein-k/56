import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../Redux/Slice/ItemSlice'
import Litag from './Litag'

const Items = () => {

      const dispatch = useDispatch()

      // get state in store => itemslice
      const state_items = useSelector(store=>store.itemss)

      // get from state => listItems
      const listItems = state_items.listItems
      

  return (
    <div>
      <ul>
           <Litag values={listItems} />
      </ul>
    </div>
  )
}

export default Items