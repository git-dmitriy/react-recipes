import { RecipeImageTypes } from 'appTypes';

export const RecipeImage: React.FC<RecipeImageTypes> = ({
  imgLink,
  altText,
  imgPlaceholder,
}) => {
  /* 
    show image if provided

    if image not provided show placeholder
  
  */

  if (!imgLink) {
    return (
      <img
        className='object-cover object-center w-full'
        src={imgPlaceholder}
        alt={altText}
      />
    );
  }

  return (
    <img
      className='object-cover object-center w-full'
      src={imgLink}
      alt={altText}
    />
  );
};
