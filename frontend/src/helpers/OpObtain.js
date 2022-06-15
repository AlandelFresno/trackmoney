import axios from "axios";

const OpObtain = async(name) => {
    const getId = async() => { // Get user data and return only the ID
      const {data} = await axios.get('http://localhost:3001/api/users', {params: {name}}); // get user data
      return data[0].id; // returns only the user id
    };
    const getOperations = async() => { // Get all the operations in the database and calculates the total amount
      const userID = await getId();  // calls getId function and save the user ID
      const record = await axios.get('http://localhost:3001/api/operation', { // gets operations
        params: {
          userID: userID
        }
      });
      let tot = 0;
      for ( let i = 0; i < record.data.length; i++) { // calculates total amount
        const operationAmount = record.data[i].amount;
        if ( record.data[i].operationType === 'Expense') {
          tot = tot - operationAmount;
        } else {
          tot = tot + operationAmount;
        }
      };
      return { // returns total amount and all operations
        tot,
        record: record.data.reverse()
      };
    };
    const result = await getOperations(); // calls getOperations function and saves it
    return result; // return all the results
};

export default OpObtain;