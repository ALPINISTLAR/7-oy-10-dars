export default phrase => {
  if (!phrase) {
    return [];
  }

  const arr = [];
  let new_arr = [];
  const wordsArr = phrase.split(" ");

  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i].split("");
    if (word.length <= 7) {
      if (new_arr.length == 0) {
        new_arr.push(...word);
      } else if (7 - new_arr.length > word.length) {
        new_arr.push(null);
        new_arr.push(...word);
      } else {
        arr.push(new_arr);
        new_arr = [];
        new_arr.push(...word);
      }
    } else {
      if (new_arr.length > 0) {
        arr.push(new_arr);
        new_arr = [];
      }

      new_arr = [...word.slice(0, 7)];
      arr.push(new_arr);
      new_arr = ["/n", ...word.slice(7)];
    }
  }

  if (new_arr.length > 0) {
    arr.push(new_arr);
  }

  return arr;
};
