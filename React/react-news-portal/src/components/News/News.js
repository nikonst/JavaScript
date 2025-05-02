import React, { Component } from 'react'
import NewsSingle from './NewsSingle'
import Error from './Error'
import { apiKey } from "../../config"

class News extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            error: false
        }
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${apiKey.API_KEY}`

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((newsData) => {
                this.setState({ news: newsData.articles })
            })
            .catch((err) => {
                console.log("Error:", err)
                this.setState({
                    error: true
                })
            })
    }

    renderItems() {
        if (!this.state.error) {
            return this.state.news.map((item) => (

                <NewsSingle key={item.url} item={item} />
            ))
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News
