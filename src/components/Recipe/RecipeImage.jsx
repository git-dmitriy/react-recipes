export const RecipeImage = ({ imgLink, altText, imgPlaceholder }) => {
  if (imgLink) {
    return (
      <img
        className='object-cover object-center h-full w-full'
        src={imgLink}
        alt={altText}
      />
    );
  }
  if (!imgLink) {
    return (
      <img
        className='object-cover object-center h-full w-full'
        src={imgPlaceholder}
        alt={altText}
      />
    );
  }
};
