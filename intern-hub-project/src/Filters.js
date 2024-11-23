class Job {
  constructor(id, name, review, position, country, city, datePosted, salary) {
    this.id = id; // The unique ID for each job
    this.name = name; // The name of the company posting the job
    this.review = review; // The review by a former or current employee
    this.position = position; // The intern position being offered
    this.country = country; // The country of the job location
    this.city = city; // The city of the job location
    this.datePosted = datePosted; // The date the job was posted
    this.salary = salary; // The salary offered for the job
  }

  getDetails() {
    return `
      Job ID: ${this.id}
      Company: ${this.name}
      Review: ${this.review}
      Position: ${this.position}
      Country: ${this.country}
      City: ${this.city}
      Date Posted: ${this.datePosted}
      Salary: $${this.salary}
    `;
  }
}

// Create an array of 30 intern positions
const jobs = [
  new Job(1, "Google", "Gained experience working on cloud-based applications.", "Intern Developer", "USA", "Mountain View", "2024-11-01", 50000),
  new Job(2, "Microsoft", "Learned to analyze big datasets and present insights.", "Intern Data Analyst", "USA", "Redmond", "2024-11-02", 52000),
  new Job(3, "Apple", "Assisted in the development of consumer electronic designs.", "Intern Product Designer", "USA", "Cupertino", "2024-11-03", 55000),
  new Job(4, "Adobe", "Helped design innovative layouts for software applications.", "Intern UI/UX Designer", "USA", "San Jose", "2024-11-04", 48000),
  new Job(5, "Amazon", "Worked on improving e-commerce user experiences.", "Intern Frontend Developer", "USA", "Seattle", "2024-11-05", 49000),
  new Job(6, "Netflix", "Explored scalable cloud solutions for content distribution.", "Intern Cloud Engineer", "USA", "Los Angeles", "2024-11-06", 51000),
  new Job(7, "Facebook", "Contributed to improving ad performance algorithms.", "Intern Social Media Marketer", "USA", "Menlo Park", "2024-11-07", 47000),
  new Job(8, "LinkedIn", "Supported talent acquisition and HR management systems.", "Intern HR Assistant", "USA", "Sunnyvale", "2024-11-08", 46000),
  new Job(9, "Tesla", "Assisted in optimizing energy-efficient battery designs.", "Intern Mechanical Engineer", "USA", "Palo Alto", "2024-11-09", 53000),
  new Job(10, "IBM", "Worked on cybersecurity and secure cloud storage systems.", "Intern Cybersecurity Specialist", "USA", "Armonk", "2024-11-10", 54000),
  new Job(11, "Google", "Contributed to backend services for AI-driven tools.", "Intern Backend Developer", "Canada", "Toronto", "2024-11-11", 51000),
  new Job(12, "Microsoft", "Assisted in testing and quality assurance.", "Intern QA Engineer", "India", "Hyderabad", "2024-11-12", 45000),
  new Job(13, "Apple", "Learned about supply chain management for electronics.", "Intern Operations Manager", "China", "Shanghai", "2024-11-13", 52000),
  new Job(14, "Adobe", "Supported graphic design for marketing campaigns.", "Intern Graphic Designer", "Germany", "Berlin", "2024-11-14", 47000),
  new Job(15, "Amazon", "Helped improve logistics using real-time data analysis.", "Intern Logistics Analyst", "UK", "London", "2024-11-15", 50000),
  new Job(16, "Netflix", "Researched trends for personalized content curation.", "Intern Content Strategist", "France", "Paris", "2024-11-16", 48000),
  new Job(17, "Facebook", "Explored computer vision models for image recognition.", "Intern AI Researcher", "Netherlands", "Amsterdam", "2024-11-17", 49000),
  new Job(18, "LinkedIn", "Analyzed professional networking trends.", "Intern Data Analyst", "India", "Mumbai", "2024-11-18", 46000),
  new Job(19, "Tesla", "Participated in autonomous vehicle system testing.", "Intern Software Tester", "Germany", "Berlin", "2024-11-19", 52000),
  new Job(20, "IBM", "Developed proof-of-concept quantum computing models.", "Intern Quantum Developer", "Japan", "Tokyo", "2024-11-20", 56000),
  new Job(21, "Google", "Worked on integrating AI models into search algorithms.", "Intern AI Engineer", "USA", "Austin", "2024-11-21", 53000),
  new Job(22, "Microsoft", "Helped enhance system accessibility features.", "Intern Systems Analyst", "UK", "London", "2024-11-22", 51000),
  new Job(23, "Apple", "Explored AR integration in consumer products.", "Intern AR Developer", "China", "Beijing", "2024-11-23", 54000),
  new Job(24, "Adobe", "Developed content for creative educational tools.", "Intern Content Developer", "Canada", "Montreal", "2024-11-24", 49000),
  new Job(25, "Amazon", "Improved real-time package tracking systems.", "Intern IoT Engineer", "Canada", "Vancouver", "2024-11-25", 51000),
  new Job(26, "Netflix", "Researched innovative video compression techniques.", "Intern Video Engineer", "USA", "San Francisco", "2024-11-26", 52000),
  new Job(27, "Facebook", "Helped create insights for ad campaign performance.", "Intern Marketing Analyst", "India", "Delhi", "2024-11-27", 47000),
  new Job(28, "LinkedIn", "Developed recommendations for career advancement tools.", "Intern Product Manager", "Ireland", "Dublin", "2024-11-28", 48000),
  new Job(29, "Tesla", "Redesigned thermal management for EVs.", "Intern Mechanical Designer", "China", "Shanghai", "2024-11-29", 53000),
  new Job(30, "IBM", "Researched blockchain integrations for secure systems.", "Intern Blockchain Developer", "USA", "New York", "2024-11-30", 55000)
];

// Display all jobs
console.log("All Intern Jobs:");
jobs.forEach(job => console.log(job.getDetails()));