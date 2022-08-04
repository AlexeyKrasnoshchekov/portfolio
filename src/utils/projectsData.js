import placeniffer from "../assets/projects/placeniffer.webp";
import demoEcommerce from "../assets/projects/demoEcommerce.webp";
import inpireHomepage from "../assets/projects/inpireHomepage.webp";
import musicjam from "../assets/projects/musicjam.webp";

export const data = [
	{
		title: "Поиск заведений по тематике и расположению ",
		descr: "С помощью приложения можно искать места по всему миру по нужным вам критериям, а также посмотреть информационную страницу каждого из найденных заведений",
		img: { placeniffer },
		stack: ["react", "ExpressJs", "GoogleMapsApi"],
		githubLink: "https://github.com/AlexeyKrasnoshchekov/placeniffer",
		liveLink: "https://alexeykrasnoshchekov.github.io/placeniffer/",
	},
	{
		title: "Интерфейс интернет магазина",
		descr: "Демо интерфейс, в котором можно добалять/удалять товары из корзины, смотреть информацию о товаре; реализован функционал категорий товаров, различных валют, наличия товара; запросы выполняются на GraphQl",
		img: { demoEcommerce },
		stack: ["react", "redux", "graphQl", "styled component"],
		githubLink:
			"https://github.com/AlexeyKrasnoshchekov/ecommerce-frontend",
		liveLink: "https://alexeykrasnoshchekov.github.io/ecommerce-frontend/",
	},
	{
		title: "Мотивирующая домашняя страница",
		descr: "Одностраничное приложение (SPA), в котором показана информация о погоде в текущем местоположении пользователя, показана мотивирующая цитата дня; на заднем фоне реализован слайдер из нескольких красивых фото; есть возможность добавлять цели/задачи, помечать их выполнение и затем удалять",
		img: { inpireHomepage },
		stack: ["react", "redux toolkit", "typescrypt", "expressJs", "sass"],
		githubLink:
			"https://github.com/AlexeyKrasnoshchekov/ecommerce-frontend",
		liveLink: "https://github.com/AlexeyKrasnoshchekov/ts-homepage-client",
	},
	{
		title: "Музыкальный поиск",
		descr: "Приложение, работающее со Spotify, где можно искать музыку, добавлять треки и альбомы в избранное, создавать плейлисты",
		img: { musicjam },
		stack: ["react", "rtkQuery", "spotifyApi", "expressJs", "ant design"],
		githubLink:
			"https://github.com/AlexeyKrasnoshchekov/musicjam-rtk-with-server",
		liveLink: "",
	},
];
