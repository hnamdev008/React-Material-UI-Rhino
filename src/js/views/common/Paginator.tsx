import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'; 
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class Paginator extends React.Component<{ 
    currPage: number, 
    pageCount: number,
    onPageClick(pageNum: number): void,
    onPrevClick(): void,
    onNextClick(): void }, {}> {

    private next: HTMLElement;
    private prev: HTMLElement;

    public constructor(props) {
        super(props);
        this.prev =
                <IconButton onClick={this.props.onPrevClick} tooltip="Previous">
                    <ChevronLeft style={ { paddingTop: '0px' } }/>
                </IconButton>
                
        this.next =
                <IconButton onClick={this.props.onNextClick} tooltip="Next">
                    <ChevronRight style={ { paddingTop: '0px' } }/>
                </IconButton>
    }

    public render() {
        let pages = new Array<HTMLElement>();
        const count = this.props.pageCount;
        const currPage = this.props.currPage;

        if(!(count <= 1)) {
            for(let i = 1; i <= count; i++) {
                const isCurrPage = i == currPage;

                const classes = `paginator-page-number${isCurrPage ? ' paginator-curr-page' : ''}`;

                // no-op if clicked page number is current page
                const event = isCurrPage ? null : () => this.props.onPageClick(i);

                pages.push(
                    <span key={i} className={classes}>
                        <a href="#" onClick={ event }>
                                {i}
                        </a>
                    </span>
                )
            }
        }

        return (
            <div className="paginator-paginator">
                { currPage > 1 ? this.prev: null }
                                    
                { pages }

                { currPage < count ? this.next: null }
            </div>
        )
    }
}

export default Paginator;

