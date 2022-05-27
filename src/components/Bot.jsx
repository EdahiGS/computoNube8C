import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

import WhatSep from "./WhatSep";
import Gastos from "./Gastos";
import Formatos from "./Formatos";
// all available props
const theme = {
	background: "#f5f8fb",
	fontFamily: "Helvetica Neue",
	headerBgColor: "#16a34a",
	headerFontColor: "#fff",
	headerFontSize: "15px",
	botBubbleColor: "#16a34a",
	botFontColor: "#fff",
	userBubbleColor: "#fff",
	userFontColor: "#4a4a4a",
};

const steps = [
	{
		id: "1",
		message: "Hola",
		trigger: "2",
	},
	{
		id: "2",
		user: true,
		trigger: "3",
	},
	{
		id: "3",
		message: "Necesitas ayuda en algo?",
		trigger: "4",
	},
	{
		id: "4",
		user: true,
		trigger: "5",
	},
	{
		id: "5",
		message: "Qué es lo que necesitas?",
		trigger: "6",
	},
	{
		id: "6",
		options: [
			{ value: 1, label: "Que es la SEP?", trigger: "7" },
			{ value: 2, label: "Formatos Descargables", trigger: "8" },
			{ value: 3, label: "Gastos", trigger: "9" },
		],
	},
	{
		id: "7",
		component: <WhatSep />,
		trigger: "10",
	},
	{
		id: "8",
		component: <Formatos />,
		trigger: "10",
	},
	{
		id: "9",
		component: <Gastos />,
		trigger: "10",
	},
	{
		id: "10",
		message: "Necesitas buscar algo adicional?",
		trigger: "11",
	},
	{
		id: "11",
		options: [
			{ value: 1, label: "SI", trigger: "6" },
			{ value: 2, label: "NO", trigger: "12" },
		],
	},
	{
		id: "12",
		message: "Gracias por usar ChatBot",
		end: true,
	},
];

const BotDesign = () => (
	<ThemeProvider theme={theme}>
		<ChatBot steps={steps} />
	</ThemeProvider>
);

export default BotDesign;
