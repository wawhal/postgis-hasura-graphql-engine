const mapping = {
  'times-square': {
    latitude: 40.758896,
    longitude: -73.98513
  },
  'central-park': {
    latitude: 40.785091,
    longitude: -73.968285
  },
  'city-hall': {
    latitude: 40.712772,
    longitude: -74.006058
  }
};

export const makeDataSet = (data) => {
  const newGroup = {}
  data.rides_near_location.forEach((item) => {
    if(newGroup[item.thirty_min.substring(11)]) {
      newGroup[item.thirty_min.substring(11)] += item.number_rides;
    } else {
      newGroup[item.thirty_min.substring(11)] = item.number_rides;
    }
  });
  const labels = Object.keys(newGroup);
  const datasets=[
    {
      label: 'Number of rides',
      backgroundColor: 'rgba(40,99,132,0.2)',
      borderColor: 'rgba(40,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(40,99,132,0.4)',
      hoverBorderColor: 'rgba(40,99,132,1)',
      data: Object.keys(newGroup).map((key) => newGroup[key])
    }
  ];

  return {
    labels,
    datasets
  }
}

export default mapping;
