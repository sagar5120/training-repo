import Raect from 'react'
import  React, {useState} from 'react'
function PageNotFound() {
    let a = 10;
    const change = () => {
        alert('fired')
        a = a + 1;

    }
    const [b, setb] = useState(0)
    return (
        <>
            <div>
                {a}
                {console.log(a)}
                <button onClick={() => change()}>change data</button>
                {b}
                <div onClick={() => {
                    setb(b + 1)
                }} > Change b</div>

            </div>
        </>
    )

}
export default PageNotFound