# Mermaid Diagrams

This folder contains standalone Mermaid source files for common OKEA design patterns.

- [querying-process.mmd](querying-process.mmd)
- [competency-question-formalization.mmd](competency-question-formalization.mmd)
- [cicd-ontology-release.mmd](cicd-ontology-release.mmd)
- [ontology-merge-release.mmd](ontology-merge-release.mmd)
- [profile-validation-materialization.mmd](profile-validation-materialization.mmd)
- [semantic-uplift-validation-publication.mmd](semantic-uplift-validation-publication.mmd)

The diagrams are framed as paradigmatic instances connected by relations. They are not meant to be exhaustive OWL axiomatizations.

## Querying Process

Source: [querying-process.mmd](querying-process.mmd)

<div class="mermaid">
flowchart TD
    QueryDirective["q1: SPARQL query<br/>instance of SPARQL Query"]
    QueryText["qtxt1: query text literal<br/>SELECT ?term WHERE { ... }"]
    QueryProcess["act1: Act of Information System Querying"]
    TripleStore["db1: triple store<br/>instance of Triple Store"]
    Dataset["graph1: RDF dataset"]
    Return["ret1: query result<br/>instance of Information System Query Result"]
    Binding["bind1: variable binding set"]

    QueryDirective -- "has SPARQL query text value" --> QueryText
    QueryDirective -- "prescribes" --> QueryProcess
    QueryProcess -- "has input" --> QueryDirective
    QueryProcess -- "has participant" --> TripleStore
    TripleStore -- "stores" --> Dataset
    QueryProcess -- "queries" --> Dataset
    QueryProcess -- "has output" --> Return
    Return -- "has continuant part" --> Binding
    Binding -- "conforms to" --> QueryDirective
</div>

## Competency Question Formalization

Source: [competency-question-formalization.mmd](competency-question-formalization.mmd)

<div class="mermaid">
flowchart TD
    CQ["cq1: competency question<br/>Which suppliers provide components to factory X?"]
    NaturalText["cqText1: natural language question text"]
    SPARQL["query1: SPARQL query"]
    Return["ret1: query result"]
    ODP["odp1: ontology design pattern<br/>Supplier-Component-Facility pattern"]
    Mermaid["diag1: Mermaid diagram"]
    PatternClass["class1: Supplier role"]
    QueryAct["act1: Act of Information System Querying"]

    CQ -- "has competency question text value" --> NaturalText
    CQ -- "has formalization" --> SPARQL
    CQ -- "has formalization" --> ODP
    ODP -- "has mermaid diagram" --> Mermaid
    Mermaid -- "represents" --> PatternClass
    SPARQL -- "is about" --> PatternClass
    QueryAct -- "has input" --> SPARQL
    QueryAct -- "has output" --> Return
    Return -- "answers" --> CQ
</div>

## CI/CD Ontology Release

Source: [cicd-ontology-release.mmd](cicd-ontology-release.mmd)

<div class="mermaid">
flowchart TD
    SourceOntology["edit.owl: editors ontology module"]
    Repo["repo1: Git repository"]
    PipelineConfig["workflow.yml: CI/CD pipeline configuration"]
    PipelineRun["run1: CI/CD process"]
    RobotMeasure["act1: act of ontology measuring<br/>using ROBOT"]
    SparqlTests["act2: act of ontology verifying<br/>using SPARQL test suite"]
    ShaclTests["act3: act of graph validating<br/>using SHACL shape file"]
    ProfileValidation["act4: act of ontology profile validating"]
    RobotMeasurement["m1: ROBOT measurement output"]
    SparqlReport["m2: SPARQL verification result"]
    ShaclReport["m3: validation report"]
    ProfileReport["m4: profile validation result"]
    Release["release.owl: ontology release artifact"]

    Repo -- "has part" --> SourceOntology
    PipelineConfig -- "prescribes" --> PipelineRun
    PipelineRun -- "has input" --> SourceOntology
    PipelineRun -- "has occurrent part" --> RobotMeasure
    PipelineRun -- "has occurrent part" --> SparqlTests
    PipelineRun -- "has occurrent part" --> ShaclTests
    PipelineRun -- "has occurrent part" --> ProfileValidation
    RobotMeasure -- "has output" --> RobotMeasurement
    SparqlTests -- "has output" --> SparqlReport
    ShaclTests -- "has output" --> ShaclReport
    ProfileValidation -- "has output" --> ProfileReport
    PipelineRun -- "has output" --> Release
    Release -- "derived from" --> SourceOntology
