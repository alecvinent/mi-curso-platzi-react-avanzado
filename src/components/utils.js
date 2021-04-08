/**
 * Get the position of an element relative to the document
 * https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
 * / example use
 var div = document.querySelector('div');
 var divOffset = offset(div);
 console.log(divOffset.left, divOffset.top);
 * @param el
 * @returns {{top: number, left: number}}
 */
export function get_position_offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
