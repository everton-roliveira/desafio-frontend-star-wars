export class TableModel<T> {
    head: Array<string>;
    body: T;
}

export interface TableConfig {
    border: boolean;
    textAlign: 'left' | 'rigth' | 'center';
    headerTextAlignLastColumn: 'left' | 'rigth' | 'center';
}

