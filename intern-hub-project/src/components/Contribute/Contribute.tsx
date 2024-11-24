import React, { useState } from "react";
import styles from "./Contribute.module.css";
import airbnbLogo from "../../assets/logo/airbnb.png";
import amazonLogo from "../../assets/logo/amazon.png";
import appleLogo from "../../assets/logo/apple.jpg";
import coveoLogo from "../../assets/logo/Coveo.png";
import defaultLogo from "../../assets/logo/default.jpg";
import googleLogo from "../../assets/logo/Google.png";
import ibmLogo from "../../assets/logo/IBM.jpg";
import intactLogo from "../../assets/logo/Intact.png";
import lyftLogo from "../../assets/logo/Lyft.png";
import metaLogo from "../../assets/logo/Meta.png";
import microsoftLogo from "../../assets/logo/Microsoft.png";
import twitterLogo from "../../assets/logo/twitter.png";
import morganStanleyLogo from "../../assets/logo/MorganStanley.png";

const Contribute: React.FC = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    additionalComments: "",
    position: "",
    country: "",
    city: "",
    datePosted: "",
    salary: "",
    type: "In-Person",
    questionType: "",
    numberOfRounds: "",
    signOnBonus: "",
    offerStatus: "No",
  });

  const getCompanyLogo = (companyName: string): string => {
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
      "Morgan Stanley": morganStanleyLogo,
    };
    return companyImages[companyName] || defaultLogo;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const logo = getCompanyLogo(formData.name);

    const newJob = {
      id: formData.id,
      name: formData.name,
      additionalComments: formData.additionalComments,
      position: formData.position,
      country: formData.country,
      city: formData.city,
      datePosted: formData.datePosted,
      salary: parseFloat(formData.salary) || 0,
      type: formData.type,
      questionType: formData.questionType,
      numberOfRounds: parseInt(formData.numberOfRounds) || 0,
      signOnBonus: parseFloat(formData.signOnBonus) || 0,
      offerStatus: formData.offerStatus,
      logo, // Assign the logo dynamically
    };

    const existingJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    existingJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(existingJobs));

    setFormData({
      id: Date.now(),
      name: "",
      additionalComments: "",
      position: "",
      country: "",
      city: "",
      datePosted: "",
      salary: "",
      type: "In-Person",
      questionType: "",
      numberOfRounds: "",
      signOnBonus: "",
      offerStatus: "No",
    });

    alert("Job added successfully!");
  };

  return (
    <div className={styles.contributeContainer}>
      {/* <h1 className={styles.header}>Share Your Experience</h1> */}
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Company Name and Position */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Country and City */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Employment Type and Date */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="type">Employment Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="In-Person">In-Person</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="datePosted">Interview Date</label>
            <input
              type="date"
              id="datePosted"
              name="datePosted"
              value={formData.datePosted}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Salary, Number of Rounds, and Sign-on Bonus */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="numberOfRounds">Number of Rounds</label>
            <input
              type="number"
              id="numberOfRounds"
              name="numberOfRounds"
              value={formData.numberOfRounds}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="questionType">Types of Questions</label>
            <input
              type="text"
              id="questionType"
              name="questionType"
              placeholder="LeetCode, System Design, etc."
              value={formData.questionType}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="offerStatus">Offer Received</label>
            <select
              id="offerStatus"
              name="offerStatus"
              value={formData.offerStatus}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Question Types and Offer Status */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="salary">Hourly Salary (if applicable)</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="signOnBonus">Sign-On Bonus (if applicable)</label>
            <input
              type="number"
              id="signOnBonus"
              name="signOnBonus"
              value={formData.signOnBonus}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Additional Comments */}
        <div className={styles.formGroup}>
          <label htmlFor="additionalComments">Additional Comments</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            placeholder="Describe your interview experience..."
            rows={5}
            value={formData.additionalComments}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contribute;
