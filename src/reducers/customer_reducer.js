const customerReducer = (state=[], action) => {
switch (action.type) {
  case 'ADD_CUSTOMER_DATA':
    return [...state,...action.customerData]
    break;
    case 'GET_CUSTOMER_DATA':
    return state;
  default:
    return state;
}

}

export default customerReducer;
