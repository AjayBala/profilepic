import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import './Documents.scss';

class Documents extends Component {
  state = {
    numberOfPages: null,
    pageNumber: 1,
    isLoaded: false,
    docArr: []
  }

  onDocumentLoadSuccess = ({ numPages }) => {
      const pagesArr = [];
    for (let i = 1; i <= numPages; i += 1) {
        pagesArr.push({ pageNO: i });
    }
    this.setState({
        numberOfPages: numPages,
        isLoaded: true,
        docArr: pagesArr
    });
  }

  renderAllPages = () => {
    const { docArr } = this.state;

    return docArr.map((page, key) => {
        return (<Page pageNumber={page.pageNO} key={key} />);
    });
  }

  render() {
    const { pageNumber, numberOfPages, isLoaded } = this.state;

    return (
        <div>
            <Document
                file="../../../../samplepdf.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
            >
                { isLoaded ? this.renderAllPages() : null }
            </Document>

            <p>
Page
                {' '}
                {pageNumber}
                {' '}
of
                {' '}
                {numberOfPages}
            </p>
        </div>
    );
  }
}

export default Documents;
