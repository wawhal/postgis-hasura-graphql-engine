import React from 'react';
import { Query } from "react-apollo";
import { Bar } from 'react-chartjs-2';
import FETCH_RIDES from './query';
import {makeDataSet} from '../helpers';

const renderChart = (latitude, longitude, date) => (
  <Query
    query={FETCH_RIDES}
    variables={{
      where: {
        latitude:{_eq: latitude},
        longitude:{_eq: longitude},
        date: {_eq: date}
      }
    }}
  >
    {({loading, error, data}) => {
      if (loading) {
        return (
          <div>Loading. Please wait...</div>
        );
      }
      if (error) {
        return (
          <div>{JSON.stringify(error)}</div>
        );
      }

      return (
        <Bar
          data={makeDataSet(data)}
          width={100}
          height={40}
          options={{
            maintainAspectRatio: true
          }}
        />
      )
    }}
  </Query>
);

export default renderChart;
