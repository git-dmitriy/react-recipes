import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AppState} from '@app/context/AppState.tsx';
import {Header} from 'src/entities/Header';
import {Footer} from '@shared/ui/Footer';
import { FavoritesPage } from '@pages/favorites';
import {CategoriesPage} from '@pages/categories';
import { RecipePage } from '@pages/recipe/ui/RecipePage.tsx';
import { SearchResultsPage } from '@pages/searchResultsPage';
import { ScrollToTop } from '@shared/ui/ScrollToTop';
import { SearchByCountryPage } from '@pages/searchByCountry';
import { Theme } from '@shared/ui/Theme';
import {SingleCategoryPage} from "@pages/category";
import { Loader } from '@shared/ui/Loader';

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
