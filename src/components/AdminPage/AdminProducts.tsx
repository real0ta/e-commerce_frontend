import AdminProduct from "../AdminProduct/AdminProduct";
import { useGetProductsQuery } from "../../services/ecom";
import Loading from "../Loading/Loading";
const AdminProducts = () => {
  type productTypes = {
    id: number;
    name: string;
    categoryName: string;
    price: number;
  };
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data || error) {
    return (
      <div>
        <span>Error! </span> Could not load products
      </div>
    );
  }

  return (
    <>
      {data.products.map((item: productTypes) => (
        <AdminProduct
          name={item.name}
          price={item.price}
          category={item.categoryName}
          key={item.id}
          id={item.id}
        />
      ))}
    </>
  );
};

export default AdminProducts;
