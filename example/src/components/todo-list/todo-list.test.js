import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  test('it should mount', () => {
    render(<TodoList />);
    
    const todoList = screen.getByTestId('TodoList');

    expect(todoList).toBeInTheDocument();
  });
});