import gql from 'graphql-tag';

const UPDATE_DATE= gql`
  mutation update_date($set: origin_day_set_input!, $where:origin_day_bool_exp!){
    update_origin_day(_set:$set, where:$where){
      affected_rows
    }
  }
`;

export default UPDATE_DATE;
