import React from 'react';

export default function Button({ value, input, style }) {
    return (
        <div>
            <button onClick={() => input(value)} style={{ ...style, width: style?.width || '5vw' }}>
                {value}
            </button>
        </div>
    );
}
