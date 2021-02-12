import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'


import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'


// Extraemos las props del DashboardRoutes
export const DashboardRoutes = ( {history} ) => {

    // console.log(history);

    return (
        <>

            {/* Le pasamos el history al Navbar para poder navegar entre rutas */}
            <Navbar />

            <div className="container mt-2">

                <Switch>

                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                    
                </Switch>

            </div>
            
        </>
    )
}
