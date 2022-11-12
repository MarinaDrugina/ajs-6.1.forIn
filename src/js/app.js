export default function sortCharacters(arrCh, sortArr) {
  const arr = [];

  for (const prop in arrCh) {
    if (Object.prototype.hasOwnProperty.call(arrCh, prop)) {
      arr.push(prop);
    } else {
      throw new Error('Not properties found!');
    }
  }

  arr.sort();

  arr.forEach((item) => {
    if (sortArr.indexOf(item) === -1) {
      sortArr.push(item);
    }
  });

  const ordered = Object.keys(arrCh).sort((a, b) => sortArr.indexOf(a) - sortArr.indexOf(b)).reduce(
    (obj, key) => {
      const result = { ...obj };
      result[key] = arrCh[key];
      return result;
    },
    {},
  );

  const resCharObj = [];

  for (let i = 0; i < Object.keys(ordered).length; i++) {
    const obj = { key: Object.keys(ordered)[i], value: Object.values(ordered)[i] };
    resCharObj.push(obj);
  }

  return resCharObj;
}
