import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const IntroductionTemplate = ({data}) => {
  const { title, image, pageLink, quote, body, highlightedText } = data;
  return (
    <section id="intro" className="section-block section-block--introduction">
    <div className="container">
      <h1 className="section-title">{title}</h1>
      <div className="container-row">
        <div className="block block-profile">
          <img src={image} className="profile" />
        </div>
        <div className="block block-context">
          <ReactMarkdown source={body} />
          <ReactMarkdown source={quote} className="quote"/>
          <p className="highlightedText">{highlightedText}</p>
        <CustomLink
          linkType="internal"
          linkURL={pageLink.link}
          className="link link-btn"
        >
        {pageLink.label}
      </CustomLink>
        </div>
      </div> 
    </div>
    </section>
  );
};

const Introduction = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <IntroductionTemplate data={data} />;
};

export { Introduction };