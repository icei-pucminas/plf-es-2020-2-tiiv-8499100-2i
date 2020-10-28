import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { store } from "./store/index";

import ViewAuthorContainer from "./containers/author/view-author-container/ViewAuthorContainer";
import AuthorContainer from "./containers/author/author-container/AuthorContainer";
import Header from "./layout/header/Header";
import Card from "./components/card/Card";
import Body from "./layout/body/Body";
import ViewPostContainer from "./containers/post/view-post-container/ViewPostContainer";
import ViewSymbolContainer from "./containers/symbol/view-symbol-container/ViewSymbolContainer";
import ViewVideoContainer from "./containers/video/view-video-container/ViewVideoContainer";
import HomeContainer from "./containers/home-container/HomeContainer";
import LoginContainer from "./containers/login-container/LoginContainer";
import VideoCategoryContainer from "./containers/video-category/video-category-container/VideoCategoryContainer";
import ViewSymbolCategoryContainer from "./containers/symbol-category/view-symbol-category-container/ViewSymbolCategoryContainer";
import ViewSymbolSubcategoryContainer from "./containers/symbol-subcategory/view-symbol-subcategory-container/ViewSymbolSubcategoryContainer";
import ViewVideoCategoryContainer from "./containers/video-category/view-video-category-container/ViewVideoCategoryContainer";
import ViewVideoSubcategoryContainer from "./containers/video-subcategory/view-video-subcategory-container/ViewVideoSubcategoryContainer";
import VideoSubcategoryContainer from "./containers/video-subcategory/video-subcategory-container/VideoSubcategoryContainer";
import ViewAdContainer from "./containers/ad/view-ad-container/ViewAdContainer";
import AdContainer from "./containers/ad/ad-container/AdContainer";
import requiresAuth from "./hoc/requiresAuth";
import SpecificStats from "./containers/stats-general/StatsGeneral";
import ViewForumPostsContainer from "./containers/forum/ViewForumPostsContainer";
import ViewForumContainer from "./containers/forum/ViewForumContainer";
import PostContainer from "./containers/post/post-container/PostContainer";
import SymbolContainer from "./containers/symbol/symbol-container/SymbolContainer";
import SymbolCategoryContainer from "./containers/symbol-category/symbol-category-container/SymbolCategoryContainer";
import SymbolSubcategoryContainer from "./containers/symbol-subcategory/symbol-subcategory-container/SymbolSubcategoryContainer";
import VideoContainer from "./containers/video/video-container/VideoContainer";
import StatsViewPage from "./containers/stats-viewpage/StatsViewPage";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Body>
					<Card width={900}>
						<Switch>
							<Route
								path="/post/novo"
								component={requiresAuth(PostContainer)}
							/>
							<Route
								path="/post/editar/:postId"
								component={requiresAuth(PostContainer)}
							/>
							<Route path="/post" component={requiresAuth(ViewPostContainer)} />
							<Route
								path="/simbolo/novo"
								component={requiresAuth(SymbolContainer)}
							/>
							<Route
								path="/simbolo/editar/:symbolId"
								component={requiresAuth(SymbolContainer)}
							/>
							<Route
								path="/categoria-simbolo/novo"
								component={requiresAuth(SymbolCategoryContainer)}
							/>
							<Route
								path="/categoria-simbolo/editar/:symbolCategoryId"
								component={requiresAuth(SymbolCategoryContainer)}
							/>
							<Route
								path="/categoria-simbolo"
								component={requiresAuth(ViewSymbolCategoryContainer)}
							/>
							<Route
								path="/subcategoria-simbolo/novo"
								component={requiresAuth(SymbolSubcategoryContainer)}
							/>
							<Route
								path="/subcategoria-simbolo/editar/:symbolSubcategoryId"
								component={requiresAuth(SymbolSubcategoryContainer)}
							/>
							<Route
								path="/subcategoria-simbolo"
								component={requiresAuth(ViewSymbolSubcategoryContainer)}
							/>
							<Route
								path="/simbolo"
								component={requiresAuth(ViewSymbolContainer)}
							/>
							<Route
								path="/autor/novo"
								component={requiresAuth(AuthorContainer)}
							/>
							<Route
								path="/autor/editar/:authorId"
								component={requiresAuth(AuthorContainer)}
							/>
							<Route
								path="/autor"
								component={requiresAuth(ViewAuthorContainer)}
							/>
							<Route
								path="/video/novo"
								component={requiresAuth(VideoContainer)}
							/>
							<Route
								path="/video/editar/:videoId"
								component={requiresAuth(VideoContainer)}
							/>
							<Route
								path="/video"
								component={requiresAuth(ViewVideoContainer)}
							/>
							<Route
								path="/categoria-video/novo"
								component={requiresAuth(VideoCategoryContainer)}
							/>
							<Route
								path="/categoria-video/editar/:videoCategoryId"
								component={requiresAuth(VideoCategoryContainer)}
							/>
							<Route
								path="/categoria-video"
								component={requiresAuth(ViewVideoCategoryContainer)}
							/>
							<Route
								path="/subcategoria-video/novo"
								component={requiresAuth(VideoSubcategoryContainer)}
							/>
							<Route
								path="/subcategoria-video/editar/:videoSubcategoryId"
								component={requiresAuth(VideoSubcategoryContainer)}
							/>
							<Route
								path="/subcategoria-video"
								component={requiresAuth(ViewVideoSubcategoryContainer)}
							/>
							<Route
								path="/anuncio/novo"
								component={requiresAuth(AdContainer)}
							/>
							<Route
								path="/anuncio/editar/:adId"
								component={requiresAuth(AdContainer)}
							/>
							<Route
								path="/anuncio"
								component={requiresAuth(ViewAdContainer)}
							/>
							<Route
								path="/forum/:forumId"
								component={requiresAuth(ViewForumPostsContainer)}
							/>
							<Route
								path="/forum"
								component={requiresAuth(ViewForumContainer)}
							/>
							<Route
								path="/estatisticas-especificas/post/:id"
								component={StatsViewPage}
							/>
							<Route
								path="/estatisticas-especificas/simbolo/:id"
								component={StatsViewPage}
							/>
							<Route
								path="/estatisticas-especificas/video/:id"
								component={StatsViewPage}
							/>
							<Route
								path="/estatisticas-especificas/forum/:id"
								component={StatsViewPage}
							/>
							<Route
								path="/estatisticas-especificas/calculadora"
								component={StatsViewPage}
							/>
							<Route
								path="/estatisticas-especificas"
								component={SpecificStats}
							/>
							<Route path="/login" component={LoginContainer} />
							<Route path="/" component={requiresAuth(HomeContainer)} />
						</Switch>
					</Card>
				</Body>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
