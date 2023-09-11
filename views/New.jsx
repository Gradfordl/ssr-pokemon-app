const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page:</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Image Url: <input type="text" name="img" />
          <br/>
          <input type="submit" value="Create Pokemon"  />
          <nav>
          <br />
    <a href="/pokemon">Go Back...</a>
</nav>
        </form>
      </div>
    );
  }
}

module.exports = New;
