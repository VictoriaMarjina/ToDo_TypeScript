import React, { FC } from 'react';
import './index.css';

export interface Props {
    id: number;
    text: string;
    deleteTask: any;
    checkTask: any;
    isDone: boolean;
}
const TaskComponent: FC<Props> = props => {
    const {
        id,
        text,
        isDone,
        checkTask,
        deleteTask,
    } = props;

    console.log(id);

    return(
        (isDone)?
        <div className ={'task-wrapper_wrapper wrapper'}>
            <div className={'wrapper_text-wrapper text-wrapper'}>
                <p className={'text-wrapper_text checked'} 
                   children={text}
                   onClick={() => checkTask(id)}/>
            </div>
            <div className={'wrapper_delete-button-wrapper delete-button-wrapper'}>
                <button className={'delete-button-wrapper_delete-button'}
                    children={'x'}
                    onClick={() => deleteTask(id)}/>           
            </div>
        </div>:
         <div className ={'task-wrapper_wrapper wrapper'}>
         <div className={'wrapper_text-wrapper text-wrapper'}>
             <p className={'text-wrapper_text checked checked'} 
                children={text}
                onClick={() => checkTask(id)}/>
         </div>
         <div className={'wrapper_delete-button-wrapper delete-button-wrapper'}>
             <button className={'delete-button-wrapper_delete-button'}
                 children={'x'}
                 onClick={() => deleteTask(id)}/>           
         </div>
     </div>
    )
}

export default React.memo(TaskComponent);