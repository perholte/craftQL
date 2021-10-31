import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
    uri: 'http://129.241.104.92:4000',
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
