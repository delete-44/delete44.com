// GET /api/grades
export default function handler(req, res) {
  res.status(200).json({
    degree: {
      course_name: "Computer Science (BSc)",
      overall_qualification:
        "First Class Honours with Certificate of Professional Industrial Experience",
      overall_grade: "72.93%",
      stage_four: {
        overall_grade: "69.36%",
        dissertation: "87.16%",
        full_stack_development: "74.1%",
        project_management: "71.7%",
        alternative_paradigms: "52.4%",
        networking: "61.45%",
      },
      stage_two: {
        overall_grade: "70.31%",
        design_patterns: "79.35%",
        ui_design: "74%",
        databases: "71.5%",
        artificial_intelligence: "62.5%",
        embedded_programming: "63%",
        integrated_project: "71.52%",
      },
      stage_one: {
        overall_grade: "71.96",
        software_engineering: "80.89%",
        databases: "71.4%",
        infrastructure: "69.33%",
        cybersecurity: "70%",
        algorithms: "74.39%",
        introduction: "65.75%",
      },
    },
    a_levels: {
      biology: "B",
      chemistry: "B",
      statistics: "B",
      creative_writing: "A",
    },
    as_levels: {
      psychology: "C",
    },
    gcse: {
      english_literature: "A",
      english_language: "A",
      mathematics: "A",
      geography: "A",
      biology: "A",
      chemistry: "A",
      physics: "A",
      statistics: "A",
      computing: "B",
      history: "B",
    },
  });
}
