import gql from 'graphql-tag';

const FETCH_RIDES = gql`
  query fetch_rides($where: rides_near_location_bool_exp){
    rides_near_location(
      where: $where,order_by:[thirty_min_asc]) {
      thirty_min
      number_rides
      date
      latitude
      longitude
    }
  }
`;

export default FETCH_RIDES;
