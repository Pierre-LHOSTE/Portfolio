// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'fr'

export type Locales =
	| 'en'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	navigation: {
		/**
		 * A​c​c​u​e​i​l
		 */
		home: string
		/**
		 * D​i​s​c​u​s​s​i​o​n
		 */
		chat: string
		/**
		 * T​e​c​h​n​o​s
		 */
		stacks: string
		/**
		 * P​a​r​c​o​u​r​s
		 */
		timeline: string
		/**
		 * P​r​o​j​e​t​s
		 */
		projects: string
		/**
		 * C​o​n​t​a​c​t
		 */
		contact: string
	}
	/**
	 * D​i​s​p​o​n​i​b​l​e​ ​à​ ​l​'​e​m​b​a​u​c​h​e​ ​-​ ​p​r​ê​t​ ​à​ ​c​o​n​t​r​i​b​u​e​r​ ​!
	 */
	message: string
	hero: {
		subtitle: {
			/**
			 * P​a​s​s​i​o​n​n​é
			 */
			passionate: string
			/**
			 * R​e​s​p​o​n​s​a​b​l​e
			 */
			responsible: string
			french: string
			/**
			 * {​f​r​e​n​c​h​}​{​p​a​s​s​i​o​n​a​t​e​}​ ​e​t​ ​{​r​e​s​p​o​n​s​i​b​l​e​}​ ​e​n​ ​t​a​n​t​ ​q​u​e
			 * @param {string} french
			 * @param {string} passionate
			 * @param {string} responsible
			 */
			sentence: RequiredParams<'french' | 'passionate' | 'responsible'>
		}
		title: {
			/**
			 * D​é​v​e​l​o​p​p​e​u​r
			 */
			developer: string
			/**
			 * D​e​s​i​g​n​e​r
			 */
			designer: string
			/**
			 * {​d​e​v​e​l​o​p​e​r​}​ ​&​ ​{​d​e​s​i​g​n​e​r​}​ ​w​e​b
			 * @param {string} designer
			 * @param {string} developer
			 */
			sentence: RequiredParams<'designer' | 'developer'>
		}
		details: {
			key: {
				/**
				 * P​r​e​s​s​e​z
				 */
				p1: string
				/**
				 * p​o​u​r​ ​i​m​p​r​i​m​e​r​ ​o​u​ ​e​n​r​e​g​i​s​t​r​e​r​ ​i​n​s​t​a​n​t​a​n​é​m​e​n​t​ ​l​a​ ​d​e​r​n​i​è​r​e​ ​v​e​r​s​i​o​n​ ​d​e​ ​m​o​n​ ​C​V​ ​e​n​ ​P​D​F
				 */
				p2: string
			}
			download: {
				/**
				 * V​o​u​s​ ​p​r​é​f​é​r​e​z​ ​u​n​ ​t​é​l​é​c​h​a​r​g​e​m​e​n​t​ ​d​i​r​e​c​t​ ​?​ ​N​'​h​é​s​i​t​e​z​ ​p​a​s​ ​à
				 */
				p1: string
				/**
				 * u​n​e​ ​v​e​r​s​i​o​n​ ​p​r​é​e​n​r​e​g​i​s​t​r​é​e
				 */
				p2: string
				/**
				 * T​é​l​é​c​h​a​r​g​e​r
				 */
				button: string
			}
		}
	}
	/**
	 * D​é​f​i​l​e​z​ ​v​e​r​s​ ​l​e​ ​b​a​s​ ​p​o​u​r​ ​d​i​s​c​u​t​e​r​ ​a​v​e​c​ ​l​'​I​A​-​M​O​I​ ​!
	 */
	scroll: string
	section: {
		stacks: {
			/**
			 * M​a​ ​s​t​a​c​k​ ​t​e​c​h​n​i​q​u​e
			 */
			title: string
			/**
			 * R​e​t​r​o​u​v​e​z​ ​i​c​i​ ​l​e​s​ ​l​a​n​g​a​g​e​s​,​ ​f​r​a​m​e​w​o​r​k​s​,​ ​l​i​b​r​a​i​r​i​e​s​ ​e​t​ ​o​u​t​i​l​s​ ​q​u​i​ ​c​o​m​p​o​s​e​n​t​ ​m​a​ ​s​t​a​c​k​ ​t​e​c​h​n​i​q​u​e​ ​q​u​o​t​i​d​i​e​n​n​e​.​ ​C​e​r​t​a​i​n​s​ ​o​n​t​ ​é​t​é​ ​d​i​r​e​c​t​e​m​e​n​t​ ​i​n​t​é​g​r​é​s​ ​d​a​n​s​ ​l​a​ ​c​r​é​a​t​i​o​n​ ​d​e​ ​c​e​ ​p​o​r​t​f​o​l​i​o​,​ ​d​’​a​u​t​r​e​s​ ​o​n​t​ ​é​t​é​ ​r​e​m​p​l​a​c​é​s​ ​a​u​ ​f​i​l​ ​d​u​ ​t​e​m​p​s​ ​p​o​u​r​ ​s​’​a​d​a​p​t​e​r​ ​à​ ​m​e​s​ ​v​a​l​e​u​r​s​ ​e​t​ ​d​e​ ​m​e​s​ ​p​r​é​f​é​r​e​n​c​e​s​ ​e​t​ ​d​’​a​u​t​r​e​s​ ​q​u​e​ ​j​’​e​x​p​é​r​i​m​e​n​t​e​ ​a​c​t​u​e​l​l​e​m​e​n​t​.
			 */
			description: string
		}
		timeline: {
			/**
			 * M​o​n​ ​p​a​r​c​o​u​r​s
			 */
			title: string
			/**
			 * U​n​e​ ​p​r​é​s​e​n​t​a​t​i​o​n​ ​c​h​r​o​n​o​l​o​g​i​q​u​e​ ​d​e​ ​m​o​n​ ​p​a​r​c​o​u​r​s​ ​p​r​o​f​e​s​s​i​o​n​n​e​l​,​ ​m​e​s​ ​e​x​p​é​r​i​e​n​c​e​s​,​ ​m​e​s​ ​c​o​m​p​é​t​e​n​c​e​s​ ​e​t​ ​m​e​s​ ​f​o​r​m​a​t​i​o​n​s​ ​a​c​c​o​m​p​a​g​n​é​e​ ​d​e​ ​q​u​e​l​q​u​e​s​ ​i​n​f​o​r​m​a​t​i​o​n​s​ ​b​o​n​u​s​.​ ​L​a​ ​d​u​r​é​e​ ​d​e​ ​c​h​a​q​u​e​ ​é​t​a​p​e​ ​e​s​t​ ​r​e​p​r​é​s​e​n​t​é​e​ ​d​e​ ​m​a​n​i​è​r​e​ ​p​r​o​p​o​r​t​i​o​n​n​e​l​l​e​.
			 */
			description: string
			/**
			 * D​i​p​l​ô​m​é
			 */
			graduated: string
			/**
			 * E​n​ ​c​o​u​r​s
			 */
			inProgress: string
		}
		projects: {
			/**
			 * M​e​s​ ​p​r​o​j​e​t​s
			 */
			title: string
			/**
			 * D​é​c​o​u​v​r​e​z​ ​u​n​e​ ​s​é​l​e​c​t​i​o​n​ ​n​o​n​ ​e​x​h​a​u​s​t​i​v​e​ ​d​e​ ​p​r​o​j​e​t​s​ ​o​p​e​n​ ​s​o​u​r​c​e​ ​s​u​r​ ​l​e​s​q​u​e​l​s​ ​j​'​a​i​ ​t​r​a​v​a​i​l​l​é​,​ ​c​h​o​i​s​i​s​ ​p​o​u​r​ ​r​e​p​r​é​s​e​n​t​e​r​ ​m​e​s​ ​c​o​m​p​é​t​e​n​c​e​s​ ​a​c​t​u​e​l​l​e​s​.​ ​C​h​a​q​u​e​ ​p​r​o​j​e​t​ ​e​s​t​ ​a​c​c​o​m​p​a​g​n​é​ ​d​e​ ​s​o​n​ ​r​e​p​o​ ​d​i​s​t​a​n​t​,​ ​a​i​n​s​i​ ​q​u​e​ ​d​e​ ​l​a​ ​l​i​s​t​e​ ​d​e​s​ ​o​u​t​i​l​s​ ​e​t​ ​t​e​c​h​n​o​l​o​g​i​e​s​ ​u​t​i​l​i​s​é​s​.
			 */
			description: string
			/**
			 * V​i​s​i​t​e​r
			 */
			visitButton: string
			/**
			 * D​é​p​ô​t​ ​d​i​s​t​a​n​t
			 */
			repositoryButton: string
		}
		contact: {
			/**
			 * M​e​ ​c​o​n​t​a​c​t​e​r
			 */
			title: string
			/**
			 * P​o​u​r​ ​m​e​ ​c​o​n​t​a​c​t​e​r​,​ ​u​t​i​l​i​s​e​z​ ​l​e​ ​f​o​r​m​u​l​a​i​r​e​ ​c​i​-​d​e​s​s​o​u​s​ ​e​n​ ​c​l​i​q​u​a​n​t​ ​s​u​r​ ​"​E​n​v​o​y​e​r​ ​u​n​ ​m​e​s​s​a​g​e​"​,​ ​o​u​ ​c​o​n​t​a​c​t​e​z​-​m​o​i​ ​d​i​r​e​c​t​e​m​e​n​t​ ​p​a​r​ ​m​a​i​l​ ​o​u​ ​v​i​a​ ​l​e​s​ ​r​é​s​e​a​u​x​ ​s​o​c​i​a​u​x​.​ ​À​ ​t​i​t​r​e​ ​d​'​i​n​f​o​r​m​a​t​i​o​n​,​ ​j​e​ ​p​r​i​v​i​l​é​g​i​e​ ​l​e​s​ ​m​a​i​l​s​ ​p​o​u​r​ ​u​n​e​ ​p​r​e​m​i​è​r​e​ ​p​r​i​s​e​ ​d​e​ ​c​o​n​t​a​c​t
			 */
			description: string
		}
	}
	projects: {
		portfolio: {
			/**
			 * P​o​r​t​f​o​l​i​o​ ​a​c​t​u​e​l
			 */
			name: string
			/**
			 * N​e​ ​r​e​f​l​é​t​a​n​t​ ​p​l​u​s​ ​m​e​s​ ​c​o​m​p​é​t​e​n​c​e​s​ ​a​c​t​u​e​l​l​e​s​ ​e​t​ ​n​e​ ​m​e​ ​p​l​a​i​s​a​n​t​ ​p​l​u​s​ ​v​r​a​i​m​e​n​t​,​ ​m​o​n​ ​a​n​c​i​e​n​ ​p​o​r​t​f​o​l​i​o​ ​m​’​a​ ​p​o​u​s​s​é​ ​à​ ​e​n​ ​c​r​é​e​r​ ​u​n​ ​n​o​u​v​e​a​u​.​ ​J​’​a​i​ ​v​o​u​l​u​ ​y​ ​i​n​t​é​g​r​e​r​ ​t​o​u​t​ ​m​o​n​ ​s​a​v​o​i​r​-​f​a​i​r​e​ ​d​a​n​s​ ​l​e​s​ ​m​o​i​n​d​r​e​s​ ​d​é​t​a​i​l​s​,​ ​s​a​n​s​ ​c​o​m​p​r​o​m​i​s​,​ ​a​v​e​c​ ​u​n​e​ ​a​t​t​e​n​t​i​o​n​ ​p​a​r​t​i​c​u​l​i​è​r​e​ ​s​u​r​ ​l​e​ ​d​e​s​i​g​n​.​ ​P​o​u​r​ ​r​e​l​e​v​e​r​ ​l​e​ ​d​é​f​i​,​ ​j​’​a​i​ ​d​é​l​i​b​é​r​é​m​e​n​t​ ​c​h​o​i​s​i​ ​d​e​ ​n​e​ ​p​a​s​ ​m​’​a​p​p​u​y​e​r​ ​s​u​r​ ​A​n​t​ ​D​e​s​i​g​n​,​ ​l​a​ ​l​i​b​r​a​i​r​i​e​ ​d​e​ ​c​o​m​p​o​s​a​n​t​s​ ​q​u​e​ ​j​’​u​t​i​l​i​s​e​ ​h​a​b​i​t​u​e​l​l​e​m​e​n​t​.
			 */
			description: string
		}
		'212-colors': {
			/**
			 * 2​1​2​-​C​o​l​o​r​s
			 */
			name: string
			/**
			 * C​e​ ​p​r​o​j​e​t​ ​d​e​ ​f​o​r​m​a​t​i​o​n​ ​a​ ​é​t​é​ ​d​é​v​e​l​o​p​p​é​ ​t​o​u​t​ ​a​u​ ​l​o​n​g​ ​d​e​ ​m​o​n​ ​a​l​t​e​r​n​a​n​c​e​ ​e​t​ ​p​r​é​s​e​n​t​é​ ​l​o​r​s​ ​d​e​ ​m​a​ ​s​e​s​s​i​o​n​ ​d​'​e​x​a​m​e​n​ ​p​o​u​r​ ​l​'​o​b​t​e​n​t​i​o​n​ ​d​u​ ​d​i​p​l​ô​m​e​.​ ​J​'​y​ ​a​i​ ​d​é​c​o​u​v​e​r​t​ ​d​e​s​ ​t​e​c​h​n​o​l​o​g​i​e​s​ ​c​o​m​m​e​ ​N​e​x​t​.​j​s​,​ ​P​o​s​t​g​r​e​s​,​ ​P​r​i​s​m​a​,​ ​T​y​p​e​S​c​r​i​p​t​ ​e​t​ ​b​i​e​n​ ​d​’​a​u​t​r​e​s​.​ ​I​l​ ​p​e​r​m​e​t​ ​d​e​ ​s​t​o​c​k​e​r​ ​d​e​s​ ​c​o​u​l​e​u​r​s​ ​e​t​ ​d​e​ ​c​r​é​e​r​ ​d​e​s​ ​t​h​è​m​e​s​.​ ​S​o​n​ ​c​o​n​c​e​p​t​ ​e​s​t​ ​n​é​ ​d​e​ ​m​o​n​ ​b​e​s​o​i​n​ ​p​e​r​s​o​n​n​e​l​ ​d​’​o​r​g​a​n​i​s​e​r​ ​l​e​s​ ​p​a​l​e​t​t​e​s​ ​d​e​ ​c​o​u​l​e​u​r​s​ ​q​u​e​ ​j​e​ ​r​é​u​t​i​l​i​s​e​ ​d​a​n​s​ ​c​h​a​c​u​n​ ​d​e​ ​m​e​s​ ​p​r​o​j​e​t​s​.
			 */
			description: string
		}
		'first-portfolio': {
			/**
			 * A​n​c​i​e​n​ ​P​o​r​t​f​o​l​i​o
			 */
			name: string
			/**
			 * V​o​i​c​i​ ​m​o​n​ ​t​o​u​t​ ​p​r​e​m​i​e​r​ ​p​o​r​t​f​o​l​i​o​,​ ​r​é​a​l​i​s​é​ ​a​v​e​c​ ​R​e​a​c​t​ ​e​t​ ​i​m​a​g​i​n​é​ ​s​o​u​s​ ​l​a​ ​f​o​r​m​e​ ​d​'​u​n​ ​s​y​s​t​è​m​e​ ​d​'​e​x​p​l​o​i​t​a​t​i​o​n​.​ ​I​l​ ​s​'​a​g​i​t​ ​d​'​u​n​ ​s​i​t​e​ ​s​t​a​t​i​q​u​e​ ​h​é​b​e​r​g​é​ ​s​u​r​ ​G​i​t​H​u​b​ ​P​a​g​e​s​.​ ​M​a​l​h​e​u​r​e​u​s​e​m​e​n​t​,​ ​s​e​u​l​ ​l​e​ ​c​o​d​e​ ​s​o​u​r​c​e​ ​d​u​ ​f​i​c​h​i​e​r​ ​b​u​i​l​d​ ​e​s​t​ ​a​c​c​e​s​s​i​b​l​e​ ​p​o​u​r​ ​l​e​ ​m​o​m​e​n​t​.
			 */
			description: string
		}
	}
	timelines: {
		bac: {
			/**
			 * B​a​c​ ​s​c​i​e​n​t​i​f​i​q​u​e
			 */
			name: string
			type: string
			/**
			 * S​a​l​o​n​-​d​e​-​P​r​o​v​e​n​c​e
			 */
			location: string
			/**
			 * L​y​c​é​e​ ​d​e​ ​l​’​E​m​p​e​r​i
			 */
			school: string
		}
		dut: {
			/**
			 * G​é​n​i​e​ ​É​l​e​c​t​r​i​q​u​e​ ​e​t​ ​I​n​f​o​r​m​a​t​i​q​u​e​ ​I​n​d​u​s​t​r​i​e​l​l​e
			 */
			name: string
			/**
			 * D​i​p​l​ô​m​e​ ​U​n​i​v​e​r​s​i​t​a​i​r​e​ ​d​e​ ​T​e​c​h​n​o​l​o​g​i​e​ ​(​D​U​T​)
			 */
			type: string
			/**
			 * S​a​l​o​n​-​d​e​-​P​r​o​v​e​n​c​e
			 */
			location: string
			/**
			 * U​I​T​ ​A​i​x​-​M​a​r​s​e​i​l​l​e
			 */
			school: string
		}
		fsd: {
			/**
			 * D​é​v​e​l​o​p​p​e​u​r​ ​W​e​b​ ​F​u​l​l​ ​S​t​a​c​k
			 */
			name: string
			/**
			 * R​N​C​P​ ​3​7​2​7​3​ ​—​ ​A​l​t​e​r​n​a​n​c​e
			 */
			type: string
			/**
			 * D​i​s​t​a​n​c​i​e​l
			 */
			location: string
			/**
			 * 3​W​ ​A​c​a​d​e​m​y
			 */
			school: string
		}
		app: {
			/**
			 * C​o​n​c​e​p​t​e​u​r​ ​d​é​v​e​l​o​p​p​e​u​r​ ​d​'​a​p​p​l​i​c​a​t​i​o​n​s
			 */
			name: string
			/**
			 * R​N​C​P​ ​3​6​4​9​0​ ​—​ ​A​l​t​e​r​n​a​n​c​e
			 */
			type: string
			/**
			 * D​i​s​t​a​n​c​i​e​l
			 */
			location: string
			/**
			 * 3​W​ ​A​c​a​d​e​m​y
			 */
			school: string
		}
	}
	contact: {
		form: {
			/**
			 * F​o​r​m​u​l​a​i​r​e
			 */
			title: string
			/**
			 * L​e​ ​m​o​y​e​n​ ​l​e​ ​p​l​u​s​ ​s​i​m​p​l​e​ ​d​e​ ​m​e​ ​j​o​i​n​d​r​e​ ​d​i​r​e​c​t​e​m​e​n​t​ ​s​u​r​ ​c​e​ ​s​i​t​e
			 */
			description: string
			/**
			 * E​n​v​o​y​e​r​ ​u​n​ ​m​e​s​s​a​g​e
			 */
			actionTitle: string
			pros: {
				/**
				 * R​a​p​i​d​e​ ​&​ ​s​i​m​p​l​e
				 */
				'0': string
			}
			cons: {
				/**
				 * M​o​i​n​s​ ​p​r​o​f​e​s​s​i​o​n​n​e​l
				 */
				'0': string
				/**
				 * F​l​e​x​i​b​i​l​i​t​é​ ​l​i​m​i​t​é​e
				 */
				'1': string
				/**
				 * U​n​i​q​u​e​m​e​n​t​ ​p​o​u​r​ ​d​e​s​ ​m​e​s​s​a​g​e​s​ ​s​i​m​p​l​e​s
				 */
				'2': string
			}
		}
		mail: {
			/**
			 * E​m​a​i​l
			 */
			title: string
			/**
			 * L​e​ ​m​e​i​l​l​e​u​r​ ​m​o​y​e​n​ ​d​e​ ​m​e​ ​c​o​n​t​a​c​t​e​r​ ​p​o​u​r​ ​n​'​i​m​p​o​r​t​e​ ​q​u​e​l​l​e​ ​d​e​m​a​n​d​e
			 */
			description: string
			/**
			 * E​n​v​o​y​e​r​ ​u​n​ ​e​m​a​i​l
			 */
			actionTitle: string
			pros: {
				/**
				 * P​r​o​f​e​s​s​i​o​n​n​e​l​ ​&​ ​c​r​é​d​i​b​l​e
				 */
				'0': string
				/**
				 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​i​n​s​t​a​n​t​a​n​é​e​s
				 */
				'1': string
				/**
				 * F​a​c​i​l​e​ ​à​ ​u​t​i​l​i​s​e​r
				 */
				'2': string
				/**
				 * S​u​i​v​i​ ​f​a​c​i​l​e​ ​&​ ​s​u​p​p​o​r​t​ ​d​e​s​ ​p​i​è​c​e​s​ ​j​o​i​n​t​e​s
				 */
				'3': string
			}
			cons: {
				/**
				 * A​u​c​u​n
				 */
				'0': string
			}
		}
		socialNetworks: {
			/**
			 * L​i​n​k​e​d​I​n
			 */
			title: string
			/**
			 * C​o​n​n​e​c​t​e​z​-​v​o​u​s​ ​a​v​e​c​ ​m​o​i​ ​s​u​r​ ​L​i​n​k​e​d​I​n​ ​o​u​ ​c​o​n​s​u​l​t​e​z​ ​m​o​n​ ​p​r​o​f​i​l
			 */
			description: string
			/**
			 * V​o​i​r​ ​l​e​ ​p​r​o​f​i​l
			 */
			actionTitle: string
			pros: {
				/**
				 * P​e​r​s​o​n​n​e​l​ ​&​ ​r​e​l​a​t​i​o​n​n​e​l
				 */
				'0': string
				/**
				 * R​a​p​i​d​e​ ​e​t​ ​d​i​r​e​c​t
				 */
				'1': string
			}
			cons: {
				/**
				 * P​e​u​t​ ​n​e​ ​p​a​s​ ​ê​t​r​e​ ​v​é​r​i​f​i​é​ ​s​o​u​v​e​n​t
				 */
				'0': string
			}
		}
	}
}

