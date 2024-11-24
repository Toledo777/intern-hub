class Job {
  constructor(
    id, 
    name, 
    additionalComments, 
    position, 
    country, 
    city, 
    datePosted, 
    salary, 
    type, 
    questionType, 
    numberOfRounds, 
    signOnBonus, 
    offerStatus // New field
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
    this.offerStatus = offerStatus; // New field
  }

  getDetails() {
    return `
      Job ID: ${this.id}
      Company: ${this.name}
      additionalComments: ${this.additionalComments}
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

function filterJobsByCompany(jobs, companyName) {
  return jobs.filter(job => job.name.toLowerCase() === companyName.toLowerCase());
}

function filterJobsBySalary(jobs, salaryThreshold) {
  return jobs.filter(job => job.salary > salaryThreshold);
}
function filterJobsByLocation(jobs, country, city = "") {
  return jobs.filter(job => 
    job.country.toLowerCase().includes(country.toLowerCase()) &&
    job.city.toLowerCase().includes(city.toLowerCase())
  );
}

function deleteJob(jobs, jobId) {
  const index = jobs.findIndex(job => job.id === jobId);
  if (index !== -1) {
    jobs.splice(index, 1);
    console.log(`Job with ID ${jobId} deleted successfully.`);
  } else {
    console.log(`Job with ID ${jobId} not found.`);
  }
}

// Function to filter jobs by type (Onsite, Hybrid, Remote)
function filterJobsByType(jobs, type) {
  return jobs.filter(job => job.type.toLowerCase() === type.toLowerCase());
}

function searchJobs(jobs, substring) {
  const lowerCaseSubstring = substring.toLowerCase();
  return jobs.filter(job => 
    job.name.toLowerCase().includes(lowerCaseSubstring) ||
    job.position.toLowerCase().includes(lowerCaseSubstring) ||
    job.city.toLowerCase().includes(lowerCaseSubstring) ||
    job.country.toLowerCase().includes(lowerCaseSubstring) ||
    job.type.toLowerCase().includes(lowerCaseSubstring) ||
    job.additionalComments.toLowerCase().includes(lowerCaseSubstring)
  );
}

// Updated array of job instances
const jobs = [
  new Job(1, "Google", "Gained experience working on cloud-based applications.", "Intern Developer", "USA", "Mountain View", "2024-11-01", 24.04, "Onsite", "LeetCode", 3, 5000, "Offer"),
  new Job(2, "Microsoft", "Learned to analyze big datasets and present insights.", "Intern Data Analyst", "USA", "Redmond", "2024-11-02", 25.00, "Hybrid", "System Design", 2, 4500, "Rejected"),
  new Job(3, "Apple", "Assisted in the development of consumer electronic designs.", "Intern Product Designer", "USA", "Cupertino", "2024-11-03", 26.44, "Remote", "Object-Oriented Programming", 4, 6000, "Offer"),
  new Job(4, "Adobe", "Helped design innovative layouts for software applications.", "Intern UI/UX Designer", "USA", "San Jose", "2024-11-04", 23.08, "Hybrid", "Other", 3, 3000, "Rejected"),
  new Job(5, "Amazon", "Worked on improving e-commerce user experiences.", "Intern Frontend Developer", "USA", "Seattle", "2024-11-05", 23.56, "Onsite", "LeetCode", 2, 4000, "Offer"),
  new Job(6, "Netflix", "Explored scalable cloud solutions for content distribution.", "Intern Cloud Engineer", "USA", "Los Angeles", "2024-11-06", 24.52, "Remote", "System Design", 3, 7000, "Offer"),
  new Job(7, "Facebook", "Contributed to improving ad performance algorithms.", "Intern Social Media Marketer", "USA", "Menlo Park", "2024-11-07", 22.60, "Hybrid", "Other", 2, 2500, "Rejected"),
  new Job(8, "LinkedIn", "Supported talent acquisition and HR management systems.", "Intern HR Assistant", "Canada", "Toronto", "2024-11-08", 22.12, "Onsite", "Object-Oriented Programming", 3, 3000, "Offer"),
  new Job(9, "Tesla", "Assisted in optimizing energy-efficient battery designs.", "Intern Mechanical Engineer", "Canada", "Montreal", "2024-11-09", 25.48, "Remote", "System Design", 4, 8000, "Rejected"),
  new Job(10, "IBM", "Worked on cybersecurity and secure cloud storage systems.", "Intern Cybersecurity Specialist", "Canada", "Ottawa", "2024-11-10", 25.96, "Hybrid", "LeetCode", 3, 3500, "Offer"),
  new Job(11, "Google", "Contributed to backend services for AI-driven tools.", "Intern Backend Developer", "Canada", "Vancouver", "2024-11-11", 24.52, "Onsite", "LeetCode", 2, 4000, "Rejected"),
  new Job(12, "Microsoft", "Assisted in testing and quality assurance.", "Intern QA Engineer", "USA", "Dallas", "2024-11-12", 21.63, "Remote", "Object-Oriented Programming", 3, 2000, "Offer"),
  new Job(13, "Apple", "Learned about supply chain management for electronics.", "Intern Operations Manager", "Canada", "Calgary", "2024-11-13", 25.00, "Hybrid", "System Design", 4, 5500, "Rejected"),
  new Job(14, "Adobe", "Supported graphic design for marketing campaigns.", "Intern Graphic Designer", "Canada", "Edmonton", "2024-11-14", 22.60, "Onsite", "Other", 2, 2500, "Offer"),
  new Job(15, "Amazon", "Helped improve logistics using real-time data analysis.", "Intern Logistics Analyst", "USA", "Boston", "2024-11-15", 24.04, "Hybrid", "LeetCode", 2, 4500, "Rejected"),
  new Job(16, "Netflix", "Researched trends for personalized content curation.", "Intern Content Strategist", "Canada", "Winnipeg", "2024-11-16", 23.08, "Remote", "Object-Oriented Programming", 3, 6000, "Offer"),
  new Job(17, "Facebook", "Explored computer vision models for image recognition.", "Intern AI Researcher", "USA", "Austin", "2024-11-17", 23.56, "Hybrid", "System Design", 4, 3500, "Rejected"),
  new Job(18, "LinkedIn", "Analyzed professional networking trends.", "Intern Data Analyst", "Canada", "Halifax", "2024-11-18", 22.12, "Onsite", "LeetCode", 2, 2000, "Offer"),
  new Job(19, "Tesla", "Participated in autonomous vehicle system testing.", "Intern Software Tester", "USA", "Detroit", "2024-11-19", 25.00, "Remote", "System Design", 3, 7000, "Rejected"),
  new Job(20, "IBM", "Developed proof-of-concept quantum computing models.", "Intern Quantum Developer", "USA", "New York", "2024-11-20", 26.92, "Hybrid", "Other", 4, 8000, "Offer"),
  new Job(21, "Google", "Worked on integrating AI models into search algorithms.", "Intern AI Engineer", "USA", "Chicago", "2024-11-21", 25.48, "Onsite", "LeetCode", 3, 5000, "Rejected"),
  new Job(22, "Microsoft", "Helped enhance system accessibility features.", "Intern Systems Analyst", "Canada", "Quebec City", "2024-11-22", 24.52, "Hybrid", "System Design", 2, 3500, "Offer"),
  new Job(23, "Apple", "Explored AR integration in consumer products.", "Intern AR Developer", "USA", "Las Vegas", "2024-11-23", 25.96, "Remote", "Object-Oriented Programming", 4, 6000, "Rejected"),
  new Job(24, "Adobe", "Developed content for creative educational tools.", "Intern Content Developer", "USA", "Philadelphia", "2024-11-24", 23.56, "Onsite", "Other", 3, 3000, "Offer"),
  new Job(25, "Amazon", "Improved real-time package tracking systems.", "Intern IoT Engineer", "USA", "Atlanta", "2024-11-25", 24.52, "Hybrid", "LeetCode", 2, 4000, "Rejected"),
  new Job(26, "Netflix", "Researched innovative video compression techniques.", "Intern Video Engineer", "Canada", "Hamilton", "2024-11-26", 25.00, "Remote", "System Design", 4, 7000, "Offer"),
  new Job(27, "Facebook", "Helped create insights for ad campaign performance.", "Intern Marketing Analyst", "USA", "Miami", "2024-11-27", 22.60, "Onsite", "Object-Oriented Programming", 3, 2500, "Rejected"),
  new Job(28, "LinkedIn", "Developed recommendations for career advancement tools.", "Intern Product Manager", "Canada", "Victoria", "2024-11-28", 23.08, "Remote", "Other", 2, 3500, "Offer"),
  new Job(29, "Tesla", "Redesigned thermal management for EVs.", "Intern Mechanical Designer", "Canada", "Saskatoon", "2024-11-29", 25.48, "Hybrid", "LeetCode", 4, 5500, "Rejected"),
  new Job(30, "IBM", "Researched blockchain integrations for secure systems.", "Intern Blockchain Developer", "USA", "San Francisco", "2024-11-30", 26.44, "Onsite", "Other", 3, 8000, "Offer")
];



console.log("List of Jobs:");
jobs.forEach(job => console.log(job.getDetails()));
const highSalaryJobs = filterJobsBySalary(jobs, 30);
console.log("Jobs with salary greater than $30:");
highSalaryJobs.forEach(job => console.log(job.getDetails()));
const googleJobs = filterJobsByCompany(jobs, "Google");
console.log("\nJobs at Google:");
googleJobs.forEach(job => console.log(job.getDetails()));
const filteredJobs = filterJobsByLocation(jobs, "Canada", "Toronto");
console.log("\nFiltered Jobs in Canada, Toronto:");
filteredJobs.forEach(job => console.log(job.getDetails()));
deleteJob(jobs, 3);
console.log("\nRemaining Jobs:");
jobs.forEach(job => console.log(job.getDetails()));
const remoteJobs = filterJobsByType(jobs, "Remote");
console.log("\nRemote Jobs:");
remoteJobs.forEach(job => console.log(job.getDetails()));

const searchResults = searchJobs(jobs, "Google");
console.log("Jobs containing 'Google':");
searchResults.forEach(job => console.log(job.getDetails()));

const positionSearchResults = searchJobs(jobs, "Intern Data Analyst");
console.log("\nJobs containing 'Intern Data Analyst':");
positionSearchResults.forEach(job => console.log(job.getDetails()));

const citySearchResults = searchJobs(jobs, "Gained");
console.log("\nJobs containing 'Gained':");
citySearchResults.forEach(job => console.log(job.getDetails()));
