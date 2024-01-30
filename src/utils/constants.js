
const token_id = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjkzMTVmZDY1YTA0NjU3ZjEyZWZiYzczZjg0NjA5NiIsInN1YiI6IjY1Yjk0MDQzZGE5ZWYyMDE3Y2E2NmI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._h6hMPzEuGSti9EU2VZdTk97MHQSVp18-pKAOdm1fpA";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+token_id
    }
  };