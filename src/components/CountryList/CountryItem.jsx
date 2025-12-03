import './CountryItem.scss';
import Modal from "../Modal/Modal.jsx";
import {useState} from "react";

function CountryItemCard ({countryData}) {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {setShowModal(false)}
    const openModal = () => {setShowModal(true)}

    return (
        <>
        <div className="country-card" onClick={openModal}>
            <img src={countryData.flag} alt=""/>
            <div className="card-content">
                <p>{countryData.name}</p>
                <div className="card-details">
                    <span>Population: {countryData.population}</span>
                    <span>Region: {countryData.region}</span>
                    <span>Capital: {countryData.capital}</span>
                </div>
            </div>
        </div>
        {showModal && <Modal countryDetail={countryData} handleClose={handleClose}></Modal>}
        </>
    )
}

export default CountryItemCard;