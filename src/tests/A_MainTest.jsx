import React from 'react'
import {Route, Routes } from 'react-router-dom'


import Ariyeh from './Ariyeh'
import Eliraz from './Eliraz'
import Gila from './Gila'
import Hilel from './Hilel'
import Hotam from './Hotam'
import Israel from './Israel'
import Jacob from './Jacob'
import Joshua from './Joshua'
import Liel from './Liel'
import Maayan from './Maayan'
import Miryam from './Miryam'
import Moti from './Moti'
import Or from  './Or'
import Orna from './Orna'
import Refael from './Refael'
import Roni from './Roni'
import Ronit from './Ronit'
import Shaked from './Shaked'
import Shir from './Shir'
import Tal from './Tal'
import Teliha from './Teliha'


export default function Test() {
    return (
        <div>    
            <Routes>
                <Route path='/ariyeh' element={<Ariyeh/>} />
                <Route path='/eliraz' element={<Eliraz/>} />
                <Route path='/gila' element={<Gila />} />
                <Route path='/hilel' element={<Hilel />} />
                <Route path='/hotam' element={<Hotam />} />
                <Route path='/israel' element={<Israel />} />
                <Route path='/jacob' element={<Jacob />} />
                <Route path='/joshua' element={<Joshua />} />
                <Route path='/liel' element={<Liel />} />
                <Route path='/maayan' element={<Maayan/>} />
                <Route path='/miryam' element={<Miryam />} />
                <Route path='/moti' element={<Moti />} />
                <Route path='/or' element={<Or />} />
                <Route path='/orna' element={<Orna />} />
                <Route path='/refael' element={<Refael />} />
                <Route path='/roni' element={<Roni />} />
                <Route path='/ronit' element={<Ronit />} />
                <Route path='/shaked' element={<Shaked />} />
                <Route path='/shir' element={<Shir />} />
                <Route path='/tal' element={<Tal />} />
                <Route path='/teliha' element={<Teliha />} />


            </Routes>
         


        </div>
    )
}
