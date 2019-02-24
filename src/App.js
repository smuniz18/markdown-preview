import React from "react";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
import "./App.css";

class App extends React.Component {
  state = {
    value: ""
  };

  // This renders the page first, before you update the editor code.
  componentDidMount() {
    this.setState({
      value: placeholder
    });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <Editor
              enteredText={this.value}
              handleChange={this.handleChange}
              placeholder={placeholder}
            />
          </div>
          <div className="col-lg">
            <Preview value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to the markdown previewer!

## This markdown preview system can be used as a testing environment for you markdown needs


What if I need more info on the Markup Language?
Check out this resource (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markup Cheet Sheet")


### Let's talk about some general styling in markup!

**Bold** - can be done by adding 2 astericks on each side of the word or words you want bold \`** **\`

**Images** - can be inserted using the markdown inline style, don't forget the alt text! ![Markdown Logo](public/Images/Markdown-mark.svg "Markdown Logo")

Next let's talk about **lists**. super easy to implement! You can number, you can create unordered lists. Whatever kind of list you want, you can do!

1. Item number 1
2. Item number 2
..* Unordered list item

Maybe you want to show a some **inline code**. You can do that by using \`<h3>Back Ticks</h3>\`

Or maybe you want to show an entire **code block**:

\`\`\`
const Test = () => {
  return (
    <div>
      <h3>This is a test!</h3>
    </div>
  );
}
 
export default Test;
\`\`\`

`;

export default App;
