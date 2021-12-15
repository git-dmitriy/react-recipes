type P = {
  imgLink: string;
  altText: string;
  imgPlaceholder: string;
};

export const RecipeImage: React.FC<P> = ({
  imgLink,
  altText,
  imgPlaceholder,
}) => {
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
