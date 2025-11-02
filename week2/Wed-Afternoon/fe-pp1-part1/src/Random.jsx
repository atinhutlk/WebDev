import './Random.css';

function Random(props) {
    return (
        <div className = "Random">
            <p><strong>Random value between {props.min} and {props.max} =&gt; {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</strong></p>
        </div>
    )};
export default Random;
