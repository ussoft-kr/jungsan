import React, {useState} from 'react';
import {Image} from "react-bootstrap";
import { VideoPlayerProps } from 'types/type';




function VideoPlayer(props : VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnailsrc = `${props.thumsrc}`
    const src = `https://www.youtube.com/embed/${props.videoid}`

    const playVideo = () => {
        setIsPlaying(true);
    }

    return (
        <>
            {!isPlaying ? (
                <div style={{cursor : 'pointer'}} onClick={playVideo}>
                    <Image src={thumbnailsrc} alt={'thum-img'} />
                </div>
            ) : (
                <iframe width={props.width} height={props.height} src={src}/>
            )}

        </>
    )
}

export default VideoPlayer