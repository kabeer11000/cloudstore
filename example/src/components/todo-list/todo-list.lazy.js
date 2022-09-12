import React, { lazy, Suspense } from 'react';

const LazyTodoList = lazy(() => import('./TodoList'));

const TodoList = props => (
  <Suspense fallback={null}>
    <LazyTodoList {...props} />
  </Suspense>
);

export default TodoList;
