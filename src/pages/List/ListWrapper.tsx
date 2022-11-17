import styled from "styled-components";
import ListTemplate from "../../components/ListTemplate";


const StyleListWrapper = styled.div`
    height:240px;
    background-color: #f6f7f8;
    border-radius:12px;
    margin: 14px;
    padding:10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    overflow: scroll;
`;



const ListWrapper = () =>{
    return(
        <>
            <StyleListWrapper>
                <ListTemplate></ListTemplate>
                <ListTemplate></ListTemplate>
                <ListTemplate></ListTemplate>
                <ListTemplate></ListTemplate>
                <ListTemplate></ListTemplate>
            </StyleListWrapper>
            <div>Button</div>
        </>
    )
}


export default ListWrapper
