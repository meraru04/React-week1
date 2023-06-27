import { useState } from "react"

export const Form = ({todolists, setTodolists}) => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputContext, setInputContext] = useState('')

    const inputTitleHandler = (event) => {
        return setInputTitle(event.target.value)}
    const inputContextHandler = (event) => {
        return setInputContext(event.target.value)}

    const btnClickHandler = (event) => {
        event.preventDefault()
        const addValue = {
            id : Date.now(),
            title : inputTitle,
            context : inputContext,
            set : false,
         }


        if(inputTitle === '' || inputContext === ''){
            return
        } else {
            setTodolists([...todolists, addValue])
            setInputTitle('')
            setInputContext('')
        }

        console.log(todolists)
        
    }

    return (
        <form className="Form_container">
            <div className="Form_Box">
                <label>제목</label>
                <input className="Form_container Form_input" type={'text'} name='title' placeholder='제목을 넣어주세요' value={inputTitle}
                onChange={inputTitleHandler}></input>
                <label>내용</label>
                <input className="Form_container Form_input" type={'text'} name='context' placeholder="내용을 넣어주세요" value={inputContext}
                onChange={inputContextHandler}></input>
            </div>
            <button className="Form_Btn" onClick={btnClickHandler}>추가하기</button>
        </form>
    )
}