import PageHeader, { PageFooter } from "./PageHeader";
// import Catalog from "./Catalog";

import "../styles/ContentPageCatalog.scss";

import { isValidHttpUrl } from "../utils";

export interface IContent {
  id: string;
  title: string;
  content: string[];
}

interface ICategory {
  id: string;
  title: string;
}

interface ICatalog {
  category: ICategory[];
}

interface ISection {
  id: string;
  title: string;
  content: string[];
}

export interface IContents {
  contentList: IContent[];
}

export interface IContentsPage {
  title: string;
  contentList: IContent[];
}

const Catalog = (props: ICatalog) => {
  const { category } = props;
  const moveToTarget = (targetID: string) => {
    const elementTemp: HTMLElement = document.querySelector(
      `#${targetID}`
    ) as HTMLElement;

    const { offsetTop } = elementTemp;
    window.scrollTo({ top: offsetTop - 100 });
  };

  return (
    <div className="catalog-wrapper">
      <div className="container">
        {category.map((item) => {
          return (
            <div
              className="item-wrapper"
              key={item.id}
              onClick={() => moveToTarget(item.id)}
            >
              <div className="item">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Section = (props: ISection) => {
  const { id, title, content } = props;
  return (
    <div className="section" id={id}>
      <div className="section-title">{title}</div>
      <div className="section-words">
        {content.map((item, index) =>
          isValidHttpUrl(item) ? (
            <img key={index} className="pic" src={item} alt="pic" />
          ) : (
            <div
              key={index}
              className="section-word"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )
        )}
      </div>
    </div>
  );
};

const Content = (props: IContents) => {
  const { contentList } = props;
  return (
    <div className="content-wrapper">
      <div className="blank-l" />
      <div className="content-container">
        {contentList.map((item) => {
          return (
            <Section
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            ></Section>
          );
        })}
      </div>
      <div className="blank-r" />
    </div>
  );
};

const ContentPageCatalog = (props: IContentsPage) => {
  const { title, contentList } = props;
  const catalogs: ICategory[] = contentList.map((item) => {
    return { id: item.id, title: item.title };
  });

  return (
    <div>
      <PageHeader text={title} />
      <Catalog category={catalogs} />
      <Content contentList={contentList} />
      <PageFooter />
    </div>
  );
};

export default ContentPageCatalog;
