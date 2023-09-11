const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <nav>
    <a href="/pokemon/new">Create a New Pokemon</a>
</nav>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemon._id}`}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </a>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
