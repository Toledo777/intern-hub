import airbnbLogo from "../assets/logo/airbnb.png";
import ibmLogo from "../assets/logo/IBM.jpg";
import intactLogo from "../assets/logo/Intact.png";
import lyftLogo from "../assets/logo/Lyft.png";
import metaLogo from "../assets/logo/Meta.png";
import microsoftLogo from "../assets/logo/Microsoft.png";
import twitterLogo from "../assets/logo/twitter.png";
import defaultLogo from "../assets/logo/default.jpg";
import amazonLogo from "../assets/logo/amazon.png";
import coveoLogo from "../assets/logo/Coveo.png";
import appleLogo from "../assets/logo/apple.jpg";
import googleLogo from "../assets/logo/Google.png";
import { useEffect } from "react";

export class Job {

  id: number;
  name: string;
  additionalComments: string;
  position: string;
  country: string;
  city: string;
  datePosted: string;
  salary: number;
  type: string;
  questionType: string;
  numberOfRounds: number;
  signOnBonus: number;
  offerStatus: string;
  logo: string;

  constructor(
    id: number,
    name: string,
    additionalComments: string,
    position: string,
    country: string,
    city: string,
    datePosted: string,
    salary: number,
    type: string,
    questionType: string,
    numberOfRounds: number,
    signOnBonus: number,
    offerStatus: string
  ) {
    this.id = id;
    this.name = name;
    this.additionalComments = additionalComments;
    this.position = position;
    this.country = country;
    this.city = city;
    this.datePosted = datePosted;
    this.salary = salary;
    this.type = type;
    this.questionType = questionType;
    this.numberOfRounds = numberOfRounds;
    this.signOnBonus = signOnBonus;
    this.offerStatus = offerStatus;
    this.logo = this.getCompanyLogo(name);
  }

  getCompanyLogo(companyName: string): string {
    const companyImages: { [key: string]: string } = {
      Airbnb: airbnbLogo,
      IBM: ibmLogo,
      Intact: intactLogo,
      Lyft: lyftLogo,
      Meta: metaLogo,
      Microsoft: microsoftLogo,
      Twitter: twitterLogo,
      Apple: appleLogo,
      Coveo: coveoLogo,
      Amazon: amazonLogo,
      Google: googleLogo,
    };
    return companyImages[companyName] || defaultLogo;
  }

  getDetails() {
    return `
          Job ID: ${this.id}
          Company: ${this.name}
          Logo: ${this.logo}
          Additional Comments: ${this.additionalComments}
          Position: ${this.position}
          Location: ${this.city}, ${this.country}
          Date Posted: ${this.datePosted}
          Hourly Salary: $${this.salary}
          Type: ${this.type}
          Question Type: ${this.questionType}
          Number of Rounds: ${this.numberOfRounds}
          Sign-On Bonus: $${this.signOnBonus}
          Offer Status: ${this.offerStatus}
        `;
  }
}

