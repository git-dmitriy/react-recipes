export function YoutubeIframe({ address }) {
  return (
    <div className='relative h-0 mt-8' style={{ paddingBottom: '56.25%' }}>
      <iframe
        className='absolute top-0 left-0 w-full h-full'
        title='Video instruction'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${address}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}
