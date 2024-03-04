/* eslint-disable react/prop-types */
function Rating (props) {

    function result() {
        if(props.children >= 0) {
            if(props.children <= 5) {
                return Math.round(props.children)
            }else {return 'Choose a number between 0 and 5'}
        }else {return 'Choose a number between 0 and 5'}
    }

    function stars() {
        switch (result()) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
        }
    }

    return (
        <p className='stars'>{stars()}</p>
    )
}

export default Rating;