let jobs: Job[] = [
  new Job(1, "Amazon", "Focused on LeetCode problems, including array and string manipulation.", "Developer Intern", "USA", "California", "2024-11-01", 24.04, "On-site", "LeetCode", 3, 5000, "Offer"),
  new Job(2, "Google", "Included system design discussions and data analysis tasks.", "Data Analyst Intern", "USA", "Washington", "2024-11-02", 25.00, "Hybrid", "System Design", 2, 4500, "Rejected"),
  new Job(3, "Twitter", "Covered OOP fundamentals and practical application scenarios.", "Product Designer Intern", "USA", "California", "2024-11-03", 26.44, "Remote", "OOP", 4, 6000, "Offer"),
  new Job(4, "Meta", "Asked about behavioral scenarios and UI/UX best practices.", "UI/UX Designer Intern", "USA", "California", "2024-11-04", 23.08, "Hybrid", "Other", 3, 3000, "Rejected"),
  new Job(5, "IBM", "Focused on LeetCode-style coding challenges and problem-solving.", "Frontend Developer Intern", "USA", "Washington", "2024-11-05", 23.56, "On-site", "LeetCode", 2, 4000, "Offer"),
  new Job(6, "Apple", "Discussed system design for scalable solutions.", "Cloud Engineer Intern", "USA", "California", "2024-11-06", 24.52, "Remote", "System Design", 3, 7000, "Offer"),
  new Job(7, "Microsoft", "Covered behavioral questions and digital marketing strategies.", "Social Media Marketer Intern", "USA", "California", "2024-11-07", 22.60, "Hybrid", "Other", 2, 2500, "Rejected"),
  new Job(8, "Lyft", "Focused on OOP and HR-related management scenarios.", "HR Assistant Intern", "Canada", "Ontario", "2024-11-08", 22.12, "On-site", "OOP", 3, 3000, "Offer"),
  new Job(9, "Coveo", "Included system design and energy optimization discussions.", "Mechanical Engineer Intern", "Canada", "Quebec", "2024-11-09", 25.48, "Remote", "System Design", 4, 8000, "Rejected"),
  new Job(10, "Intact", "Focused on LeetCode and cybersecurity scenarios.", "Cybersecurity Specialist Intern", "Canada", "Ontario", "2024-11-10", 25.96, "Hybrid", "LeetCode", 3, 3500, "Offer"),
  new Job(11, "Google", "Covered backend development with LeetCode challenges.", "Backend Developer Intern", "Canada", "British Columbia", "2024-11-11", 24.52, "On-site", "LeetCode", 2, 4000, "Rejected"),
  new Job(12, "Airbnb", "Focused on OOP concepts and QA best practices.", "QA Engineer Intern", "USA", "Texas", "2024-11-12", 21.63, "Remote", "OOP", 3, 2000, "Offer"),
  new Job(13, "Amazon", "Included system design and supply chain management discussions.", "Operations Manager Intern", "Canada", "Alberta", "2024-11-13", 25.00, "Hybrid", "System Design", 4, 5500, "Rejected"),
  new Job(14, "Lyft", "Focused on behavioral questions and design principles.", "Graphic Designer Intern", "Canada", "Alberta", "2024-11-14", 22.60, "On-site", "Other", 2, 2500, "Offer"),
  new Job(15, "Twitter", "Covered logistics with LeetCode challenges and scenarios.", "Logistics Analyst Intern", "USA", "Massachusetts", "2024-11-15", 24.04, "Hybrid", "LeetCode", 2, 4500, "Rejected"),
  new Job(16, "Microsoft", "Focused on OOP principles and content strategy insights.", "Content Strategist Intern", "Canada", "Manitoba", "2024-11-16", 23.08, "Remote", "OOP", 3, 6000, "Offer"),
  new Job(17, "Amazon", "Included system design for image recognition pipelines.", "AI Researcher Intern", "USA", "Texas", "2024-11-17", 23.56, "Hybrid", "System Design", 4, 3500, "Rejected"),
  new Job(18, "IBM", "Focused on LeetCode challenges and data analysis techniques.", "Data Analyst Intern", "Canada", "Nova Scotia", "2024-11-18", 22.12, "On-site", "LeetCode", 2, 2000, "Offer"),
  new Job(19, "Meta", "Covered system design and autonomous vehicle testing.", "Software Tester Intern", "USA", "Michigan", "2024-11-19", 25.00, "Remote", "System Design", 3, 7000, "Rejected"),
  new Job(20, "Coveo", "Included quantum computing basics and behavioral scenarios.", "Quantum Developer Intern", "USA", "New York", "2024-11-20", 26.92, "Hybrid", "Other", 4, 8000, "Offer"),
  new Job(21, "Apple", "Focused on LeetCode challenges and AI search algorithms.", "AI Engineer Intern", "USA", "Illinois", "2024-11-21", 25.48, "On-site", "LeetCode", 3, 5000, "Rejected"),
  new Job(22, "Google", "Discussed system design and accessibility features.", "Software Developer Intern", "Canada", "Quebec", "2024-11-22", 24.52, "Hybrid", "System Design", 2, 3500, "Offer"),
  new Job(23, "Lyft", "Focused on OOP scenarios and AR development challenges.", "AR Developer Intern", "USA", "Nevada", "2024-11-23", 25.96, "Remote", "OOP", 4, 6000, "Rejected"),
  new Job(24, "Intact", "Covered content development strategies and creativity.", "Content Developer Intern", "USA", "Pennsylvania", "2024-11-24", 23.56, "On-site", "Other", 3, 3000, "Offer"),
  new Job(25, "Amazon", "Included IoT challenges and LeetCode-based coding tasks.", "IoT Engineer Intern", "USA", "Georgia", "2024-11-25", 24.52, "Hybrid", "LeetCode", 2, 4000, "Rejected"),
  new Job(26, "Apple", "Focused on system design for video compression.", "Video Engineer Intern", "Canada", "Ontario", "2024-11-26", 25.00, "Remote", "System Design", 4, 7000, "Offer"),
  new Job(27, "Airbnb", "Covered marketing scenarios and OOP concepts.", "Marketing Analyst Intern", "USA", "Florida", "2024-11-27", 22.60, "On-site", "OOP", 3, 2500, "Rejected"),
  new Job(28, "Meta", "Discussed behavioral and product management scenarios.", "Product Manager Intern", "Canada", "British Columbia", "2024-11-28", 23.08, "Remote", "Other", 2, 3500, "Offer"),
  new Job(29, "Microsoft", "Included LeetCode-style design and mechanical insights.", "Mechanical Designer Intern", "Canada", "Saskatchewan", "2024-11-29", 25.48, "Hybrid", "LeetCode", 4, 5500, "Rejected"),
  new Job(30, "Twitter", "Discussed blockchain security and behavioral questions.", "Blockchain Developer Intern", "USA", "California", "2024-11-30", 26.44, "On-site", "Other", 3, 8000, "Offer"),
];



