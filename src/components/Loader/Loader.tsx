export const Loader = () => {
    const circle = 'h-5 w-5 bg-yellow-400 rounded-full loader-dot';

    return (
        <div
            role="alert"
            aria-busy="true"
            className="fixed inset-0 flex justify-center items-center my-20"
        >
            <div className="flex gap-1">
                <div className={`${circle} animate-bounce`} />
                <div className={`${circle} animate-bounce200`} />
                <div className={`${circle} animate-bounce400`} />
            </div>
        </div>
    );
};
