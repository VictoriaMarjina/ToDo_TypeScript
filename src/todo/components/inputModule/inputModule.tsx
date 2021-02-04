import React, { FC } from 'react';
import './index.css'

export interface Props {
    value: string;
    createTask: any;
    getInputValue: Function;
}
const InputModule:FC<Props> = props => {
    const {
        value,
        createTask,
        getInputValue,
    } = props;

    return(
        <div className={'input-module_wrapper wrapper'}>
            <div className={'wrapper_input-wrapper input-wrapper'}>
                <input onChange={(event => getInputValue(event.target.value))}
                       className={'input-wrapper_input'}
                       type={'text'}
                       value={value}/>
            </div>
            <div className={'wrapper_button-wrapper button-wrapper'}>
                <button onClick={createTask}
                        className={'button-wrapper_button'}
                        children={'Add'}/>
            </div>
        </div>
    )
}

export default React.memo(InputModule);