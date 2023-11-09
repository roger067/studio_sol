import { createBrowserRouter } from 'react-router-dom';
import { BookList, BookDetail } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
  },
  {
    path: '/:id',
    element: <BookDetail />,
  },
]);

export default router;