</div>

## Ontology Merge and Release Product

Source: [ontology-merge-release.mmd](ontology-merge-release.mmd)

<div class="mermaid">
flowchart TD
    EditModule["edit.owl: editors ontology module"]
    ImportA["import-a.owl: ontology module"]
    ImportB["import-b.owl: ontology module"]
    MergeSpec["merge.yml: merge specification"]
    MergeAct["act1: act of ontology merging"]
    MergedModule["merged.owl: merged ontology module"]
    ReasonAct["act2: act of ontology classification"]
    ReleaseAct["act3: release packaging process"]
    ReleaseArtifact["release.owl: ontology release artifact"]

    MergeSpec -- "prescribes" --> MergeAct
    MergeAct -- "has input" --> EditModule
    MergeAct -- "has input" --> ImportA
    MergeAct -- "has input" --> ImportB
    MergeAct -- "has output" --> MergedModule
    ReasonAct -- "has input" --> MergedModule
    ReasonAct -- "has output" --> MergedModule
    ReleaseAct -- "has input" --> MergedModule
    ReleaseAct -- "has output" --> ReleaseArtifact
    ReleaseArtifact -- "is release product of" --> ReleaseAct
</div>

## Profile Validation and Materialization

Source: [profile-validation-materialization.mmd](profile-validation-materialization.mmd)

<div class="mermaid">
flowchart TD
    Ontology["ont1: ontology module"]
    Profile["OWL 2 EL profile<br/>named individual of Web Ontology Language Profile"]
    ValidateProfile["act1: act of ontology profile validating"]
    ProfileReport["report1: profile validation result"]
    Materialize["act2: act of ontology materializing"]
    Reasoner["reasoner1: ontology reasoner"]
    MaterializedTriples["triples1: materialized triple set"]
    Release["release.owl: ontology release artifact"]

    Profile -- "prescribes conformance target for" --> ValidateProfile
    ValidateProfile -- "has input" --> Ontology
    ValidateProfile -- "has output" --> ProfileReport
    Materialize -- "has input" --> Ontology
    Materialize -- "has participant" --> Reasoner
    Materialize -- "has output" --> MaterializedTriples
    Release -- "has part" --> MaterializedTriples
    Release -- "conforms to" --> Profile
</div>

## Semantic Uplift, Validation, and Publication

Source: [semantic-uplift-validation-publication.mmd](semantic-uplift-validation-publication.mmd)

<div class="mermaid">
flowchart TD
    SourceData["legacy.csv: source data file"]
    UpliftConfig["uplift.ttl: semantic uplift configuration"]
    UpliftAct["act1: semantic uplift process"]
    RDFGraph["graph1: RDF graph"]
    ShapeFile["shapes.ttl: SHACL shape file"]
    ValidationAct["act2: graph validation process"]
    ValidationReport["report1: validation report"]
    TripleStore["store1: triple store"]
    LoadAct["act3: graph loading process"]
    QueryEndpoint["endpoint1: SPARQL endpoint"]

    UpliftConfig -- "prescribes" --> UpliftAct
    UpliftAct -- "has input" --> SourceData
    UpliftAct -- "has output" --> RDFGraph
    ShapeFile -- "prescribes constraints for" --> ValidationAct
    ValidationAct -- "has input" --> RDFGraph
    ValidationAct -- "has input" --> ShapeFile
    ValidationAct -- "has output" --> ValidationReport
    LoadAct -- "has input" --> RDFGraph
    LoadAct -- "has participant" --> TripleStore
    TripleStore -- "provides access through" --> QueryEndpoint
</div>
