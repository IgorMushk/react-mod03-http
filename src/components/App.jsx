import axios from "axios";
import React, { Component } from "react";
import HelpLinksLoader from "./HelpLinkerLoader";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

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
  };


  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get("/search?query=react");
    this.setState({ articles: response.data.hits, isLoading: false, });
    console.log('articles', this.state.articles)
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {/* {articles.length > 0 ? <ArticleList articles={articles} /> : null} */}
        {/* {isLoading ? <p>Loading...</p> : <ArticleList articles={articles} /> } */}
        {isLoading ? <HelpLinksLoader/> : <ArticleList articles={articles} /> }
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div>
//       React homework template!!
//     </div>
//   );
// };
