import {Routes, Route} from 'react-router-dom'

import { Home } from './components/Home'
import { NewArtist } from './components/NewArtist';
import { DefaultLayout } from './layout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-artist" element={<NewArtist/>}/>
                <Route path="/edit-artist" element={<NewArtist/>}/>
            </Route>
        </Routes>
    );
}