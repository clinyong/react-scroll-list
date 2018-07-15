import * as React from "react";
interface RowRendererParams {
    index: number;
    style: React.CSSProperties;
}
interface ScrollListProps {
    height: number;
    rowHeight: number;
    total: number;
    rowRenderer: (params: RowRendererParams) => any;
}
interface ScrollListState {
    scrollTop: number;
}
export declare class ScrollList extends React.PureComponent<ScrollListProps, ScrollListState> {
    scrollingContainer: any;
    constructor(props: any);
    readonly limit: number;
    onScroll: (e: React.UIEvent<any>) => void;
    renderDisplayContent: () => any[];
    render(): JSX.Element;
}
export {};
