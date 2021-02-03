export const closePopover = () => {
  if (process.env.NODE_ENV === 'production') {
    window.close()
  }
}
