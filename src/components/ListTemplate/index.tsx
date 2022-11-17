import "./styles.css"

const ListTemplate = () =>{
    return(
        <div className="listWrapper">
            <div className="listTitle">Title</div>
            <div className="listSubTitle">
                <span className="listSubTitleText positive">1</span>
                <span className="listSubTitleText">/</span>
                <span className="listSubTitleText negative">3</span>
            </div>
        </div>
    )
}

export default ListTemplate
