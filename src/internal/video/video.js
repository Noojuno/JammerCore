import { h }		 				from 'preact/preact';

export default {
	EmbedTwitch,
	EmbedHitbox,
	EmbedYouTube,

	EmbedTwitchChat,
	EmbedHitboxChat,
	EmbedYouTubeChat
};

const IFrame = (props) => {
	var new_props = {
		'class': props.class,
		'src': props.src
	};
	if ( props.width || props.height ) {
		if ( props.width && props.height ) {
			new_props.style = 'width:'+props.width+'px;height:'+props.height+'px;';
		}
		else if ( props.width ) {
			let new_height = props.width * (16/9);
			new_props.style = 'width:'+props.width+'px;height:'+new_height+'px;';
		}
		else if ( props.height ) {
			let new_width = props.width / (16/9);
			new_props.style = 'width:'+new_width+'px;height:'+props.height+'px;';
		}
	}
	
	return <iframe {...new_props} frameborder="0" scrolling="no" allowfullscreen></iframe>;
};

export function EmbedTwitch( _class, _src, _width = null, _height = null ) {
	return <IFrame class={_class} src={_src} width={_width} height={_height} />;
}
export function EmbedTwitchChat() {
	
}

export function EmbedHitbox() {
	
}
export function EmbedHitboxChat() {
	
}

export function EmbedYouTube() {
	
}
export function EmbedYouTubeChat() {
	
}



