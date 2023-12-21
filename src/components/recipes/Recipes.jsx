import RecipeCard from "../recipeCard/RecipeCard";
import './recipes.scss';
import salad from "../svg/salad.png";
import tsoup from "../svg/tsoup.png";
import potatoes from "../svg/potatoes.png";
import msoup from "../svg/msoup.png";
import pancakes from "../svg/pancakes.png";
import beef from "../svg/beef.png";

function Recipes() {
	return (
		<section className="recipes container flex-column">
			<div className="recipes__title d-flex justify-content-between align-items-end">
				<div>
					<h3>Discover, Create, Share</h3>
					<p>Check our most popular recipes of this week</p>
				</div>
				<button className='explore-button'><span className='explore-button-text'>See all</span></button>
			</div>
			<div className="recipes__list d-flex">
				<RecipeCard src={salad} time={10} serving={2} stats="Easy" name="Creamy Salad"/>
				<RecipeCard src={tsoup} time={15} serving={3} stats="Easy" name="Tofu Tomatoes Soup"/>
				<RecipeCard src={potatoes} time={10} serving={2} stats="Easy" name="Crunchy Potatoes"/>
				<RecipeCard src={msoup} time={25} serving={2} stats="Medium" name="Muschroom soup"/>
				<RecipeCard src={pancakes} time={30} serving={1} stats="Easy" name="Raspberyy Pancake"/>
				<RecipeCard src={beef} time={20} serving={1} stats="Medium" name="Beef Teriyaki"/>
			</div>
		</section>
	)
}

export default Recipes;