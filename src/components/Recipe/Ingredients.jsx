export function Ingredients({ props }) {
  console.log('ingredinet:', props);
  return (
    <>
      <table className='striped flow-text'>
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>measure</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(props).map((key) => {
            console.log('key:', key);
            if (key.includes('Ingredient') && props[key]) {
              return (
                <tr key={key}>
                  <td>{props[key]}</td>
                  <td>{props[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
