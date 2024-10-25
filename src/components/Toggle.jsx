
import PropTypes from "prop-types";
const Toggle = ({ togglePlayerCard, toogleText, toggleAvailablePlayer, selectedPlayerCount }) => {
    return (
        <div className="mt-5 flex justify-between ">
            <p className="text-2xl bold">{toogleText? 'Available Players': `Selected Players (${selectedPlayerCount}/6)`}</p>
            <div className="flex join">
                <button className="join-item btn btn-primary" onClick={toggleAvailablePlayer}>Available</button>
                <button className="join-item btn " onClick={togglePlayerCard}>Selected ({selectedPlayerCount})</button>
            </div>
        </div>
    );
};
Toggle.propTypes = {
    handleButtonHide: PropTypes.func
};
Toggle.propTypes = {
    toogleText: PropTypes.bool,
    togglePlayerCard: PropTypes.func,
    toggleAvailablePlayer: PropTypes.func,
    selectedPlayerCount: PropTypes.func
    
};
export default Toggle;