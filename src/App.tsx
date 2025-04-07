import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AppState} from '@context/AppState.tsx';
import {Header} from '@components/Header';
import {Footer} from '@components/Footer';
import {FavoritesPage} from '@pages/FavoritesPage';
import {CategoriesPage} from '@pages/CategoriesPage';
import {RecipePage} from '@pages/RecipePage';
import {SearchResultsPage} from '@pages/SearchResultsPage';
import {ScrollToTop} from '@components/ScrollToTop';
import {SearchByCountryPage} from '@pages/SearchByCountryPage';
import {Theme} from '@components/Theme';
import {SingleCategoryPage} from "@pages/SingleCategoryPage.tsx";
import {Loader} from '@components/Loader';
import {motion} from 'motion/react';
import {Layout} from "@components/Layout";

export default function App() {
    return (
        <Router>
            <AppState>
                <div className='main-container bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-orange-100'>
                    <Theme/>
                    <Header/>
                    <motion.main className='content h-full'>
                        <Layout>
                            <ScrollToTop/>
                            {/*<Loader/>*/}
                            <Routes>
                                <Route path='/' element={<CategoriesPage/>}/>
                                <Route path='favorites' element={<FavoritesPage/>}/>
                                <Route path='recipes' element={<SearchResultsPage/>}/>
                                <Route path='category/:name' element={<SingleCategoryPage/>}/>
                                <Route path='country/:region' element={<SearchByCountryPage/>}/>
                                <Route path='meal/:idMeal' element={<RecipePage/>}/>
                                <Route path='/*' element={<CategoriesPage/>}/>
                            </Routes>
                        </Layout>
                    </motion.main>
                    <Footer/>
                </div>
            </AppState>
        </Router>
    );
}
