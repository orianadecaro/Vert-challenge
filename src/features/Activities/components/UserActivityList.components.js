import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { userDetailAction } from '../../../core/_actions/User.actions';

const UserActivityList = () => {
  const dispatch = useDispatch();

 useEffect(() => {
    const fetchData = () => {
        dispatch(userDetailAction ())
    }
    fetchData();
}, [dispatch]);

  const  athletes = useSelector(store => store.athlete.array);

  return  (
      <div>
          {
          athletes.map( ( item, key )=>{
            return(
              <ul item={ item } key={ key} >
                  <li> User:{ item.user.id } </li> 
                  <li> Activity:{ item.user.activity.name } </li> 
                  <li> Name:{ item.user.activity.name } </li> 
                  <li> Date: { item.user.activity.date } </li>
                  <li> Distance: {item.user.activity.distance} </li>
                  <li> Elevation_gain: { item.user.activity.elevation_gain } </li>
              </ul>
            )
          })
          }
      </div>
  )
}

export default UserActivityList;