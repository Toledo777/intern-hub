class Job {
    constructor(id, name, description, position, location, datePosted, salary) {
      this.id = id; // The unique ID for each job
      this.name = name; // The name of the company posting the job
      this.description = description; // The description or title of the post
      this.position = position; // The position being offered
      this.location = location; // The location of the job
      this.datePosted = datePosted; // The date the job was posted
      this.salary = salary; // The salary offered for the job
    }
  
    getDetails() {
      return `
        Job ID: ${this.id}
        Job Name: ${this.name}
        description: ${this.description}
        Position: ${this.position}
        Location: ${this.location}
        Date Posted: ${this.datePosted}
        Salary: ${this.salary}
      `;
    }
  }
  
  // Function to filter jobs by company
  function filterJobsByCompany(jobs, companyName) {
    return jobs.filter(job => job.name.toLowerCase() === companyName.toLowerCase());
  }
  
  // Function to filter jobs by salary (greater than specified amount)
  function filterJobsBySalary(jobs, salaryThreshold) {
    return jobs.filter(job => job.salary > salaryThreshold);
  }

  function filterJobsByLocation(jobs, location) {
    return jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
  }
  
  // Function to delete a job by its ID
  function deleteJob(jobs, jobId) {
    const index = jobs.findIndex(job => job.id === jobId);
    if (index !== -1) {
      jobs.splice(index, 1); // Remove the job at the found index
      console.log(`Job with ID ${jobId} deleted successfully.`);
    } else {
      console.log(`Job with ID ${jobId} not found.`);
    }
  }
  
  // Create an array of job instances with unique IDs and salary
  const jobs = [
    new Job(1, "Google", "Full-stack Development", "Junior Developer", "Toronto, Canada", "2024-11-23", 70000),
    new Job(2, "Microsoft", "Data Analytics", "Mid-Level Analyst", "New York, USA", "2024-11-20", 90000),
    new Job(3, "Apple", "Product Management", "Senior Manager", "London, UK", "2024-11-18", 120000),
    new Job(4, "Adobe", "User Interface Design", "Mid-Level Designer", "Berlin, Germany", "2024-11-21", 80000),
    new Job(5, "Amazon", "Quality Assurance", "Junior QA", "Sydney, Australia", "2024-11-15", 65000),
    new Job(6, "Netflix", "DevOps Management", "Senior DevOps", "San Francisco, USA", "2024-11-17", 150000),
    new Job(7, "Facebook", "Social Media Marketing", "Mid-Level Marketer", "Paris, France", "2024-11-22", 75000),
    new Job(8, "LinkedIn", "Human Resources", "Senior HR Manager", "Mumbai, India", "2024-11-19", 85000),
    new Job(9, "Tesla", "Business Analysis", "Junior Analyst", "Singapore", "2024-11-16", 67000),
    new Job(10, "IBM", "Cybersecurity", "Senior Specialist", "Tokyo, Japan", "2024-11-14", 100000)
  ];
  
  // Example: Filter jobs where salary is greater than 80,000
  const highSalaryJobs = filterJobsBySalary(jobs, 80000);
  
  console.log("Jobs with salary greater than 80,000:");
  highSalaryJobs.forEach(job => console.log(job.getDetails()));
  
  // Example: Delete a job by its ID
  deleteJob(jobs, 3); // Delete the job with ID 3 (Apple job)
  
  // Verify the job has been deleted
  console.log("\nRemaining Jobs:");
  jobs.forEach(job => console.log(job.getDetails()));
  
  const usaJobs = filterJobsByLocation(jobs, "USA");

console.log("\nJobs located in the USA:");
usaJobs.forEach(job => console.log(job.getDetails()));