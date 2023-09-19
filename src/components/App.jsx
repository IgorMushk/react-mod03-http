//import axios from "axios";
import React, { Component } from "react";
import HelpLinksLoader from "./HelpLinkerLoader";
import fetchArticlesWithQuery from "./api";

//axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };


  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      //const response = await axios.get("/search?query=react");
      //this.setState({ articles: response.data.hits });
      //console.log('articles', this.state.articles)
      
      // const data = await fetchArticlesWithQuery("react");
      // this.setState({ articles: data.hits});
      // console.log('data.hits :', data.hits)
      // console.log('articles: data.hits', this.state.articles)

      const articles = await fetchArticlesWithQuery("react");
      this.setState({ articles});
      //console.log('articles :', articles)
      //console.log('articles: data.hits', this.state.articles)

      } catch (error){
      this.setState({error})
      console.log(this.state.error.message)
    } finally {
      this.setState({isLoading: false})
    }

  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        {/* {articles.length > 0 ? <ArticleList articles={articles} /> : null} */}
        {/* {isLoading ? <p>Loading...</p> : <ArticleList articles={articles} /> } */}
        {/* {isLoading ? <HelpLinksLoader/> : <ArticleList articles={articles} /> } */}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {/* {isLoading && <p>Loading...</p>} */}
        {isLoading && <HelpLinksLoader/>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}
