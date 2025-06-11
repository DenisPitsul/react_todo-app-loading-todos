import React from 'react';
import cn from 'classnames';
import { StatusFilter } from '../../enums/statusFilter';

type Props = {
  activeTodosCount: number;
  statusFilter: StatusFilter;
  onStatusFilterChange: (statusFilter: StatusFilter) => void;
};

export const Footer: React.FC<Props> = ({
  activeTodosCount,
  statusFilter,
  onStatusFilterChange,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodosCount} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: statusFilter === StatusFilter.ALL,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onStatusFilterChange(StatusFilter.ALL)}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: statusFilter === StatusFilter.ACTIVE,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onStatusFilterChange(StatusFilter.ACTIVE)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: statusFilter === StatusFilter.COMPLETED,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onStatusFilterChange(StatusFilter.COMPLETED)}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
