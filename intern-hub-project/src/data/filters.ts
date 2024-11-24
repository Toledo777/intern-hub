export class Job {
    id: number;
    name: string;
    review: string;
    position: string;
    country: string;
    city: string;
    datePosted: string;
    salary: number;

    constructor(
        id: number,
        name: string,
        review: string,
        position: string,
        country: string,
        city: string,
        datePosted: string,
        salary: number
    ) {
        this.id = id;
        this.name = name;
        this.review = review;
        this.position = position;
        this.country = country;
        this.city = city;
        this.datePosted = datePosted;
        this.salary = salary;
    }

    getDetails(): string {
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

export function getAllJobs(): Job[] {
    return jobs;
}

function filterJobsByCompany(jobs: Job[], companyName: string): Job[] {
    return jobs.filter(job => job.name.toLowerCase() === companyName.toLowerCase());
}

function filterJobsBySalary(jobs: Job[], salaryThreshold: number): Job[] {
    return jobs.filter(job => job.salary > salaryThreshold);
}

function filterJobsByCountry(jobs: Job[], country: string): Job[] {
    return jobs.filter(job => job.country.toLowerCase() === country.toLowerCase());
}

function filterJobsByCity(jobs: Job[], city: string): Job[] {
    return jobs.filter(job => job.city.toLowerCase().includes(city.toLowerCase()));
}


function deleteJob(jobs: Job[], jobId: number): void {
    const index = jobs.findIndex(job => job.id === jobId);
    if (index !== -1) {
        jobs.splice(index, 1);
        console.log(`Job with ID ${jobId} deleted successfully.`);
    } else {
        console.log(`Job with ID ${jobId} not found.`);
    }
}

const jobs: Job[] = [
    new Job(1, "Google", "Gained experience working on cloud-based applications.", "Intern Developer", "USA", "Mountain View", "2024-11-01", 40),
    new Job(2, "Microsoft", "Learned to analyze big datasets and present insights.", "Intern Data Analyst", "USA", "Redmond", "2024-11-02", 38),
    new Job(3, "Apple", "Assisted in the development of consumer electronic designs.", "Intern Product Designer", "USA", "Cupertino", "2024-11-03", 42),
    new Job(4, "Adobe", "Helped design innovative layouts for software applications.", "Intern UI/UX Designer", "USA", "San Jose", "2024-11-04", 35),
    new Job(5, "Amazon", "Worked on improving e-commerce user experiences.", "Intern Frontend Developer", "USA", "Seattle", "2024-11-05", 36),
    new Job(6, "Netflix", "Explored scalable cloud solutions for content distribution.", "Intern Cloud Engineer", "USA", "Los Angeles", "2024-11-06", 39),
    new Job(7, "Facebook", "Contributed to improving ad performance algorithms.", "Intern Social Media Marketer", "USA", "Menlo Park", "2024-11-07", 34),
    new Job(8, "LinkedIn", "Supported talent acquisition and HR management systems.", "Intern HR Assistant", "Canada", "Toronto", "2024-11-08", 32),
    new Job(9, "Tesla", "Assisted in optimizing energy-efficient battery designs.", "Intern Mechanical Engineer", "Canada", "Montreal", "2024-11-09", 41),
    new Job(10, "IBM", "Worked on cybersecurity and secure cloud storage systems.", "Intern Cybersecurity Specialist", "Canada", "Ottawa", "2024-11-10", 43),
    new Job(11, "Google", "Contributed to backend services for AI-driven tools.", "Intern Backend Developer", "Canada", "Vancouver", "2024-11-11", 39),
    new Job(12, "Microsoft", "Assisted in testing and quality assurance.", "Intern QA Engineer", "USA", "Dallas", "2024-11-12", 33),
    new Job(13, "Apple", "Learned about supply chain management for electronics.", "Intern Operations Manager", "Canada", "Calgary", "2024-11-13", 37),
    new Job(14, "Adobe", "Supported graphic design for marketing campaigns.", "Intern Graphic Designer", "Canada", "Edmonton", "2024-11-14", 34),
    new Job(15, "Amazon", "Helped improve logistics using real-time data analysis.", "Intern Logistics Analyst", "USA", "Boston", "2024-11-15", 36),
    new Job(16, "Netflix", "Researched trends for personalized content curation.", "Intern Content Strategist", "Canada", "Winnipeg", "2024-11-16", 35),
    new Job(17, "Facebook", "Explored computer vision models for image recognition.", "Intern AI Researcher", "USA", "Austin", "2024-11-17", 38),
    new Job(18, "LinkedIn", "Analyzed professional networking trends.", "Intern Data Analyst", "Canada", "Halifax", "2024-11-18", 32),
    new Job(19, "Tesla", "Participated in autonomous vehicle system testing.", "Intern Software Tester", "USA", "Detroit", "2024-11-19", 39),
    new Job(20, "IBM", "Developed proof-of-concept quantum computing models.", "Intern Quantum Developer", "USA", "New York", "2024-11-20", 45),
    new Job(21, "Google", "Worked on integrating AI models into search algorithms.", "Intern AI Engineer", "USA", "Chicago", "2024-11-21", 41),
    new Job(22, "Microsoft", "Helped enhance system accessibility features.", "Intern Systems Analyst", "Canada", "Quebec City", "2024-11-22", 39),
    new Job(23, "Apple", "Explored AR integration in consumer products.", "Intern AR Developer", "USA", "Las Vegas", "2024-11-23", 43),
    new Job(24, "Adobe", "Developed content for creative educational tools.", "Intern Content Developer", "USA", "Philadelphia", "2024-11-24", 36),
    new Job(25, "Amazon", "Improved real-time package tracking systems.", "Intern IoT Engineer", "USA", "Atlanta", "2024-11-25", 39),
    new Job(26, "Netflix", "Researched innovative video compression techniques.", "Intern Video Engineer", "Canada", "Hamilton", "2024-11-26", 38),
    new Job(27, "Facebook", "Helped create insights for ad campaign performance.", "Intern Marketing Analyst", "USA", "Miami", "2024-11-27", 34),
    new Job(28, "LinkedIn", "Developed recommendations for career advancement tools.", "Intern Product Manager", "Canada", "Victoria", "2024-11-28", 35),
    new Job(29, "Tesla", "Redesigned thermal management for EVs.", "Intern Mechanical Designer", "Canada", "Saskatoon", "2024-11-29", 41),
    new Job(30, "IBM", "Researched blockchain integrations for secure systems.", "Intern Blockchain Developer", "USA", "San Francisco", "2024-11-30", 42),
];

const highSalaryJobs = filterJobsBySalary(jobs, 80000);
console.log("Jobs with salary greater than $80,000:");
highSalaryJobs.forEach(job => console.log(job.getDetails()));

const googleJobs = filterJobsByCompany(jobs, "Google");
console.log("\nJobs at Google:");
googleJobs.forEach(job => console.log(job.getDetails()));

const usaJobs = filterJobsByCountry(jobs, "USA");
console.log("\nJobs located in the USA:");
usaJobs.forEach(job => console.log(job.getDetails()));

deleteJob(jobs, 3);

console.log("\nRemaining Jobs:");
jobs.forEach(job => console.log(job.getDetails()));
