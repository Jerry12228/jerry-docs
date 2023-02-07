import { useEffect, useRef } from 'react';
import Artplayer from 'artplayer';
import React from 'react';

export default function ArtPlayer({ option, getInstance, ...rest }) {
    const artRef = useRef();

    useEffect(() => {
        const art = new Artplayer({
            ...option,
            container: artRef.current,
            
            pip: true,
            autoSize: true,
            // autoMini: true,
            fullscreen: true,
            fullscreenWeb: true,

            theme: '#23ade5',
            icons: {
                // TODO 本地化静态文件
                loading: '<img src="//artplayer.org//assets/img/ploading.gif">',
                state: '<img width="150" heigth="150" src="//s1.hdslb.com/bfs/static/player/img/play.svg">',
                indicator: '<img width="16" heigth="16" src="//artplayer.org//assets/img/indicator.svg">',
            },
            
            // mobile device options
            
            fastForward: true,
            lock: true,
        });

        if (getInstance && typeof getInstance === 'function') {
            getInstance(art);
        }

        return () => {
            if (art && art.destroy) {
                art.destroy(false);
            }
        };
    }, []);

    return <div ref={artRef} {...rest}></div>;
}
