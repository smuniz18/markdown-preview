import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <textarea
        id="editor"
        name="textarea"
        type="text"
        value={this.props.value}
        onChange={this.props.handleChange}
      >
        {this.props.placeholder}
      </textarea>
    );
  }
}

export default Editor;
