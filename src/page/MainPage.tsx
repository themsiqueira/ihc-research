import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import { ProjDescription } from "../components/Tabs/ProjDescription";
import { Answers } from "../components/Tabs/Answers";
import { Questions } from "../components/Tabs/Questions";
import { Footer } from "../components/Footer/Footer";
import HighFidelity from '../components/Tabs/HighFidelity';
import LowFidelity from '../components/Tabs/LowFidelity';

interface SidebarProps {
	selectedTab: number;
	onSelectTab: (index: number) => void;
}

const customTheme = createTheme({
	components: {
		MuiTabs: {
			styleOverrides: {
				indicator: {
					display: "none",
				},
			},
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true, // This will disable the ripple effect for all Tabs by default
			},
			styleOverrides: {
				root: {
					"&.Mui-selected": {
						backgroundColor: "#0401CA",
						color: "#F8FC07",
						marginBottom: "10px",
						borderRadius: "10px",
					},
				},
			},
		},
	},
});

const SubTopBar: React.FC<SidebarProps> = ({ selectedTab, onSelectTab }) => {
	return (
		<ThemeProvider theme={customTheme}>
			<Tabs
				centered
				orientation="horizontal"
				variant="scrollable" // changed to "scrollable" to allow for custom widths
				value={selectedTab}
				onChange={(event, newValue) => onSelectTab(newValue)}
				sx={{
					".MuiTabs-flexContainer": {
						justifyContent: "center",
					},
					bgcolor: "#3496FB",
					color: "white",
					"& .MuiTab-root": {
						// Targeting the MuiTab-root class to apply width
						// minWidth: "5rem", // Sets a minimum width for each tab
						// maxWidth: "5rem", // Sets a maximum width for each tab
					},
				}}
			>
				<Tab sx={{ color: "white" }} label="Descrição do Projeto" />
				<Tab sx={{ color: "white" }} label="Perguntas" />
				<Tab sx={{ color: "white" }} label="Respostas" />
				<Tab sx={{ color: "white" }} label="Low fidelity prototipo" />
				<Tab sx={{ color: "white" }} label="High fidelity prototipo" />
			</Tabs>
		</ThemeProvider>
	);
};

interface TabPanelProps {
	children?: React.ReactNode;
	value: number;
	index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			// style={{ padding: "20px", flexGrow: 1 }}
		>
			{value === index && <>{children}</>}
		</div>
	);
};

const MainPage: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const handleSelectTab = (index: number) => {
		setSelectedTab(index);
	};

	return (
		<>
			<header className="header">
				<h1 className="main-title">IHC & UX</h1>
				<p className="sub-title">
					Inclusão e Interação para Deficientes Auditivos
				</p>
				<SubTopBar selectedTab={selectedTab} onSelectTab={handleSelectTab} />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						backgroundColor: "white",
						minHeight: "100vh",
					}}
				>
					<TabPanel value={selectedTab} index={0}>
						<ProjDescription />
					</TabPanel>
					<TabPanel value={selectedTab} index={1}>
						<Questions />
					</TabPanel>
					<TabPanel value={selectedTab} index={2}>
						<Answers />
					</TabPanel>
					<TabPanel value={selectedTab} index={3}>
						<LowFidelity />
					</TabPanel>
					<TabPanel value={selectedTab} index={4}>
						<HighFidelity />
					</TabPanel>
				</div>
			</header>
			<Footer />
		</>
	);
};

export { MainPage };
