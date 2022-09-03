import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()

export const Editor = () =>{
    return (
       <ReactEditorJS defaultValue={blocks} />
    )
}