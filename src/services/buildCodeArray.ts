const buildCodeArray = productRegisteredArray => {
  if (productRegisteredArray === undefined) return false;
  const dataObjectsArray = [];
  const reponseTextArray = productRegisteredArray.trim().split(';');
  reponseTextArray.forEach(responseItem => {
    if (responseItem !== '') {
      const responseItemTextArray = responseItem
        .trim()
        .replace('‘', "'")
        .replace('’', "'")
        .replace('[', '')
        .replace(']', '')
        .replace(/','/g, '||')
        .split('||');
      const imageObject = {};
      responseItemTextArray.forEach(responseData => {
        const dataTextArray = responseData.split("':'");
        if (dataTextArray.length > 1) {
          const objKey = dataTextArray[0].replace("'", '');
          const objValue = dataTextArray[1].replace("'", '');
          imageObject[objKey] = objValue;
        }
      });
      if (imageObject !== {}) dataObjectsArray.push(imageObject);
    }
  });
  return dataObjectsArray
};

export default buildCodeArray