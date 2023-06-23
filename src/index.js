import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";
import App from "./App";
import { persistor, store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate persistor={persistor} loading={null}> */}
				<BrowserRouter>
					<App />
				</BrowserRouter>
			{/* </PersistGate> */}
		</Provider>
	</React.StrictMode>
);
