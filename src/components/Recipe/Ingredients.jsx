export function Ingredients({ props }) {
  console.log('ingredinet:', props);
  return (
    <>
      <table className='w-full ms:w-auto table-fixed bg-yellow-100 border-separate mx-auto rounded-lg overflow-hidden mt-4'>
        <thead>
          <tr>
            <th className='w-3/5 md:w-2/4'>Ingredients</th>
            <th className='w-2/5 md:w-2/4'>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map((key) => {
            if (key.includes('Ingredient') && props[key]) {
              return (
                <tr
                  key={key}
                  className={key.slice(-1) % 2 !== 0 ? 'bg-red-200' : ''}
                >
                  <td className='md:px-4'>{props[key]}</td>
                  <td className='md:px-4'>
                    {props[`strMeasure${key.slice(13)}`]}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </>
  );
}
