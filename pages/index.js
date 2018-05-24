import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Link from 'next/link'
import 'isomorphic-fetch'
import '../style.css'
// import 'antd/dist/antd.css';
// import Document, { Head, Main, NextScript } from 'next/document'
export default class extends Component {
    static async getInitialProps () {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      return {
        posts
      }
    } 
    render () {
        return (
          <div>
            <Header/>
            <Navbar/>
            
            <div className="container">
                <div className="columns is-multiline">
                {this.props.posts.map( (post) => {
                  return (
                    <div className="column is-one-quarter" >
                      <div className="card" style={{'border': '1px #ddd solid'}}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image" />
                          </figure>
                        </div>
                        <div className="card-content" style={{ 'height': '160px' }}>
                          <div className="content">
                            <Link href='/new'>
                              <a className="title is-4">
                                {post.title}
                              </a>
                            </Link>
                            <br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  })
                }
                </div>
            </div> 
          </div>
        );
    }
}