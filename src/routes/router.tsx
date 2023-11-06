import { createBrowserRouter } from 'react-router-dom';
import { BookList } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
  },
]);

export default router;
