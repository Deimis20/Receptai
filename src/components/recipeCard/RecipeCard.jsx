import './recipeCard.scss';
import clock from '../svg/time.svg'
import user from "../svg/persons.svg";
import stat from "../svg/diff.svg";
import ytlogo from "../svg/YouTubeLogo.png"
function RecipeCard({ src, time, serving, stats, name }) {
	return (
		<div className="card shadow">
			<div className=' position-relative'>
				<img src={src} className="card-img-top" alt="..." />
				<div className="card__info position-absolute w-100">
					<div className='d-flex'><img src={clock} alt='...' /> <span className='card__info__text'>{time} Mins</span></div>
					<div className='d-flex'><img src={user} alt='...' /> <span className='card__info__text'>{serving} Servings</span></div>
					<div className='d-flex'><img src={stat} alt='...' /> <span className='card__info__text'>{stats}</span></div>
				</div>
			</div>

			<div className="card-body">
				<p className="card-text">
					<span className='card__header'>{name}</span>
					<div className='d-flex justify-content-between'>
					<a href='/#' className='card__read-more '>View Recipe</a>
					<a href='/#' className='card__read-more text-red'><img className='small' src={ytlogo} alt="YT LLOGO" /></a>
					</div>
				</p>
			</div>
		</div>
	)
}

export default RecipeCard;