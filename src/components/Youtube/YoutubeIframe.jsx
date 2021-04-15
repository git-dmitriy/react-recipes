export function YoutubeIframe({ address }) {
  return (
    <iframe
      width='100%'
      height='500px'
      src={`https://www.youtube.com/embed/${address}`}></iframe>
  );
}
