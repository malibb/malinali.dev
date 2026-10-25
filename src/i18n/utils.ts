import { defaultLang, ui } from './ui';

export function useTranslations(lang: keyof typeof ui = defaultLang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return ui[lang]?.[key] || ui[defaultLang][key];
	};
}
