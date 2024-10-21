import { useEffect, useState } from "react"

const useMediaQuery = () => {
    const [device, setDevice] = useState<"mobile" | "sm" | "tablet" | "desktop" | null>(null);
    const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const checkDevice = () => {
            if (window.matchMedia("(max-width: 640px)").matches) {
                setDevice("mobile");
            } else if (window.matchMedia("(max-width: 768px)").matches) {
                setDevice("sm");
            } else if (window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
            }

            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        checkDevice();

        window.addEventListener("resize", checkDevice);

        return () => {
            window.removeEventListener("resize", checkDevice);
        }
    }, []);

    return {
        device,
        width: dimensions?.width,
        height: dimensions?.height,
        isMobile: device === "mobile",
        isSm: device === "sm",
        isTablet: device === "tablet",
        isDesktop: device === "desktop"
    };
};

export default useMediaQuery;