import AdminCategory from "../AdminCategory/AdminCategory";
import Loading from "../Loading/Loading";
import { useGetCategoriesQuery } from "../../services/ecom";

const AdminCategories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <p>Could not find categories</p>
      </>
    );
  }

  return (
    <>
      {data.categories.map(({ id, name }: { id: number; name: string }) => (
        <AdminCategory id={id} key={name} name={name} />
      ))}
    </>
  );
};

export default AdminCategories;
