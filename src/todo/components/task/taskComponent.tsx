import React, { FC } from 'react';
import './index.css';

export interface Props {
    id?: number;
    text: string;
}
const TaskComponent: FC<Props> = props => {
    const {
        id,
        text,
    } = props;

    console.log(id);

    return(
        <div className={'task-wrapper_wrapper wrapper'}>
            <div className={'wrapper_text-wrapper text-wrapper'}>
                <p className={'text-wrapper_text'}>
                    {text}
                </p>
            </div>
            <div className={'wrapper_delete-button-wrapper delete-button-wrapper'}>
                <button className={'delete-button-wrapper_delete-button'}>
                    x
                </button>
            </div>
        </div>
    )
}

export default React.memo(TaskComponent);