import { useParams } from "react-router-dom";

const ListDynamicPage = () => {
  const { list } = useParams();
  return <div>ListDynamicPage: {list}</div>;
};

export default ListDynamicPage;
