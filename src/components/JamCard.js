import "./JamCard.css"

function JamCard({ winner: { name, wins, jam_score, itch_url } }) {
    return (
        <div className="jam-card">
            <section className="card-head">
                <a
                    href={itch_url}
                    className="winner-name">
                    {name}
                </a>
            </section>
            <section class="card-tail">
                <div className="card-data"> {wins} </div>
                <div className="card-data"> {jam_score}</div>
            </section>
        </div>
    )
}

export default JamCard;