
const obtainName = (reduxName) => {   // Handle local storage user name
    const name = localStorage.getItem('name');  
    if (name !== '') {
        return name;
    }; 
  return reduxName.name;
};

export default obtainName;