import React from "react";

import * as classes from "./Video.module.css";

type PropsType = {
	videoID: string;
};

const Video = (props: PropsType) => {
	if (!props.videoID) {
		return null;
	}

	return (
		<iframe
			title="video"
			id="ytplayer"
			src={`https://www.youtube.com/embed/${props.videoID}?autoplay=0&origin=${window.location.origin}`}
			allow="fullscreen"
			frameBorder="0"
			className={classes["video"]}
		></iframe>
	);
};

export default Video;