// Retrieve all jobs from local storage
export function getAllJobs(): Job[] {
  return JSON.parse(localStorage.getItem("jobs") || "[]");
}

// Retrieve filtered jobs from local storage or fallback to all jobs
export function getFilteredJobs(): Job[] {
  const filteredJobs = JSON.parse(localStorage.getItem("filteredJobs") || "[]");
  return filteredJobs.length > 0 ? filteredJobs : getAllJobs();
}

// Retrieve the total number of jobs
export function getTotalJobs(jobs: Job[]): number {
  return jobs.length;

}

// Sort jobs based on the date (most recent)
export function sortByDate(jobs: Job[]): Job[] {
  return jobs.sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
  );
}

// Sort jobs based on the salary (low to high)
export function sortBySalaryLowToHigh(jobs: Job[]): Job[] {
  return jobs.sort((a, b) => a.salary - b.salary);
}

// Sort jobs based on the salary (high to low)
export function sortBySalaryHighToLow(jobs: Job[]): Job[] {
  return jobs.sort((a, b) => b.salary - a.salary);
}

// Filter jobs by company name
export function filterJobsByCompany(jobs: Job[], companyName: string): Job[] {
  return jobs.filter(
    (job) => job.name.toLowerCase() === companyName.toLowerCase()
  );
}

// Filter jobs exceeding inputted threshold
export function filterJobsBySalary(
  jobs: Job[],
  salaryThreshold: number
): Job[] {
  return jobs.filter((job) => job.salary > salaryThreshold);
}

// Filter jobs by country
export function filterJobsByCountry(jobs: Job[], country: string): Job[] {
  return jobs.filter(
    (job) => job.country.toLowerCase() === country.toLowerCase()
  );
}

// Filter jobs by city
export function filterJobsByCity(jobs: Job[], city: string): Job[] {
  return jobs.filter((job) =>
    job.city.toLowerCase().includes(city.toLowerCase())
  );
}

export function deleteJob(jobs: Job[], jobId: number): void {
  const index = jobs.findIndex((job) => job.id === jobId);
  if (index !== -1) {
    jobs.splice(index, 1);
    console.log(`Job with ID ${jobId} deleted successfully.`);
  } else {
    console.log(`Job with ID ${jobId} not found.`);
  }
}

export function searchJobs(jobs: Job[], substring: string): Job[] {
  const lowerCaseSubstring = substring.toLowerCase();
  return jobs.filter((job) =>
    Object.values(job).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(lowerCaseSubstring)
    )
  );
}


