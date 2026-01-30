import { useParams, useLocation } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const query = new URLSearchParams(useLocation().search);

  const min = query.get("min");
  const max = query.get("max");
  const stock = query.get("stock");

  return (
    <div className="category-page">
      <h1>{categoryName.toUpperCase()} PRODUCTS</h1>

      <p><b>Min Price:</b> {min || "Any"}</p>
      <p><b>Max Price:</b> {max || "Any"}</p>
      <p><b>Stock:</b> {stock || "All"}</p>

      <div className="products">
        <div className="product-card">Product 1</div>
        <div className="product-card">Product 2</div>
        <div className="product-card">Product 3</div>
      </div>
    </div>
  );
};

export default CategoryPage;
