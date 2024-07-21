import { JobItemDetailsType } from "./types";

async function fetchJobItem(jobId: number): Promise<JobItemDetailsType> {
  const response = await fetch(`http://localhost:3000/jobDetails/${jobId}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

export default fetchJobItem;
