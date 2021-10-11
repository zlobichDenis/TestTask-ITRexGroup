import { Provider, connect } from "react-redux";
import { store } from "../../store/store";
import React from "react";
import App from "../app/App";
import { mapDispatchToProps } from "../app/App";
import { mapStateToProps } from "../app/App";

const Container = connect(mapStateToProps, mapDispatchToProps)(App);


export const AppWrapper = (props) => {
    const { data } = props;
    return (
        <Provider store={store}>
            {/* <App data={data}/> */}
            <Container data={data} />
        </Provider>
    )
}