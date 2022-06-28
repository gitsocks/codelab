import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateExpensePage from '../components/CreateExpensePage'
import ExpenseDashboardPage from '../components/DashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const routes = (
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
)

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            {routes}
        </div>
    </BrowserRouter>
)

export default AppRouter