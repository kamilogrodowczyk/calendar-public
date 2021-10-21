export const sortArray = (event) => {
  if (!event) return;
  event.sort((a, b) => {
    const dateA = parseInt(a._id);
    const dateB = parseInt(b._id);
    return dateA - dateB;
  });
  return event;
};
