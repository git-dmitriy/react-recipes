import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AppState} from '@context/AppState.tsx';
import {Header} from '@components/Header';
import {Footer} from '@components/Footer';
import { FavoritesPage } from '@pages/FavoritesPage';
import {CategoriesPage} from '@pages/CategoriesPage';
import { RecipePage } from '@pages/RecipePage';
import { SearchResultsPage } from '@pages/SearchResultsPage';
import { ScrollToTop } from '@components/ScrollToTop';
import { SearchByCountryPage } from '@pages/SearchByCountryPage';
import { Theme } from '@components/Theme';
import {SingleCategoryPage} from "@pages/SingleCategoryPage.tsx";
import { Loader } from '@components/Loader';

export default function App() {
    return (
        <div className='bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-orange-100'>
            <AppState>
                <Theme />
                <Router>
                    <div className='content'>
                        <ScrollToTop />
                        <Loader />
                        <main>
                            <Routes>
                                <Route path='/' element={<CategoriesPage />} />
                                <Route path='favorites' element={<FavoritesPage />} />
                                <Route path='recipes' element={<SearchResultsPage />} />
                                <Route path='category/:name' element={<SingleCategoryPage/>} />
                                <Route path='country/:region' element={<SearchByCountryPage />} />
                                <Route path='meal/:idMeal' element={<RecipePage />} />
                                <Route path='/*' element={<CategoriesPage/>}/>
                            </Routes>
                        </main>
                    </div>
                    <Header/>
                    <Footer/>
                </Router>
            </AppState>
        </div>
    );
}
