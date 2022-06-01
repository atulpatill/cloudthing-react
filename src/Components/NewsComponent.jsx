import React from 'react'
import styled from "styled-components";


const NewsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;


const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const NewsName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NewsInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;


function NewsComponent(props) {
    const {type, webTitle, webUrl, sectionName}  = props.news
   
  return (
    <NewsContainer onClick={() => window.open(webUrl, "_blank")}>
        <CoverImage src='/defaultnews.webp' alt="Thumbnail" />
      <NewsName>{webTitle}</NewsName>
      <InfoColumn>
        <NewsInfo>Section : {sectionName}</NewsInfo>
        <NewsInfo>Type :{type} </NewsInfo>
      </InfoColumn>
    </NewsContainer>
  )
}

export default NewsComponent