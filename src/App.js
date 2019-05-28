import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import CustomerList from './components/CustomerList'
class App extends React.Component {

  componentDidMount(){
    this.props.getData()
  }

  render(){
  return (
    <div>
      <CustomerList />
    </div>
  );
}

}

const mapDispatchToProps = dispatch => {
  return {
    getData() {
      dispatch(() =>{
        fetch('http://localhost:3000/api/customer')
        .then(res => {
          return res.json().then(customerData => {
          dispatch({
            type:'ADD_CUSTOMER_DATA',
            customerData: customerData
          })
        })
        })
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
