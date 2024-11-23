class Job {
    constructor(id, name, review, position, location, datePosted, salary) {
      this.id = id; // The unique ID for each job
      this.name = name; // The name of the company posting the job
      this.review = review; // The review or title of the post
      this.position = position; // The position being offered
      this.location = location; // The location of the job
      this.datePosted = datePosted; // The date the job was posted
      this.salary = salary; // The salary offered for the job
    }
  
    getDetails() {
      return `
        Job ID: ${this.id}
        Job Name: ${this.name}
        review: ${this.review}
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
    new Job(1, "Google", "Worked on AI products to train models detecting anomalies.", "Junior Developer", "Toronto, Canada", "2024-11-01", 75000),
    new Job(2, "Microsoft", "Analyzed big datasets to uncover business insights.", "Mid-Level Analyst", "New York, USA", "2024-11-02", 90000),
    new Job(3, "Apple", "Led cross-functional teams to deliver innovative products.", "Senior Manager", "London, UK", "2024-11-03", 120000),
    new Job(4, "Adobe", "Created intuitive UI designs for global SaaS platforms.", "UI Designer", "Berlin, Germany", "2024-11-04", 85000),
    new Job(5, "Amazon", "Ensured quality of complex systems in a fast-paced environment.", "Junior QA", "Seattle, USA", "2024-11-05", 70000),
    new Job(6, "Netflix", "Managed cloud deployments for high-traffic streaming services.", "Senior DevOps", "San Francisco, USA", "2024-11-06", 150000),
    new Job(7, "Facebook", "Developed and optimized algorithms for ad performance tracking.", "Social Media Marketer", "Paris, France", "2024-11-07", 78000),
    new Job(8, "LinkedIn", "Facilitated global hiring through advanced recruitment tools.", "HR Manager", "Mumbai, India", "2024-11-08", 85000),
    new Job(9, "Tesla", "Worked on the development of energy-efficient battery technologies.", "Junior Analyst", "Singapore", "2024-11-09", 68000),
    new Job(10, "IBM", "Implemented security protocols to protect sensitive data.", "Senior Specialist", "Tokyo, Japan", "2024-11-10", 105000),
    new Job(11, "Google", "Built scalable backend systems for cloud-based applications.", "Data Scientist", "Dublin, Ireland", "2024-11-11", 98000),
    new Job(12, "Microsoft", "Redesigned legacy systems to improve operational efficiency.", "Software Engineer", "Vancouver, Canada", "2024-11-12", 92000),
    new Job(13, "Apple", "Streamlined manufacturing processes for flagship products.", "Product Designer", "Berlin, Germany", "2024-11-13", 110000),
    new Job(14, "Adobe", "Delivered workshops on graphic design and creative tools.", "Mid-Level Developer", "Sydney, Australia", "2024-11-14", 83000),
    new Job(15, "Amazon", "Spearheaded initiatives to improve supply chain logistics.", "Operations Manager", "Dubai, UAE", "2024-11-15", 97000),
    new Job(16, "Netflix", "Designed microservices for video encoding workflows.", "Backend Engineer", "Los Angeles, USA", "2024-11-16", 112000),
    new Job(17, "Facebook", "Created user-friendly dashboards for marketing analytics.", "Frontend Developer", "Amsterdam, Netherlands", "2024-11-17", 76000),
    new Job(18, "LinkedIn", "Designed AI-driven tools for networking recommendations.", "Recruiter", "Singapore", "2024-11-18", 69000),
    new Job(19, "Tesla", "Led testing of autonomous vehicle systems.", "Mechanical Engineer", "Palo Alto, USA", "2024-11-19", 130000),
    new Job(20, "IBM", "Built secure blockchain solutions for financial transactions.", "Cloud Engineer", "Paris, France", "2024-11-20", 102000),
    new Job(21, "Google", "Optimized CI/CD pipelines for efficient deployment.", "DevOps Engineer", "Austin, USA", "2024-11-21", 87000),
    new Job(22, "Microsoft", "Collaborated with teams to deliver accessibility features.", "Systems Analyst", "Delhi, India", "2024-11-22", 81000),
    new Job(23, "Apple", "Pioneered AR integration in consumer electronics.", "Product Engineer", "Beijing, China", "2024-11-23", 113000),
    new Job(24, "Adobe", "Created innovative layouts for advertising campaigns.", "Graphics Designer", "Tokyo, Japan", "2024-11-24", 84000),
    new Job(25, "Amazon", "Developed real-time tracking systems for package delivery.", "Logistics Coordinator", "Toronto, Canada", "2024-11-25", 74000),
    new Job(26, "Netflix", "Worked on personalization algorithms for content recommendations.", "Content Strategist", "London, UK", "2024-11-26", 96000),
    new Job(27, "Facebook", "Researched AI systems for image recognition improvements.", "AI Researcher", "San Jose, USA", "2024-11-27", 120000),
    new Job(28, "LinkedIn", "Analyzed trends in professional network data.", "Data Analyst", "Dublin, Ireland", "2024-11-28", 79000),
    new Job(29, "Tesla", "Redesigned thermal management systems for EVs.", "Battery Engineer", "Shanghai, China", "2024-11-29", 122000),
    new Job(30, "IBM", "Developed quantum algorithms for optimization problems.", "Blockchain Specialist", "New York, USA", "2024-11-30", 115000)
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