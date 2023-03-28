const Lists = ({ objects }) => {
  return (
    <table className="objects-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Lifespan</th>
        </tr>
      </thead>
      {objects.map((object) => (
        <tr key="object">
          {[object.name, object.weight, object.lifespan].map((attribute) => (
            <td className="attribute">{attribute}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Lists;
