function useCustomScroll(contentWrapper: React.RefObject<HTMLDivElement>, speed: number = 25, distance: number = 150, step: number = 10) {

    const sideScroll = (speed: number, distance: number, step: number) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            if (contentWrapper.current == null) return;
            contentWrapper.current.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };

    const scrollLeft = () => {
        sideScroll(25, 150, -10);
    }

    const scrollRight = () => {
        sideScroll(25, 150, 10);
    }


    return { scrollLeft, scrollRight };
}

export default useCustomScroll