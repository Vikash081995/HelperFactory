export default async function ProductDetails({ params }) {
  const id = await(params).productId;
  return <h1>Details about product {id}</h1>;
}
