import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article/Article';

class News extends Component {
  state = {
    articles: [],
    loading: true,
    errorMessage: ''
  }

  getUrlPathname = () => {
    let searchUrlParam = (new URL(document.location)).searchParams;
    let getUrlParams = searchUrlParam.get("section");
    return getUrlParams ? getUrlParams : 'home';
  }

  componentDidMount = () => {
    this.fetchData(this.getUrlPathname());
  }

  componentWillReceiveProps = (aProp) => {
    if (this.getUrlPathname() === aProp.category) {
      this.fetchData(aProp.category);
    }
  }

  fetchData = (aCategory) => {
    const apiURL = 'https://api.nytimes.com/svc/topstories/v2/';
    const apiKey = 'Ve4njBFacqL4KLcKgNxo4ILpupl4VAnG';
    let section = aCategory ? aCategory : '' ? this.getUrlPathname() : 'home';

    axios.get(apiURL + section + '.json?api-key=' + apiKey)
    .then(aResponse => {
      this.setState({ 
        articles: aResponse.data.results,
        loading: false
      })
    })
    .catch(aError => {
      this.setState({
        errorMessage: aError.message
      })
    });
  }

  formatDate = (aDate) => {
    const date = new Date(aDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return day + "/" + month + "/" + year;
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

    if (this.state.loading) {
      if (this.state.errorMessage) {
        return (
          <div className='message-error'>{this.state.errorMessage}</div>
        )
      } else {
        return (
          <div className='loader'>Loading</div>
        )
      }
    } else {
      return (
        <section>
          <div className='container'>
            <div className='row'>
              {article}
            </div>
          </div>
        </section>
      )
    }
  }
}

export default News;