export function storeItems(items, setC, id, quantity) {
  const currentItems = JSON.parse(localStorage.getItem("items")) || [];

  if (localStorage.getItem("items")) {
    if (currentItems.find((item) => item.id === parseInt(id))) {
      const newObj = currentItems.map((item) => {
        return item.id === parseInt(id)
          ? { ...item, quantity: (item.quantity += quantity) }
          : item;
      });
      localStorage.setItem("items", JSON.stringify(newObj));
    } else {
      currentItems.push({ ...items, quantity: quantity, isSelected: false });
      localStorage.setItem("items", JSON.stringify(currentItems));
    }
  } else
    localStorage.setItem(
      "items",
      JSON.stringify([{ ...items, quantity: quantity, isSelected: false }])
    );

  setC.setCart(JSON.parse(localStorage.getItem("items")));
}
export function setQuantityHandler(setC, id, quantity, setCheckoutItem) {
  const currentItems = JSON.parse(localStorage.getItem("items")) || [];
  const items = currentItems.map((val) => {
    return val.id === parseInt(id) ? { ...val, quantity: quantity } : val;
  });

  localStorage.setItem("items", JSON.stringify(items));
  setC.setCart(items);
  setCheckoutItem(items);
}

export function deleteItemHandler(id, setC, setCheckoutItem) {
  const currentItems = JSON.parse(localStorage.getItem("items")) || [];
  const filter = currentItems.filter((val) => {
    return val.id !== parseInt(id);
  });
  if (filter.length === 0) {
    localStorage.clear();
    setC.setCart(null);
    setCheckoutItem(null);
  } else {
    localStorage.setItem("items", JSON.stringify(filter));
    setC.setCart(filter);
    setCheckoutItem(filter);
  }
}
