const transferSort = (tickets, transfer) => {
  const checkedTransfers = transfer.filter((tr) => tr.checked)
  if (checkedTransfers.length === 4) return tickets
  return tickets.filter((ticket) => {
    const stops = ticket.segments[0].stops.length
    return checkedTransfers.some((tr) => {
      if (tr.name === 'filter1' && stops === 0) return true
      if (tr.name === 'filter2' && stops === 1) return true
      if (tr.name === 'filter3' && stops === 2) return true
      if (tr.name === 'filter4' && stops === 3) return true
      return false
    })
  })
}

export default transferSort
