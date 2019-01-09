import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article/Article';

class News extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    const apiURL = 'https://api.nytimes.com/svc/topstories/v2/';
    const apiKey = 'ad4b888cfa8c4c1992d7912ff6e4cd56';
    let section = 'home';

    axios.get(apiURL + section + '.json?api-key=' + apiKey)
    .then(aResponse => {
      this.setState({ articles: aResponse.data.results })
    })
    .catch(aError => aError);
  }

  formatDate = (aDate) => {
    const date = new Date(aDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return month + "/" + day + "/" + year;
  }

  render() {

    const article = this.state.articles.map((aArticle, aIndex) => {
      const imgObject = aArticle.multimedia.find(media => media.format === 'mediumThreeByTwo210');
      const imgPlaceholder = 'https://via.placeholder.com/210x140.png?text=Image+Not+Found';
      const publishedDate = this.formatDate(aArticle.published_date);

      aArticle.imgUrl = imgObject ? imgObject.url : imgPlaceholder;
      aArticle.imgCaption = imgObject ? imgObject.caption : 'Image Not Found';
      
      return <Article 
        key={aIndex} 
        url={aArticle.url}
        title={aArticle.title} 
        image={aArticle.imgUrl}
        section={aArticle.section}
        date={publishedDate}
        alt={aArticle.imgCaption}
        layout={this.props.layout}
      />
    })
    
    console.log(this.state.articles);
    return (
      <section>
        <div className='container'>
          <div className='row'>
            {article}
          </div>
        </div>
      </section>
    );
  }
}

export default News;