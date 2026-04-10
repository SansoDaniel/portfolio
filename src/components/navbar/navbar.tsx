import {type JSX, useLayoutEffect, useRef, useState} from "react";
import "./navbar.css"
import { gsap } from "gsap";

const Navbar = ():JSX.Element => {

    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 720px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.nav-inner') as HTMLElement;
            if (contentEl) {
                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;

                return topBar + contentHeight + padding;
            }
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease: 'power3.out',
        });

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, []);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsExpanded(true);
            tl.play(0);
        } else {
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    return <nav ref={navRef} className={isExpanded ? "open" : ""}>
        <div className={"menu"} onClick={toggleMenu}>
            Menu
        </div>
        <div className={`nav-inner`}>
            <a href="#hero" className="nav-item active" onClick={toggleMenu}>Home</a>
            <a href="#skills" className="nav-item" onClick={toggleMenu}>About</a>
            <a href="#projects" className="nav-item" onClick={toggleMenu}>Project</a>
            <a href="#contacts" className="nav-item" onClick={toggleMenu}>Contact me</a>
        </div>
    </nav>
}

export default Navbar