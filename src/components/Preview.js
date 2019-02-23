import React from "react";
import marked from "marked";

class Preview extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked(this.props.value, { sanitize: true });
    return { __html: rawMarkup };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />;
  }
}

export default Preview;
