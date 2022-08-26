import React from "react"; 

function CustomHeader({comment}: any) {
    console.log(comment, 'comment')
    return (
        <div>
            {comment}
        </div>
    )
}

export default CustomHeader;