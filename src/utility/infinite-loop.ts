/**
 * Returns a boolean if the scroll reach end of the window
 * @returns {boolean}
 */
export const checkInfiniteScrollDetect = () => {
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.clientHeight,
    document.body.offsetHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
  const bottomOfWindow =
    document.documentElement.scrollTop + window.innerHeight === documentHeight;

  return !!bottomOfWindow;
};
