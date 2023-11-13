import { createBrowserRouter } from 'react-router-dom';

import { BookList, BookDetail } from '../pages';
import { ErrorMessage } from '../ui';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
    errorElement: (
      <ErrorMessage
        title="Desculpe, essa página não existe!"
        description="Volte para a página principal."
      />
    ),
  },
  {
    path: '/:id',
    element: <BookDetail />,
    errorElement: (
      <ErrorMessage
        title="Desculpe, essa página não existe!"
        description="Volte para a página principal."
      />
    ),
  },
]);

export default router;
