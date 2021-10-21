export const findDuplicates = (event) => {
  if (event) {
    const found = event.map((el) => el.eventDate);
    const isDuplicate = found.filter((el, i) => found.indexOf(el) !== i);
    return isDuplicate;
  }
};
