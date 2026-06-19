# Theory and Design Patterns

OKEA treats knowledge engineering as an ecosystem of information content entities, directive information content entities, information bearing artifacts, software artifacts, and planned processes. The ontology is not only about ontologies as formal products; it is also about the things ontologists use to design, evaluate, transform, release, and govern those products.

## Questions, Queries, and Answers

Competency questions are modeled as interrogative information content entities. This follows the distinction between cognitive acts, question contents, and tokenized question expressions discussed by Braun (2022). In OKEA, a competency question can be formalized by a SPARQL query, by an ontology design pattern, or by another formal artifact.

The modeling pattern is intentionally indirect:

- the competency question is the user-facing question content;
- the query is a formalization of that question;
- the querying act takes the query as input;
- the query result is an output that may answer the competency question.

This separation keeps the question, the query directive, the query execution, and the returned information from collapsing into one ambiguous entity.

## Processes and Outputs

OKEA distinguishes processes from the artifacts they produce. For example:

- an act of ontology profile validating is a computer program execution;
- the validation report is an information content entity output by that act;
- the OWL 2 profile is a named individual specification that prescribes the conformance target.

The same pattern applies to measuring, reasoning, materializing, merging, converting, and import closure. This is important for OBO Foundry and CCO development contexts, where release workflows often need to talk about both the planned act and the resulting artifact.

## Imported Genus Classes

The ontology prefers imported parents where the genus is already present.

- Querying processes specialize acts of requesting information.
- Computational ontology operations specialize CCO Cyber `Computer Program Execution`.
- Serialization and conversion operations specialize digital file processes.
- Data transformations specialize CCO `Act of Data Transformation`.
- Alignment and silo modeling processes specialize CCO Cognitive Process `Modeling Process`.
- Triplestores specialize CCO Cyber `Database Software Application`.

The local class should say what is special about knowledge engineering, not reproduce imported upper or mid-level classes.

## ROBOT as Example, Not Boundary

ROBOT is a common tool in OBO Foundry workflows, but most OKEA process classes are not ROBOT-specific. `Act of Ontology Merging`, `Act of Ontology Materializing`, `Act of Ontology Profile Validating`, `Act of Ontology Format Converting`, and `Act of Ontology Internationalized Resource Identifier Renaming` are tool-neutral processes. ROBOT commands are preserved as examples, alternative labels, and citations where they help users recognize common practice.

This avoids making the extension of a class depend on one implementation while still documenting the tool idioms used by the community.

## Competency Question Literature

The competency question pattern follows the enterprise and ontology engineering literature:

- Grueninger and Fox (1995) introduced competency questions as a way to evaluate the competence of a formal model for a task.
- Ren et al. (2014) and Monfardini et al. (2023) develop competency-question-driven ontology engineering as a practical authoring and evaluation method.
- Wisniewski et al. (2019) analyze formalization of competency questions in SPARQL-OWL.
- Espinoza et al. (2021) describe validation and verification as part of an iterative ontology engineering process.

## Bibliography

- Braun, D. (2022). Propositions and Questions. In Chris Tillman and Adam Murray (Eds), *Routledge Handbook of Propositions*. https://doi.org/10.4324/9781315270500-34
- Grueninger, M., Fox, M.S. (1995). The Role of Competency Questions in Enterprise Engineering. In Rolstadas, A. (eds), *Benchmarking - Theory and Practice*. IFIP Advances in Information and Communication Technology. Springer, Boston, MA. https://doi.org/10.1007/978-0-387-34847-6_3
- Ren, Y., Parvizi, A., Mellish, C., Pan, J.Z., van Deemter, K., Stevens, R. (2014). Towards Competency Question-Driven Ontology Authoring. In Presutti, V., d'Amato, C., Gandon, F., d'Aquin, M., Staab, S., Tordai, A. (eds), *The Semantic Web: Trends and Challenges*. ESWC 2014. Lecture Notes in Computer Science, vol 8465. Springer, Cham. https://doi.org/10.1007/978-3-319-07443-6_50
- Wisniewski, D., Potoniec, J., Lawrynowicz, A., Keet, C.M. (2019). Analysis of Ontology Competency Questions and their formalizations in SPARQL-OWL. *Journal of Web Semantics*, 59, 100534. https://doi.org/10.1016/j.websem.2019.100534
- Espinoza, A., Del-Moral, E., Martinez-Martinez, A., Ali, N. (2021). A validation & verification driven ontology: An iterative process. *Applied Ontology*, 16(3), 297-337. https://doi.org/10.3233/AO-210251
- Monfardini, G.K.Q., Salamon, J.S., Barcellos, M.P. (2023). Use of Competency Questions in Ontology Engineering: A Survey. In Almeida, J.P.A., Borbinha, J., Guizzardi, G., Link, S., Zdravkovic, J. (eds), *Conceptual Modeling*. ER 2023. Lecture Notes in Computer Science, vol 14320. Springer, Cham. https://doi.org/10.1007/978-3-031-47262-6_3

