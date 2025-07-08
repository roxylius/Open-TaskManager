import * as React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, TrashIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

import '../styles/taskItem.css';

export function TaskItem({ task, onToggle, onDelete }) {
  const [open, setOpen] = React.useState(false);

  // Format creation date
  const formattedDate = new Date(task.createdAt).toLocaleDateString();

  return (
    <div className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      <Checkbox.Root
        className="CheckboxRoot"
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        id={`checkbox-${task.id}`}
      >
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="task-details">
        <label htmlFor={`checkbox-${task.id}`} className="task-title">
          {task.title}
        </label>
        {task.description && <p className="task-description">{task.description}</p>}
        <time className="task-date">Created: {formattedDate}</time>
      </div>
      <button className="delete-button" onClick={() => setOpen(true)} aria-label="Delete task">
        <TrashIcon />
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title>Confirm Delete</Dialog.Title>
            <Dialog.Description>Are you sure you want to delete this task?</Dialog.Description>
            <div className="DialogActions">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                onClick={() => {
                  onDelete(task.id);
                  setOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
