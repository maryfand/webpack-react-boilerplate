import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import axios from 'axios';

class MarkSearch extends React.Component {
  constructor(){
    super();
    this.state={
      rawContent:''
    }
  }

  componentDidMount(){
    let address = 'https://raw.githubusercontent.com/maryfand/axios-demo/master/README.md';
    axios.get(address).then((res)=>{
      this.setState({
        rawContent:res.data
      })
    });
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : 'loading');

    return(
      <div>
        {marked('# I am using __markdown__.')}<br/>
          <div
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />
      </div>
    )
  }
}

export default MarkSearch;
