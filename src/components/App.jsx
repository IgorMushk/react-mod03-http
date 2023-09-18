import axios from "axios";
import React, { Component } from "react";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export class App extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await axios.get("/search?query=react");
    this.setState({ articles: response.data.hits });
    console.log('articles', this.state.articles)
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {/* articles.length > 0 ? <ArticleList articles={articles} /> : null */}
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
