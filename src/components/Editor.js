import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <form onChange={this.props.handleChange}>
        <textarea
          id="editor"
          name="textarea"
          type="text"
          value={this.props.value}
        >
          {this.props.placeholder}
        </textarea>
      </form>
    );
  }
}

export default Editor;
