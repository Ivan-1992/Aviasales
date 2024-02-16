const priceSort = (tickets, price) => {
  if (price === 'cheap') return [...tickets].sort((a, b) => a.price - b.price)
  if (price === 'fast') return [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  if (price === 'optimal') return [...tickets].sort((a, b) => a.segments[1].duration - b.segments[1].duration)
}

export default priceSort
