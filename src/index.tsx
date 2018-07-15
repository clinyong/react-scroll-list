import * as React from "react";

export interface RowRendererParams {
	index: number;
	style: React.CSSProperties;
}

export interface ScrollListProps {
	height: number;
	rowHeight: number;
	total: number;
	rowRenderer: (params: RowRendererParams) => any;
}

export interface ScrollListState {
	scrollTop: number;
}

export class ScrollList extends React.PureComponent<ScrollListProps, ScrollListState> {
	scrollingContainer: any;
	constructor(props) {
		super(props);

		this.state = {
			scrollTop: 0
		};
	}

	get limit() {
		const { rowHeight, height } = this.props;
		return Math.ceil(height / rowHeight);
	}

	onScroll = (e: React.UIEvent<any>) => {
		if (e.target === this.scrollingContainer) {
			const { scrollTop } = e.target as any;

			this.setState({
				scrollTop
			});
		}
	};

	renderDisplayContent = () => {
		const { scrollTop } = this.state;
		const { rowHeight, rowRenderer, total } = this.props;

		const startIndex = Math.floor(scrollTop / rowHeight);
		const endIndex = Math.min(startIndex + this.limit, total - 1);

		let content = [];
		for (let i = startIndex; i <= endIndex; i++) {
			content.push(
				rowRenderer({
					index: i,
					style: {
						height: rowHeight,
						left: 0,
						right: 0,
						position: "absolute",
						top: i * rowHeight
					}
				})
			);
		}

		return content;
	};

	render() {
		const { height, total, rowHeight } = this.props;
		return (
			<div
				style={{
					overflowX: "hidden",
					overflowY: "auto",
					height
				}}
				onScroll={this.onScroll}
				ref={container => (this.scrollingContainer = container)}
			>
				<div
					style={{
						height: total * rowHeight,
						position: "relative"
					}}
				>
					{this.renderDisplayContent()}
				</div>
			</div>
		);
	}
}
