
import { 
    DndContext, 
    closestCenter, 
    KeyboardSensor, 
    PointerSensor, 
    useSensor, 
    useSensors 
} from '@dnd-kit/core';
import { 
    arrayMove, 
    SortableContext, 
    sortableKeyboardCoordinates, 
    verticalListSortingStrategy 
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import ToDoItem from './ToDoItem';

export default function ToDoList({ 
    todos, 
    confirmRemoval, 
    startEdit, 
    startShare, 
    pinTask, 
    setReorderedTodos 
}) { 
    const pinnedTodos = todos.filter(todo => todo.isPinned);

    const unpinnedTodos = todos.filter(todo => !todo.isPinned);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, 
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = unpinnedTodos.findIndex((t) => t.id === active.id);
            const newIndex = unpinnedTodos.findIndex((t) => t.id === over.id);
            
            const newUnpinnedOrder = arrayMove(unpinnedTodos, oldIndex, newIndex);
            setReorderedTodos([...pinnedTodos, ...newUnpinnedOrder]);
        }
    };

    return (
        <ul className="todo__list" style={{ listStyle: 'none', padding: 0 }}> 

            {pinnedTodos.length > 0 && (
                <>
                    <h3>Закрепленные</h3>
                    {pinnedTodos.map((todo) => (
                        <ToDoItem 
                            key={todo.id} 
                            todo={todo} 
                            confirmRemoval={confirmRemoval} 
                            startEdit={startEdit} 
                            startShare={startShare} 
                            pinTask={pinTask} 
                        />
                    ))}
                </>
            )}

            {unpinnedTodos.length > 0 && (
                <>
                    {pinnedTodos.length > 0 && (
                        <h3>Остальные</h3>
                    )}

                    <DndContext 
                        sensors={sensors} 
                        collisionDetection={closestCenter} 
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext 
                            items={unpinnedTodos.map(t => t.id)} 
                            strategy={verticalListSortingStrategy}
                        >
                            {unpinnedTodos.map((todo) => (
                                <SortableItem 
                                    key={todo.id} 
                                    id={todo.id} 
                                    todo={todo} 
                                    confirmRemoval={confirmRemoval}
                                    startEdit={startEdit}
                                    startShare={startShare}
                                    pinTask={pinTask}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                </>
            )}

            {todos.length === 0 && 
                <section class="no__task__window" data-js-no-tasks-message>
                    <div></div>
                    <p>Нет задач</p>
                    <div></div>
                </section>
            }
        </ul>
    );
}