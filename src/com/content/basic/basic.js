import {h} from 'preact';
import cN from 'classnames';


/**
 * Basic content header type
 *
 * IMPORTANT: Don't forget to add sections, headers, footers!
 *
 * Use {@link CommonHeader} when you don't care
 *
 * @param {object} props
 * @param {any} [props.children]
 * @param {string} [props.class]
 */
 export function BasicHeader( props ) {
	return <header {...props} class={cN("content -basic", props.class)}/>;
}


/**
 * Basic content section type
 *
 * IMPORTANT: Don't forget to add sections, headers, footers!
 *
 * Use {@link CommonSection} when you don't care
 *
 * @param {object} props
 * @param {any} [props.children]
 * @param {string} [props.class]
*/
export function BasicSection( props ) {
	return <section {...props} class={cN("content -basic", props.class)}/>;
}


/**
 * Basic content article type
 *
 * IMPORTANT: Don't forget to add sections, headers, footers!
 *
 * Use {@link CommonSection} when you don't care
 *
 * @param {object} props
 * @param {any} [props.children]
 * @param {string} [props.class]
 */
 export function BasicArticle( props ) {
	return <article {...props} class={cN("content -basic", props.class)}/>;
}


/**
 * Basic content aside type
 *
 * IMPORTANT: Don't forget to add sections, headers, footers!
 *
 * Use {@link CommonSection} when you don't care
 *
 * @param {object} props
 * @param {any} [props.children]
 * @param {string} [props.class]
 */
 export function BasicAside( props ) {
	return <aside {...props} class={cN("content -basic", props.class)}/>;
}


/**
 * Basic content footer type
 *
 * IMPORTANT: Don't forget to add sections, headers, footers!
 *
 * Use {@link CommonSection} when you don't care
 *
 * @param {object} props
 * @param {any} [props.children]
 * @param {string} [props.class]
 */
 export function BasicFooter( props ) {
	return <footer {...props} class={cN("content -basic", props.class)}/>;
}