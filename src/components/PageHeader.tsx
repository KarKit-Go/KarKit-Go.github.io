import "../styles/Homepage.scss";

interface IPageHeader {
  text?: string;
}

export const PageHeader = (props: IPageHeader) => {
  const { text } = props;
  return (
    <div className="page-header">
      <div className="blank-l" />
      <div className="text">{text}</div>
      <div className="blank-r"></div>
    </div>
  );
};

export const PageFooter = (props: IPageHeader) => {
  const { text = "-KarKit-" } = props;
  return (
    <div className="footer">
      <div className="text">{text}</div>
    </div>
  );
};

export default PageHeader;
