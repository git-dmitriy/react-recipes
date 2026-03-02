type P = {
    address: string;
};

export const YoutubeIframe: React.FC<P> = ({address}) => {
    return (
        <div className='relative mt-8' >
            <iframe
                className='w-full h-full'
                title='Video instruction'
                width='100%'
                height='500px'
                src={`https://www.youtube.com/embed/${address}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>
        </div>
    );
};