export const initializeJobsInLocalStorage = () => {
  // Retrieve existing jobs from local storage
  const existingJobs = JSON.parse(localStorage.getItem("jobs") || "[]");

  // Add new jobs to the existing jobs without overwriting
  const updatedJobs = [...existingJobs, ...jobs];

  // Ensure there are no duplicate entries by checking the `id` field
  const uniqueJobs = Array.from(
    new Map(updatedJobs.map((job) => [job.id, job])).values()
  );

  // Save the updated unique jobs array back to local storage
  localStorage.setItem("jobs", JSON.stringify(uniqueJobs));

  console.log("Jobs successfully pushed to local storage.");
};

// Update the jobs array with a new array of jobs
export function updateJobs(newJobs: Job[]): void {
    jobs = newJobs;
}

// Reset the jobs array to the hardcoded mock data
export function resetJobs(): void {
    jobs = [
      new Job(1, "Amazon", "Focused on LeetCode problems, including array and string manipulation.", "Developer Intern", "USA", "California", "2024-11-01", 24.04, "On-site", "LeetCode", 3, 5000, "Offer"),
      new Job(2, "Google", "Included system design discussions and data analysis tasks.", "Data Analyst Intern", "USA", "Washington", "2024-11-02", 25.00, "Hybrid", "System Design", 2, 4500, "Rejected"),
      new Job(3, "Twitter", "Covered OOP fundamentals and practical application scenarios.", "Product Designer Intern", "USA", "California", "2024-11-03", 26.44, "Remote", "OOP", 4, 6000, "Offer"),
      new Job(4, "Meta", "Asked about behavioral scenarios and UI/UX best practices.", "UI/UX Designer Intern", "USA", "California", "2024-11-04", 23.08, "Hybrid", "Other", 3, 3000, "Rejected"),
      new Job(5, "IBM", "Focused on LeetCode-style coding challenges and problem-solving.", "Frontend Developer Intern", "USA", "Washington", "2024-11-05", 23.56, "On-site", "LeetCode", 2, 4000, "Offer"),
      new Job(6, "Apple", "Discussed system design for scalable solutions.", "Cloud Engineer Intern", "USA", "California", "2024-11-06", 24.52, "Remote", "System Design", 3, 7000, "Offer"),
      new Job(7, "Microsoft", "Covered behavioral questions and digital marketing strategies.", "Social Media Marketer Intern", "USA", "California", "2024-11-07", 22.60, "Hybrid", "Other", 2, 2500, "Rejected"),
      new Job(8, "Lyft", "Focused on OOP and HR-related management scenarios.", "HR Assistant Intern", "Canada", "Ontario", "2024-11-08", 22.12, "On-site", "OOP", 3, 3000, "Offer"),
      new Job(9, "Coveo", "Included system design and energy optimization discussions.", "Mechanical Engineer Intern", "Canada", "Quebec", "2024-11-09", 25.48, "Remote", "System Design", 4, 8000, "Rejected"),
      new Job(10, "Intact", "Focused on LeetCode and cybersecurity scenarios.", "Cybersecurity Specialist Intern", "Canada", "Ontario", "2024-11-10", 25.96, "Hybrid", "LeetCode", 3, 3500, "Offer"),
      new Job(11, "Google", "Covered backend development with LeetCode challenges.", "Backend Developer Intern", "Canada", "British Columbia", "2024-11-11", 24.52, "On-site", "LeetCode", 2, 4000, "Rejected"),
      new Job(12, "Airbnb", "Focused on OOP concepts and QA best practices.", "QA Engineer Intern", "USA", "Texas", "2024-11-12", 21.63, "Remote", "OOP", 3, 2000, "Offer"),
      new Job(13, "Amazon", "Included system design and supply chain management discussions.", "Operations Manager Intern", "Canada", "Alberta", "2024-11-13", 25.00, "Hybrid", "System Design", 4, 5500, "Rejected"),
      new Job(14, "Lyft", "Focused on behavioral questions and design principles.", "Graphic Designer Intern", "Canada", "Alberta", "2024-11-14", 22.60, "On-site", "Other", 2, 2500, "Offer"),
      new Job(15, "Twitter", "Covered logistics with LeetCode challenges and scenarios.", "Logistics Analyst Intern", "USA", "Massachusetts", "2024-11-15", 24.04, "Hybrid", "LeetCode", 2, 4500, "Rejected"),
      new Job(16, "Microsoft", "Focused on OOP principles and content strategy insights.", "Content Strategist Intern", "Canada", "Manitoba", "2024-11-16", 23.08, "Remote", "OOP", 3, 6000, "Offer"),
      new Job(17, "Amazon", "Included system design for image recognition pipelines.", "AI Researcher Intern", "USA", "Texas", "2024-11-17", 23.56, "Hybrid", "System Design", 4, 3500, "Rejected"),
      new Job(18, "IBM", "Focused on LeetCode challenges and data analysis techniques.", "Data Analyst Intern", "Canada", "Nova Scotia", "2024-11-18", 22.12, "On-site", "LeetCode", 2, 2000, "Offer"),
      new Job(19, "Meta", "Covered system design and autonomous vehicle testing.", "Software Tester Intern", "USA", "Michigan", "2024-11-19", 25.00, "Remote", "System Design", 3, 7000, "Rejected"),
      new Job(20, "Coveo", "Included quantum computing basics and behavioral scenarios.", "Quantum Developer Intern", "USA", "New York", "2024-11-20", 26.92, "Hybrid", "Other", 4, 8000, "Offer"),
      new Job(21, "Apple", "Focused on LeetCode challenges and AI search algorithms.", "AI Engineer Intern", "USA", "Illinois", "2024-11-21", 25.48, "On-site", "LeetCode", 3, 5000, "Rejected"),
      new Job(22, "Google", "Discussed system design and accessibility features.", "Software Developer Intern", "Canada", "Quebec", "2024-11-22", 24.52, "Hybrid", "System Design", 2, 3500, "Offer"),
      new Job(23, "Lyft", "Focused on OOP scenarios and AR development challenges.", "AR Developer Intern", "USA", "Nevada", "2024-11-23", 25.96, "Remote", "OOP", 4, 6000, "Rejected"),
      new Job(24, "Intact", "Covered content development strategies and creativity.", "Content Developer Intern", "USA", "Pennsylvania", "2024-11-24", 23.56, "On-site", "Other", 3, 3000, "Offer"),
      new Job(25, "Amazon", "Included IoT challenges and LeetCode-based coding tasks.", "IoT Engineer Intern", "USA", "Georgia", "2024-11-25", 24.52, "Hybrid", "LeetCode", 2, 4000, "Rejected"),
      new Job(26, "Apple", "Focused on system design for video compression.", "Video Engineer Intern", "Canada", "Ontario", "2024-11-26", 25.00, "Remote", "System Design", 4, 7000, "Offer"),
      new Job(27, "Airbnb", "Covered marketing scenarios and OOP concepts.", "Marketing Analyst Intern", "USA", "Florida", "2024-11-27", 22.60, "On-site", "OOP", 3, 2500, "Rejected"),
      new Job(28, "Meta", "Discussed behavioral and product management scenarios.", "Product Manager Intern", "Canada", "British Columbia", "2024-11-28", 23.08, "Remote", "Other", 2, 3500, "Offer"),
      new Job(29, "Microsoft", "Included LeetCode-style design and mechanical insights.", "Mechanical Designer Intern", "Canada", "Saskatchewan", "2024-11-29", 25.48, "Hybrid", "LeetCode", 4, 5500, "Rejected"),
      new Job(30, "Twitter", "Discussed blockchain security and behavioral questions.", "Blockchain Developer Intern", "USA", "California", "2024-11-30", 26.44, "On-site", "Other", 3, 8000, "Offer"),
    ];
}

// Apply different background-color on body
export const useBackgroundColor = (color: string) => {
    useEffect(() => {
      document.body.style.backgroundColor = color;
      return () => {
        document.body.style.backgroundColor = ""; // Reset to default on unmount
      };
    }, [color]);
};

