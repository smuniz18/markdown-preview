import React from "react";
import Preview from "./components/Preview";
import Editor from "./components/Editor";

class App extends React.Component {
  state = {
    enteredText: ""
  };

  handleChange = event => {
    this.setState({ enteredText: event.target.value });
  };

  render() {
    return (
      <div>
        <Editor
          enteredText={this.enteredText}
          handleChange={this.handleChange}
          placeholder={placeholder}
        />
        <Preview />
      </div>
    );
  }
}

const placeholder = `Let's try this test again and see what happens



Another test

Plus Another
`;

export default App;
