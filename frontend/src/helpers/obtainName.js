
const obtainName = (reduxName) => {
    const name = localStorage.getItem('name');
    // console.log(reduxName);
    if (name !== '') {
        return name;
    }; 
  return reduxName.name;
};

export default obtainName;