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

// Retrieve all existing jobs
export function getAllJobs(): Job[] {
  return jobs;
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
  return jobs.filter(
    (job) =>
      job.name.toLowerCase().includes(lowerCaseSubstring) ||
      job.position.toLowerCase().includes(lowerCaseSubstring) ||
      job.city.toLowerCase().includes(lowerCaseSubstring) ||
      job.country.toLowerCase().includes(lowerCaseSubstring) ||
      job.type.toLowerCase().includes(lowerCaseSubstring) ||
      job.additionalComments.toLowerCase().includes(lowerCaseSubstring)
  );
}

let jobs: Job[] = [
    new Job(1, "Amazon", "Gained experience working on cloud-based applications.", "Intern Developer", "USA", "Mountain View", "2024-11-01", 24.04, "Onsite", "LeetCode", 3, 5000, "Offer"),
    new Job(2, "Google", "Learned to analyze big datasets and present insights.", "Intern Data Analyst", "USA", "Redmond", "2024-11-02", 25.00, "Hybrid", "System Design", 2, 4500, "Rejected"),
    new Job(3, "Twitter", "Assisted in the development of consumer electronic designs.", "Intern Product Designer", "USA", "Cupertino", "2024-11-03", 26.44, "Remote", "Object-Oriented Programming", 4, 6000, "Offer"),
    new Job(4, "Meta", "Helped design innovative layouts for software applications.", "Intern UI/UX Designer", "USA", "San Jose", "2024-11-04", 23.08, "Hybrid", "Other", 3, 3000, "Rejected"),
    new Job(5, "IBM", "Worked on improving e-commerce user experiences.", "Intern Frontend Developer", "USA", "Seattle", "2024-11-05", 23.56, "Onsite", "LeetCode", 2, 4000, "Offer"),
    new Job(6, "Apple", "Explored scalable cloud solutions for content distribution.", "Intern Cloud Engineer", "USA", "Los Angeles", "2024-11-06", 24.52, "Remote", "System Design", 3, 7000, "Offer"),
    new Job(7, "Microsoft", "Contributed to improving ad performance algorithms.", "Intern Social Media Marketer", "USA", "Menlo Park", "2024-11-07", 22.60, "Hybrid", "Other", 2, 2500, "Rejected"),
    new Job(8, "Lyft", "Supported talent acquisition and HR management systems.", "Intern HR Assistant", "Canada", "Toronto", "2024-11-08", 22.12, "Onsite", "Object-Oriented Programming", 3, 3000, "Offer"),
    new Job(9, "Coveo", "Assisted in optimizing energy-efficient battery designs.", "Intern Mechanical Engineer", "Canada", "Montreal", "2024-11-09", 25.48, "Remote", "System Design", 4, 8000, "Rejected"),
    new Job(10, "Intact", "Worked on cybersecurity and secure cloud storage systems.", "Intern Cybersecurity Specialist", "Canada", "Ottawa", "2024-11-10", 25.96, "Hybrid", "LeetCode", 3, 3500, "Offer"),
    new Job(11, "Google", "Contributed to backend services for AI-driven tools.", "Intern Backend Developer", "Canada", "Vancouver", "2024-11-11", 24.52, "Onsite", "LeetCode", 2, 4000, "Rejected"),
    new Job(12, "Airbnb", "Assisted in testing and quality assurance.", "Intern QA Engineer", "USA", "Dallas", "2024-11-12", 21.63, "Remote", "Object-Oriented Programming", 3, 2000, "Offer"),
    new Job(13, "Amazon", "Learned about supply chain management for electronics.", "Intern Operations Manager", "Canada", "Calgary", "2024-11-13", 25.00, "Hybrid", "System Design", 4, 5500, "Rejected"),
    new Job(14, "Lyft", "Supported graphic design for marketing campaigns.", "Intern Graphic Designer", "Canada", "Edmonton", "2024-11-14", 22.60, "Onsite", "Other", 2, 2500, "Offer"),
    new Job(15, "Twitter", "Helped improve logistics using real-time data analysis.", "Intern Logistics Analyst", "USA", "Boston", "2024-11-15", 24.04, "Hybrid", "LeetCode", 2, 4500, "Rejected"),
    new Job(16, "Microsoft", "Researched trends for personalized content curation.", "Intern Content Strategist", "Canada", "Winnipeg", "2024-11-16", 23.08, "Remote", "Object-Oriented Programming", 3, 6000, "Offer"),
    new Job(17, "Amazon", "Explored computer vision models for image recognition.", "Intern AI Researcher", "USA", "Austin", "2024-11-17", 23.56, "Hybrid", "System Design", 4, 3500, "Rejected"),
    new Job(18, "IBM", "Analyzed professional networking trends.", "Intern Data Analyst", "Canada", "Halifax", "2024-11-18", 22.12, "Onsite", "LeetCode", 2, 2000, "Offer"),
    new Job(19, "Meta", "Participated in autonomous vehicle system testing.", "Intern Software Tester", "USA", "Detroit", "2024-11-19", 25.00, "Remote", "System Design", 3, 7000, "Rejected"),
    new Job(20, "Coveo", "Developed proof-of-concept quantum computing models.", "Intern Quantum Developer", "USA", "New York", "2024-11-20", 26.92, "Hybrid", "Other", 4, 8000, "Offer"),
    new Job(21, "Apple", "Worked on integrating AI models into search algorithms.", "Intern AI Engineer", "USA", "Chicago", "2024-11-21", 25.48, "Onsite", "LeetCode", 3, 5000, "Rejected"),
    new Job(22, "Google", "Helped enhance system accessibility features.", "Intern Systems Analyst", "Canada", "Quebec City", "2024-11-22", 24.52, "Hybrid", "System Design", 2, 3500, "Offer"),
    new Job(23, "Lyft", "Explored AR integration in consumer products.", "Intern AR Developer", "USA", "Las Vegas", "2024-11-23", 25.96, "Remote", "Object-Oriented Programming", 4, 6000, "Rejected"),
    new Job(24, "Intact", "Developed content for creative educational tools.", "Intern Content Developer", "USA", "Philadelphia", "2024-11-24", 23.56, "Onsite", "Other", 3, 3000, "Offer"),
    new Job(25, "Amazon", "Improved real-time package tracking systems.", "Intern IoT Engineer", "USA", "Atlanta", "2024-11-25", 24.52, "Hybrid", "LeetCode", 2, 4000, "Rejected"),
    new Job(26, "Apple", "Researched innovative video compression techniques.", "Intern Video Engineer", "Canada", "Hamilton", "2024-11-26", 25.00, "Remote", "System Design", 4, 7000, "Offer"),
    new Job(27, "Airbnb", "Helped create insights for ad campaign performance.", "Intern Marketing Analyst", "USA", "Miami", "2024-11-27", 22.60, "Onsite", "Object-Oriented Programming", 3, 2500, "Rejected"),
    new Job(28, "Meta", "Developed recommendations for career advancement tools.", "Intern Product Manager", "Canada", "Victoria", "2024-11-28", 23.08, "Remote", "Other", 2, 3500, "Offer"),
    new Job(29, "Microsoft", "Redesigned thermal management for EVs.", "Intern Mechanical Designer", "Canada", "Saskatoon", "2024-11-29", 25.48, "Hybrid", "LeetCode", 4, 5500, "Rejected"),
    new Job(30, "Twitter", "Researched blockchain integrations for secure systems.", "Intern Blockchain Developer", "USA", "San Francisco", "2024-11-30", 26.44, "Onsite", "Other", 3, 8000, "Offer")
];

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

const highSalaryJobs = filterJobsBySalary(jobs, 80000);
console.log("Jobs with salary greater than $80,000:");
highSalaryJobs.forEach((job) => console.log(job.getDetails()));

const googleJobs = filterJobsByCompany(jobs, "Google");
console.log("\nJobs at Google:");
googleJobs.forEach((job) => console.log(job.getDetails()));

const usaJobs = filterJobsByCountry(jobs, "USA");
console.log("\nJobs located in the USA:");
usaJobs.forEach((job) => console.log(job.getDetails()));

deleteJob(jobs, 3);

console.log("\nRemaining Jobs:");
jobs.forEach((job) => console.log(job.getDetails()));
