import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Tracks which section sits under the reading line (35% down the viewport).
 * `pin` jumps the selection straight to a tapped section and holds it until the
 * resulting scroll settles, so the indicator doesn't step through every section
 * it passes on the way.
 */
export function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState(ids[0]);
    const pinned = useRef(false);

    useEffect(() => {
        let frame = 0;
        let idle = 0;

        const measure = () => {
            frame = 0;
            if (pinned.current) return;
            const line = window.innerHeight * 0.35;
            let current = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }
            // The last section may be too short to ever reach the line
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            setActive(atBottom ? ids[ids.length - 1] : current);
        };

        const onScroll = () => {
            if (pinned.current) {
                clearTimeout(idle);
                // Keep the tapped section once settled; the user's next scroll takes over.
                // Re-measuring here would flip a short last-but-one section to the last one.
                idle = window.setTimeout(() => {
                    pinned.current = false;
                }, 150);
            }
            if (!frame) frame = requestAnimationFrame(measure);
        };

        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(frame);
            clearTimeout(idle);
        };
    }, [ids]);

    const pin = useCallback((id: string) => {
        pinned.current = true;
        setActive(id);
    }, []);

    return [active, pin] as const;
}
