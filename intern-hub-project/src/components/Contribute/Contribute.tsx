import React, { useState } from "react";
import { Interview } from "../models/Interview";
import styles from "./Contribute.module.css";

const Contribute: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    country: "",
    city: "",
    employmentType: "In-Person",
    date: "",
    rounds: "",
    questionTypes: "",
    compensation: "",
    signOnBonus: "",
    additionalComments: "",
    offer: "No",
  });

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

    const newInterview = new Interview(
      formData.company,
      formData.position,
      { country: formData.country, city: formData.city },
      formData.compensation ? `$${formData.compensation}/hour` : null,
      formData.signOnBonus ? `$${formData.signOnBonus}` : null,
      formData.date,
      formData.additionalComments,
      formData.questionTypes.split(",").map((q) => q.trim()),
      parseInt(formData.rounds) || 0,
      formData.employmentType as "Hybrid" | "Remote" | "In-Person",
      formData.offer
    );

    const existingInterviews = JSON.parse(
      localStorage.getItem("interviews") || "[]"
    );
    existingInterviews.push(newInterview);
    localStorage.setItem("interviews", JSON.stringify(existingInterviews));

    setFormData({
      company: "",
      position: "",
      country: "",
      city: "",
      employmentType: "Hybrid",
      date: "",
      rounds: "",
      questionTypes: "",
      compensation: "",
      signOnBonus: "",
      additionalComments: "",
      offer: "",
    });

    // console.log(
    //   "Saved Interviews:",
    //   JSON.parse(localStorage.getItem("interviews") || "[]")
    // );
  };

  return (
    <div className={styles.contributeContainer}>
      <h1 className={styles.header}>Share Your Experience</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Company and Position */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
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

        {/* Work Mode and Interview Date */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="employmentType">Employment Type</label>
            <select
              id="employmentType"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            >
              <option value="In-Person">In-Person</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Interview Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Number of Rounds, Types of Questions, and Offer */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="rounds">Number of Rounds</label>
            <input
              type="number"
              id="rounds"
              name="rounds"
              value={formData.rounds}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="questionTypes">Types of Questions</label>
            <input
              type="text"
              id="questionTypes"
              name="questionTypes"
              placeholder="OOP, LeetCode, System Design, etc."
              value={formData.questionTypes}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Compensation and Sign-on Bonus */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="compensation">Hourly Rate (if applicable)</label>
            <input
              type="number"
              id="compensation"
              name="compensation"
              value={formData.compensation}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="signOnBonus">Sign-on Bonus (if applicable)</label>
            <input
              type="number"
              id="signOnBonus"
              name="signOnBonus"
              value={formData.signOnBonus}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Offer */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="offer">Offer Received</label>
            <select
              id="offer"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Additional Comments */}
        <div className={styles.formGroup}>
          <label htmlFor="additionalComments">Additional Comments</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            placeholder="Describe your interview experience. Mention specific you were asked (technical, behavioral), topics covered, or any unique details about the process."
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
