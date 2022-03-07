import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserAction } from '../../../core/redux/_actions/User.actions';


const UserMonthlyStats = () => {
  const dispatch = useDispatch();

  const  athletes = useSelector(store => store.athlete.array);

  useEffect(() => {
    const fetchData = () => {
        dispatch(userDetailAction ())
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Resume </h2>
      <Link to='/details' onClick={() => dispatch( getUserAction())}>Months 1
        <h3> Activity: { athletes.activities } </h3>
        <h3> Total Distance: { athletes.total.distance }</h3>
        <h3> Total Time: { athletes.total.time } </h3>
        <h3> Total Elevation_gain: { athletes.total.elevation_gain}  </h3>
      </Link>
      <Link to='/details'onClick={() => dispatch( getUserAction())}>Months 2
        <h3> Activity: { athletes.activities } </h3>
        <h3> Total Distance: { athletes.total.distance }</h3>
        <h3> Total Time: { athletes.total.time } </h3>
        <h3> Total Elevation_gain: { athletes.total.elevation_gain}  </h3>
      </Link>
      <Link to='/details' onClick={() => dispatch( getUserAction())}>Months 3
        <h3> Activity: { athletes.activities } </h3>
        <h3> Total Distance: { athletes.total.distance }</h3>
        <h3> Total Time: { athletes.total.time } </h3>
        <h3> Total Elevation_gain: { athletes.total.elevation_gain}  </h3>
      </Link>
      </div>
  )
}

export default UserMonthlyStats;