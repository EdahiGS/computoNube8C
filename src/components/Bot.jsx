import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
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
		message: "Gusto en Conocerte",
		end: true,
	},
];

const BotDesign = () => (
	<ThemeProvider theme={theme}>
		<ChatBot steps={steps} />
	</ThemeProvider>
);

export default BotDesign;
