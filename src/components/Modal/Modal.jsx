function Modal ({countryDetail, handleClose}) {
    return (
        <div className="modal-backdrop" data-testid="modal">
            <div className="modal">
                <div className="close-button">
                    <button className="close-btn" onClick={()=> handleClose()}>Back</button>
                </div>
                <div className="modal-body">
                    <img className="modal-img" src={countryDetail.flag} alt="country flag" />
                    <div className='modal-content'>
                        <div className='modal-name'>{countryDetail.name}</div>
                        <div className='modal-details'>
                            <section>
                                <p>
                                    <strong>Population:</strong> {countryDetail.population}
                                </p>
                                <p>
                                    <strong>Region:</strong> {countryDetail.region}
                                </p>
                                <p>
                                    <strong>Sub Region:</strong> {countryDetail.subregion}
                                </p>
                                <p>
                                    <strong>Capital:</strong> {countryDetail.capital}
                                </p>
                            </section>
                            <section>
                                <p>
                                    <strong>Top Level Domain:</strong> {countryDetail.topLevelDomain}
                                </p>
                                <p>
                                    <strong>Currencies:</strong>
                                    {countryDetail.currencies.map(i => <span>{i.name}</span>)}
                                </p>
                                <p>
                                    <strong>Languages:</strong> {countryDetail.languages.map(i => <span>{i.name}
                                    {countryDetail.languages.length > 1 && ', '}</span>)}
                                </p>
                            </section>
                        </div>
                        <div className='border-countries'>
                            <strong>Border Countries: </strong>
                            <div>
                                {countryDetail.borders?.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Modal;