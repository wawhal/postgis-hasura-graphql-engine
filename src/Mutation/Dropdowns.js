import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import UPDATE_DATE from './mutation';
import '../App.css';

class DropDown extends Component {

  handleChange = (date, place, update_date) => {
    update_date(
      {
        variables: {
          set: {
            date
          },
          where: {
            name: {
              _eq: place.toLowerCase()
            }
          }
        },
        update: () => {
          this.props.callback(date, place);
        }
      }
    );
  };

  render() {
    return (
      <Mutation
        mutation={UPDATE_DATE}
      >
        {
          (update_date, { data, loading, error}) => {
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

            const dateOptions = [...Array(9).keys()].map((i) => {
              return (
                <option value={`2016-01-0${i+1}`} key={i}>{`2016-01-0${i+1}`}</option>
              )
            })

            const placeOptions = ['Times-Square', 'Central-Park', 'City-Hall'].map((place, i) => {
              return (
                <option key={i} value={place}>{place}</option>
              )
            })

            return (
              <form className="Form">
                <label className="Label">
                  Date:
                  <select
                    value={this.props.date}
                    onChange={(e) => this.handleChange(
                      e.target.value,
                      this.props.place,
                      update_date
                    )}
                    className="Select"
                  >
                    {dateOptions}
                  </select>
                </label>
                <label className="Label">
                  Place:
                  <select
                    value={this.props.place}
                    onChange={(e) => this.handleChange(
                      this.props.date,
                      e.target.value,
                      update_date
                    )}
                    className="Select"
                  >
                    {placeOptions}
                  </select>
                </label>
              </form>
            )
          }
        }
      </Mutation>
    )
  }
}

export default DropDown;
