export const switchBodyScrollY = () => {
  let style = document.querySelector('body').style
  style.overflowY === 'hidden'
    ? (style.overflowY = 'auto')
    : (style.overflowY = 'hidden')
}
