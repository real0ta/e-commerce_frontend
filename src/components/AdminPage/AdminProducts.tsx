import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import AdminProduct from "../AdminProduct/AdminProduct";
const AdminProducts = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <>
      {products.map((item) => (
        <AdminProduct
          name={item.name}
          price={item.price}
          category={item.categoryName}
          image={item.image}
          key={item._id}
          id={item._id}
        />
      ))}
    </>
  );
};

export default AdminProducts;
