import {useMemo, useState} from 'react';
import {LazyPlaceholder} from './LazyPlaceholder';

const YOUTUBE_ID_REGEX =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

function getYoutubeVideoId(input: string): string | null {
    const trimmed = input.trim();
    if (!trimmed) return null;
    const match = trimmed.match(YOUTUBE_ID_REGEX);
    if (match) return match[1];
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    return null;
}

type Props = {
    /** YouTube video URL or video ID */
    src: string;
    /** Optional title for iframe (accessibility) */
    title?: string;
    /** Load iframe only when in viewport */
    lazy?: boolean;
};

export const YoutubeIframe: React.FC<Props> = ({
                                                   src,
                                                   title = 'Recipe video',
                                                   lazy = true,
                                               }) => {
    const videoId = useMemo(() => getYoutubeVideoId(src), [src]);
    const [isVisible, setIsVisible] = useState(!lazy);

    const embedUrl = useMemo(() => {
        if (!videoId) return null;
        const params = new URLSearchParams({
            rel: '0',
            modestbranding: '1',
        });
        return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
    }, [videoId]);

    if (!videoId || !embedUrl) {
        return null;
    }

    return (
        <div className="relative my-10 w-full overflow-hidden rounded-3xl bg-black/5 dark:bg-black/20">
            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                {isVisible ? (
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src={embedUrl}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                ) : (
                    <LazyPlaceholder
                        videoId={videoId}
                        onLoad={() => setIsVisible(true)}
                    />
                )}
            </div>
        </div>
    );
};
