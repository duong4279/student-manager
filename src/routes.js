import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StudentPage from './pages/StudentPage';
import NewStudent from './components/NewStudent';
import EditStudent from './components/EditStudent';


const routes = [
{
    path : '/',
    exact : true,
    main : () => <HomePage />
},
{
    path : '/studentlist',
    exact : false,
    main : () => <StudentPage />
},
{
    path : '/student/new',
    exact : false,
    main : ({history}) => <NewStudent history={history} />
},
{
    path : '/student/:id/edit',
    exact : false,
    main : ({match, history}) => <EditStudent match = {match} history={history} />
},
{
    path : '',
    exact : false,
    main : () => <NotFoundPage/>
}

];
export default routes;