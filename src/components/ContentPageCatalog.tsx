import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

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
  activeID: string;
  changeActiveID: (text: string) => void;
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

interface ICateItemRange {
  id: string;
  start: number;
  end: number;
}

const Catalog = (props: ICatalog) => {
  const { category, activeID, changeActiveID } = props;
  const categoryElements = useRef<Array<ICateItemRange>>([]);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    categoryElements.current = [];
    category.forEach((item, index) => {
      const id = item.id;
      const eleTemp: HTMLElement = document.querySelector(
        `#${id}`
      ) as HTMLElement;
      let itemTopRange: ICateItemRange = {
        id,
        start: 0,
        end: 0,
      };

      if (index === category.length - 1) {
        itemTopRange = {
          id,
          start: eleTemp.offsetTop,
          end: document.body.offsetHeight,
        };
      } else {
        const nextItem: ICategory = category[index + 1];
        const nextEleTemp: HTMLElement = document.querySelector(
          `#${nextItem.id}`
        ) as HTMLElement;
        itemTopRange = {
          id,
          start: eleTemp.offsetTop,
          end: nextEleTemp.offsetTop,
        };
      }
      categoryElements.current.push(itemTopRange);
    });
  }, [category]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    console.log(categoryElements.current);
    body.onscroll = (e: any) => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const top: number = e.target.documentElement.scrollTop || 0;
          const target: ICateItemRange | undefined =
            categoryElements.current.find(
              (item) => item.start <= top + 110 && item.end > top + 110
            );

          console.log(top);

          if (target) {
            changeActiveID(target.id);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
  });

  const moveToTarget = (targetID: string) => {
    const elementTemp: HTMLElement = document.querySelector(
      `#${targetID}`
    ) as HTMLElement;
    changeActiveID(targetID);
    const { offsetTop } = elementTemp;
    window.scrollTo({ top: offsetTop - 100 });
  };

  return (
    <div className="catalog-wrapper">
      <div className="container">
        {category.map((item) => {
          const cn = classNames("item-wrapper", {
            active: activeID === item.id,
          });
          return (
            <div
              className={cn}
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

  const [activeID, setActiveID] = useState<string>(contentList[0].id);

  const catalogs: ICategory[] = contentList.map((item) => {
    return { id: item.id, title: item.title };
  });
  const changeActiveID = (target: string) => {
    setActiveID(target);
  };

  return (
    <div>
      <PageHeader text={title} />
      <Catalog
        category={catalogs}
        activeID={activeID}
        changeActiveID={changeActiveID}
      />
      <Content contentList={contentList} />
      <PageFooter />
    </div>
  );
};

export default ContentPageCatalog;
