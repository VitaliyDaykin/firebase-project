import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { pivateRoutes, publicRoutes, } from '../routes';
import { LOGIN_ROUTE, CHAT_ROUTE } from '../utils/consts';



export default function AppRouter() {

	const user = false;

	return user ?
		(
			<Routes>
				{pivateRoutes.map(({ path, Component, i }) =>
					<Route key={i} path={path} component={Component} exact={true} />
				)}
				<Route
					path="*"
					element={<Navigate to={CHAT_ROUTE} replace />}
				/>
			</Routes>
		)
		:
		(
			<Routes>
				{publicRoutes.map(({ path, Component, i }) =>
					<Route key={i} path={path} component={Component} exact={true} />
				)}
				<Route
					path="*"
					element={<Navigate to={LOGIN_ROUTE} replace />}
				/>
			</Routes>
		)
}
