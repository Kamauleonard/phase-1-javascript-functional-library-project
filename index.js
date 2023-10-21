// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
      result.push(callback(item));
    });
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
  
    if (Array.isArray(collection)) {
      if (acc === undefined) {
        acc = collection[0];
        collection = collection.slice(1);
      }
      myEach(collection, function(item) {
        acc = callback(acc, item, collection);
      });
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
  
      if (acc === undefined) {
        acc = collection[keys[0]];
        keys.splice(0, 1);
      }
  
      for (let key of keys) {
        acc = callback(acc, collection[key], collection);
      }
    }
  
    return acc;
  }
  // myFind
  function myFind(collection, predicate) {
    for (let item of collection) {
      if (predicate(item)) {
        return item;
      }
    }
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  // mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort(function(a, b) {
      a = callback(a);
      b = callback(b);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }
  
  // myFlatten
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return [].concat.apply([], array);
    }
    for (let item of array) {
      if (Array.isArray(item)) {
        myFlatten(item, shallow, newArr);
      } else {
        newArr.push(item);
      }
    }
    return newArr;
  }
  
  // myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return Object.values(object);
  }
  
  // Exporting the functions
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      myEach,
      myMap,
      myReduce,
      myFind,
      myFilter,
      mySize,
      myFirst,
      myLast,
      mySortBy,
      myFlatten,
      myKeys,
      myValues,
    };
  }
  