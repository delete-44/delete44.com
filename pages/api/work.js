// GET /api/work
export default function handler(req, res) {
  res.status(200).json({
    plymouth_software: {
      start: "2019-07-10",
      end: "2021-10-22",
    },
    free_agent: {
      start: "2021-11-1",
      end: "Ongoing",
    },
  });
}
