import { Provider, connect } from "react-redux";
import { store } from "../../store/store";
import React from "react";
import App from "../app/App";


export const AppWrapper = (props) => {
    const { data } = props;
    return (
        <Provider store={store}>
            <App data={data}/>
        </Provider>
    )
}