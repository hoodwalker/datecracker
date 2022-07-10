import TagList from './TagList'
export default function Breaker ({ breaker }) {
    return (
      <div>
          <p> Breaker: </p>
          <p>{breaker.question} </p>          
          <TagList tags={breaker.tags} />
      </div>
    )
}
