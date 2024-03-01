export default phrases => {
  const filtered = phrases.filter(phrase => !phrase.selected);
  const maxIndex = filtered.length;

  const randomIndex = Math.floor(Math.random() * maxIndex);

  return filtered[randomIndex].name;
};
