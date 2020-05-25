import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/home/home';
import history from './history';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import ProductTypes from './pages/product-types/product-types';

history.listen(_ => {
	window.scrollTo(0, 0);
})

const App = () => (
	<div className="App">
		<Router history={history}>
			<Header />
			<div className="page-wrapper">
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/register">
						<RegisterPage />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/product">
						<Product />
					</Route>
					<Route path="/categories">
						<ProductTypes />
					</Route>
				</Switch>
			</div>
				<Footer />
		</Router>
	</div>
)


export default App;
