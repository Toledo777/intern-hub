import React from "react";
import styles from "./FAQ.module.css"; // Reusing your FAQ styles

const FAQ: React.FC = () => {
  return (
    <div className={styles.faqContainer}>
      {/* <h1 className={styles.faqHeader}>Frequently Asked Questions</h1> */}

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>What is InternHub?</h3>
        <p className={styles.faqAnswer}>
          InternHub is a platform for sharing anonymous reviews about internship
          interview experiences.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>How can I contribute?</h3>
        <p className={styles.faqAnswer}>
          Use the 'Contribute' section to share details about your interview,
          such as:
          <ul>
            <li>
              Number of rounds and types of questions (e.g., behavioral,
              leetcode, system design).
            </li>
            <li>Timeline, offer details, and compensation (if applicable).</li>
          </ul>
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>Is my review anonymous?</h3>
        <p className={styles.faqAnswer}>
          Yes, all reviews are completely anonymous to protect your identity.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>Can I edit my review?</h3>
        <p className={styles.faqAnswer}>
          No, reviews cannot be edited after submission.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>
          What should I include in my review?
        </h3>
        <p className={styles.faqAnswer}>
          Include the company name, position, location, question types, and
          offer details.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
