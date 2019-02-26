import React from "react";
import marked from "marked";

class Preview extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked(this.props.value, { sanitize: true });
    // If true allows line breaks to be identified as a <br>
    marked.setOptions({
      breaks: true
    });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
    );
  }
}

export default Preview;
