import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRockets, rocketsData } from '../../redux/rockets/RocketReducer';

const Rockets = () => {
  const rocketState = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      if (rocketState.length === 0) {
        const data = await getRockets();
        dispatch(rocketsData(data));
      }
    }
    getData();
  }, []);

  return (
    <div>
      {rocketState.map((rocket) => (
        <Rocket
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          key={rocket.id}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

const RocketList = () => (
  <div>
    <Rockets />
  </div>
);

export default RocketList;
