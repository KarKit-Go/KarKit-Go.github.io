import "../styles/Catalog.scss";

interface ICategory {
  id: string;
  title: string;
}

interface ICatalog {
  category: ICategory[];
}

const Catalog = (props: ICatalog) => {
  const { category } = props;
  return (
    <div className="catalog-wrapper">
      <div className="container">
        {category.map((item) => {
          return (
            <div className="item-wrapper" key={item.id}>
              <div className="item">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
