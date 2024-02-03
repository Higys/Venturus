import {Routes, Route} from 'react-router-dom'

import { Home } from './components/Home/Home'
import { NewArtist } from './pages/NewArtist';
import { DefaultLayout } from './layout/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-artist" element={<NewArtist/>}/>
            </Route>
        </Routes>
    );
}