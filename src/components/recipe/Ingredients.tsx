type P = {
  props: {
    [key: string]: string;
  };
};

export const Ingredients: React.FC<P> = ({ props }) => {
  return (
    <table className='w-full ms:w-auto table-fixed bg-yellow-100 dark:bg-opacity-80 dark:text-gray-900 border-collapse mx-auto rounded-3xl overflow-hidden mt-4'>
      <thead>
        <tr>
          <th className='w-3/5 md:w-2/4'>Ingredients</th>
          <th className='w-2/5 md:w-2/4'>Measure</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key: any) => {
          if (key.includes('Ingredient') && props[key]) {
            console.log('key:', key);
            return (
              <tr
                key={key}
                className={key.slice(-1) % 2 !== 0 ? 'bg-yellow-200' : ''}
              >
                <td className='pl-6'>{props[key]}</td>
                <td className='pl-6 border-l border-yellow-100'>
                  {props[`strMeasure${key.slice(13)}`]}
                </td>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
};
