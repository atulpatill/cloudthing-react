import React, {useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import './App.css';
import NewsComponent from './Components/NewsComponent';


const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
display :flex;
flex-direction: row;
background-color: black;
justify-content: space-between;
align-items: center;
color:white;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

function App() {

  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [newsList, updateNewsList] = useState([])
  

  const fetchData = async (searchString) => {
    const Response = await axios.get(
        ` http://content.guardianapis.com/search?api-key=test&q=${searchString}&show- fields=thumbnail,headline&page=1&page-size=10`);
        
        updateNewsList(Response.data.response.results);
        console.log(Response.data.response.results)
    };

  const onTextChange = (event) => {
    clearTimeout(timeoutId)
   updateSearchQuery(event.target.value)
   const timeout = setTimeout(() => fetchData(event.target.value), 500);
   updateTimeoutId(timeout);
  };

  const NewsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;

  return (
    <Container>
      
     <Header>
       React News App
       <SearchBox>
        <SearchIcon src="/search-icon.svg"/><SearchInput 
          placeholder="Search News"
          value={searchQuery}
            onChange={onTextChange} 
            />
        </SearchBox>

     </Header>
     <NewsListContainer>
     {newsList?.length 
          ? newsList.map((news, id) => <NewsComponent   
            key={id}
          news={news} 
        
          />)
          : "No News to Display" }
     </NewsListContainer>


    </Container>
  );
}

export default App;
