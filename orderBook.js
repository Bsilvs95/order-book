function reconcileOrder(existingBook, incomingOrder) {
  // If list is empty just add the order and return

  let updatedBook = []

  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)
    return existingBook
  }

  if ((existingBook[0].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[0].quantity === incomingOrder.quantity) && (existingBook[0].price === incomingOrder.price)) {
    return updatedBook
  }

  else if ((existingBook[0].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[0].quantity > incomingOrder.quantity) && (existingBook[0].price === incomingOrder.price)) {
    const updatedQuantity = existingBook[0].quantity - incomingOrder.quantity
    existingBook[0].quantity = updatedQuantity
    return existingBook
  }

  else if ((existingBook[0].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[0].quantity < incomingOrder.quantity) && (existingBook[0].price === incomingOrder.price)) {
    let partialOrder = []
    const remainderQuantity = incomingOrder.quantity - existingBook[0].quantity
    incomingOrder.quantity = remainderQuantity
    partialOrder.push(incomingOrder)
    return partialOrder
  }
  else {
    existingBook.push(incomingOrder)
    return existingBook
  }
}

module.exports = reconcileOrder
