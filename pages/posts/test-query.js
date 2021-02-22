import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default class TestQuery extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      name: ''
    }
  }
  componentDidMount(){
    fetch('/api/hello')
    .then(response => response.json())
    .then(res => {
      this.setState({name: res.name});
    })
  }
  render(){
    return (
      <Layout>
      <Head>
          <title>Test Query</title>
      </Head>
        <h1>Test Query</h1>
        <h2>name : {this.state.name}</h2>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }
}