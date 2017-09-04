import React from 'react'
import BasicPage from '../templates/basic-page'
import Cosmic from '../models/cosmic'
export default class About extends React.Component {
  static async getInitialProps () {
    const aboutPage =  await Cosmic.getPage('about');
    console.log('about page: ', aboutPage);

    const sbPage =  await Cosmic.getPage('slidebean');
    console.log('sb page: ', sbPage);

    return aboutPage;
    // return await Cosmic.getPage('about')
  }
  render () {
    const page = this.props.object
    return <BasicPage page={page}/>
  }
}
