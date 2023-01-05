import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { ICategory, Catalog } from "./ContentPageCatalog";
import { Spinner } from "../App";
import PageHeader, { PageFooter } from "./PageHeader";
import "../styles/ContentOperation.scss";
import classNames from "classnames";
import { ReactComponent as MarkIcon } from "../assets/bookmark.svg";

interface ISection {
  id: string;
  title: string;
  tips: string;
  content: string;
  index: number;
}
export interface IContent {
  id: string;
  title: string;
  tips: string;
  content: string;
}

interface IContents {
  contentList: IContent[];
}

interface IContentsPage {
  title: string;
  contentList: IContent[];
}

const Section = (props: ISection) => {
  const { id, title, tips, content, index } = props;
  return (
    <Suspense fallback={<Spinner />}>
      <div id={id} className="section">
        <div className="section-title-number">PART{index + 1}</div>
        <div className="section-title-op">{title}</div>
        <div className="tips">{tips}</div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </Suspense>
  );
};

// const SectionNew = lazy(() => Section);

const Content = (props: IContents) => {
  return (
    <div className="content-wrapper">
      <div className="blank-l"></div>
      <div className="content-container">
        <div className="tips">
          您好！欢迎您使用我们的工具包！
          <br />
          本操作手册将为您带来使用本工具包的全方位、全流程引导。
          <br />
          您可以结合自己的测试需求，根据本操作手册进行测试的设计与实施。
          <br />
        </div>
        {props.contentList.map((item, index) => {
          return (
            <Section
              key={item.id}
              id={item.id}
              title={item.title}
              tips={item.tips}
              content={item.content}
              index={index}
            ></Section>
          );
        })}
      </div>
      <div className="blank-r"></div>
    </div>
  );
};

const ContentOperation = (props: IContentsPage) => {
  const { title, contentList } = props;

  const [activeID, setActiveID] = useState<string>(contentList[0].id);
  const [activeCata, setActiveCata] = useState<boolean>(false);

  const catalogs: ICategory[] = contentList.map((item) => {
    return { id: item.id, title: item.title };
  });

  const changeActiveID = (target: string) => {
    setActiveID(target);
  };
  const changeCata = (target: boolean) => {
    setActiveCata(target);
  };

  const cnForCata = classNames("cata", { activeCata: activeCata });

  return (
    <div>
      <div className={cnForCata}>
        <div
          onClick={() => {
            changeCata(!activeCata);
          }}
          className="icon"
        >
          <MarkIcon />
        </div>
      </div>
      <div className={activeCata ? "activeCa" : ""}></div>
      <div
        onClick={() => {
          changeCata(false);
        }}
        className={activeCata ? "blur" : ""}
      ></div>
      <PageHeader text={title}></PageHeader>
      <Catalog
        category={catalogs}
        activeID={activeID}
        changeActiveID={changeActiveID}
      />
      <Content contentList={contentList}></Content>
      <PageFooter></PageFooter>
    </div>
  );
};

export default ContentOperation;
