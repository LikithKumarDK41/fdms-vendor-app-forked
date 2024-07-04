import React from 'react';

export const ValidationError = (props) => {
    const {
        parentClass,
        fontWeight,
        errorBlock,
        parentStyle,
        ...restProps
    } = props;

    return (
        <>
            {errorBlock &&
                <small className={`scroll-check p-error block text-[13px] 2xl:text-[1.15vw] ${parentClass}`} style={parentStyle} {...restProps}>
                    {errorBlock}
                </small>
            }
        </>
    );
}