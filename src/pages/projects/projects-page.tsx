import ProjectCard from "../../components/project-card/project-card.tsx";

const ProjectsPage = () => {
    return (
        <div className="page" id="projects">
            <section>
                <div className="section-eyebrow">Lavori</div>
                <div className="section-heading">Progetti Personali</div>
                <div className="projects-grid">
                    <ProjectCard
                        featured={true}
                        title={"Inventory Management"}
                        description={"Applicazione completamente locale per la gestione dei tuoi inventari con scansione del codice a barre."}
                        bgColor={"#f0f4ff"}
                        tags={[
                            "Flutter",
                            "Dart",
                            "ObjectBox/PostgresSQL",
                            "API Backend (work in progress)"
                        ]}
                    />

                </div>
            </section>
        </div>
    )
}

export default ProjectsPage;