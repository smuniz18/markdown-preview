import React from "react";

const Editor = props => {
  return (
    <form>
      <textarea
        id="editor"
        name="textarea"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default Editor;
