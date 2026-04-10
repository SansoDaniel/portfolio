import "./project-card.css"

interface IProjectCard {
    featured: boolean;
    title: string;
    description: string;
    bgColor: string;
    tags: string[];
}

const ProjectCard = ({ featured, title, description, bgColor, tags }: IProjectCard) => {


    return (
        <div className={`project-card ${featured ? "featured" : ""}`}>
            <div className="project-thumb" style={{background: bgColor }}>🛒</div>
            <div className="project-body">
                <div className="project-title">{title}</div>
                <p className="project-desc">{description}</p>
                <div className="project-tags">
                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {/*<a href="#" className="project-arrow">Vedi progetto →</a>*/}
            </div>
        </div>
    )
}

export default ProjectCard;