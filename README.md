A react component to render large lists. Inspired by [react-virtualized](https://github.com/bvaughn/react-virtualized), but much simpler.

## Install

```
$ npm install @clinyong/react-scroll-list --save
```

## Usage

```jsx
import { ScrollList } from "@clinyong/react-scroll-list";

class LargeList extends React.Component {
  constructor() {
    this.state = {
      list: [1, 2, 3]
    };
  }

  rowRenderer = ({ index, style }) => {
    const item = this.state.list[index];

    return (
      <li key={item} style={style}>
        {item}
      </li>
    );
  };

  render() {
    return (
      <ul>
        <ScrollList
          height={250}
          rowHeight={32}
          total={this.state.list.length}
          rowRenderer={this.rowRenderer}
        />
      </ul>
    );
  }
}
```