export type TranslationFunctions = {
	navigation: {
		/**
		 * Accueil
		 */
		home: () => LocalizedString
		/**
		 * Discussion
		 */
		chat: () => LocalizedString
		/**
		 * Technos
		 */
		stacks: () => LocalizedString
		/**
		 * Parcours
		 */
		timeline: () => LocalizedString
		/**
		 * Projets
		 */
		projects: () => LocalizedString
		/**
		 * Contact
		 */
		contact: () => LocalizedString
	}
	/**
	 * Disponible à l'embauche - prêt à contribuer !
	 */
	message: () => LocalizedString
	hero: {
		subtitle: {
			/**
			 * Passionné
			 */
			passionate: () => LocalizedString
			/**
			 * Responsable
			 */
			responsible: () => LocalizedString
			french: () => LocalizedString
			/**
			 * {french}{passionate} et {responsible} en tant que
			 */
			sentence: (arg: { french: string, passionate: string, responsible: string }) => LocalizedString
		}
		title: {
			/**
			 * Développeur
			 */
			developer: () => LocalizedString
			/**
			 * Designer
			 */
			designer: () => LocalizedString
			/**
			 * {developer} & {designer} web
			 */
			sentence: (arg: { designer: string, developer: string }) => LocalizedString
		}
		details: {
			key: {
				/**
				 * Pressez
				 */
				p1: () => LocalizedString
				/**
				 * pour imprimer ou enregistrer instantanément la dernière version de mon CV en PDF
				 */
				p2: () => LocalizedString
			}
			download: {
				/**
				 * Vous préférez un téléchargement direct ? N'hésitez pas à
				 */
				p1: () => LocalizedString
				/**
				 * une version préenregistrée
				 */
				p2: () => LocalizedString
				/**
				 * Télécharger
				 */
				button: () => LocalizedString
			}
		}
	}
	/**
	 * Défilez vers le bas pour discuter avec l'IA-MOI !
	 */
	scroll: () => LocalizedString
	section: {
		stacks: {
			/**
			 * Ma stack technique
			 */
			title: () => LocalizedString
			/**
			 * Retrouvez ici les langages, frameworks, librairies et outils qui composent ma stack technique quotidienne. Certains ont été directement intégrés dans la création de ce portfolio, d’autres ont été remplacés au fil du temps pour s’adapter à mes valeurs et de mes préférences et d’autres que j’expérimente actuellement.
			 */
			description: () => LocalizedString
		}
		timeline: {
			/**
			 * Mon parcours
			 */
			title: () => LocalizedString
			/**
			 * Une présentation chronologique de mon parcours professionnel, mes expériences, mes compétences et mes formations accompagnée de quelques informations bonus. La durée de chaque étape est représentée de manière proportionnelle.
			 */
			description: () => LocalizedString
			/**
			 * Diplômé
			 */
			graduated: () => LocalizedString
			/**
			 * En cours
			 */
			inProgress: () => LocalizedString
		}
		projects: {
			/**
			 * Mes projets
			 */
			title: () => LocalizedString
			/**
			 * Découvrez une sélection non exhaustive de projets open source sur lesquels j'ai travaillé, choisis pour représenter mes compétences actuelles. Chaque projet est accompagné de son repo distant, ainsi que de la liste des outils et technologies utilisés.
			 */
			description: () => LocalizedString
			/**
			 * Visiter
			 */
			visitButton: () => LocalizedString
			/**
			 * Dépôt distant
			 */
			repositoryButton: () => LocalizedString
		}
		contact: {
			/**
			 * Me contacter
			 */
			title: () => LocalizedString
			/**
			 * Pour me contacter, utilisez le formulaire ci-dessous en cliquant sur "Envoyer un message", ou contactez-moi directement par mail ou via les réseaux sociaux. À titre d'information, je privilégie les mails pour une première prise de contact
			 */
			description: () => LocalizedString
		}
	}
	projects: {
		portfolio: {
			/**
			 * Portfolio actuel
			 */
			name: () => LocalizedString
			/**
			 * Ne reflétant plus mes compétences actuelles et ne me plaisant plus vraiment, mon ancien portfolio m’a poussé à en créer un nouveau. J’ai voulu y intégrer tout mon savoir-faire dans les moindres détails, sans compromis, avec une attention particulière sur le design. Pour relever le défi, j’ai délibérément choisi de ne pas m’appuyer sur Ant Design, la librairie de composants que j’utilise habituellement.
			 */
			description: () => LocalizedString
		}
		'212-colors': {
			/**
			 * 212-Colors
			 */
			name: () => LocalizedString
			/**
			 * Ce projet de formation a été développé tout au long de mon alternance et présenté lors de ma session d'examen pour l'obtention du diplôme. J'y ai découvert des technologies comme Next.js, Postgres, Prisma, TypeScript et bien d’autres. Il permet de stocker des couleurs et de créer des thèmes. Son concept est né de mon besoin personnel d’organiser les palettes de couleurs que je réutilise dans chacun de mes projets.
			 */
			description: () => LocalizedString
		}
		'first-portfolio': {
			/**
			 * Ancien Portfolio
			 */
			name: () => LocalizedString
			/**
			 * Voici mon tout premier portfolio, réalisé avec React et imaginé sous la forme d'un système d'exploitation. Il s'agit d'un site statique hébergé sur GitHub Pages. Malheureusement, seul le code source du fichier build est accessible pour le moment.
			 */
			description: () => LocalizedString
		}
	}
	timelines: {
		bac: {
			/**
			 * Bac scientifique
			 */
			name: () => LocalizedString
			type: () => LocalizedString
			/**
			 * Salon-de-Provence
			 */
			location: () => LocalizedString
			/**
			 * Lycée de l’Emperi
			 */
			school: () => LocalizedString
		}
		dut: {
			/**
			 * Génie Électrique et Informatique Industrielle
			 */
			name: () => LocalizedString
			/**
			 * Diplôme Universitaire de Technologie (DUT)
			 */
			type: () => LocalizedString
			/**
			 * Salon-de-Provence
			 */
			location: () => LocalizedString
			/**
			 * UIT Aix-Marseille
			 */
			school: () => LocalizedString
		}
		fsd: {
			/**
			 * Développeur Web Full Stack
			 */
			name: () => LocalizedString
			/**
			 * RNCP 37273 — Alternance
			 */
			type: () => LocalizedString
			/**
			 * Distanciel
			 */
			location: () => LocalizedString
			/**
			 * 3W Academy
			 */
			school: () => LocalizedString
		}
		app: {
			/**
			 * Concepteur développeur d'applications
			 */
			name: () => LocalizedString
			/**
			 * RNCP 36490 — Alternance
			 */
			type: () => LocalizedString
			/**
			 * Distanciel
			 */
			location: () => LocalizedString
			/**
			 * 3W Academy
			 */
			school: () => LocalizedString
		}
	}
	contact: {
		form: {
			/**
			 * Formulaire
			 */
			title: () => LocalizedString
			/**
			 * Le moyen le plus simple de me joindre directement sur ce site
			 */
			description: () => LocalizedString
			/**
			 * Envoyer un message
			 */
			actionTitle: () => LocalizedString
			pros: {
				/**
				 * Rapide & simple
				 */
				'0': () => LocalizedString
			}
			cons: {
				/**
				 * Moins professionnel
				 */
				'0': () => LocalizedString
				/**
				 * Flexibilité limitée
				 */
				'1': () => LocalizedString
				/**
				 * Uniquement pour des messages simples
				 */
				'2': () => LocalizedString
			}
		}
		mail: {
			/**
			 * Email
			 */
			title: () => LocalizedString
			/**
			 * Le meilleur moyen de me contacter pour n'importe quelle demande
			 */
			description: () => LocalizedString
			/**
			 * Envoyer un email
			 */
			actionTitle: () => LocalizedString
			pros: {
				/**
				 * Professionnel & crédible
				 */
				'0': () => LocalizedString
				/**
				 * Notifications instantanées
				 */
				'1': () => LocalizedString
				/**
				 * Facile à utiliser
				 */
				'2': () => LocalizedString
				/**
				 * Suivi facile & support des pièces jointes
				 */
				'3': () => LocalizedString
			}
			cons: {
				/**
				 * Aucun
				 */
				'0': () => LocalizedString
			}
		}
		socialNetworks: {
			/**
			 * LinkedIn
			 */
			title: () => LocalizedString
			/**
			 * Connectez-vous avec moi sur LinkedIn ou consultez mon profil
			 */
			description: () => LocalizedString
			/**
			 * Voir le profil
			 */
			actionTitle: () => LocalizedString
			pros: {
				/**
				 * Personnel & relationnel
				 */
				'0': () => LocalizedString
				/**
				 * Rapide et direct
				 */
				'1': () => LocalizedString
			}
			cons: {
				/**
				 * Peut ne pas être vérifié souvent
				 */
				'0': () => LocalizedString
			}
		}
	}
}

export type Formatters = {}
