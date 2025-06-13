export async function fetchItems() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Response("There is something wrong, try again later", {
        status: 400,
      });
    }
    return await res.json();
  } catch (error) {
    console(error);
    throw new Response(error, {
      status: 400,
    });
  }
}
