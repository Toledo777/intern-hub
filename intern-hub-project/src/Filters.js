class Job {
  constructor(id, name, review, position, country, city, datePosted, salary, type) {
    this.id = id; // Unique ID for each job
    this.name = name; // Name of the company posting the job
    this.review = review; // Review of the job or experience
    this.position = position; // The position being offered
    this.country = country; // The country of the job
    this.city = city; // The city of the job
    this.datePosted = datePosted; // The date the job was posted
    this.salary = salary; // The salary offered for the job
    this.type = type; // The type of the job (Onsite, Hybrid, Remote)
  }

  getDetails() {
    return `
      Job ID: ${this.id}
      Company: ${this.name}
      Review: ${this.review}
      Position: ${this.position}
      Location: ${this.city}, ${this.country}
      Date Posted: ${this.datePosted}
      Salary: $${this.salary}
      Type: ${this.type}
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


// Updated array of job instances
const jobs = [
  new Job(1, "Google", "Gained experience working on cloud-based applications.", "Intern Developer", "USA", "Mountain View", "2024-11-01", 50000, "Onsite"),
  new Job(2, "Microsoft", "Learned to analyze big datasets and present insights.", "Intern Data Analyst", "USA", "Redmond", "2024-11-02", 52000, "Hybrid"),
  new Job(3, "Apple", "Assisted in the development of consumer electronic designs.", "Intern Product Designer", "USA", "Cupertino", "2024-11-03", 55000, "Remote"),
  new Job(4, "Adobe", "Helped design innovative layouts for software applications.", "Intern UI/UX Designer", "USA", "San Jose", "2024-11-04", 48000, "Hybrid"),
  new Job(5, "Amazon", "Worked on improving e-commerce user experiences.", "Intern Frontend Developer", "USA", "Seattle", "2024-11-05", 49000, "Onsite"),
  new Job(6, "Netflix", "Explored scalable cloud solutions for content distribution.", "Intern Cloud Engineer", "USA", "Los Angeles", "2024-11-06", 51000, "Remote"),
  new Job(7, "Facebook", "Contributed to improving ad performance algorithms.", "Intern Social Media Marketer", "USA", "Menlo Park", "2024-11-07", 47000, "Hybrid"),
  new Job(8, "LinkedIn", "Supported talent acquisition and HR management systems.", "Intern HR Assistant", "Canada", "Toronto", "2024-11-08", 46000, "Onsite"),
  new Job(9, "Tesla", "Assisted in optimizing energy-efficient battery designs.", "Intern Mechanical Engineer", "Canada", "Montreal", "2024-11-09", 53000, "Remote"),
  new Job(10, "IBM", "Worked on cybersecurity and secure cloud storage systems.", "Intern Cybersecurity Specialist", "Canada", "Ottawa", "2024-11-10", 54000, "Hybrid"),
  new Job(11, "Google", "Contributed to backend services for AI-driven tools.", "Intern Backend Developer", "Canada", "Vancouver", "2024-11-11", 51000, "Onsite"),
  new Job(12, "Microsoft", "Assisted in testing and quality assurance.", "Intern QA Engineer", "USA", "Dallas", "2024-11-12", 45000, "Remote"),
  new Job(13, "Apple", "Learned about supply chain management for electronics.", "Intern Operations Manager", "Canada", "Calgary", "2024-11-13", 52000, "Hybrid"),
  new Job(14, "Adobe", "Supported graphic design for marketing campaigns.", "Intern Graphic Designer", "Canada", "Edmonton", "2024-11-14", 47000, "Onsite"),
  new Job(15, "Amazon", "Helped improve logistics using real-time data analysis.", "Intern Logistics Analyst", "USA", "Boston", "2024-11-15", 50000, "Hybrid"),
  new Job(16, "Netflix", "Researched trends for personalized content curation.", "Intern Content Strategist", "Canada", "Winnipeg", "2024-11-16", 48000, "Remote"),
  new Job(17, "Facebook", "Explored computer vision models for image recognition.", "Intern AI Researcher", "USA", "Austin", "2024-11-17", 49000, "Hybrid"),
  new Job(18, "LinkedIn", "Analyzed professional networking trends.", "Intern Data Analyst", "Canada", "Halifax", "2024-11-18", 46000, "Onsite"),
  new Job(19, "Tesla", "Participated in autonomous vehicle system testing.", "Intern Software Tester", "USA", "Detroit", "2024-11-19", 52000, "Remote"),
  new Job(20, "IBM", "Developed proof-of-concept quantum computing models.", "Intern Quantum Developer", "USA", "New York", "2024-11-20", 56000, "Hybrid"),
  new Job(21, "Google", "Worked on integrating AI models into search algorithms.", "Intern AI Engineer", "USA", "Chicago", "2024-11-21", 53000, "Onsite"),
  new Job(22, "Microsoft", "Helped enhance system accessibility features.", "Intern Systems Analyst", "Canada", "Quebec City", "2024-11-22", 51000, "Hybrid"),
  new Job(23, "Apple", "Explored AR integration in consumer products.", "Intern AR Developer", "USA", "Las Vegas", "2024-11-23", 54000, "Remote"),
  new Job(24, "Adobe", "Developed content for creative educational tools.", "Intern Content Developer", "USA", "Philadelphia", "2024-11-24", 49000, "Onsite"),
  new Job(25, "Amazon", "Improved real-time package tracking systems.", "Intern IoT Engineer", "USA", "Atlanta", "2024-11-25", 51000, "Hybrid"),
  new Job(26, "Netflix", "Researched innovative video compression techniques.", "Intern Video Engineer", "Canada", "Hamilton", "2024-11-26", 52000, "Remote"),
  new Job(27, "Facebook", "Helped create insights for ad campaign performance.", "Intern Marketing Analyst", "USA", "Miami", "2024-11-27", 47000, "Onsite"),
  new Job(28, "LinkedIn", "Developed recommendations for career advancement tools.", "Intern Product Manager", "Canada", "Victoria", "2024-11-28", 48000, "Remote"),
  new Job(29, "Tesla", "Redesigned thermal management for EVs.", "Intern Mechanical Designer", "Canada", "Saskatoon", "2024-11-29", 53000, "Hybrid"),
  new Job(30, "IBM", "Researched blockchain integrations for secure systems.", "Intern Blockchain Developer", "USA", "San Francisco", "2024-11-30", 55000, "Onsite")
];

console.log("List of Jobs:");
jobs.forEach(job => console.log(job.getDetails()));
const highSalaryJobs = filterJobsBySalary(jobs, 40000);
console.log("Jobs with salary greater than $40,000:");
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