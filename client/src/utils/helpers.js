export const truncateText = (text, limit = 60) => {
  return text?.length > limit ? text.slice(0, limit) + "..." : text;
};

export const getEventDetails = (events, id) => {
  const event = events.find((event) => id === String(event.id));
  return event;
};
