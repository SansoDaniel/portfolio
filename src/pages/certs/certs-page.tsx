const CertsPage = () => {
    return (
        <div className="page" id="certs">
            <section>
                <div className="section-eyebrow">Formazione</div>
                <div className="section-heading">Certificazioni</div>
                <div className="certs-grid">
                    <div className="cert-card">
                        <div className="cert-icon-wrap" style={{background:"#f0fdf4", borderColor:"#bbf7d0"}}>🟢</div>
                        <div className="cert-name">Professional Scrum Master</div>
                        <div className="cert-issuer">Scrum.org</div>
                        <div className="cert-year">2023</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CertsPage