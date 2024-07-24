// place files you want to import through the `$lib` alias in this folder.

export { default as constants } from './constants.json';
export { default as Navbar } from './components/Navbar.svelte';
export { default as Footer } from './components/Footer.svelte';
export { default as Hero } from './components/Hero.svelte';
export { default as SlidingText } from './components/SlidingText.svelte';
export { default as Modal } from './components/Modal.svelte';
export { default as Alert } from './components/Alert.svelte';
export { default as Card } from './components/Card.svelte';
export { isDark } from './stores/theme';
export { isPersonal } from './stores/personal';

export * from './utils/type';
export * from './utils/date';
export * from './utils/posts';
