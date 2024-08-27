import axios from "axios";
import { useNavigate } from "react-router-dom";
import { THE_MEALDB_ENDPOINT } from "../../../utils/Constants";
import './SurpriseMeButton.css';

const SurpriseMeButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClickSurpriseBtn = async () => {
        try {
            const response = await axios.get(`${THE_MEALDB_ENDPOINT}/random.php`);
            if (response.data.meals != null) {
                const mealId = response.data.meals[0].idMeal;
                navigate('/meal/' + mealId);
            }

        } catch (fetchError) {
            console.error(fetchError);
        }
    }

    return (
        <button type="button" id="btn-surprise-me" className="w-full text-sm lg:text-md px-5 py-2.5 rounded-lg font-semibold font-body"
            onClick={handleClickSurpriseBtn}>
            Surprise me!
        </button>
    )
}

export default SurpriseMeButton;