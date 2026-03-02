import { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';

export type LazyPlaceholderProps = {
    videoId: string;
    onLoad: () => void;
};

const THUMBNAIL_URL = (id: string) =>
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const FALLBACK_THUMB_URL = (id: string) =>
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export function LazyPlaceholder({ videoId, onLoad }: LazyPlaceholderProps) {
    const triedFallbackRef = useRef(false);
    const thumbnailUrl = THUMBNAIL_URL(videoId);
    const fallbackUrl = FALLBACK_THUMB_URL(videoId);

    const handleThumbError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        if (!triedFallbackRef.current) {
            triedFallbackRef.current = true;
            img.src = fallbackUrl;
            return;
        }
        onLoad();
    };

    return (
        <button
            type="button"
            className="absolute inset-0 flex w-full cursor-pointer items-center justify-center border-0 bg-gray-200 p-0 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-gray-800"
            onClick={onLoad}
            aria-label="Load recipe video"
        >
            <img
                src={thumbnailUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                onError={handleThumbError}
            />
            <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-110">
                <FaPlay />
            </span>
        </button>
    );
}
