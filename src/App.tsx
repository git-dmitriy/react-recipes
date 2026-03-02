import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from '@components/Header';
import {Footer} from '@components/Footer';
import {ScrollToTop} from '@components/ScrollToTop';
import {Theme} from '@components/Theme';
import {Layout} from '@components/Layout';
import {Loader} from '@components/Loader';
import {motion} from 'motion/react';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {ReloadPrompt} from '@components/ReloadPrompt';
import {queryClient, persister, persistMaxAge} from '@/queryClient';

const CategoriesPage = lazy(() => import('@pages/CategoriesPage').then((m) => ({default: m.CategoriesPage})));
const FavoritesPage = lazy(() => import('@pages/FavoritesPage').then((m) => ({default: m.FavoritesPage})));
const RecipePage = lazy(() => import('@pages/RecipePage').then((m) => ({default: m.RecipePage})));
const SearchResultsPage = lazy(() => import('@pages/SearchResultsPage').then((m) => ({default: m.SearchResultsPage})));
const SearchByCountryPage = lazy(() => import('@pages/SearchByCountryPage').then((m) => ({default: m.SearchByCountryPage})));
const SingleCategoryPage = lazy(() => import('@pages/SingleCategoryPage').then((m) => ({default: m.SingleCategoryPage})));

export default function App() {
    return (
        <Router>
            <PersistQueryClientProvider
                client={queryClient}
                persistOptions={{persister, maxAge: persistMaxAge}}
            >
                <div className='main-container bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-orange-100'>
                    <Theme/>
                    <Header/>
                    <motion.main className='content h-full'>
                        <Layout>
                            <ScrollToTop/>
                            <Suspense fallback={<Loader/>}>
                                <Routes>
                                    <Route path='/' element={<CategoriesPage/>}/>
                                    <Route path='favorites' element={<FavoritesPage/>}/>
                                    <Route path='recipes' element={<SearchResultsPage/>}/>
                                    <Route path='category/:name' element={<SingleCategoryPage/>}/>
                                    <Route path='country/:region' element={<SearchByCountryPage/>}/>
                                    <Route path='meal/:idMeal' element={<RecipePage/>}/>
                                    <Route path='/*' element={<CategoriesPage/>}/>
                                </Routes>
                            </Suspense>
                        </Layout>
                    </motion.main>
                    <Footer/>
                    <ReloadPrompt/>
                </div>
            </PersistQueryClientProvider>
        </Router>
    );
}
