export interface Entity {
    id: string;
}

export interface NormalizedState<T> {
    entities: Record<string, T>;
}

export function addEntity<T extends Entity>(state: NormalizedState<T>, entity: T): NormalizedState<T> {
    return { entities: { ...state.entities, [entity.id]: entity } };
}

export function addEntityAtStart<T extends Entity>(state: NormalizedState<T>, entity: T): NormalizedState<T> {
    return { entities: { [entity.id]: entity, ...state.entities } };
}
